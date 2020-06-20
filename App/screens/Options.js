import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong.", "Please try again later.");
  });
};

export default () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <RowItem
          Press={() => openUrl("https://www.google.ru/")}
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
    </ScrollView>
  );
};
