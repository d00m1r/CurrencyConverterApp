import React, { useState, useEffect } from "react";
import { View, Keyboard, Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export const KeyboardSpacer = ({ onToggle }) => {
  const [keyboardSpace, setKeyboardSpace] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", (event) => {
      console.log(event);
      const screenHeight = Dimensions.get("window").height;
      const endY = event.endCoordinates.screenY;

      setKeyboardSpace(screenHeight - endY + 20);
      onToggle(true);
    });
    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardSpace(false);
      onToggle(false);
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []); //[] run useEffect fun only when app 1 loops

  return <View style={[styles.container, { height: keyboardSpace }]} />;
};
