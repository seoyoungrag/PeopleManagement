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
    var firebaseUid = provider+":"+mail;
    var additionalClaims = {
      provider: provider
    };
    firebaseUid = 'eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImNsYWltcyI6eyJwcmVtaXVtQWNjb3VudCI6dHJ1ZX0sImV4cCI6MTU2MzMzMDcwNSwiaWF0IjoxNTYzMzI3MTA1LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay16MTM5ckBwZW9wbGVtYW5hZ2VtZW50LWQwYWJhLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstejEzOXJAcGVvcGxlbWFuYWdlbWVudC1kMGFiYS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6InRydWV6dXJlQG5hdmVyLmNvbSJ9.eBIVqvoxfw4-S4maGzSJtMmJIf1sv_etaQbxCNKY4tD5NmOG1rxLlSQ53rCcswE1ihzHtL2XKDkLfnIh0fyTpIMMOr7PNsDEinh53JsH5rxgLJcHTfhrP3jEn0lW27jJ9rvX7_HziKcbkgLWzzUwomMeAhjGeCu3Ais3YgmSBKgYG6LkOsHmweEqYrpI5wkGqu03mWXMi-58UfeN0EgYMNNeUBI3DstpFGQzSf0n4T5UOc0BJIMA1UnJw9L3cMaA88WPb5lItlWDJB5fMlhPmM5Rg937A6Z5UAyBwrYFieuw9wdxIIyh6aSzOU_tRkoWk3AywFLQBNkMaPtvdfg2vw';
    return firebase.auth().signInWithCustomToken(firebaseUid);
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
    error: state.login.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    logout: () => dispatch(LoginActions.logoutRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
