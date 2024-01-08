import { ScrollView, TouchableOpacity } from "react-native";
import { SharedValue, withTiming } from "react-native-reanimated";

export const offsetScrolling = (
  index: number,
  itemsRef: React.MutableRefObject<TouchableOpacity[]>,
  scrollRef: React.RefObject<ScrollView>
) => {
  const selected = itemsRef.current[index];
  selected.measure((x) => {
    scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
  });
};

export const changeOpacity = (event: any, opacity: SharedValue<number>) => {
  const y = event.nativeEvent.contentOffset.y;
  if (y > 150) {
    opacity.value = withTiming(1);
  } else {
    opacity.value = withTiming(0);
  }
};
