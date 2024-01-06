export enum ScreenName {
  index = 'index',
  // market = "market",
  welcome = 'welcome',
  filter = '(modal)/filter',
  locationSearch = '(modal)/location-search',
  dish = '(modal)/dish',
  forgotPassword = 'forgot-password',
  registration = 'registration',
}

export type RootStackParamList = {
  [ScreenName.index]: undefined;
  // [ScreenName.market]: undefined;
  [ScreenName.welcome]: undefined;
  [ScreenName.filter]: undefined;
  [ScreenName.locationSearch]: undefined;
  [ScreenName.dish]: {id: string};
  [ScreenName.forgotPassword]: undefined;
  [ScreenName.registration]: undefined;
};

export type MergedParamList = RootStackParamList;

// paths for links
export enum PathNames {
  details = '/details/details',
  filter = '/(modal)/filter',
  locationSearch = '/(modal)/location-search',
  dish = '/(modal)/dish',
  forgotPassword = '/forgot-password',
  registration = '/registration',
}
