import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Screen7 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={styles.profileText}>Profile</Text>
      <Text style={styles.jenny22Text}>Jenny, 22</Text>
      <Text style={styles.accountSettingsText}>Account Settings</Text>
      <Text style={styles.discoverySettingsText}>Discovery Settings</Text>
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/arrowleft.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-13.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
      <View style={styles.rectangleView3} />
      <View style={styles.rectangleView4} />
      <View style={styles.rectangleView5} />
      <View style={styles.rectangleView6} />
      <View style={styles.rectangleView7} />
      <View style={styles.rectangleView8} />
      <View style={styles.rectangleView9} />
      <Text style={styles.nameText}>Name</Text>
      <Text style={styles.phoneNumberText}>Phone Number</Text>
      <Text style={styles.dateOfBirth}>Date of birth</Text>
      <Text style={styles.emailText}>Email</Text>
      <Text style={styles.locationText}>Location</Text>
      <Text style={styles.currentPlanText}>Current Plan</Text>
      <Text style={styles.preferredLanguagesText}>Preferred Languages</Text>
      <Text style={styles.maximumDistanceText}>Maximum Distance</Text>
      <Text style={styles.showMeText}>Show Me</Text>
      <Text style={styles.ageRangeText}>Age Range</Text>
      <Text style={styles.jennyText}>Jenny</Text>
      <Text style={styles.editText}>Edit</Text>
      <Text style={styles.text}>+91 9876543210</Text>
      <Text style={styles.text1}>02-05-1997</Text>
      <Text style={styles.abcqwertyugmailcomText}>abcqwertyu@gmail.com</Text>
      <Text style={styles.myCurrentLocation}>My Current Location</Text>
      <Text style={styles.freeText}>Free</Text>
      <Text style={styles.englishText}>English</Text>
      <Text style={styles.kmText}>100km.</Text>
      <Text style={styles.menText}>Men</Text>
      <Text style={styles.text2}>22 - 34</Text>
      <View style={styles.groupView}>
        <Text style={styles.text3}>22</Text>
        <Text style={styles.text4}>34</Text>
        <View style={styles.lineView} />
        <View style={styles.lineView1} />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
      </View>
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group-17.png")}
      />
      <Text style={styles.planSettingsText}>Plan Settings</Text>
      <View style={styles.lineView2} />
      <View style={styles.cONTINUEView}>
        <View style={styles.rectangleView10} />
        <Text style={styles.logoutText}>logout</Text>
      </View>
      <View style={styles.cONTINUEView1}>
        <View style={styles.rectangleView11} />
        <Text style={styles.deleteACCOUNTText}>Delete ACCOUNT</Text>
      </View>
      <Image
        style={styles.groupIcon2}
        resizeMode="cover"
        source={require("../assets/group-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 311,
  },
  profileText: {
    position: "absolute",
    top: 46,
    left: 159,
    fontSize: 20,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  jenny22Text: {
    position: "absolute",
    top: 240,
    left: 156,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  accountSettingsText: {
    position: "absolute",
    top: 336,
    left: 14,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  discoverySettingsText: {
    position: "absolute",
    top: 723,
    left: 14,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  arrowLeftIcon: {
    position: "absolute",
    top: 45,
    left: 14,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupIcon: {
    position: "absolute",
    top: 206,
    left: 229,
    width: 34,
    height: 34,
  },
  rectangleView: {
    position: "absolute",
    top: 371,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 44,
  },
  rectangleView1: {
    position: "absolute",
    top: 430,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 44,
  },
  rectangleView2: {
    position: "absolute",
    top: 489,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 44,
  },
  rectangleView3: {
    position: "absolute",
    top: 548,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 44,
  },
  rectangleView4: {
    position: "absolute",
    top: 758,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 44,
  },
  rectangleView5: {
    position: "absolute",
    top: 653,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 44,
  },
  rectangleView6: {
    position: "absolute",
    top: 817,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 44,
  },
  rectangleView7: {
    position: "absolute",
    top: 1039,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 76,
  },
  rectangleView8: {
    position: "absolute",
    top: 876,
    left: 14,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 44,
  },
  rectangleView9: {
    position: "absolute",
    top: 935,
    left: 13,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 350,
    height: 89,
  },
  nameText: {
    position: "absolute",
    top: 385,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  phoneNumberText: {
    position: "absolute",
    top: 444,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  dateOfBirth: {
    position: "absolute",
    top: 503,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  emailText: {
    position: "absolute",
    top: 562,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  locationText: {
    position: "absolute",
    top: 772,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  currentPlanText: {
    position: "absolute",
    top: 667,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  preferredLanguagesText: {
    position: "absolute",
    top: 831,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  maximumDistanceText: {
    position: "absolute",
    top: 1053,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  showMeText: {
    position: "absolute",
    top: 890,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  ageRangeText: {
    position: "absolute",
    top: 949,
    left: 27,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  jennyText: {
    position: "absolute",
    top: 385,
    left: 311,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8e8e8e",
    textAlign: "center",
  },
  editText: {
    position: "absolute",
    top: 339,
    left: 325,
    fontSize: 14,
    textDecoration: "underline",
    fontFamily: "Roboto",
    color: "#247dcf",
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 444,
    left: 243,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8e8e8e",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    top: 503,
    left: 278,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8e8e8e",
    textAlign: "center",
  },
  abcqwertyugmailcomText: {
    position: "absolute",
    top: 562,
    left: 197,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#8e8e8e",
    textAlign: "center",
  },
  myCurrentLocation: {
    position: "absolute",
    top: 772,
    left: 221,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#247dcf",
    textAlign: "center",
  },
  freeText: {
    position: "absolute",
    top: 667,
    left: 321,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#247dcf",
    textAlign: "center",
  },
  englishText: {
    position: "absolute",
    top: 831,
    left: 303,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#247dcf",
    textAlign: "center",
  },
  kmText: {
    position: "absolute",
    top: 1053,
    left: 302,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  menText: {
    position: "absolute",
    top: 890,
    left: 321,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#247dcf",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    top: 949,
    left: 305,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    top: 0,
    left: 78,
    fontSize: 12,
    letterSpacing: -0.3,
    fontFamily: "Roboto",
    color: "#686868",
    textAlign: "center",
  },
  text4: {
    position: "absolute",
    top: 0,
    left: 149,
    fontSize: 12,
    letterSpacing: -0.3,
    fontFamily: "Roboto",
    color: "#686868",
    textAlign: "center",
  },
  lineView: {
    position: "absolute",
    top: 23.75,
    left: -1.25,
    borderStyle: "solid",
    borderColor: "#cacaca",
    borderTopWidth: 2.5,
    width: 303.5,
    height: 2.5,
  },
  lineView1: {
    position: "absolute",
    top: 23.75,
    left: 86.75,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2.5,
    width: 73.5,
    height: 2.5,
  },
  ellipseIcon: {
    position: "absolute",
    top: 17,
    left: 79,
    width: 13,
    height: 13,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 17,
    left: 150,
    width: 13,
    height: 13,
  },
  groupView: {
    position: "absolute",
    top: 974,
    left: 37,
    width: 301,
    height: 30,
  },
  groupIcon1: {
    position: "absolute",
    top: 1084,
    left: 37,
    width: 301,
    height: 13,
  },
  planSettingsText: {
    position: "absolute",
    top: 618,
    left: 27,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  lineView2: {
    position: "absolute",
    top: 1142.5,
    left: 61.5,
    borderStyle: "solid",
    borderColor: "#d6d6d6",
    borderTopWidth: 1,
    width: 252,
    height: 1,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#fff",
    width: 301,
    height: 52,
  },
  logoutText: {
    position: "absolute",
    top: 17,
    left: 121,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  cONTINUEView: {
    position: "absolute",
    top: 1158,
    left: 36,
    width: 301,
    height: 52,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 30,
    backgroundColor: "#bd2f2f",
    width: 301,
    height: 52,
  },
  deleteACCOUNTText: {
    position: "absolute",
    top: 17,
    left: 87,
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  cONTINUEView1: {
    position: "absolute",
    top: 1219,
    left: 35,
    width: 301,
    height: 52,
  },
  groupIcon2: {
    position: "absolute",
    top: 87,
    left: 113,
    width: 150,
    height: 150,
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
    height: 1390,
    overflow: "hidden",
  },
});

export default Screen7;
