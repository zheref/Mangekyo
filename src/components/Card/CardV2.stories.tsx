import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text } from 'react-native';
import { CardV2 } from './CardV2';
import { ButtonV2 } from '../Button/ButtonV2';
import { InputV2 } from '../Input/InputV2';
import { DesignLanguageProvider, useDesignLanguage } from '../../themes/DesignLanguageContext';

const meta = {
  title: 'Components V2/Card',
  component: CardV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
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
} satisfies Meta<typeof CardV2>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = ({ designLanguage }: { designLanguage?: string }) => {
  const { theme } = useDesignLanguage();

  return (
    <View>
      <Text
        style={{
          fontSize: theme.semantic.typography.heading.h5.fontSize,
          fontWeight: theme.semantic.typography.heading.h5.fontWeight,
          color: theme.semantic.colors.text.primary,
          marginBottom: 8,
        }}
      >
        Card Title {designLanguage && `(${designLanguage})`}
      </Text>
      <Text
        style={{
          fontSize: theme.semantic.typography.body.medium.fontSize,
          color: theme.semantic.colors.text.secondary,
        }}
      >
        This is a sample card component with some content inside. Cards are great
        for organizing information in a visually appealing way.
      </Text>
    </View>
  );
};

export const Default: Story = {
  args: {
    children: <SampleContent />,
  },
};

export const AllElevations: Story = {
  render: () => (
    <View style={{ gap: 20, width: 300 }}>
      <CardV2 elevation="none">
        <SampleContent designLanguage="None" />
      </CardV2>
      <CardV2 elevation="small">
        <SampleContent designLanguage="Small" />
      </CardV2>
      <CardV2 elevation="medium">
        <SampleContent designLanguage="Medium" />
      </CardV2>
      <CardV2 elevation="large">
        <SampleContent designLanguage="Large" />
      </CardV2>
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllPaddings: Story = {
  render: () => (
    <View style={{ gap: 20, width: 300 }}>
      <CardV2 padding="none">
        <View style={{ padding: 8 }}>
          <SampleContent designLanguage="None" />
        </View>
      </CardV2>
      <CardV2 padding="small">
        <SampleContent designLanguage="Small" />
      </CardV2>
      <CardV2 padding="medium">
        <SampleContent designLanguage="Medium" />
      </CardV2>
      <CardV2 padding="large">
        <SampleContent designLanguage="Large" />
      </CardV2>
    </View>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const DesignLanguageComparison: Story = {
  render: () => (
    <View style={{ gap: 20, width: 300 }}>
      <CardV2 designLanguage="material">
        <SampleContent designLanguage="Material Design" />
      </CardV2>
      <CardV2 designLanguage="cupertino">
        <SampleContent designLanguage="Cupertino (iOS)" />
      </CardV2>
      <CardV2 designLanguage="metro">
        <SampleContent designLanguage="Metro (Windows)" />
      </CardV2>
    </View>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Compare how the same card looks across different design languages. Notice the differences in shadows, corners, and overall feel.',
      },
    },
  },
};

export const WithForm: Story = {
  render: () => (
    <CardV2 elevation="medium" padding="large" style={{ width: 320 }}>
      <View style={{ gap: 16 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            marginBottom: 8,
          }}
        >
          Login Form
        </Text>
        <InputV2
          label="Email"
          placeholder="email@example.com"
          keyboardType="email-address"
        />
        <InputV2
          label="Password"
          placeholder="Enter password"
          secureTextEntry
        />
        <ButtonV2 title="Sign In" variant="primary" fullWidth />
        <ButtonV2 title="Create Account" variant="outline" fullWidth />
      </View>
    </CardV2>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a card containing a complete form with inputs and buttons.',
      },
    },
  },
};

export const InteractiveDesignLanguage: Story = {
  render: () => {
    const Demo = () => {
      const { designLanguage, setDesignLanguage, theme } = useDesignLanguage();

      return (
        <View style={{ gap: 20, width: 320 }}>
          <View style={{ gap: 8 }}>
            <Text
              style={{
                fontSize: theme.semantic.typography.label.large.fontSize,
                fontWeight: theme.semantic.typography.label.large.fontWeight,
                color: theme.semantic.colors.text.secondary,
                marginBottom: 4,
              }}
            >
              Select Design Language:
            </Text>
            <ButtonV2
              title="Material Design"
              onPress={() => setDesignLanguage('material')}
              variant={designLanguage === 'material' ? 'primary' : 'outline'}
              size="small"
            />
            <ButtonV2
              title="Cupertino (iOS)"
              onPress={() => setDesignLanguage('cupertino')}
              variant={designLanguage === 'cupertino' ? 'primary' : 'outline'}
              size="small"
            />
            <ButtonV2
              title="Metro (Windows)"
              onPress={() => setDesignLanguage('metro')}
              variant={designLanguage === 'metro' ? 'primary' : 'outline'}
              size="small"
            />
          </View>

          <CardV2 elevation="medium" padding="large">
            <SampleContent />
          </CardV2>

          <CardV2 elevation="large" padding="medium">
            <View style={{ gap: 12 }}>
              <Text
                style={{
                  fontSize: theme.semantic.typography.heading.h6.fontSize,
                  fontWeight: theme.semantic.typography.heading.h6.fontWeight,
                  color: theme.semantic.colors.text.primary,
                }}
              >
                Active Design Language
              </Text>
              <Text
                style={{
                  fontSize: theme.semantic.typography.body.large.fontSize,
                  color: theme.semantic.colors.interactive.primary,
                  fontWeight: '600',
                }}
              >
                {designLanguage.charAt(0).toUpperCase() + designLanguage.slice(1)}
              </Text>
            </View>
          </CardV2>
        </View>
      );
    };

    return <Demo />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing how cards adapt when switching design languages. Try switching between Material, Cupertino, and Metro.',
      },
    },
  },
};

export const NestedCards: Story = {
  render: () => (
    <CardV2 elevation="large" padding="large" style={{ width: 350 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Nested Cards</Text>

        <CardV2 elevation="small" padding="medium">
          <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>
            Inner Card 1
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            Cards can be nested to create hierarchical layouts.
          </Text>
        </CardV2>

        <CardV2 elevation="small" padding="medium">
          <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>
            Inner Card 2
          </Text>
          <Text style={{ fontSize: 14, color: '#666' }}>
            Each card maintains its own elevation and styling.
          </Text>
        </CardV2>
      </View>
    </CardV2>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of nested cards creating a hierarchical layout.',
      },
    },
  },
};
