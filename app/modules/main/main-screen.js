import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Navigation } from "react-native-navigation";

import { Images } from "../../shared/themes";
import styles from "./main-screen.styles";
import { NaverLogin, getProfile } from 'react-native-naver-login';
import RNKakaoLogins from 'react-native-kakao-logins';

import NativeButton from 'apsl-react-native-button';
import firebase from 'react-native-firebase'
import Svg, { Path, Defs, Mask } from "react-native-svg";
import IcMenuRounded from "./IcMenuRounded";
import NaviBar from ".//NaviBar";
import BtnBtnBack1 from "./BtnBtnBack1";

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
        <View style={styles.rectangle} />
        <Text style={styles.style}>임수정님,{"\n"}안녕하세요.</Text>
        <View style={styles.notification}>
          <Svg viewBox={"-0 -0 24 24"} style={styles.space}>
            <Path
              strokeWidth={0}
              fill={"transparent"}
              d={"M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 L0.00 0.00 Z"}
            />
          </Svg>
          <Svg viewBox={"-0 -0 16 19.5"} style={styles.path}>
            <Path
              strokeWidth={0}
              fill={"rgba(33,33,33,1)"}
              d={
                "M8.00 19.50 C9.10 19.50 10.00 17.50 10.00 17.50 L6.00 17.50 C6.00 17.50 6.89 19.50 8.00 19.50 Z M14.00 13.50 L14.00 8.50 L9.50 2.18 L9.50 1.50 C9.50 1.50 8.83 0.00 8.00 0.00 C7.17 0.00 6.50 1.50 6.50 1.50 L6.50 2.18 L2.00 8.50 L2.00 13.50 L0.00 15.50 L0.00 16.50 L16.00 16.50 L16.00 15.50 L14.00 13.50 Z"
              }
            />
          </Svg>
        </View>
        <Svg viewBox={"-0 -0 16 20"} style={styles.path1}>
          <Path
            strokeWidth={0}
            fill={"rgba(33,33,33,1)"}
            d={
              "M9.60 1.43 L9.60 3.06 L14.40 8.57 L14.40 14.29 C14.40 14.29 14.41 14.68 14.61 15.04 C14.61 15.04 15.10 15.28 15.10 15.28 C15.70 15.57 15.90 16.11 15.97 16.44 C15.79 17.14 15.00 17.14 15.00 17.14 C15.00 17.14 10.01 17.14 10.01 17.14 C10.14 17.40 10.21 17.69 10.21 18.00 C10.21 19.10 9.26 20.00 8.11 20.00 C6.95 20.00 6.00 19.10 6.00 18.00 C6.00 17.69 6.07 17.40 6.20 17.14 C6.20 17.14 1.00 17.14 1.00 17.14 C0.00 17.14 0.00 15.14 0.00 15.14 C0.00 15.14 1.15 15.40 1.36 15.03 C1.57 14.66 1.60 14.26 1.60 14.26 L1.60 8.57 L6.40 3.06 L6.40 1.43 C6.40 1.43 7.13 0.00 8.00 0.00 C8.88 0.00 9.60 1.43 9.60 1.43 Z M16.00 16.14 C16.00 16.14 16.00 16.71 16.00 16.71 C16.00 16.71 16.00 16.60 15.97 16.44 C15.99 16.35 16.00 16.25 16.00 16.14 Z M3.70 8.75 L3.70 13.77 C3.70 13.77 3.68 14.36 3.32 14.98 C3.32 14.98 3.30 15.00 3.30 15.00 L12.74 15.00 C12.74 15.00 12.72 14.98 12.71 14.96 C12.36 14.34 12.38 13.75 12.38 13.75 L12.38 8.75 C12.38 8.75 10.44 5.00 8.04 5.00 C5.63 5.00 3.70 8.75 3.70 8.75 Z"
            }
          />
        </Svg>
        <IcMenuRounded style={styles.icMenuRounded} />
        <View style={styles.mask} />
        <View style={styles.mask1} />
        <View style={styles.mask2} />
        <View style={styles.mask3} />
        <Text style={styles.style1}>구직</Text>
        <Text style={styles.style2}>프로필</Text>
        <Text style={styles.style3}>구인</Text>
        <Text style={styles.style4}>게시판</Text>
        <Text style={styles.style5}>오늘의 신상 구인</Text>
        <Text style={styles.style6}>핫한 중고 공구</Text>
        <Svg viewBox={"-0 -0 19 19"} style={styles.oval}>
          <Path
            strokeWidth={0}
            fill={"rgba(255,74,33,1)"}
            d={
              "M9.50 19.00 C14.75 19.00 19.00 14.75 19.00 9.50 C19.00 4.25 14.75 0.00 9.50 0.00 C4.25 0.00 0.00 4.25 0.00 9.50 C0.00 14.75 4.25 19.00 9.50 19.00 Z"
            }
          />
        </Svg>
        <View style={styles.rectangle1} />
        <View style={styles.right}>
          <Svg viewBox={"-0.75 -0.75 9 6"} style={styles.shape}>
            <Path
              strokeWidth={1.5}
              fill={"transparent"}
              stroke={"rgba(255,255,255,1)"}
              d={"M0.75 0.75 L3.75 3.75 L6.75 0.75 "}
            />
          </Svg>
        </View>
        <Text style={styles.style7}>더보기</Text>
        <View style={styles.carpenter2}>
          <View style={styles.mask4}>
            <View style={styles.ic72PxUser}>
              <View style={styles.rectangle12} />
              <Svg
                viewBox={"-0.5 -0.5 15.33333333333333 15.33333333333334"}
                style={styles.oval5}
              >
                <Path
                  strokeWidth={1}
                  fill={"rgba(255,255,255,0.2483016304347826)"}
                  stroke={"rgba(255,255,255,1)"}
                  d={
                    "M6.67 13.33 C10.35 13.33 13.33 10.35 13.33 6.67 C13.33 2.98 10.35 0.00 6.67 0.00 C2.98 0.00 0.00 2.98 0.00 6.67 C0.00 10.35 2.98 13.33 6.67 13.33 Z"
                  }
                />
              </Svg>
              <Svg
                viewBox={"-0.5 -0.5 22.6060606060606 12.9090909090909"}
                style={styles.oval6}
              >
                <Path
                  strokeWidth={1}
                  fill={"transparent"}
                  stroke={"rgba(255,255,255,1)"}
                  d={
                    "M20.61 10.91 C20.61 4.88 15.99 0.00 10.30 0.00 C4.61 0.00 0.00 4.88 0.00 10.91 "
                  }
                />
              </Svg>
              <View style={styles.rectangle2} />
            </View>
          </View>
        </View>
        <View style={styles.ic72PxUser1}>
          <View style={styles.rectangle121} />
          <Svg viewBox={"-0.5 -0.5 13 13"} style={styles.oval51}>
            <Path
              strokeWidth={1}
              fill={"rgba(255,255,255,0.2483016304347826)"}
              stroke={"rgba(255,255,255,1)"}
              d={
                "M5.50 11.00 C8.54 11.00 11.00 8.54 11.00 5.50 C11.00 2.46 8.54 0.00 5.50 0.00 C2.46 0.00 0.00 2.46 0.00 5.50 C0.00 8.54 2.46 11.00 5.50 11.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0.5 -0.5 19 11"} style={styles.oval61}>
            <Path
              strokeWidth={1}
              fill={"transparent"}
              stroke={"rgba(255,255,255,1)"}
              d={
                "M17.00 9.00 C17.00 4.03 13.19 0.00 8.50 0.00 C3.81 0.00 0.00 4.03 0.00 9.00 "
              }
            />
          </Svg>
          <View style={styles.rectangle3} />
        </View>
        <View style={styles.general}>
          <View style={styles.profileSettings}>
            <View style={styles.rectangle5} />
            <Text style={styles.style8}>
              상가 리모델링 시공 가능자 #목공 #도배
            </Text>
            <Text style={styles.style9}>인품 인테리어</Text>
            <View style={styles.settings} />
            <View style={styles.right1}>
              <Svg
                viewBox={"-0.75 -0.75 14.5963302752293 8.999999999999993"}
                style={styles.shape1}
              >
                <Path
                  strokeWidth={1.5}
                  fill={"transparent"}
                  stroke={"rgba(221,221,221,1)"}
                  d={"M0.75 0.75 L6.55 6.75 L12.35 0.75 "}
                />
              </Svg>
            </View>
          </View>
          <View style={styles.rectangle4} />
          <View style={styles.ic72PxUser2}>
            <View style={styles.rectangle122} />
            <Svg
              viewBox={"-0.5 -0.5 11.333333333333334 11.333333333333336"}
              style={styles.oval52}
            >
              <Path
                strokeWidth={1}
                fill={"rgba(255,255,255,0.2483016304347826)"}
                stroke={"rgba(255,255,255,1)"}
                d={
                  "M4.67 9.33 C7.24 9.33 9.33 7.24 9.33 4.67 C9.33 2.09 7.24 0.00 4.67 0.00 C2.09 0.00 0.00 2.09 0.00 4.67 C0.00 7.24 2.09 9.33 4.67 9.33 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.5 -0.5 16.424242424242422 9.636363636363633"}
              style={styles.oval62}
            >
              <Path
                strokeWidth={1}
                fill={"transparent"}
                stroke={"rgba(255,255,255,1)"}
                d={
                  "M14.42 7.64 C14.42 3.42 11.20 0.00 7.21 0.00 C3.23 0.00 0.00 3.42 0.00 7.64 "
                }
              />
            </Svg>
            <View style={styles.rectangle5} />
          </View>
        </View>
        <View style={styles.general1}>
          <View style={styles.profileSettings1}>
            <View style={styles.rectangle51} />
            <Text style={styles.style10}>
              상가 리모델링 시공 가능자 #목공 #도배
            </Text>
            <Text style={styles.style11}>인품 인테리어</Text>
            <View style={styles.settings1} />
            <View style={styles.right2}>
              <Svg
                viewBox={"-0.75 -0.75 14.5963302752293 8.999999999999993"}
                style={styles.shape2}
              >
                <Path
                  strokeWidth={1.5}
                  fill={"transparent"}
                  stroke={"rgba(221,221,221,1)"}
                  d={"M0.75 0.75 L6.55 6.75 L12.35 0.75 "}
                />
              </Svg>
            </View>
          </View>
          <View style={styles.rectangle6} />
          <View style={styles.ic72PxUser3}>
            <View style={styles.rectangle123} />
            <Svg
              viewBox={"-0.5 -0.5 11.333333333333334 11.333333333333336"}
              style={styles.oval53}
            >
              <Path
                strokeWidth={1}
                fill={"rgba(255,255,255,0.2483016304347826)"}
                stroke={"rgba(255,255,255,1)"}
                d={
                  "M4.67 9.33 C7.24 9.33 9.33 7.24 9.33 4.67 C9.33 2.09 7.24 0.00 4.67 0.00 C2.09 0.00 0.00 2.09 0.00 4.67 C0.00 7.24 2.09 9.33 4.67 9.33 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.5 -0.5 16.424242424242422 9.636363636363633"}
              style={styles.oval63}
            >
              <Path
                strokeWidth={1}
                fill={"transparent"}
                stroke={"rgba(255,255,255,1)"}
                d={
                  "M14.42 7.64 C14.42 3.42 11.20 0.00 7.21 0.00 C3.23 0.00 0.00 3.42 0.00 7.64 "
                }
              />
            </Svg>
            <View style={styles.rectangle7} />
          </View>
        </View>
        <View style={styles.alirezaEtemadi422364Unsplash}>
          <View style={styles.mask5} />
        </View>
        <View style={styles.alirezaEtemadi422364Unsplash1}>
          <View style={styles.mask6} />
        </View>
        <View style={styles.alirezaEtemadi422364Unsplash2}>
          <View style={styles.mask7} />
        </View>
        <Text style={styles.a}>#사용기간 2년 #A급</Text>
        <Text style={styles.a1}>#사용기간 1년 #A+급</Text>
        <Text style={styles.a2}>#사용기간 2년 #상태 A급</Text>
        <Text style={styles.style12}>햄머드릴</Text>
        <Text style={styles.style13}>임펙트드릴</Text>
        <Text style={styles.style14}>샌더 광택기</Text>
        <View style={styles.rectangle8} />
        <View style={styles.rectangle9} />
        <View style={styles.right3}>
          <Svg viewBox={"-0.75 -0.75 9 6"} style={styles.shape3}>
            <Path
              strokeWidth={1.5}
              fill={"transparent"}
              stroke={"rgba(255,255,255,1)"}
              d={"M0.75 0.75 L3.75 3.75 L6.75 0.75 "}
            />
          </Svg>
        </View>
        <View style={styles.right4}>
          <Svg viewBox={"-0.75 -0.75 9 6"} style={styles.shape4}>
            <Path
              strokeWidth={1.5}
              fill={"transparent"}
              stroke={"rgba(255,255,255,1)"}
              d={"M0.75 0.75 L3.75 3.75 L6.75 0.75 "}
            />
          </Svg>
        </View>
        <View style={styles.header}>
          <NaviBar style={styles.naviBar} />
          <BtnBtnBack1 style={styles.btnBtnBack1} />
        </View>
        <View style={styles.contentsFile}>
          <View style={styles.rectangle10} />
          <View style={styles.rectangle11} />
          <View style={styles.group4}>
            <Svg
              viewBox={"-0.6 -0.6 6.264000000000005 21.72000000000002"}
              style={styles.rectangle12}
            >
              <Path
                strokeWidth={1.2}
                fill={"transparent"}
                stroke={"rgba(0,0,0,1)"}
                d={
                  "M2.26 0.60 L2.81 0.60 C3.72 0.60 4.46 1.34 4.46 2.26 L4.46 16.44 C4.46 16.75 4.37 17.07 4.20 17.33 L2.53 19.92 L0.86 17.33 C0.69 17.07 0.60 16.75 0.60 16.44 L0.60 2.26 C0.60 1.34 1.34 0.60 2.26 0.60 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0 -0 4.133468621224809 1.09454763064974"}
              style={styles.rectangle13}
            >
              <Path
                strokeWidth={0}
                fill={"rgba(0,0,0,1)"}
                d={"M0.00 0.00 L4.13 0.00 L4.13 1.09 L0.00 1.09 L0.00 0.00 Z"}
              />
            </Svg>
            <Svg
              viewBox={"-0 -0 4.133468621224811 1.09454763065016"}
              style={styles.rectangle14}
            >
              <Path
                strokeWidth={0}
                fill={"rgba(0,0,0,1)"}
                d={"M0.00 0.00 L4.13 0.00 L4.13 1.09 L0.00 1.09 L0.00 0.00 Z"}
              />
            </Svg>
          </View>
          <View style={styles.rectangle15} />
          <View style={styles.rectangle16} />
          <View style={styles.rectangle17} />
          <View style={styles.rectangle18} />
        </View>
        <View style={styles.searchPerson}>
          <Svg
            viewBox={"-0.6 -0.6 35.558328566813586 35.55832856681362"}
            style={styles.oval1}
          >
            <Path
              strokeWidth={2.4}
              fill={"transparent"}
              stroke={"rgba(0,0,0,1)"}
              d={
                "M17.78 34.36 C26.94 34.36 34.36 26.94 34.36 17.78 C34.36 8.62 26.94 1.20 17.78 1.20 C8.62 1.20 1.20 8.62 1.20 17.78 C1.20 26.94 8.62 34.36 17.78 34.36 Z"
              }
            />
          </Svg>
          <Svg
            viewBox={"-0.6 -0.6 30.322803003632508 30.32280300363263"}
            style={styles.oval2}
          >
            <Path
              strokeWidth={2.4}
              fill={"transparent"}
              stroke={"rgba(0,0,0,1)"}
              d={
                "M15.16 29.12 C22.87 29.12 29.12 22.87 29.12 15.16 C29.12 7.45 22.87 1.20 15.16 1.20 C7.45 1.20 1.20 7.45 1.20 15.16 C1.20 22.87 7.45 29.12 15.16 29.12 Z"
              }
            />
          </Svg>
          <View style={styles.x3CSliceX3E6} />
          <View style={styles.rectangle19} />
          <View style={styles.rectangle20} />
          <Svg
            viewBox={"-0 -0 1.3088813907953 40.13902931772171"}
            style={styles.rectangle21}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M0.65 0.00 C0.65 0.00 1.31 0.00 1.31 0.65 C1.31 0.65 1.31 8.07 1.31 8.07 C1.31 8.07 1.31 8.73 0.65 8.73 C0.65 8.73 0.65 8.73 0.65 8.73 C0.65 8.73 0.00 8.73 0.00 8.07 C0.00 8.07 0.00 0.65 0.00 0.65 C0.00 0.65 0.00 0.00 0.65 0.00 C0.65 0.00 0.65 0.00 0.65 0.00 Z M0.65 31.41 C0.65 31.41 1.31 31.41 1.31 32.07 C1.31 32.07 1.31 39.48 1.31 39.48 C1.31 39.48 1.31 40.14 0.65 40.14 C0.65 40.14 0.65 40.14 0.65 40.14 C0.65 40.14 0.00 40.14 0.00 39.48 C0.00 39.48 0.00 32.07 0.00 32.07 C0.00 32.07 0.00 31.41 0.65 31.41 C0.65 31.41 0.65 31.41 0.65 31.41 Z"
              }
            />
          </Svg>
          <View style={styles.person}>
            <Svg
              viewBox={"-0 -0 19.58001430132766 18.6248916524824"}
              style={styles.clip2}
            >
              <Path
                strokeWidth={0}
                fill={"transparent"}
                d={
                  "M0.00 0.00 L19.58 0.00 L19.58 18.62 L0.00 18.62 L0.00 0.00 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.1 -0.1 19.98001430132766 19.0248916524824"}
              style={styles.path2}
            >
              <Path
                strokeWidth={0.4}
                fill={"rgba(0,0,0,1)"}
                stroke={"rgba(0,0,0,1)"}
                d={
                  "M0.00 4.12 C0.00 1.85 1.85 0.00 4.13 0.00 C6.41 0.00 8.26 1.84 8.26 4.12 C8.26 6.40 6.41 8.25 4.13 8.25 C1.85 8.25 0.00 6.39 0.00 4.12 Z M1.09 4.12 C1.09 5.79 2.46 7.16 4.13 7.16 C5.80 7.16 7.17 5.79 7.17 4.12 C7.17 2.45 5.80 1.08 4.13 1.08 C2.46 1.08 1.09 2.45 1.09 4.12 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.1 -0.1 19.98001430132766 19.0248916524824"}
              style={styles.path3}
            >
              <Path
                strokeWidth={0.4}
                fill={"rgba(0,0,0,1)"}
                stroke={"rgba(0,1,1,1)"}
                d={
                  "M0.00 5.18 C0.00 2.32 5.18 0.00 5.18 0.00 L10.25 0.00 C10.25 0.00 15.43 2.33 15.43 5.18 C15.43 5.49 14.89 5.73 14.89 5.73 L0.54 5.73 C0.54 5.73 0.00 5.49 0.00 5.18 Z M1.13 4.64 L14.30 4.64 L10.25 1.09 L5.18 1.09 L1.13 4.64 Z"
                }
              />
            </Svg>
          </View>
        </View>
        <View style={styles.profile}>
          <View style={styles.rectangle22} />
          <Svg
            viewBox={"-0 -0 25.74488336359819 1.310238860176002"}
            style={styles.fill1}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M25.25 1.15 L0.49 1.15 C0.22 1.15 0.00 0.93 0.00 0.66 C0.00 0.38 0.22 0.16 0.49 0.16 L25.25 0.16 C25.52 0.16 25.74 0.38 25.74 0.66 C25.74 0.93 25.52 1.15 25.25 1.15 Z"
              }
            />
          </Svg>
          <Svg
            viewBox={"-0 -0 32.47951110490284 24.81854448945379"}
            style={styles.path4}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M30.02 24.82 L2.46 24.82 L0.00 22.36 L0.00 2.46 L2.46 0.00 L30.02 0.00 L32.48 2.46 L32.48 22.36 L30.02 24.82 Z M2.46 0.98 L0.98 2.46 L0.98 22.36 L2.46 23.84 L30.02 23.84 L31.50 22.36 L31.50 2.46 L30.02 0.98 L2.46 0.98 Z"
              }
            />
          </Svg>
          <Svg
            viewBox={"-0 -0 17.86772733622004 1.310238860175991"}
            style={styles.fill3}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M17.37 1.15 L0.49 1.15 C0.22 1.15 0.00 0.93 0.00 0.66 C0.00 0.38 0.22 0.16 0.49 0.16 L17.38 0.16 C17.65 0.16 17.87 0.38 17.87 0.66 C17.87 0.93 17.65 1.15 17.37 1.15 Z"
              }
            />
          </Svg>
          <View style={styles.person1}>
            <Svg
              viewBox={"-0 -0 16.08000000000001 15.29560975609759"}
              style={styles.clip21}
            >
              <Path
                strokeWidth={0}
                fill={"transparent"}
                d={
                  "M0.00 0.00 L16.08 0.00 L16.08 15.30 L0.00 15.30 L0.00 0.00 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.1 -0.1 16.480000000000008 15.695609756097591"}
              style={styles.path5}
            >
              <Path
                strokeWidth={0.4}
                fill={"rgba(0,0,0,1)"}
                stroke={"rgba(0,0,0,1)"}
                d={
                  "M0.00 3.38 C0.00 1.52 1.52 0.00 3.39 0.00 C5.27 0.00 6.78 1.51 6.78 3.38 C6.78 5.25 5.27 6.77 3.39 6.77 C1.52 6.77 0.00 5.24 0.00 3.38 Z M0.89 3.38 C0.89 4.76 2.02 5.88 3.39 5.88 C4.77 5.88 5.89 4.76 5.89 3.38 C5.89 2.01 4.77 0.88 3.39 0.88 C2.02 0.88 0.89 2.01 0.89 3.38 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.1 -0.1 16.480000000000008 15.695609756097591"}
              style={styles.path6}
            >
              <Path
                strokeWidth={0.4}
                fill={"rgba(0,0,0,1)"}
                stroke={"rgba(0,1,1,1)"}
                d={
                  "M0.00 4.26 C0.00 1.90 4.26 0.00 4.26 0.00 L8.42 0.00 C8.42 0.00 12.67 1.91 12.67 4.26 C12.67 4.51 12.23 4.70 12.23 4.70 L0.45 4.70 C0.45 4.70 0.00 4.51 0.00 4.26 Z M0.93 3.81 L11.75 3.81 L8.42 0.89 L4.26 0.89 L0.93 3.81 Z"
                }
              />
            </Svg>
          </View>
          <Svg
            viewBox={"-0 -0 7.053015784327371 1.310238860175971"}
            style={styles.fill5}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M6.56 1.15 L0.49 1.15 C0.22 1.15 0.00 0.93 0.00 0.66 C0.00 0.38 0.22 0.16 0.49 0.16 L6.56 0.16 C6.83 0.16 7.05 0.38 7.05 0.66 C7.05 0.93 6.83 1.15 6.56 1.15 Z"
              }
            />
          </Svg>
          <Svg
            viewBox={"-0 -0 7.053015784327371 1.310238860176003"}
            style={styles.fill6}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M6.56 1.15 L0.49 1.15 C0.22 1.15 0.00 0.93 0.00 0.66 C0.00 0.38 0.22 0.16 0.49 0.16 L6.56 0.16 C6.83 0.16 7.05 0.38 7.05 0.66 C7.05 0.93 6.83 1.15 6.56 1.15 Z"
              }
            />
          </Svg>
          <Svg
            viewBox={"-0 -0 7.053015784327371 1.310238860176003"}
            style={styles.fill7}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M6.56 1.15 L0.49 1.15 C0.22 1.15 0.00 0.93 0.00 0.66 C0.00 0.38 0.22 0.16 0.49 0.16 L6.56 0.16 C6.83 0.16 7.05 0.38 7.05 0.66 C7.05 0.93 6.83 1.15 6.56 1.15 Z"
              }
            />
          </Svg>
        </View>
        <View style={styles.searchJob}>
          <View style={styles.iconfinder107511568}>
            <View style={styles.x3CSliceX3E61} />
            <Svg
              viewBox={"-0.1 -0.1 11.15760913912689 4.1144838841289335"}
              style={styles.path7}
            >
              <Path
                strokeWidth={0.4}
                fill={"rgba(0,0,0,1)"}
                stroke={"rgba(0,0,1,1)"}
                d={
                  "M10.33 3.71 L0.43 3.71 L0.00 3.29 L0.00 1.86 L1.86 0.00 L8.90 0.00 L10.76 1.86 L10.76 3.29 L10.33 3.71 Z M0.86 2.86 L9.90 2.86 L9.90 1.86 L8.90 0.86 L1.86 0.86 L0.86 1.86 L0.86 2.86 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0 -0 0.2855977152182749 0.2855977152182625"}
              style={styles.path8}
            >
              <Path
                strokeWidth={0}
                fill={"transparent"}
                d={
                  "M0.02 0.13 C0.10 0.14 0.18 0.16 0.26 0.16 C0.18 0.16 0.10 0.14 0.02 0.13 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0 -0 0.2855977152182554 0.2855977152182767"}
              style={styles.path9}
            >
              <Path
                strokeWidth={0}
                fill={"transparent"}
                d={
                  "M0.09 0.16 C0.12 0.15 0.16 0.14 0.20 0.13 C0.16 0.14 0.13 0.15 0.09 0.16 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0 -0 0.2855977152182945 0.2855977152182625"}
              style={styles.path10}
            >
              <Path
                strokeWidth={0}
                fill={"transparent"}
                d={
                  "M0.02 0.16 C0.10 0.16 0.19 0.14 0.26 0.13 C0.19 0.14 0.10 0.16 0.02 0.16 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0 -0 0.2855977152182625 0.2855977152182767"}
              style={styles.path11}
            >
              <Path
                strokeWidth={0}
                fill={"transparent"}
                d={
                  "M0.09 0.13 C0.12 0.14 0.16 0.15 0.20 0.16 C0.16 0.15 0.12 0.14 0.09 0.13 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.1 -0.1 25.53916768665858 12.56303549571602"}
              style={styles.path12}
            >
              <Path
                strokeWidth={0.2}
                fill={"rgba(0,0,0,1)"}
                stroke={"rgba(0,0,1,1)"}
                d={
                  "M23.28 12.16 L15.45 12.16 C15.21 12.16 15.02 11.97 15.02 11.73 C15.02 11.50 15.21 11.31 15.45 11.31 L23.28 11.31 C23.34 11.31 23.40 11.30 23.45 11.29 C23.47 11.28 23.49 11.28 23.52 11.27 C23.55 11.27 23.57 11.26 23.59 11.25 C23.67 11.22 23.74 11.19 23.79 11.16 C24.10 10.98 24.28 10.66 24.28 10.31 L24.28 1.86 C24.28 1.31 23.83 0.86 23.28 0.86 L1.86 0.86 C1.31 0.86 0.86 1.31 0.86 1.86 L0.86 10.31 C0.86 10.66 1.04 10.98 1.35 11.16 C1.40 11.19 1.47 11.22 1.54 11.25 C1.57 11.26 1.59 11.27 1.62 11.27 C1.65 11.28 1.67 11.28 1.69 11.29 C1.74 11.30 1.80 11.31 1.86 11.31 L10.51 11.31 C10.75 11.31 10.94 11.50 10.94 11.73 C10.94 11.97 10.75 12.16 10.51 12.16 L1.86 12.16 C1.73 12.16 1.62 12.15 1.54 12.13 C1.49 12.12 1.45 12.11 1.41 12.10 C1.36 12.09 1.32 12.08 1.27 12.06 C1.13 12.01 1.02 11.96 0.91 11.90 C0.34 11.56 0.00 10.96 0.00 10.31 L0.00 1.86 C0.00 0.83 0.83 0.00 1.86 0.00 L23.28 0.00 C24.31 0.00 25.14 0.83 25.14 1.86 L25.14 10.31 C25.14 10.96 24.80 11.56 24.23 11.90 C24.12 11.96 24.01 12.01 23.88 12.06 C23.82 12.08 23.77 12.09 23.73 12.10 C23.69 12.11 23.65 12.12 23.61 12.13 C23.52 12.15 23.40 12.16 23.28 12.16 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.1 -0.1 24.133741330069377 9.004202366381081"}
              style={styles.path13}
            >
              <Path
                strokeWidth={0.2}
                fill={"rgba(0,0,0,1)"}
                stroke={"rgba(0,0,0,1)"}
                d={
                  "M21.73 8.60 L2.00 8.60 C0.90 8.60 0.00 7.71 0.00 6.60 L0.00 0.43 C0.00 0.19 0.19 0.00 0.43 0.00 C0.66 0.00 0.86 0.19 0.86 0.43 L0.86 6.60 C0.86 7.23 1.37 7.75 2.00 7.75 L21.73 7.75 C22.36 7.75 22.88 7.23 22.88 6.60 L22.88 0.43 C22.88 0.19 23.07 0.00 23.31 0.00 C23.54 0.00 23.73 0.19 23.73 0.43 L23.73 6.60 C23.73 7.71 22.84 8.60 21.73 8.60 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0.1 -0.1 6.192207262341926 4.8944512443900425"}
              style={styles.path14}
            >
              <Path
                strokeWidth={0.4}
                fill={"rgba(0,0,0,1)"}
                stroke={"rgba(0,0,0,1)"}
                d={
                  "M4.38 4.49 L1.42 4.49 L0.00 3.08 L0.00 1.42 L1.42 0.00 L4.38 0.00 L5.79 1.42 L5.79 3.08 L4.38 4.49 Z M1.42 0.86 L0.86 1.42 L0.86 3.08 L1.42 3.64 L4.38 3.64 L4.94 3.08 L4.94 1.42 L4.38 0.86 L1.42 0.86 Z"
                }
              />
            </Svg>
          </View>
          <Svg
            viewBox={"-0.6 -0.6 18.92469433557265 19.19999999999988"}
            style={styles.path15}
          >
            <Path
              strokeWidth={2.4}
              fill={"rgba(0,0,0,1)"}
              stroke={"rgba(255,255,255,1)"}
              d={
                "M1.20 7.93 C1.20 4.23 4.23 1.20 7.93 1.20 C11.65 1.20 14.67 4.22 14.67 7.93 C14.67 9.56 13.10 12.23 13.10 12.23 L17.54 16.96 C17.54 16.96 17.78 17.58 17.54 17.82 C17.43 17.94 17.28 18.00 17.11 18.00 C16.95 18.00 16.68 17.82 16.68 17.82 L12.23 13.10 C12.23 13.10 9.57 14.67 7.93 14.67 C4.23 14.67 1.20 11.65 1.20 7.93 Z M2.42 7.93 C2.42 10.96 4.89 13.44 7.93 13.44 C10.98 13.44 13.44 10.98 13.44 7.93 C13.44 4.90 10.98 2.42 7.93 2.42 C4.90 2.42 2.42 4.90 2.42 7.93 Z"
              }
            />
          </Svg>
          <Svg
            viewBox={"-0 -0 10.43375458615917 10.43375458615919"}
            style={styles.oval3}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(255,255,255,1)"}
              d={
                "M5.22 10.43 C8.10 10.43 10.43 8.10 10.43 5.22 C10.43 2.34 8.10 0.00 5.22 0.00 C2.34 0.00 0.00 2.34 0.00 5.22 C0.00 8.10 2.34 10.43 5.22 10.43 Z"
              }
            />
          </Svg>
        </View>
      </View>
    );
  }
}
