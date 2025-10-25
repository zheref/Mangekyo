import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { ButtonV2 } from './ButtonV2';
import {
  DesignLanguageProvider,
  useDesignLanguage,
} from '../../themes/DesignLanguageContext';

const meta = {
  title: 'Components/Button',
  component: ButtonV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    designLanguage: {
      control: 'select',
      options: ['material', 'cupertino', 'metro', undefined],
      description: 'Override global design language',
    },
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="material">
        <Story />
      </DesignLanguageProvider>
    ),
  ],
} satisfies Meta<typeof ButtonV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <ButtonV2 title="Primary" variant="primary" />
      <ButtonV2 title="Secondary" variant="secondary" />
      <ButtonV2 title="Outline" variant="outline" />
      <ButtonV2 title="Ghost" variant="ghost" />
    </View>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <ButtonV2 title="Small Button" size="small" />
      <ButtonV2 title="Medium Button" size="medium" />
      <ButtonV2 title="Large Button" size="large" />
    </View>
  ),
};

export const DesignLanguageComparison: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <View>
        <ButtonV2 title="Material Design" designLanguage="material" />
      </View>
      <View>
        <ButtonV2 title="Cupertino (iOS)" designLanguage="cupertino" />
      </View>
      <View>
        <ButtonV2 title="Metro (Windows)" designLanguage="metro" />
      </View>
    </View>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Compare how the same button looks across different design languages.',
      },
    },
  },
};

export const InteractiveDesignLanguageSwitcher: Story = {
  render: () => {
    const DesignLanguageSwitcherDemo = () => {
      const { designLanguage, setDesignLanguage } = useDesignLanguage();

      return (
        <View style={{ gap: 16 }}>
          <View style={{ gap: 8 }}>
            <ButtonV2
              title="Material Design"
              onPress={() => setDesignLanguage('material')}
              variant={designLanguage === 'material' ? 'primary' : 'outline'}
            />
            <ButtonV2
              title="Cupertino (iOS)"
              onPress={() => setDesignLanguage('cupertino')}
              variant={designLanguage === 'cupertino' ? 'primary' : 'outline'}
            />
            <ButtonV2
              title="Metro (Windows)"
              onPress={() => setDesignLanguage('metro')}
              variant={designLanguage === 'metro' ? 'primary' : 'outline'}
            />
          </View>

          <View style={{ marginTop: 20, gap: 8 }}>
            <ButtonV2 title="Primary Button" variant="primary" />
            <ButtonV2 title="Secondary Button" variant="secondary" />
            <ButtonV2 title="Outline Button" variant="outline" />
          </View>
        </View>
      );
    };

    return <DesignLanguageSwitcherDemo />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo showing how buttons adapt when switching design languages.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Button',
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    title: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};
