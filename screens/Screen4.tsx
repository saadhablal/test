import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Screen4 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/arrowleft.png")}
      />
      <Text style={styles.enterOTPText}>Enter OTP</Text>
      <View style={styles.cONTINUEView}>
        <View style={styles.rectangleView} />
        <Text style={styles.cONTINUEText}>CONTINUE</Text>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-5.png")}
      />
      <Text style={styles.rESENDText}>RESEND</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowLeftIcon: {
    position: "absolute",
    top: 50,
    left: 25,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  enterOTPText: {
    position: "absolute",
    top: 104,
    left: 50,
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
    top: 315,
    left: 49,
    width: 301,
    height: 52,
  },
  groupIcon: {
    position: "absolute",
    top: 241,
    left: 49,
    width: 300,
    height: 2,
  },
  rESENDText: {
    position: "absolute",
    top: 266,
    left: 171,
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
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

export default Screen4;
