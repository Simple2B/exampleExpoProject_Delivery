import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { forwardRef, useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { colors } from "@/constants/colors";
import fonts from "@/assets/fonts";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { PathNames } from "@/constants/screens/screens";

export type Ref = BottomSheetModal | null;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = React.useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      backgroundStyle={styles.bottomSheetModalContainer}
      handleIndicatorStyle={{ display: "none" }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.toggleActiveText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.toggleInactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subheader}>Your location</Text>
        <Link href={PathNames.locationSearch} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                color={colors.darkgray}
              />
              <Text style={styles.itemText}>Current location</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.secondary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subheader}>Arrival time</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={colors.darkgray}
            />
            <Text style={styles.itemText}>Now</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.secondary}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => dismiss()} style={styles.containerBtn}>
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  bottomSheetModalContainer: { backgroundColor: colors.lightGray },
  contentContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 0,
    marginBottom: 10,
  },
  toggleActive: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  toggleActiveText: {
    color: colors.white,
    fontFamily: fonts.title,
    fontSize: 16,
  },

  toggleInactive: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 2,
    borderRadius: 25,
  },
  toggleInactiveText: {
    color: colors.secondary,
    fontFamily: fonts.title,
    fontSize: 16,
  },
  containerBtn: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    marginBottom: Platform.OS === "android" ? 15 : 40,
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.title,
    fontSize: 16,
    textAlign: "center",
  },

  // subheader
  subheader: {
    fontFamily: fonts.title,
    color: colors.darkgray,
    fontSize: 18,
    fontWeight: "500",
    margin: 16,
  },

  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 0.3,
    borderColor: colors.secondary,
  },
  itemText: {
    flex: 1,
  },
});

export default BottomSheet;
