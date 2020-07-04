import React from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions } from "react-native";
//import Options from "Options";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "flex-start",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.height * 0.25,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert("to!")}
        onChangeText={text => console.log("text", text)}
        keyboardType="numeric"
      />

      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("to do!")}
        keyboardType="numeric"
      />
    </View>
  );
};
