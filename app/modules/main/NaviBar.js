import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IcBox from "./IcBox";

export default class NaviBar extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle3} />
        <Text style={styles.style1}>설정</Text>
        <IcBox style={styles.icBox} />
        <IcBox style={styles.icBox1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  rectangle3: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  style1: {
    top: "18.18%",
    left: "31.94%",
    width: "36.11%",
    height: 27,
    backgroundColor: "transparent",
    color: "rgba(30,32,29,1)",
    position: "absolute",
    fontSize: 19,
    fontFamily: "notosanskr-regular",
    textAlign: "center"
  },
  icBox: {
    top: "22.73%",
    left: "3.89%",
    width: "6.67%",
    height: "54.55%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  icBox1: {
    top: "22.73%",
    left: "89.44%",
    width: "6.67%",
    height: "54.55%",
    backgroundColor: "transparent",
    position: "absolute"
  }
});
