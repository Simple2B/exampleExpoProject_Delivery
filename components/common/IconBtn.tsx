import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IIconBtn {
  onPress: () => void;
  color: string;
  //TODO: add type for name
  name: any;
  wrapperStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  size?: number;
}

const IconBtn: React.FC<IIconBtn> = ({
  onPress,
  color,
  name,
  wrapperStyle,
  iconStyle,
  size,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={wrapperStyle ?? styles.container}
    >
      <Ionicons
        name={name}
        size={size}
        color={color}
        style={iconStyle ?? styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {},
});

export default IconBtn;
