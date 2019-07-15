import { StyleSheet } from 'react-native'

import { Metrics, ApplicationStyles, Colors } from '../../shared/themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingBottom: Metrics.baseMargin,
    //backgroundColor: Colors.transparent
    backgroundColor: "#A62C2C"
  },
  logo: {
    //marginTop: Metrics.doubleSection,
    height: Metrics.images.logo/2,
    width: Metrics.images.logo/2,
    resizeMode: 'contain'
  },
  centered: {
    flex: 1,
    justifyContent:"center",
    alignItems: 'center'
  }
})
