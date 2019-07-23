import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Navigation } from "react-native-navigation";

import { Images } from "../../shared/themes";
import styles from "./main-screen.styles";
import { NaverLogin, getProfile } from 'react-native-naver-login';
import RNKakaoLogins from 'react-native-kakao-logins';

import NativeButton from 'apsl-react-native-button';
import firebase from 'react-native-firebase'

import { loginScreen, registerScreen, forgotPasswordScreen, changePasswordScreen, settingsScreen, entitiesScreen, mainScreen } from '../../navigation/layouts'

export default class MainScreen extends React.Component {
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
  
  logout = async() => {
    /*
    console.log('   kakao/naverLogout    ');
    NaverLogin.logout();
    RNKakaoLogins.logout((err, result) => {
      if (err) {
        console.log(err.toString());
        //return;
      }
    });
    */
    firebase.auth().signOut();
    loginScreen();
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
          <NativeButton
            onPress={() => this.logout()}
            activeOpacity={0.5}
            style={styles.loginButtonWrapper}
          >Logout</NativeButton>
          </View>
        </ScrollView>
      </View>
    );
  }
}
