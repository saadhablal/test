import * as React from "react";
import { StyleSheet, View, Image } from "react-native";

const Screen8 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.polygonIcon}
        resizeMode="cover"
        source={require("../assets/polygon-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 360.07,
    left: 156.99,
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
    top: 360,
    left: 192.11,
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

export default Screen8;
