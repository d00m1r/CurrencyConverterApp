import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem } from "../components/RowItem";

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
export default () => {
  return (
    <SafeAreaView>
      <RowItem
        Press={() => alert("to do!")}
        text="Themes"
        icon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
      />

      <View style={styles.separator} />

      <RowItem
        Press={() => alert("to do!")}
        text="Description"
        icon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
      />
      <View style={styles.separator} />

      <RowItem
        Press={() => alert("to do!")}
        text="Samples"
        icon={<Entypo name="export" size={20} color={colors.blue} />}
      />
    </SafeAreaView>
  );
};
