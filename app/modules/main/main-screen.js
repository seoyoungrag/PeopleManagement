import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Navigation } from "react-native-navigation";

import { Images } from "../../shared/themes";
import styles from "./main-screen.styles";
import { NaverLogin, getProfile } from 'react-native-naver-login';
import RNKakaoLogins from 'react-native-kakao-logins';

import NativeButton from 'apsl-react-native-button';
import firebase from 'react-native-firebase'
import MaterialHeader4 from "./MaterialHeader4";

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
      <View style={styles.root}>
        <View style={styles.rect8} />
        <MaterialHeader4 style={styles.materialHeader4} />
        <Text style={styles.text}>임수정님,{"\n"}안녕하세요.</Text>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <View style={styles.rect3} />
        <View style={styles.rect4} />
        <View style={styles.rect5} />
        <Text style={styles.text2}>구직</Text>
        <Text style={styles.text3}>구인</Text>
        <Text style={styles.text4}>프로필</Text>
        <Text style={styles.text5}>게시판</Text>
        <Text style={styles.text6}>오늘의 신상 구인</Text>
        <View style={styles.rect6} />
        <View style={styles.rect7} />
        <Text style={styles.text7}>인품 인테리어</Text>
        <Text style={styles.text8}>Text Added</Text>
        <Text style={styles.text9}>인품 인테리어</Text>
        <Text style={styles.text10}>상가 리모델링 시공 가능자 #목공 #도배</Text>
        <View style={styles.rect9} />
        <Text style={styles.text11}>인품 인테리어</Text>
        <Text style={styles.text12}>상가 리모델링 시공 가능자 #목공 #도배</Text>
        <Text style={styles.text13}>핫한 중고 공구</Text>
        <View style={styles.rect10} />
        <Text style={styles.text14} />
        <Text style={styles.text15}>햄머드릴</Text>
        <Text style={styles.text16}>#사용기간 2년 #A급</Text>
        <View style={styles.rect11} />
        <View style={styles.rect12} />
        <View style={styles.rect13} />
      </View>
    );
  }
}
