import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";
import { colors } from "../utils";
const UnitsPicker = ({ unitSystem, setUnitSystem }) => {
  return (
    <View style={styles.unitsystem}>
      <Picker
        placeholder="Select Temperature"
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
        mode="dropdown"
        style={{ color: colors.PRIMARY_COLOR }}
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item value="metric" label="C°" />
        <Picker.Item value="imperial" label="F°" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  unitsystem: {
    height: 50,
    width: 100,
  },
});

export default UnitsPicker;
