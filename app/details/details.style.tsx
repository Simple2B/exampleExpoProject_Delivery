import fonts from "@/assets/fonts";
import { colors } from "@/constants/colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
