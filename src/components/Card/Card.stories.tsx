import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <View>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
      Card Title
    </Text>
    <Text style={{ fontSize: 14, color: '#666' }}>
      This is a sample card component with some content inside. Cards are great
      for organizing information in a visually appealing way.
    </Text>
  </View>
);

export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
};

export const NoElevation: Story = {
  args: {
    children: <SampleContent />,
    elevation: 'none',
  },
};

export const SmallElevation: Story = {
  args: {
    children: <SampleContent />,
    elevation: 'sm',
  },
};

export const LargeElevation: Story = {
  args: {
    children: <SampleContent />,
    elevation: 'lg',
  },
};

export const SmallPadding: Story = {
  args: {
    children: <SampleContent />,
    padding: 'sm',
  },
};

export const LargePadding: Story = {
  args: {
    children: <SampleContent />,
    padding: 'lg',
  },
};

export const NoPadding: Story = {
  args: {
    children: <SampleContent />,
    padding: 'none',
  },
};
