import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

const WeatherInfo = ({ weather }) => {
  const {
    main: { temp },
    weather: [details],
    name,
  } = weather;

  const { icon, description, main } = details;
  const iconUri = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.whiteColor}>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUri }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={{ ...styles.weatherDescription, ...styles.whiteColor }}>
        {description}
      </Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },

  weatherIcon: {
    width: 100,
    height: 100,
  },

  weatherDescription: {
    textTransform: "capitalize",
  },

  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },

  textSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: "500",
    marginTop: 10,
  },
  whiteColor: {
    color: colors.WHITE_COLOR,
  },
});

export default WeatherInfo;
