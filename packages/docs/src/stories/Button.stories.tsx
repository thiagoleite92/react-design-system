import { Button, ButtonProps } from '@thiagoleite-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const PrimaryDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    variant: 'secondary',
    children: 'Create New',
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
};

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    variant: 'tertiary',
    children: 'Cancel',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};
