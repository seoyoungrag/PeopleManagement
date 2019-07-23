import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Navigation } from "react-native-navigation";

import { Images } from "../../shared/themes";
import styles from "./launch-screen.styles";
import { loginScreen, registerScreen, forgotPasswordScreen, changePasswordScreen, settingsScreen, entitiesScreen, mainScreen } from '../../navigation/layouts'

import firebase from 'react-native-firebase'

export default class LaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  componentDidAppear() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enabled: true,
          visible: false
        }
      }
    });
  }
  showSideMenu() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  }

  navigationButtonPressed({ buttonId }) {
    this.showSideMenu();
  }

  componentDidMount(){
    setTimeout(function(){
      var authFlag = false;
      firebase.auth().onAuthStateChanged(user => {
        authFlag = user ? true : false ;
      })
      authFlag == true? mainScreen() : loginScreen() ;
      }, 3000)
  }

  render() {
    return (
      <View style={styles.mainContainer} testID="launchScreen">
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container} contentContainerStyle={{flexGrow:1}}>
          <View style={styles.centered}>
            <Image source={Images.logoHbm} style={styles.logo} />
            <Text style={styles.launchText}>
              {'인 ; 품'}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
