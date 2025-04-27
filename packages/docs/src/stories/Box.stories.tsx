import { Box, BoxProps } from '@thiagoleite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
