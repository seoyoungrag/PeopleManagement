import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, View, ScrollView, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import styles from './email-login-screen.styles'
import { Images, Metrics } from '../../shared/themes'
import LoginActions from './email-login.reducer'

import NativeButton from 'apsl-react-native-button';

import firebase from 'react-native-firebase'
import { loginScreen, registerScreen, forgotPasswordScreen, changePasswordScreen, settingsScreen, entitiesScreen, mainScreen } from '../../navigation/layouts'

class EmailLoginScreen extends React.Component {
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
      theToken: 'token has not fetched',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
      email: '', 
      password: '', 
      errorMessage: null ,
      active1: false,
      active2: false
    }
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
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? styles.textInput : styles.textInputReadonly
    return (
      <ScrollView style={styles.loginContainer} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='always'>
        <View style={styles.form}>
          <View style={[styles.loginRow]}>
            <TextInput
              style={[styles.textInput,this.state.active1 == true ? {borderColor: "#ff6300", color:"#000000"}: {}]}
              autoCapitalize="none"
              placeholder="이메일"
              onChangeText={email => this.setState({ email, active1: true, active2: false })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              style={[styles.textInput,this.state.active2 == true ? {borderColor: "#ff6300", color:"#000000"}: {}]}
              autoCapitalize="none"
              placeholder="비밀번호"
              onChangeText={password => this.setState({ password, active1: false, active2: true })}
              value={this.state.password}
            />
            {this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
              </Text>}
            <NativeButton 
            activeOpacity={0.5}
            style={styles.loginButtonWrapper} 
            textStyle={styles.loginButtonText}
            onPress={this.handleLogin} >로그인</NativeButton>
            <View style={[styles.loginRow,{flexDirection:"row"}]}>
              <NativeButton onPress={() => {
                if(this.state.email==''){
                  Alert.alert('이메일을 입력해주세요.');
                }else{
                  this.forgotPassword(this.state.email)
                }
                } }
              activeOpacity={0.5}
              textStyle={styles.pwChangedButtonText}
              style={styles.emailLoginButtonWrapper}>비밀번호 재설정하기</NativeButton>
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
    error: state.login.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    logout: () => dispatch(LoginActions.logoutRequest()),
    getJWTToken: (email) => dispatch(LoginActions.requestToken(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailLoginScreen)
