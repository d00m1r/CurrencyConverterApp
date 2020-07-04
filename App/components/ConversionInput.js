import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 30,
    borderRadius: 7,
    flexDirection: "row",
  },
  button: {
    padding: 15,
    borderColor: colors.border,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 15,
    color: colors.blue,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
