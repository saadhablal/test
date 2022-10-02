import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Screen3 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/arrowleft.png")}
      />
      <Text style={styles.myNumberIs}>
        <Text style={styles.mText}>M</Text>y number is
      </Text>
      <View style={styles.cONTINUEView}>
        <View style={styles.rectangleView} />
        <Text style={styles.cONTINUEText}>CONTINUE</Text>
      </View>
      <View style={styles.cntryCodeView}>
        <View style={styles.lineView} />
        <View style={styles.groupView}>
          <Text style={styles.iN91Text}>IN +91</Text>
          <Image
            style={styles.chevronDownIcon}
            resizeMode="cover"
            source={require("../assets/chevrondown.png")}
          />
        </View>
      </View>
      <View style={styles.phoneNumberView}>
        <View style={styles.lineView1} />
        <Text style={styles.phoneNumberText}>Phone Number</Text>
      </View>
      <Text style={styles.byClickingLogInYouAgree}>
        <Text
          style={styles.byClickingLog}
        >{`By clicking Log In, you agree with our Terms.  Learn how process your data in our Privacy  Policy and Cookies Policy. By clicking Log In, you agree with our Terms.  Learn how `}</Text>
        <Text style={styles.processYourData}>
          process your data in our Privacy Policy and Cookies
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowLeftIcon: {
    position: "absolute",
    top: 54,
    left: 25,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mText: {
    textTransform: "uppercase",
  },
  myNumberIs: {
    position: "absolute",
    top: 108,
    left: 49,
    fontSize: 33,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#fff",
    width: 301,
    height: 52,
  },
  cONTINUEText: {
    position: "absolute",
    top: 17,
    left: 114,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  cONTINUEView: {
    position: "absolute",
    top: 418,
    left: 49,
    width: 301,
    height: 52,
  },
  lineView: {
    position: "absolute",
    top: 36.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 100,
    height: 1,
  },
  iN91Text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  chevronDownIcon: {
    position: "absolute",
    top: 2,
    left: 61,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 9,
    left: 15,
    width: 76,
    height: 19,
  },
  cntryCodeView: {
    position: "absolute",
    top: 209,
    left: 49,
    width: 99,
    height: 37,
    overflow: "hidden",
  },
  lineView1: {
    position: "absolute",
    top: 36,
    left: -1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 2,
    width: 186,
    height: 2,
  },
  phoneNumberText: {
    position: "absolute",
    top: 9,
    left: 0,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  phoneNumberView: {
    position: "absolute",
    top: 209,
    left: 166,
    width: 184,
    height: 37,
    overflow: "hidden",
  },
  byClickingLog: {
    fontFamily: "Roboto",
  },
  processYourData: {
    textDecoration: "underline",
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  byClickingLogInYouAgree: {
    position: "absolute",
    top: 281,
    left: 50,
    fontSize: 13,
    lineHeight: 21,
    color: "#fff",
    textAlign: "left",
    width: 300,
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

export default Screen3;
