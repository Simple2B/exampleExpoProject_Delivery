/* Libraries */
import React from 'react';
import {View} from 'react-native';
// import {action} from '@storybook/addon-actions';
// import {text} from '@storybook/addon-knobs';
import {Meta, StoryFn} from '@storybook/react';

/* Local files */
import HeaderRight from './HeaderRight';
import { colors } from '@/constants/colors';
// import CenterView from '../../decorators/CenterView/CenterView';

export default {
  title: 'DetailsScreen/HeaderIcons',
  component: HeaderRight,
  decorators: [
    (Story): JSX.Element => <Story />,
  ],
} as Meta<typeof HeaderRight>;

export const WithAction: StoryFn<typeof HeaderRight> = ({
  handleOnPressShare,
  handleOnPressSearch,
}) => (
  <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor: colors.gray}}>
    <View style={{alignSelf: 'flex-end', padding: 20}}>
      <HeaderRight handleOnPressShare={handleOnPressShare} handleOnPressSearch={handleOnPressSearch}/>
    </View>
  </View>
);

WithAction.args = {
  handleOnPressShare: () => {},
  handleOnPressSearch: () => {},
};
WithAction.storyName = 'HeaderRight';
