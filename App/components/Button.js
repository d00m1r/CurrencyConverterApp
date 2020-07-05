import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  button: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 20,
    //backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginHorizontal: 50,
    paddingBottom: 3,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
});

export const Button = ({ onButtonPress, text }) => {
  return (
    <TouchableOpacity onButtonPress={onButtonPress} style={styles.button}>
      <Image
        source={require("../assets/images/reverse.png")}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
