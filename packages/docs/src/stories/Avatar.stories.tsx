import { Avatar, AvatarProps } from '@thiagoleite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/thiagoleite92.png',
    alt: 'Thiago Leite',
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
