import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  SectionList,
  ListRenderItem,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { colors } from "@/constants/colors";
import { restaurant } from "@/assets/data/restaurants";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import fonts from "@/assets/fonts";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { PathNames } from "@/constants/screens/screens";

interface IDetails {}

const Details: React.FC<IDetails> = () => {
  const navigation = useNavigation();
  const sectionListData = restaurant.food.map((food) => ({
    title: food.category,
    data: food.meals,
  }));

  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<TouchableOpacity[]>([]);

  const [activeSegment, setActiveSegment] = useState(0);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveSegment(index);
    selected.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
  };

  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: colors.white,
      headerLeft: () => {
        return (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerLeft}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={colors.lightSeaGreen}
            />
          </TouchableOpacity>
        );
      },
      headerRight: () => {
        return (
          <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.headerLeft}>
              <Ionicons
                name="share-outline"
                size={24}
                color={colors.lightSeaGreen}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.headerLeft}>
              <Ionicons
                name="search-outline"
                size={24}
                color={colors.lightSeaGreen}
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, []);

  const onScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    if (y > 150) {
      opacity.value = withTiming(1);
    } else {
      opacity.value = withTiming(0);
    }
  };

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <Link
        href={{
          pathname: PathNames.dish,
          params: { id: item.id },
        }}
        asChild
      >
        <TouchableOpacity key={index} style={styles.item}>
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

  return (
    <>
      <ParallaxScrollView
        scrollEvent={onScroll}
        backgroundColor={colors.lightGray}
        style={styles.parallaxScrollView}
        parallaxHeaderHeight={300}
        stickyHeaderHeight={120}
        contentBackgroundColor={colors.lightGray}
        renderBackground={() => (
          <Image source={restaurant.img} style={styles.backgroundImage} />
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <View style={styles.detailsContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDelivery}>
            {restaurant.delivery} •
            {restaurant.tags.map(
              (tag, index) =>
                ` ${tag} ${index < restaurant.tags.length - 1 ? " • " : " "}`
            )}
          </Text>
          <Text style={styles.restaurantDescription}>{restaurant.about}</Text>
          <SectionList
            scrollEnabled={false}
            keyExtractor={(item) => `${item.id}`}
            sections={sectionListData}
            renderSectionHeader={({ section: { title } }) => {
              return <Text style={styles.sectionHeader}>{title}</Text>;
            }}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainerStyle}
            ItemSeparatorComponent={() => {
              return <View style={styles.itemSeparator} />;
            }}
            SectionSeparatorComponent={() => {
              return <View style={styles.sectionSeparator} />;
            }}
          />
        </View>
      </ParallaxScrollView>
      <Animated.View style={[styles.stickySegments, animatedStyles]}>
        <View style={styles.segmentsShadow}>
          <ScrollView
            contentContainerStyle={styles.scrollViewSegments}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
          >
            {sectionListData.map((section, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={
                    activeSegment === index
                      ? styles.activeSegment
                      : styles.segment
                  }
                  onPress={() => selectCategory(index)}
                  ref={(ref) => (itemsRef.current[index] = ref!)}
                >
                  <Text
                    style={
                      activeSegment === index
                        ? styles.activeSegmentText
                        : styles.segmentText
                    }
                  >
                    {section.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Animated.View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  parallaxScrollView: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    backgroundColor: colors.lightGray,
  },
  restaurantName: {
    fontFamily: fonts.title,
    fontSize: 25,
    fontWeight: "600",
    color: colors.black,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  restaurantDescription: {
    fontFamily: fonts.text,
    fontSize: 16,
    fontWeight: "400",
    color: colors.gray,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  contentContainerStyle: {
    paddingBottom: 50,
  },
  itemSeparator: {
    height: 2,
    backgroundColor: colors.lightGray,
    marginHorizontal: 16,
  },
  sectionSeparator: {
    height: 2,
    backgroundColor: colors.lightGray,
  },
  restaurantDelivery: {
    fontFamily: fonts.text,
    fontSize: 16,
    fontWeight: "600",
    color: colors.lightSeaGreen,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionHeader: {
    fontFamily: fonts.title,
    fontSize: 22,
    fontWeight: "600",
    margin: 10,
    marginTop: 20,
  },
  stickySection: {
    marginLeft: 70,
    height: Platform.OS === "ios" ? 100 : 75,
    justifyContent: "flex-end",
  },
  stickySectionText: {
    fontFamily: fonts.text,
    fontSize: 18,
    fontWeight: "600",
    margin: 10,
  },
  headerLeft: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: colors.white,
  },
  dish: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: fonts.text,
    color: colors.lightSeaGreen,
  },
  dishText: {
    fontSize: 15,
    fontWeight: "400",
    fontFamily: fonts.text,
    paddingVertical: 4,
  },
  imageItem: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  stickySegments: {
    position: "absolute",
    height: 50,
    left: 0,
    right: 0,
    top: Platform.OS === "ios" ? 100 : 80,
    backgroundColor: colors.lightGray,
    overflow: "hidden",
  },
  segmentsShadow: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: colors.lightGray,
    shadowColor: colors.black,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
  },
  scrollViewSegments: {
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 10,
  },
  activeSegment: {
    backgroundColor: colors.lightSeaGreen,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  segment: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  activeSegmentText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: fonts.text,
  },
  segmentText: {
    color: colors.lightSeaGreen,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: fonts.text,
  },
});
