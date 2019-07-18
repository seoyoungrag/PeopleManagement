import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import styles from './login-screen.styles'
import { Images, Metrics } from '../../shared/themes'
import LoginActions from './login.reducer'

import { NaverLogin, getProfile } from 'react-native-naver-login';
import NativeButton from 'apsl-react-native-button';

import firebase from 'react-native-firebase'

const initials = {
  kConsumerKey: '6R2nlOV7VrNuKlVS8JGo',
  kConsumerSecret: 'cChbS0EE_d',
  kServiceAppName: '인풀',
  kServiceAppUrlScheme: 'kr.pe.yrseo.pm.app', // only for iOS
};

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  constructor (props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      isNaverLoggingin: false,
      theToken: 'token has not fetched',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
  }
  generateFirebaseToken(mail, provider) {
    /*
    var firebaseUid = provider+":"+mail;
    var additionalClaims = {
      provider: provider
    };
    */
    this.props.getJWTToken(mail);
    const { JWTToken } = this.props
    return firebase.auth().signInWithCustomToken(JWTToken);
  }

  handleSignUp = () => {
    firebase
      .auth()
      .signInWithCustomToken(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  // 로그인 후 내 프로필 가져오기.
  fetchProfile = async() => {
    const profileResult = await getProfile(this.state.theToken);
    console.log(profileResult);
    this.generateFirebaseToken(profileResult.response.email);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
  }
  
  // 네이버 로그인 시작.
  naverLoginStart = async() => {
    console.log('  naverLoginStart  ed');
    NaverLogin.login(initials, (err, token) => {
      console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
      this.setState({ theToken: token });
      if (err) {
        console.log(err);
        return;
      }
    });
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
      <ScrollView contentContainerStyle={{ justifyContent: 'center' }} style={[styles.container, { height: this.state.visibleHeight }]} keyboardShouldPersistTaps='always'>
        <Image source={Images.logoLogin} style={[styles.topLogo, this.state.topLogo]} />
        <View style={styles.form}>
          <View style={[styles.loginRow]}>
            <NativeButton testID='loginScreenLoginButton' activeOpacity={0.5} isLoading={this.state.isNaverLoggingin} style={styles.loginButtonWrapper} onPress={this.naverLoginStart}>
              
                <Text style={styles.loginText}>NAVER LOGIN</Text>
              
            </NativeButton>
            <NativeButton testID='loginScreenCancelButton' activeOpacity={0.5} isLoading={this.state.isNaverLoggingin} style={styles.loginButtonWrapper} onPress={this.fetchProfile}>
              
                <Text style={styles.loginText}>Fetch Profile</Text>
              
            </NativeButton>
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
    getJWTToken: (email) => dispatch(LoginActions.getJWTToken(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
