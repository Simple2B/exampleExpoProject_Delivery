import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { PathNames } from "@/constants/screens/screens";
import { styles } from "../details.style";

interface IRenderItem {
  // TODO: add types
  item: any;
  index: number;
}

const RenderItem: React.FC<IRenderItem> = ({ item, index }) => {
  return (
    <Link
      href={{
        pathname: PathNames.dish,
        params: { id: item.id },
      }}
      asChild
      key={index}
    >
      <TouchableOpacity style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text style={styles.dish}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishText}>${item.price}</Text>
        </View>
        <Image source={item.img} style={styles.imageItem} />
      </TouchableOpacity>
    </Link>
  );
};

export default RenderItem;
