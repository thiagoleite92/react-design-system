import { Box, BoxProps, Text } from '@thiagoleite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento Box</Text>,
  },
  tags: ['autodocs'],
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
