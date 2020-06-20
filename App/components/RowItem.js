import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    marginRight: 20,
  },
});

export const RowItem = ({ icon, text, Press }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={Press}>
      <Text style={styles.text}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => {
  return <View style={styles.separator} />;
};
