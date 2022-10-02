import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Screen9 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.rectangleView} />
      <Text style={styles.writeText}>Write</Text>
      <View style={styles.rectangleView1} />
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group4.png")}
      />
      <View style={styles.rectangleView2} />
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group5.png")}
      />
      <View style={styles.rectangleView3} />
      <Text style={styles.maciejkowalskiemailcomText}>
        maciej.kowalski@email.com
      </Text>
      <Text style={styles.text}>08:43</Text>
      <View style={styles.rectangleView4} />
      <Text style={styles.text1}>?</Text>
      <View style={styles.rectangleView5} />
      <Text style={styles.iAmAlmostFinishPleaseGiv}>
        I am almost finish. Please give me your email, I will ZIP them and send
        you as son as im finish.
      </Text>
      <Text style={styles.text2}>08:12</Text>
      <View style={styles.rectangleView6} />
      <Text style={styles.nextMonthText}>Next month?</Text>
      <View style={styles.rectangleView7} />
      <Text style={styles.iAmInAProcessOfDesigning}>
        I am in a process of designing some. When do you need them?
      </Text>
      <View style={styles.rectangleView8} />
      <Text style={styles.iCommentedOnFigmaIWantT}>
        I commented on Figma, I want to add some fancy icons. Do you have any
        icon set?
      </Text>
      <Text style={styles.fEB1200Text}>1 FEB 12:00</Text>
      <Text style={styles.maciejKowalskiText}>Maciej Kowalski</Text>
      <Text style={styles.martinaWolnaText}>Martina Wolna</Text>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image7.png")}
      />
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/arrowleft.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 720,
    left: 25,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: 275,
    height: 40,
  },
  writeText: {
    position: "absolute",
    height: "2.83%",
    width: "10.4%",
    top: "89.29%",
    right: "78.93%",
    bottom: "7.88%",
    left: "10.67%",
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Arima Madurai",
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 720,
    left: 315,
    borderRadius: 10,
    backgroundColor: "#00ac83",
    width: 40,
    height: 40,
  },
  subtractIcon: {
    position: "relative",
    width: 19,
    height: 17,
  },
  groupIcon: {
    position: "absolute",
    top: 720,
    left: 260,
    width: 40,
    height: 40,
  },
  rectangleView2: {
    position: "absolute",
    top: 555,
    left: 300,
    borderRadius: 20,
    backgroundColor: "#272a35",
    width: 40,
    height: 34,
  },
  groupIcon1: {
    position: "absolute",
    height: "1.94%",
    width: "3.76%",
    top: "69.47%",
    right: "12.79%",
    bottom: "28.59%",
    left: "83.45%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView3: {
    position: "absolute",
    top: 505,
    left: 35,
    borderRadius: 20,
    backgroundColor: "#373e4e",
    width: 226,
    height: 40,
  },
  maciejkowalskiemailcomText: {
    position: "absolute",
    top: 505,
    left: 49,
    fontSize: 13,
    textDecoration: "underline",
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 196,
    height: 40,
  },
  text: {
    position: "absolute",
    top: 479,
    left: 170,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  rectangleView4: {
    position: "absolute",
    top: 435,
    left: 300,
    borderRadius: 20,
    backgroundColor: "#272a35",
    width: 40,
    height: 34,
  },
  text1: {
    position: "absolute",
    top: 435,
    left: 313,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 10,
    height: 34,
  },
  rectangleView5: {
    position: "absolute",
    top: 365,
    left: 60,
    borderRadius: 20,
    backgroundColor: "#272a35",
    width: 280,
    height: 60,
  },
  iAmAlmostFinishPleaseGiv: {
    position: "absolute",
    top: 365,
    left: 71,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 249,
    height: 60,
  },
  text2: {
    position: "absolute",
    top: 339,
    left: 170,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  rectangleView6: {
    position: "absolute",
    top: 285,
    left: 35,
    borderRadius: 20,
    backgroundColor: "#373e4e",
    width: 115,
    height: 40,
  },
  nextMonthText: {
    position: "absolute",
    top: 285,
    left: 49,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 92,
    height: 40,
  },
  rectangleView7: {
    position: "absolute",
    top: 225,
    left: 95,
    borderRadius: 20,
    backgroundColor: "#272a35",
    width: 245,
    height: 50,
  },
  iAmInAProcessOfDesigning: {
    position: "absolute",
    top: 225,
    left: 107,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 213,
    height: 50,
  },
  rectangleView8: {
    position: "absolute",
    top: 155,
    left: 35,
    borderRadius: 20,
    backgroundColor: "#373e4e",
    width: 280,
    height: 60,
  },
  iCommentedOnFigmaIWantT: {
    position: "absolute",
    top: 155,
    left: 49,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 243,
    height: 60,
  },
  fEB1200Text: {
    position: "absolute",
    top: 129,
    left: 150,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  maciejKowalskiText: {
    position: "absolute",
    top: 76,
    left: 218,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  martinaWolnaText: {
    position: "absolute",
    top: 51,
    left: 230,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  imageIcon: {
    position: "absolute",
    top: 27,
    left: 50,
    borderRadius: 30,
    width: 92,
    height: 92,
  },
  arrowLeftIcon: {
    position: "absolute",
    top: 57,
    left: 41,
    width: 24,
    height: 24,
    overflow: "hidden",
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

export default Screen9;
