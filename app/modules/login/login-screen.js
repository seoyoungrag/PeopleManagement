import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, View, ScrollView, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import styles from './login-screen.styles'
import { Images, Metrics } from '../../shared/themes'
import LoginActions from './login.reducer'

import { NaverLogin, getProfile } from 'react-native-naver-login';
import RNKakaoLogins from 'react-native-kakao-logins';

import NativeButton from 'apsl-react-native-button';

import firebase from 'react-native-firebase'
import { loginScreen, registerScreen, forgotPasswordScreen, changePasswordScreen, settingsScreen, entitiesScreen, mainScreen, emailLoginScreen, signUpScreen } from '../../navigation/layouts'

const initials = {
  kConsumerKey: '6R2nlOV7VrNuKlVS8JGo',
  kConsumerSecret: 'cChbS0EE_d',
  kServiceAppName: '인품',
  kServiceAppUrlScheme: 'kr.pe.yrseo.pm.app', // only for iOS
};

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func,
    getJWTToken: PropTypes.func
  }

  constructor (props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      isKakaoLogging: false,
      isNaverLoggingin: false,
      theToken: 'token has not fetched',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
      email: '', 
      password: '', 
      errorMessage: null 
    }
  }
  generateFirebaseToken(mail, provider) {
    this.props.getJWTToken(mail);
    const { JWTToken } = this.props
    if(JWTToken){
      console.warn("generateFirebaseToken")
      return firebase.auth().signInWithCustomToken(JWTToken)
        .then(() => mainScreen() )
        .catch(error => this.setState({ errorMessage: error.message }));
      }
  }

  // 로그인 후 내 프로필 가져오기.
  fetchProfile = async(token) => {
    const profileResult = await getProfile(this.state.theToken);
    console.log(profileResult);
    //this.generateFirebaseToken(profileResult.response.email);
    this.generateFirebaseToken(token);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
  }
  
  // 네이버 로그인 시작.
  naverLoginStart = async() => {
    console.log('  naverLoginStarted ');
    NaverLogin.login(initials, (err, token) => {
      console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
      this.setState({ theToken: token });
      if (err) {
        console.log(err);
        this.setState({ errorMessage: err })
        return;
      }
      this.fetchProfile(token);
    });
  }

  // 카카오 로그인 시작.
  kakaoLogin = async() => {
    console.log('   kakaoLogin   ');
    RNKakaoLogins.login((err, result) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      this.getProfile();
    });
  }

  // 로그인 후 내 프로필 가져오기.
  getProfile = async() => {
    console.log('getKakaoProfile');
    RNKakaoLogins.getProfile((err, result) => {
      if (err) {
        console.log(err.toString());
        return;
      }
      this.generateFirebaseToken(result.id);
      //console.warn(result);
    });
  }

  handleLogin = async() => {
    const { email, password } = this.state
    var isLogined = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({ errorMessage: error.message }))
    isLogined.user ? mainScreen() : this.setState({ errorMessage: "LOGIN FAILED" })
  }
  
 forgotPassword = (yourEmail) => {
    firebase.auth().sendPasswordResetEmail(yourEmail)
      .then(function (user) {
        Alert.alert('Please check your email...')
      }).catch(function (e) {
        Alert.alert('등록안된 계정입니다.');
        console.log(e)
      })
  }

  componentWillReceiveProps (newProps) {
    // Did the login attempt complete?
    if (!newProps.fetching) {
      if (newProps.error) {
        if (newProps.error === 'WRONG') {
          Alert.alert('Error', 'Invalid login', [{ text: 'OK' }])
        }
      } else if (newProps.account) {
        Navigation.dismissModal(this.props.componentId)
      }
    }
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }
  handlePressCancel = () => {
    this.props.logout()
    Navigation.dismissModal(this.props.componentId)
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render () {
    const { theToken } = this.state;
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? styles.textInput : styles.textInputReadonly
    return (
      <ScrollView style={styles.loginContainer} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='always'>
        <View style={styles.centered}>
          <Text style={styles.loginMainText}>
            {'인 ; 품'}
          </Text>
          <Text style={styles.loginSubText}>
            {'내가 나를 찾는 우리의 공간'}
          </Text>
        </View>
        {/*<Image source={Images.logoLogin} style={[styles.topLogo, this.state.topLogo]} />*/}
        <View style={styles.form}>
          <View style={[styles.loginRow]}>
            <NativeButton testID='loginScreenLoginButton' activeOpacity={0.5} isLoading={this.state.isNaverLoggingin} style={styles.loginButtonWrapper} onPress={this.naverLoginStart}>
            네이버 로그인
            </NativeButton>
            <NativeButton
              isLoading={this.state.isNaverLoggingin}
              onPress={() => this.kakaoLogin()}
              activeOpacity={0.5}
              style={styles.loginButtonWrapper}
            >카카오 로그인</NativeButton>
            <Text>{this.state.token}</Text>
            <View style={[styles.loginRow,{flexDirection:"row"}]}>
              <NativeButton onPress={emailLoginScreen} 
              activeOpacity={0.5}
              style={styles.emailLoginButtonWrapper}
              textStyle={styles.loginButtonText}>이메일로 로그인</NativeButton>
              <NativeButton onPress={signUpScreen} 
              activeOpacity={0.5} textStyle={styles.loginButtonText}
              style={styles.emailLoginButtonWrapper}>이메일로 가입하기</NativeButton>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
    fetching: state.login.fetching,
    error: state.login.error,
    JWTToken: state.login.JWTToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    logout: () => dispatch(LoginActions.logoutRequest()),
    getJWTToken: (email) => dispatch(LoginActions.requestToken(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
