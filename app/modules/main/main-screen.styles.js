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
  },
  
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 1
  },
  rect8: {
    top: 375.35,
    left: -0.05,
    width: 375.05,
    height: 240,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  materialHeader4: {
    top: 0,
    left: 0,
    width: 375,
    height: 56,
    position: "absolute"
  },
  text: {
    top: 89.7,
    left: 30.06,
    width: 112.14,
    height: 55.57,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontFamily: "noto-sans-kr-100",
    lineHeight: 27
  },
  ellipse: {
    top: 92.25,
    left: 276.31,
    width: 53.81,
    height: 53.9,
    position: "absolute"
  },
  rect: {
    top: 169.89,
    left: 20.25,
    width: 157.15,
    height: 88.42,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  rect2: {
    top: 169.89,
    left: 20.25,
    width: 157.15,
    height: 88.42,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  rect3: {
    top: 170.08,
    left: 181.84,
    width: 157.56,
    height: 88.47,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  rect4: {
    top: 262.93,
    left: 20.2,
    width: 157.2,
    height: 88.49,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  rect5: {
    top: 263.48,
    left: 182.4,
    width: 157.44,
    height: 87.57,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  text2: {
    top: 201.86,
    left: 40.37,
    color: "#121212",
    position: "absolute",
    fontSize: 19,
    fontFamily: "noto-sans-regular"
  },
  text3: {
    top: 201.76,
    left: 201.86,
    color: "#121212",
    position: "absolute",
    fontSize: 19,
    fontFamily: "noto-sans-kr-100"
  },
  text4: {
    top: 295.07,
    left: 40.09,
    color: "#121212",
    position: "absolute",
    fontSize: 19,
    fontFamily: "noto-sans-kr-100"
  },
  text5: {
    top: 295.4,
    left: 201.86,
    color: "#121212",
    position: "absolute",
    fontSize: 19,
    fontFamily: "noto-sans-kr-100"
  },
  text6: {
    top: 398.8,
    left: 20.35,
    color: "rgba(33,33,33,1)",
    position: "absolute",
    fontSize: 29,
    fontFamily: "noto-sans-kr-100"
  },
  rect6: {
    top: 403.3,
    left: 280.74,
    width: 58,
    height: 20,
    backgroundColor: "rgba(255,134,68,1)",
    position: "absolute"
  },
  rect7: {
    top: 432.39,
    left: 19.84,
    width: 320,
    height: 75,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  ellipse2: {
    top: 452.27,
    left: 33.56,
    width: 40.14,
    height: 40.5,
    position: "absolute"
  },
  text7: {
    top: 459.82,
    left: 88.42,
    width: 0,
    height: 0,
    color: "#121212",
    position: "absolute"
  },
  text8: {
    top: 456.72,
    left: 852.41,
    color: "#121212",
    position: "absolute"
  },
  text9: {
    top: 452.18,
    left: 85.01,
    color: "#121212",
    position: "absolute",
    fontSize: 16,
    fontFamily: "noto-sans-kr-100",
    letterSpacing: 0.4
  },
  text10: {
    top: 475.13,
    left: 84.51,
    color: "#121212",
    position: "absolute",
    fontSize: 14
  },
  rect9: {
    top: 517.55,
    left: 19.99,
    width: 320,
    height: 75,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  ellipse3: {
    top: 534.84,
    left: 33.73,
    width: 40.5,
    height: 39.69,
    position: "absolute"
  },
  text11: {
    top: 535.03,
    left: 85.34,
    color: "#121212",
    position: "absolute",
    fontSize: 16,
    fontFamily: "noto-sans-kr-100"
  },
  text12: {
    top: 558.24,
    left: 84.51,
    color: "#121212",
    position: "absolute",
    fontSize: 14
  },
  text13: {
    top: 639.4,
    left: 19.7,
    color: "#121212",
    position: "absolute",
    fontSize: 18,
    fontFamily: "noto-sans-kr-100"
  },
  rect10: {
    top: 668.69,
    left: 21.11,
    width: 74.93,
    height: 75.29,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  text14: {
    top: 756.87,
    left: 24.73,
    color: "#121212",
    position: "absolute"
  },
  text15: {
    top: 754.13,
    left: 21.25,
    color: "#121212",
    position: "absolute",
    fontSize: 14
  },
  ellipse4: {
    top: 750.68,
    left: 81.99,
    width: 18.31,
    height: 17.57,
    position: "absolute"
  },
  text16: {
    top: 770.7,
    left: 21.23,
    color: "#121212",
    position: "absolute",
    fontSize: 8
  },
  rect11: {
    top: 669.35,
    left: 107.46,
    width: 74.93,
    height: 75.29,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  rect12: {
    top: 669.35,
    left: 193.81,
    width: 74.93,
    height: 75.29,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  },
  rect13: {
    top: 669.35,
    left: 280.16,
    width: 74.93,
    height: 75.29,
    backgroundColor: "rgba(155,155,155,1)",
    position: "absolute"
  }
})
