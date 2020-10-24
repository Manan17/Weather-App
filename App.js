import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import { colors } from "./utils/index";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";
const API_KEY = "358a0d13e14d2c7719e35392903846fa";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`;

export default function App() {
  const [errorMssg, setErrorMssg] = useState(null);
  const [weather, setWeather] = useState(null);
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    load();
  }, [unitSystem]);

  async function load() {
    setWeather(null);
    setErrorMssg(null);
    try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMssg("Access to location is needed for this app to run");
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      const url = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${API_KEY}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.ok) {
        setWeather(result);
      } else {
        setErrorMssg(result.message);
      }
    } catch (error) {
      setErrorMssg(error.message);
    }
  }

  if (weather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <ReloadIcon load={load} />
        </View>
        <View style={styles.main}>
          <WeatherInfo weather={weather} />
        </View>
        <WeatherDetails weather={weather} unitSystem={unitSystem} />
      </View>
    );
  } else if (errorMssg) {
    return (
      <View style={styles.container}>
        <ReloadIcon />
        <Text>{errorMssg}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030302",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 50,
      },
    }),
    left: 20,
    width: "87%",
  },

  main: {
    justifyContent: "center",
    flex: 1,
  },
});
