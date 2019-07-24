import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class IcMenuRounded extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle} />
        <Svg viewBox={"-0 -0 18 12"} style={styles.path}>
          <Path
            strokeWidth={0}
            fill={"rgba(0,0,0,1)"}
            d={
              "M0.00 11.00 L1.00 10.00 L17.00 10.00 L18.00 11.00 L17.00 12.00 L1.00 12.00 L0.00 11.00 Z M0.00 6.00 L1.00 5.00 L17.00 5.00 L18.00 6.00 L17.00 7.00 L1.00 7.00 L0.00 6.00 Z M1.00 0.00 L17.00 0.00 L18.00 1.00 L17.00 2.00 L1.00 2.00 L0.00 1.00 L1.00 0.00 Z"
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
  rectangle: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  path: {
    top: "25.00%",
    left: "12.50%",
    width: "75.00%",
    height: "50.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
