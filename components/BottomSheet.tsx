import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { colors } from "@/constants/colors";
import fonts from "@/assets/fonts";

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
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.container}>
        <Text>Bottom Sheet</Text>

        <TouchableOpacity onPress={() => dismiss()} style={styles.containerBtn}>
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {},
  containerBtn: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.title,
    textAlign: "center",
  },
});

export default BottomSheet;
