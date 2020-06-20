import React from "react";
import { SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

export default () => {
  return (
    <SafeAreaView>
      <RowItem
        Press={() => alert("to do!")}
        text="Themes"
        icon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        Press={() => alert("to do!")}
        text="Description"
        icon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
      />
      <RowSeparator />

      <RowItem
        Press={() => alert("to do!")}
        text="Samples"
        icon={<Entypo name="export" size={20} color={colors.blue} />}
      />
    </SafeAreaView>
  );
};
