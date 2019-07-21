import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, View, ScrollView, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import styles from './signup-screen.styles'
import { Images, Metrics, Fonts } from '../../shared/themes'
import LoginActions from './signup.reducer'

import NativeButton from 'apsl-react-native-button';

import firebase from 'react-native-firebase'
import { loginScreen, registerScreen, forgotPasswordScreen, changePasswordScreen, settingsScreen, entitiesScreen, mainScreen } from '../../navigation/layouts'

import { CheckBox } from 'react-native-elements'

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
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false
    }
  }

  handleSignUp = () => {
    if(this.state.email==''){
      this.setState({ errorMessage: "이메일을 입력해주세요." })
      return false;
    }
    if(this.state.password==''){
      this.setState({ errorMessage: "패스워드를 입력해주세요." })
      return false;
    }
    if(this.state.passwordCheck==''){
      this.setState({ errorMessage: "패스워드를 입력해주세요." })
      return false;
    }
    if(this.state.passwordCheck!=this.state.password){
      this.setState({ errorMessage: "패스워드가 일치하지 않습니다." })
      return false;
    }
    if(this.state.checked1==false||this.state.checked2==false||this.state.checked3==false){
      this.setState({ errorMessage: "이용약관 필수항목을 체크해주세요." })
      return false;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => mainScreen() )
      .catch(error => this.setState({ errorMessage: error.message }))
    
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
          </View>
        </View>
        <View style={styles.centered}>
          <Text style={styles.signUpMainText}>
            {'이용약관 동의가 필요합니다.'}
          </Text>
          <View style={styles.usePromise}>
            <CheckBox
              title='만 14세 이상'
              checked={this.state.checked1}
              containerStyle={styles.usePromiseCheck}
              checkedColor='#ff6300'
              uncheckedColor="#e5e5e5"
              iconType='antdesign'
              checkedIcon='checkcircleo'
              uncheckedIcon='checkcircleo'
              onPress={() => this.setState({checked1: !this.state.checked1})}
            />
            <CheckBox
              title='이용약관(필수)'
              checked={this.state.checked2}
              containerStyle={styles.usePromiseCheck}
              checkedColor='#ff6300'
              uncheckedColor="#e5e5e5"
              iconType='antdesign'
              checkedIcon='checkcircleo'
              uncheckedIcon='checkcircleo'
              onPress={() => this.setState({checked2: !this.state.checked2})}
            />
            <CheckBox
              title='개인정보취급방침(필수)'
              checked={this.state.checked3}
              containerStyle={styles.usePromiseCheck}
              checkedColor='#ff6300'
              uncheckedColor="#e5e5e5"
              iconType='antdesign'
              checkedIcon='checkcircleo'
              uncheckedIcon='checkcircleo'
              onPress={() => this.setState({checked3: !this.state.checked3})}
            />
            <CheckBox
              title='마케팅 사용 동의(선택)'
              checked={this.state.checked4}
              containerStyle={styles.usePromiseCheck}
              checkedColor='#ff6300'
              uncheckedColor="#e5e5e5"
              iconType='antdesign'
              checkedIcon='checkcircleo'
              uncheckedIcon='checkcircleo'
              onPress={() => this.setState({checked4: !this.state.checked4})}
            />
            <CheckBox
              title='전체 동의하기'
              checked={this.state.checked5}
              containerStyle={[styles.usePromiseCheck,{borderTopWidth:1,width:"90%",paddingTop: 10}]}
              textStyle={{fontSize:Fonts.size.h5}}
              checkedColor='#ff6300'
              uncheckedColor="#e5e5e5"
              iconType='antdesign'
              checkedIcon='checkcircle'
              uncheckedIcon='checkcircleo'
              onPress={() => this.setState({checked1: !this.state.checked5,checked2: !this.state.checked5,checked3: !this.state.checked5,checked4: !this.state.checked5,checked5: !this.state.checked5})}
            />
          </View>
        </View>
            <NativeButton 
            activeOpacity={0.5}
            style={[styles.loginButtonWrapper,{margin:10}]} 
            textStyle={[styles.loginButtonText,{fontSize:Fonts.size.h4}]} onPress={this.handleSignUp} >가입하기</NativeButton>
            {/*
            <Button
              title="이미 가입하셨나요? 로그인"
              onPress={() => loginScreen()}
            /> 
            */}
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
