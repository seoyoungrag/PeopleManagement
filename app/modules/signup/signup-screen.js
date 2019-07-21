import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, View, ScrollView, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import styles from './signup-screen.styles'
import { Images, Metrics } from '../../shared/themes'
import LoginActions from './signup.reducer'

import NativeButton from 'apsl-react-native-button';

import firebase from 'react-native-firebase'
import { loginScreen, registerScreen, forgotPasswordScreen, changePasswordScreen, settingsScreen, entitiesScreen, mainScreen } from '../../navigation/layouts'

class SignUpScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool
  }

  constructor (props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
      email: '', 
      password: '', 
      passwordCheck: '',
      errorMessage: null,
      active1: false,
      active2: false,
      active3: false,
    }
  }

  handleSignUp = () => {
    if(this.state.password!=this.state.passwordCheck){
      this.setState({ errorMessage: "패스워드가 일치하지 않습니다." })
    }else{
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => mainScreen() )
        .catch(error => this.setState({ errorMessage: error.message }))
    }
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
        <View style={styles.form}>
          <View style={[styles.loginRow]}>
            <TextInput
              placeholder="이메일"
              autoCapitalize="none"
              style={[styles.textInput,this.state.active1 == true ? {borderColor: "#ff6300", color:"#000000"}: {}]}
              onChangeText={email => this.setState({ email, active1: true, active2: false, active3: false })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              placeholder="비밀번호"
              autoCapitalize="none"
              style={[styles.textInput,this.state.active2 == true ? {borderColor: "#ff6300", color:"#000000"}: {}]}
              onChangeText={password => this.setState({ password, active1: false, active2: true, active3: false })}
              value={this.state.password}
            />
            <TextInput
              secureTextEntry
              placeholder="비밀번호 확인"
              autoCapitalize="none"
              style={[styles.textInput,this.state.active3 == true ? {borderColor: "#ff6300", color:"#000000"}: {}]}
              onChangeText={passwordCheck => this.setState({ passwordCheck, active1: false, active2: false, active3: true })}
              value={this.state.passwordCheck}
            />
            {this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
            </Text>}
            <NativeButton 
            activeOpacity={0.5}
            style={styles.loginButtonWrapper} 
            textStyle={styles.loginButtonText} onPress={this.handleSignUp} >가입하기</NativeButton>
            {/*
            <Button
              title="이미 가입하셨나요? 로그인"
              onPress={() => loginScreen()}
            /> 
            */}
          </View>
        </View>
        <View style={styles.centered}>
          <Text style={styles.signUpMainText}>
            {'이용약관 동의가 필요합니다.'}
          </Text>
          <Text style={styles.signUpSubText}>
            {'내가 나를 찾는 우리의 공간'}
          </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
