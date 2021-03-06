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
  loginMainText: {
    ...Fonts.style.h1,
    color: "#ff6300"
  },
  loginSubText: {
    ...Fonts.style.h4,
    color: "#ff6300"
  },
  loginButtonText: {
    fontSize: Fonts.size.small
  },
  centered: {
    flex: 1,
    justifyContent:"center",
    alignItems: 'center'
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
    height: 40,
    color: Colors.coal
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    padding: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  emailLoginButtonWrapper: {
    flex: 1,
    borderWidth: 0
  },
  loginButtonWrapper: {
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
