import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
//import Options from "Options";
import colors from "../constants/colors";
import ConversionInput from "../components/ConversionInput";
import format from "date-fns";
import Button from "../components/Button";
import KeyboardSpacer from "../components/KeyboardSpacer";

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
    height: screen.height * 0.35,
  },
  textHeader: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
});

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.8345;
  const date = new Date();

  const [scrollEnabledOrNot, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabledOrNot}>
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

        <Text style={styles.textHeader}>Currency Converter</Text>
        <ConversionInput
          text={baseCurrency}
          value="123"
          onButtonPress={() => alert("to do!")}
          editable={false}
        />

        <ConversionInput
          text={quoteCurrency}
          value="123"
          onButtonPress={() => alert("to!")}
          onChangeText={(text) => console.log("text", text)}
          keyboardType="numeric"
        />
        <Text style={styles.text}>
          {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date,
            "MMM do, yyyy"
          )}`}
        </Text>

        <Button
          text="Reverse Currencies"
          onButtonPress={() => alert("to do!")}
        />
        <KeyboardSpacer
          onToggle={(keyboardIsVisisble) =>
            setScrollEnabled(keyboardIsVisisble)
          }
        />
      </ScrollView>
    </View>
  );
};
