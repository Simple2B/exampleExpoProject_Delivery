import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import images from "@/assets/images";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import SearchBar from "./SearchBar";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

interface ICustomHeader {}

const CustomHeader: React.FC<ICustomHeader> = () => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const openBottomSheet = () => {
    bottomSheetModalRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetModalRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openBottomSheet}>
          <Image source={images.delivery} style={styles.imagesDelivery} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openBottomSheet}
          style={styles.titleContainer}
        >
          <Text style={styles.title}>Delivery now</Text>
          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>New York, USA</Text>
            <Ionicons name="chevron-down" size={20} color={colors.secondary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.profileBtn}>
          <Ionicons name="person-outline" size={20} color={colors.lightGray} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    height: 60,
    backgroundColor: colors.lightGray,
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imagesDelivery: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.secondary,
  },
  profileBtn: {
    backgroundColor: colors.lightCoral,
    padding: 10,
    borderRadius: 50,
  },
  containerSubtitle: { flexDirection: "row", alignItems: "center", gap: 8 },
  subtitle: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.darkgray,
  },
});

export default CustomHeader;
