export enum ScreenName {
  index = "index",
  filter = "(modal)/filter",
  locationSearch = "(modal)/location-search",
  dish = "(modal)/dish",
}

export type RootStackParamList = {
  [ScreenName.index]: undefined;
  [ScreenName.filter]: undefined;
  [ScreenName.locationSearch]: undefined;
  [ScreenName.dish]: undefined;
};

export type MergedParamList = RootStackParamList;
