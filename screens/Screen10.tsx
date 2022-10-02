import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const Screen10 = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.potemSieZobaczy}>potem sie zobaczy</Text>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <Text style={styles.febText}>01 Feb</Text>
      <Text style={styles.marzenaKlasaText}>Marzena Klasa</Text>
      <Text style={styles.noPracujemyZDomuPrzez5}>
        no pracujemy z domu przez 5 ...
      </Text>
      <Image
        style={styles.imageIcon1}
        resizeMode="cover"
        source={require("../assets/image9.png")}
      />
      <Text style={styles.kmText}>5km</Text>
      <Text style={styles.jarosawKowalskiText}>jarosław kowalski</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={styles.imageIcon2}
        resizeMode="cover"
        source={require("../assets/image2.png")}
      />
      <Text style={styles.kmText1}>1,3km</Text>
      <Text style={styles.krysiaEurydykaText}>Krysia Eurydyka</Text>
      <Image
        style={styles.imageIcon3}
        resizeMode="cover"
        source={require("../assets/image11.png")}
      />
      <View style={styles.groupView}>
        <Text style={styles.jarekkowalemailecomText}>
          jarek.kowal@emaile.com
        </Text>
        <Text style={styles.kmText2}>1,2km</Text>
        <Text style={styles.jarosawKowalskiText1}>jarosław kowalski</Text>
      </View>
      <Image
        style={styles.imageIcon4}
        resizeMode="cover"
        source={require("../assets/image12.png")}
      />
      <View style={styles.groupView1}>
        <Text style={styles.howIsKoronavirus}>How is koronavirus?</Text>
        <Text style={styles.kmText3}>1.2km</Text>
        <Text style={styles.krysiaEurydykaText1}>Krysia Eurydyka</Text>
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group1.png")}
      />
      <Text style={styles.willDoSuperThankYou}>Will do, super, thank you</Text>
      <Image
        style={styles.imageIcon5}
        resizeMode="cover"
        source={require("../assets/image5.png")}
      />
      <Text style={styles.kmText4}>1,1km</Text>
      <Text style={styles.odeuszPiotrowskiText}>Odeusz Piotrowski</Text>
      <View style={styles.groupView2}>
        <Text style={styles.uploadedFileText}>Uploaded file.</Text>
        <Image
          style={styles.imageIcon6}
          resizeMode="cover"
          source={require("../assets/image14.png")}
        />
        <Text style={styles.kmText5}>1km</Text>
        <Text style={styles.boenkaMalinaText}>Bożenka Malina</Text>
      </View>
      <Text style={styles.onlineNowText}>Online Now</Text>
      <Text style={styles.martinaWolnaText}>Martina Wolna</Text>
      <View style={styles.groupView3}>
        <View style={styles.rectangleView} />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={styles.homeIndicatorView1}>
        <View style={styles.containerView} />
        <View style={styles.homeIndicatorView} />
      </View>
      <Image
        style={styles.navBarIcon}
        resizeMode="cover"
        source={require("../assets/nav-bar2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  potemSieZobaczy: {
    position: "absolute",
    top: 838,
    left: 85,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  imageIcon: {
    position: "absolute",
    top: 806,
    left: 11,
    borderRadius: 30,
    width: 112,
    height: 44,
  },
  febText: {
    position: "absolute",
    top: 815,
    left: 296,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  marzenaKlasaText: {
    position: "absolute",
    top: 815,
    left: 85,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  noPracujemyZDomuPrzez5: {
    position: "absolute",
    top: 551,
    left: 91,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  imageIcon1: {
    position: "absolute",
    top: 509,
    left: 6,
    borderRadius: 30,
    width: 92,
    height: 92,
  },
  kmText: {
    position: "absolute",
    top: 528,
    left: 316,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  jarosawKowalskiText: {
    position: "absolute",
    top: 528,
    left: 91,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    height: "1.85%",
    width: "4%",
    top: "59.24%",
    right: "71.73%",
    bottom: "38.92%",
    left: "24.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  imageIcon2: {
    position: "absolute",
    top: 449,
    left: 12,
    borderRadius: 30,
    width: 112,
    height: 112,
  },
  kmText1: {
    position: "absolute",
    top: 458,
    left: 303,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  krysiaEurydykaText: {
    position: "absolute",
    top: 458,
    left: 91,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  imageIcon3: {
    position: "absolute",
    top: 366,
    left: 8,
    borderRadius: 30,
    width: 95,
    height: 95,
  },
  jarekkowalemailecomText: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  kmText2: {
    position: "absolute",
    top: 0,
    left: 217,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  jarosawKowalskiText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 388,
    left: 91,
    width: 262,
    height: 38,
  },
  imageIcon4: {
    position: "absolute",
    top: 308,
    left: 11,
    borderRadius: 30,
    width: 113,
    height: 113,
  },
  howIsKoronavirus: {
    position: "absolute",
    top: 23,
    left: 0,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  kmText3: {
    position: "absolute",
    top: 0,
    left: 216,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  krysiaEurydykaText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 318,
    left: 91,
    width: 262,
    height: 38,
  },
  vectorIcon: {
    position: "absolute",
    height: "1.85%",
    width: "4.46%",
    top: "33.37%",
    right: "21.67%",
    bottom: "64.78%",
    left: "73.87%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon1: {
    position: "absolute",
    height: "1.85%",
    width: "4%",
    top: "33.37%",
    right: "27.47%",
    bottom: "64.78%",
    left: "68.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  willDoSuperThankYou: {
    position: "absolute",
    top: 271,
    left: 91,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  imageIcon5: {
    position: "absolute",
    top: 229,
    left: 6,
    borderRadius: 30,
    width: 92,
    height: 92,
  },
  kmText4: {
    position: "absolute",
    top: 248,
    left: 303,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  odeuszPiotrowskiText: {
    position: "absolute",
    top: 248,
    left: 91,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  uploadedFileText: {
    position: "absolute",
    top: 23,
    left: 63,
    fontSize: 13,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  imageIcon6: {
    position: "absolute",
    top: -10,
    left: -14,
    borderRadius: 30,
    width: 115,
    height: 113,
  },
  kmText5: {
    position: "absolute",
    top: 0,
    left: 293,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "right",
  },
  boenkaMalinaText: {
    position: "absolute",
    top: 0,
    left: 63,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    top: 178,
    left: 28,
    width: 325,
    height: 45,
  },
  onlineNowText: {
    position: "absolute",
    top: 125,
    left: 36,
    fontSize: 20,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  martinaWolnaText: {
    position: "absolute",
    top: 61,
    left: 83,
    fontSize: 20,
    letterSpacing: 1,
    textTransform: "capitalize",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 22,
    backgroundColor: "#000",
    width: 45,
    height: 45,
  },
  vectorIcon1: {
    position: "absolute",
    top: 19,
    left: 7.52,
    width: 28,
    height: 7,
  },
  groupView3: {
    position: "absolute",
    top: 51,
    left: 25,
    width: 45,
    height: 45,
  },
  containerView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#071624",
    display: "none",
  },
  homeIndicatorView: {
    position: "absolute",
    height: "14.71%",
    width: "35.73%",
    top: "61.76%",
    right: "32.27%",
    bottom: "23.53%",
    left: "32%",
    borderRadius: 100,
    backgroundColor: "#292f3f",
  },
  homeIndicatorView1: {
    position: "absolute",
    height: "4.19%",
    width: "100%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f3f3f3",
  },
  navBarIcon: {
    position: "absolute",
    top: 730,
    left: 0,
    width: 375,
    height: 48,
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

export default Screen10;
