import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Screen6 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="cover"
        source={require("../public/arrowleft.png")}
      />
      <Text style={styles.signUpText}>Sign Up</Text>
      <View style={styles.cONTINUEView}>
        <View style={styles.rectangleView} />
        <Text style={styles.signUpText1}>Sign up</Text>
      </View>
      <View style={styles.fullNameView}>
        <View style={styles.lineView} />
        <Text style={styles.fullNameText}>Full Name</Text>
      </View>
      <View style={styles.fullNameView1}>
        <View style={styles.lineView1} />
        <Text style={styles.genderText}>Gender</Text>
        <Image
          style={styles.chevronDownIcon}
          resizeMode="cover"
          source={require("../public/chevrondown.png")}
        />
      </View>
      <View style={styles.fullNameView2}>
        <View style={styles.lineView2} />
        <Text style={styles.dDMMYYYYText}>DD/MM/YYYY</Text>
        <Image
          style={styles.chevronDownIcon1}
          resizeMode="cover"
          source={require("../public/chevrondown.png")}
        />
      </View>
      <View style={styles.fullNameView3}>
        <View style={styles.lineView3} />
        <Text style={styles.phoneNumberText}>Phone Number</Text>
      </View>
      <Text style={styles.orText}>or</Text>
      <View style={styles.groupView}>
        <Image
          style={styles.illustrationOfGoogleIconOn}
          resizeMode="cover"
          source={require("../public/illustrationofgoogleiconontransparentbackgroundpng-22.png")}
        />
        <Image
          style={styles.illustrationOfGoogleIconOn1}
          resizeMode="cover"
          source={require("../public/illustrationofgoogleiconontransparentbackgroundpng-31.png")}
        />
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../public/group-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowLeftIcon: {
    position: "absolute",
    top: 56,
    left: 25,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  signUpText: {
    position: "absolute",
    top: 110,
    left: 52,
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
  signUpText1: {
    position: "absolute",
    top: 18,
    left: 122,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
    width: 58,
    height: 15,
  },
  cONTINUEView: {
    position: "absolute",
    top: 474,
    left: 49,
    width: 301,
    height: 52,
  },
  lineView: {
    position: "absolute",
    top: 46.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 302,
    height: 1,
  },
  fullNameText: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  fullNameView: {
    position: "absolute",
    top: 200,
    left: 49,
    width: 301,
    height: 47,
    overflow: "hidden",
  },
  lineView1: {
    position: "absolute",
    top: 46.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 302,
    height: 1,
  },
  genderText: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  chevronDownIcon: {
    position: "absolute",
    top: 16,
    left: 276,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  fullNameView1: {
    position: "absolute",
    top: 262,
    left: 49,
    width: 301,
    height: 47,
    overflow: "hidden",
  },
  lineView2: {
    position: "absolute",
    top: 46.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 302,
    height: 1,
  },
  dDMMYYYYText: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  chevronDownIcon1: {
    position: "absolute",
    top: 16,
    left: 276,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  fullNameView2: {
    position: "absolute",
    top: 324,
    left: 49,
    width: 301,
    height: 47,
    overflow: "hidden",
  },
  lineView3: {
    position: "absolute",
    top: 46.5,
    left: -0.5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 302,
    height: 1,
  },
  phoneNumberText: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  fullNameView3: {
    position: "absolute",
    top: 386,
    left: 49,
    width: 301,
    height: 47,
    overflow: "hidden",
  },
  orText: {
    position: "absolute",
    top: 574,
    left: 192,
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  illustrationOfGoogleIconOn: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 39,
    height: 39,
  },
  illustrationOfGoogleIconOn1: {
    position: "absolute",
    top: 0,
    left: 66,
    width: 39,
    height: 39,
  },
  groupView: {
    position: "absolute",
    top: 625,
    left: 147,
    width: 105,
    height: 39,
  },
  groupIcon: {
    position: "absolute",
    top: 583,
    left: 133,
    width: 132,
    height: 1,
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

export default Screen6;
