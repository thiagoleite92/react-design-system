import { Box, Text, TextInput, TextInputProps } from '@thiagoleite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Username:</Text>
          {Story()}
        </Box>
      );
    },
  ],
  tags: ['autodocs'],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
};
