import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <Text style={styles.fullNameText}>Full Name</Text>
          <Text style={styles.rahulRoyText}>Rahul Roy</Text>
        </View>
        <View style={[styles.lineView, styles.mt15]} />
        <View style={[styles.groupView1, styles.mt15]}>
          <Text style={styles.emailText}>Email</Text>
          <Text style={styles.rahul1988gmailcomText}>rahul1988@gmail.com</Text>
        </View>
        <View style={[styles.lineView1, styles.mt15]} />
        <View style={[styles.groupView4, styles.mt15]}>
          <View style={styles.groupView2}>
            <Text style={styles.prositiveRatingsText}>Prositive Ratings</Text>
            <Text style={styles.text}>21</Text>
          </View>
          <View style={styles.groupView3}>
            <Text style={styles.reputationText}>Reputation</Text>
            <Text style={styles.text1}>11</Text>
          </View>
        </View>
        <View style={[styles.lineView2, styles.mt15]} />
        <View style={[styles.groupView5, styles.mt15]}>
          <Text style={styles.socialURLText}>Social URL</Text>
          <Text style={styles.facebookcomrahulText}>
            Facebook.com/rahul****
          </Text>
        </View>
        <View style={[styles.lineView3, styles.mt15]} />
      </View>
      <Text style={styles.discoverText}>Profile</Text>
      <Text style={styles.rahulText}>Rahul</Text>
      <Text style={styles.delhiNCRText}>Delhi NCR</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-10.png")}
      />
      <Image
        style={styles.iconaddphoto}
        resizeMode="cover"
        source={require("../assets/iconaddphoto.png")}
      />
      <Text style={styles.aboutText}>About</Text>
      <View style={styles.rectangleView} />
      <View style={styles.homeIndicatorView1}>
        <View style={styles.containerView} />
        <View style={styles.homeIndicatorView} />
      </View>
      <Image
        style={styles.navBarIcon}
        resizeMode="cover"
        source={require("../assets/nav-bar1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt15: {
    marginTop: 15,
  },
  fullNameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#898989",
    textAlign: "left",
  },
  rahulRoyText: {
    position: "absolute",
    top: 26,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "left",
  },
  groupView: {
    position: "relative",
    width: 65,
    height: 46,
    flexShrink: 0,
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "rgba(153, 153, 153, 0.3)",
    borderTopWidth: 0.5,
    width: 322.5,
    height: 0.5,
    flexShrink: 0,
  },
  emailText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#898989",
    textAlign: "left",
  },
  rahul1988gmailcomText: {
    position: "absolute",
    top: 26,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
    position: "relative",
    width: 144,
    height: 46,
    flexShrink: 0,
  },
  lineView1: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "rgba(153, 153, 153, 0.3)",
    borderTopWidth: 0.5,
    width: 322.5,
    height: 0.5,
    flexShrink: 0,
  },
  prositiveRatingsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#898989",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 26,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 106,
    height: 46,
  },
  reputationText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#898989",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 26,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "left",
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 135,
    width: 69,
    height: 46,
  },
  groupView4: {
    position: "relative",
    width: 204,
    height: 46,
    flexShrink: 0,
  },
  lineView2: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "rgba(153, 153, 153, 0.3)",
    borderTopWidth: 0.5,
    width: 322.5,
    height: 0.5,
    flexShrink: 0,
  },
  socialURLText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#898989",
    textAlign: "left",
  },
  facebookcomrahulText: {
    position: "absolute",
    top: 26,
    left: 0,
    fontSize: 14,
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "left",
  },
  groupView5: {
    position: "relative",
    width: 149,
    height: 46,
    flexShrink: 0,
  },
  lineView3: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "rgba(153, 153, 153, 0.3)",
    borderTopWidth: 0.5,
    width: 322.5,
    height: 0.5,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 450,
    left: 24,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  discoverText: {
    position: "absolute",
    top: 37,
    left: 21,
    fontSize: 36,
    fontWeight: "800",
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "left",
  },
  rahulText: {
    position: "absolute",
    top: 291,
    left: 161,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Nunito",
    color: "#fff",
    textAlign: "center",
  },
  delhiNCRText: {
    position: "absolute",
    top: 325,
    left: 150,
    fontSize: 16,
    fontFamily: "Nunito",
    color: "#898989",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    top: 119,
    left: 105,
    width: 150,
    height: 150,
  },
  iconaddphoto: {
    position: "absolute",
    top: 233,
    left: 208,
    width: 36,
    height: 36,
  },
  aboutText: {
    position: "absolute",
    transform: [
      {
        translateY: -5,
      },
    ],
    width: "15.73%",
    top: "50%",
    right: "77.87%",
    left: "6.4%",
    fontSize: 21,
    letterSpacing: -0.11,
    fontWeight: "500",
    fontFamily: "Nunito",
    color: "#f2f2f2",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    transform: [
      {
        translateY: -32,
      },
      {
        translateX: -187.5,
      },
    ],
    top: "50%",
    left: "50%",
    backgroundColor: "#fff",
    width: 375,
    height: 4,
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

export default Screen1;
