import { Heading, HeadingProps } from '@thiagoleite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typograph/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom Heading',
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
};
