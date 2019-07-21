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
  centered: {
    flex: 2,
    justifyContent:"center",
    alignItems: 'center'
  },
  signUpMainText: {
    ...Fonts.style.h6,
    color:"#222222"
  },
  signUpSubText: {
    ...Fonts.style.description,
    color:"#222222"
  },
  loginButtonText: {
    fontSize: Fonts.size.medium,
    color: Colors.snow
  },
  container: {
    paddingTop: 70,
    backgroundColor: Colors.jhipsterBlue
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
  }
})
