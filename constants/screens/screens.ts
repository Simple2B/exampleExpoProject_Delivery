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
  [ScreenName.dish]: { id: string };
};

export type MergedParamList = RootStackParamList;

// paths for links
export enum PathNames {
  details = "/details/details",
  filter = "/(modal)/filter",
  locationSearch = "/(modal)/location-search",
  dish = "/(modal)/dish",
}
