import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
  ScrollView,
} from "react-native";
import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { colors } from "@/constants/colors";
import { restaurant } from "@/assets/data/restaurants";
import Animated from "react-native-reanimated";
import { styles } from "./details.style";
import useDetailsHooks from "./details.hooks";

interface IDetails {}

const Details: React.FC<IDetails> = () => {
  const {
    scrollRef,
    itemsRef,
    onScroll,
    sectionListData,
    renderItem,
    animatedStyles,
    activeSegment,
    selectCategory,
  } = useDetailsHooks();

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

