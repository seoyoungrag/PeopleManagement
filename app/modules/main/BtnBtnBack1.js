import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class BtnBtnBack1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle1} />
        <Svg viewBox={"-0 -0 9.12316715542522 17"} style={styles.style}>
          <Path
            strokeWidth={0}
            fill={"rgba(74,74,74,1)"}
            d={
              "M8.56 0.00 C8.64 0.00 8.71 0.01 8.77 0.04 C8.84 0.07 8.90 0.11 8.96 0.17 C9.07 0.28 9.12 0.41 9.12 0.57 C9.12 0.73 9.07 0.87 8.96 0.98 L1.38 8.56 L8.86 16.04 C8.97 16.15 9.02 16.28 9.02 16.43 C9.02 16.59 8.97 16.72 8.86 16.83 C8.75 16.94 8.61 17.00 8.45 17.00 C8.29 17.00 8.15 16.94 8.04 16.83 L0.17 8.96 C0.06 8.85 0.00 8.71 0.00 8.56 C0.00 8.40 0.06 8.27 0.17 8.16 L8.16 0.17 C8.21 0.11 8.28 0.07 8.35 0.04 C8.42 0.01 8.49 0.00 8.56 0.00 Z"
            }
          />
        </Svg>
        <Svg viewBox={"-0 -0 17.06894682965015 12"} style={styles.fill1}>
          <Path
            strokeWidth={0}
            fill={"rgba(30,32,29,1)"}
            d={
              "M5.57 0.18 C5.81 -0.06 6.19 -0.06 6.43 0.18 C6.66 0.41 6.66 0.80 6.43 1.03 L2.07 5.39 L16.46 5.39 C16.79 5.39 17.07 5.66 17.07 6.00 C17.07 6.33 16.79 6.61 16.46 6.61 L2.07 6.61 L6.43 10.96 C6.66 11.20 6.66 11.59 6.43 11.82 C6.19 12.06 5.81 12.06 5.57 11.82 L0.18 6.43 C-0.06 6.19 -0.06 5.81 0.18 5.58 L5.57 0.18 Z"
            }
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  style: {
    top: "14.58%",
    left: "27.62%",
    width: "38.01%",
    height: "70.83%",
    backgroundColor: "transparent",
    position: "absolute",
    display: "none",
    borderColor: "transparent"
  },
  fill1: {
    top: "26.26%",
    left: "13.65%",
    width: "71.12%",
    height: "50.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
