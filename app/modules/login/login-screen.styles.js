import { Platform } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import { Colors, Metrics } from '../../shared/themes'

export default EStyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.jhipsterBlue
  },
  form: {
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
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row'
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
    height: '$48',
    width: '240 * $ratio',
    alignSelf: 'center',
    backgroundColor: '#00c40f',
    borderRadius: 0,
    borderWidth: 0,
  },
  txtNaverLogin: {
    fontSize: '$fontSize',
    color: 'white',
  }
})
