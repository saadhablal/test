import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Screen2 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.facebookView}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.illustrationOfGoogleIconOn}
          resizeMode="cover"
          source={require("../public/illustrationofgoogleiconontransparentbackgroundpng-2.png")}
        />
        <Text style={styles.loginWithFacebook}>Login With facebook</Text>
      </View>
      <View style={styles.facebookView1}>
        <View style={styles.rectangleView1} />
        <Image
          style={styles.illustrationOfGoogleIconOn1}
          resizeMode="cover"
          source={require("../public/illustrationofgoogleiconontransparentbackgroundpng-21.png")}
        />
        <Text style={styles.loginWithGOOGLE}>Login With GOOGLE</Text>
      </View>
      <View style={styles.phoneView}>
        <View style={styles.rectangleView2} />
        <Image
          style={styles.illustrationOfGoogleIconOn2}
          resizeMode="cover"
          source={require("../public/illustrationofgoogleiconontransparentbackgroundpng-3.png")}
        />
        <Text style={styles.loginWithPhone}>Login With Phone</Text>
      </View>
      <Text style={styles.byClickingLogInYouAgree1}>
        <Text style={styles.byClickingLogInYouAgree}>
          <Text
            style={styles.byClickingLog}
          >{`By clicking Log In, you agree with our `}</Text>
          <Text style={styles.termsText}>Terms</Text>
          <Text style={styles.text}>.</Text>
        </Text>
        <Text style={styles.learnHowWeProcessYourData}>
          <Text
            style={styles.learnHowWe}
          >{`Learn how we process your data in our `}</Text>
          <Text style={styles.privacyText}>Privacy</Text>
        </Text>
        <Text style={styles.policyAndCookiesPolicy}>
          <Text style={styles.policyText}>Policy</Text>
          <Text style={styles.andText}>{` and `}</Text>
          <Text style={styles.cookiesPolicyText}>Cookies Policy.</Text>
        </Text>
      </Text>
      <Text style={styles.dontHaveAccountSignup}>
        <Text style={styles.dontHaveAccount}>{`Don’t have account? `}</Text>
        <Text style={styles.signupText}>Signup</Text>
      </Text>
      <View style={styles.rectangleView3} />
      <Image
        style={styles.polygonIcon}
        resizeMode="cover"
        source={require("../public/polygon-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#fff",
    width: 330,
    height: 50,
  },
  illustrationOfGoogleIconOn: {
    position: "absolute",
    top: 13,
    left: 26,
    width: 25,
    height: 25,
  },
  loginWithFacebook: {
    position: "absolute",
    top: 16,
    left: 84,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#373737",
    textAlign: "center",
  },
  facebookView: {
    position: "absolute",
    top: 494,
    left: 23,
    width: 330,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#fff",
    width: 330,
    height: 50,
  },
  illustrationOfGoogleIconOn1: {
    position: "absolute",
    top: 14,
    left: 28,
    width: 21,
    height: 22,
  },
  loginWithGOOGLE: {
    position: "absolute",
    top: 16,
    left: 92,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#373737",
    textAlign: "center",
  },
  facebookView1: {
    position: "absolute",
    top: 424,
    left: 23,
    width: 330,
    height: 50,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#fff",
    width: 330,
    height: 50,
  },
  illustrationOfGoogleIconOn2: {
    position: "absolute",
    top: 14,
    left: 28,
    width: 21,
    height: 22,
  },
  loginWithPhone: {
    position: "absolute",
    top: 16,
    left: 96,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#373737",
    textAlign: "center",
  },
  phoneView: {
    position: "absolute",
    top: 564,
    left: 23,
    width: 330,
    height: 50,
  },
  byClickingLog: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  termsText: {
    textDecoration: "underline",
    fontWeight: "900",
    fontFamily: "Roboto",
  },
  text: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  byClickingLogInYouAgree: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  learnHowWe: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  privacyText: {
    textDecoration: "underline",
    fontWeight: "900",
    fontFamily: "Roboto",
  },
  learnHowWeProcessYourData: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  policyText: {
    textDecoration: "underline",
    fontWeight: "900",
    fontFamily: "Roboto",
  },
  andText: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  cookiesPolicyText: {
    textDecoration: "underline",
    fontWeight: "900",
    fontFamily: "Roboto",
  },
  policyAndCookiesPolicy: {
    margin: 0,
  },
  byClickingLogInYouAgree1: {
    position: "absolute",
    top: 341,
    left: 38,
    fontSize: 13,
    lineHeight: 19,
    color: "#fff",
    textAlign: "center",
    width: 300,
  },
  dontHaveAccount: {
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  signupText: {
    fontWeight: "900",
    fontFamily: "Roboto",
  },
  dontHaveAccountSignup: {
    position: "absolute",
    top: 684,
    left: 107,
    fontSize: 13,
    lineHeight: 19,
    color: "#fff",
    textAlign: "center",
  },
  rectangleView3: {
    position: "absolute",
    top: 179.07,
    left: 157.99,
    backgroundColor: "#fff",
    width: 74,
    height: 62,
    transform: [
      {
        rotate: "32.14deg",
      },
    ],
  },
  polygonIcon: {
    position: "absolute",
    top: 179,
    left: 193.11,
    width: 64,
    height: 51,
  },
  view: {
    position: "relative",
    borderRadius: 40,
    backgroundColor: "#292f3f",
    shadowColor: "rgba(24, 48, 63, 0.5)",
    shadowOffset: {
      width: 40,
      height: 40,
    },
    shadowRadius: 100,
    elevation: 100,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Screen2;
