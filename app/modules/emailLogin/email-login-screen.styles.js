import { StyleSheet } from 'react-native'

import { Metrics, ApplicationStyles, Colors, Fonts } from '../../shared/themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  loginContainer: {
    flex: 1,
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.transparent
    //backgroundColor: "#A62C2C"
  },
  form: {
    flex: 1,
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    borderRadius: 5,
    height: 40,
    color: Colors.coal,
    borderColor: "#dbdbdb",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5
  },
  loginButtonText: {
    fontSize: Fonts.size.medium,
    color: Colors.snow
  },
  pwChangedButtonText: {
    fontSize: Fonts.size.medium,
    color: "#afafaf",
    textDecorationLine: 'underline'
  },
  emailLoginButtonWrapper: {
    flex: 1,
    borderWidth: 0
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  loginButtonWrapper: {
    backgroundColor: "#ff6300",
    borderWidth: 0,
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  btnNaverLogin: {
    height: '48',
    width: '240',
    alignSelf: 'center',
    backgroundColor: '#00c40f',
    borderRadius: 0,
    borderWidth: 0,
  },
  txtNaverLogin: {
    fontSize: Fonts.size.medium,
    color: 'white',
  }
})
