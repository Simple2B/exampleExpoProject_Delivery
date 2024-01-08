import { View, Text } from "react-native";
import React from "react";
import IconBtn from "@/components/common/IconBtn";
import { styles } from "../../details.style";
import { colors } from "@/constants/colors";
import { names } from "@/constants/icons";

interface IHeaderRight {
  handleOnPressShare: () => void;
  handleOnPressSearch: () => void;
}

const HeaderRight: React.FC<IHeaderRight> = ({
  handleOnPressShare,
  handleOnPressSearch,
}) => {
  return (
    <View style={styles.headerRightContainer}>
      <IconBtn
        onPress={handleOnPressShare}
        color={colors.lightSeaGreen}
        name={names.shareOutline}
        size={24}
        wrapperStyle={styles.headerLeft}
      />
      <IconBtn
        onPress={handleOnPressSearch}
        color={colors.lightSeaGreen}
        name={names.searchOutline}
        size={24}
        wrapperStyle={styles.headerLeft}
      />
    </View>
  );
};

export default HeaderRight;
