import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { EffectCallback, useEffect, useRef, useState } from "react";
import MapView, {

  Region,
} from "react-native-maps";
import * as Location from "expo-location";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { colors } from "@/constants/colors";
import fonts from "@/assets/fonts";
import { Ionicons } from "@expo/vector-icons";

const useMount = (callback: EffectCallback) => {
  React.useEffect(callback, []);
};

const EXPO_PUBLIC_GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const LocationSearch = () => {
  const [mapRegion, setMapRegion] = useState<Region | null>(null);
  const mapRef = useRef<MapView>(null);

  // set current location
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      // enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(
      "Location",
      location.coords.latitude,
      location.coords.longitude
    );
  };
  useEffect(() => {
    userLocation();
  }, []);

  // Google Places Autocomplete functions
  const LeftButton = () => {
    return (
      <Ionicons
        name="search-outline"
        size={24}
        color={colors.secondary}
        style={styles.searchOutline}
      />
    );
  };

  const googlePlacesAutocompleteStyles = {
    container: {
      flex: 0,
    },
    textInput: {
      backgroundColor: colors.white,
      borderRadius: 10,
      margin: 10,
      marginHorizontal: 5,
      color: "#000",
      borderWidth: 0.3,
      borderColor: colors.secondary,
      paddingLeft: 40,
      fontSize: 18,
    },
  };

  const GooglePlacesAutocompleteHandlePress = (
    data: any,
    details: GooglePlaceDetail | null = null
  ) => {
    const point = details?.geometry.location;
    if (!point) return;
    setMapRegion({
      latitude: point.lat,
      longitude: point.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const googlePlacesAutocompleteQuery = {
    key: EXPO_PUBLIC_GOOGLE_API_KEY,
    language: "en",
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search or move the map"
        fetchDetails={true}
        onPress={GooglePlacesAutocompleteHandlePress}
        query={googlePlacesAutocompleteQuery}
        renderLeftButton={LeftButton}
        styles={googlePlacesAutocompleteStyles}
      />
      {mapRegion && (
        <MapView
          style={styles.map}
          region={mapRegion}
          showsUserLocation={true}
          ref={mapRef}
        />
      )}
      <TouchableOpacity style={styles.boxBtn}>
        <Text style={styles.boxBtnText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  map: {
    flex: 1,
  },
  boxBtn: {
    alignSelf: "stretch",
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    paddingVertical: 4,
    marginHorizontal: 30,
    borderRadius: 6,
  },
  boxBtnText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: fonts.text,
  },

  // search outline
  searchOutline: {
    position: "absolute",
    top: 18,
    left: 15,
    zIndex: 1,
  },
});
