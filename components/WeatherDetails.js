import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../utils";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const WeatherDetails = ({ weather, unitSystem }) => {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = weather;

  const windSpeed =
    unitSystem === "metric" ? `${speed} m/s` : `${speed} miles/hr`;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderColor: colors.BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text style={styles.whiteColor}>Feels Like :</Text>
              <Text style={styles.textSecondary}>{feels_like}°</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text style={styles.whiteColor}>Humidity</Text>
              <Text style={styles.textSecondary}>{humidity}%</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopColor: colors.BORDER_COLOR,
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderColor: colors.BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={25}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text style={styles.whiteColor}>Wind Speed :</Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={colors.PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text style={styles.whiteColor}>Pressure :</Text>
              <Text style={styles.textSecondary}>{pressure}%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderColor: colors.BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  textSecondary: {
    fontSize: 15,
    color: colors.SECONDARY_COLOR,
    marginTop: 10,
    fontWeight: "700",
  },

  whiteColor: {
    color: colors.WHITE_COLOR,
  },
});

export default WeatherDetails;
