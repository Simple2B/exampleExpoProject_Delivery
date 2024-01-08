/* Libraries */
import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

/* Local files */
import RenderItem from './RenderItem';
import { View } from 'react-native';
import { colors } from '@/constants/colors';

export default {
  title: 'DetailsScreen/ProductCard',
  decorators: [
    (Story): JSX.Element => <Story />,
  ],
} as Meta<typeof RenderItem>;

export const HeaderRightComponent: StoryFn<typeof RenderItem> = ({
  item,
  index,
}) => <View style={{flex: 1, justifyContent: 'center', backgroundColor: colors.lightGray}}><RenderItem item={item} index={index}/></View>;

HeaderRightComponent.args = {
  item: {
    name: "Chocolate Cake", 
    info: 'Chocolate cake with chocolate icing', 
    price: 45, 
    img: require("../../../../assets/images/restaurants/cakes/chocolate_cake.png")
  },
  index: 0,
};
HeaderRightComponent.storyName = 'RenderItem';

