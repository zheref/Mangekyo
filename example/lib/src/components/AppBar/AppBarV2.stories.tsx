import React from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { AppBarV2 } from './AppBarV2';
import { DesignLanguageProvider } from '../../themes/DesignLanguageContext';

// Simple icon components for demonstration
const SearchIcon = () => (
  <View style={{ width: 24, height: 24, backgroundColor: '#65676B', borderRadius: 12 }} />
);

const FilterIcon = () => (
  <View style={{ width: 24, height: 24, backgroundColor: '#65676B', borderRadius: 4 }} />
);

const ComposeIcon = () => (
  <View style={{ width: 24, height: 24, backgroundColor: '#0866FF', borderRadius: 12 }} />
);

const meta = {
  title: 'Components/AppBar',
  component: AppBarV2,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text displayed in the app bar',
    },
    elevation: {
      control: 'boolean',
      description: 'Whether to show shadow/elevation',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ minHeight: 100 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppBarV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Meta Horizon Design - Centered title with search and filter
export const MetaHorizonDefault: Story = {
  args: {
    title: 'Chats',
    leftAction: {
      icon: <SearchIcon />,
      onPress: () => console.log('Search pressed'),
      accessibilityLabel: 'Search',
    },
    rightAction: {
      icon: <FilterIcon />,
      onPress: () => console.log('Filter pressed'),
      accessibilityLabel: 'Filter',
    },
    elevation: true,
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="metaHorizon" initialColorScheme="light">
        <View style={{ minHeight: 100, backgroundColor: '#F0F2F5' }}>
          <Story />
        </View>
      </DesignLanguageProvider>
    ),
  ],
};

// Meta Horizon with multiple actions
export const MetaHorizonMultipleActions: Story = {
  args: {
    title: 'Messages',
    leftAction: {
      icon: <SearchIcon />,
      onPress: () => console.log('Search pressed'),
      accessibilityLabel: 'Search',
    },
    rightActions: [
      {
        icon: <FilterIcon />,
        onPress: () => console.log('Filter pressed'),
        accessibilityLabel: 'Filter',
      },
      {
        icon: <ComposeIcon />,
        onPress: () => console.log('Compose pressed'),
        accessibilityLabel: 'Compose',
      },
    ],
    elevation: true,
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="metaHorizon" initialColorScheme="light">
        <View style={{ minHeight: 100, backgroundColor: '#F0F2F5' }}>
          <Story />
        </View>
      </DesignLanguageProvider>
    ),
  ],
};

// Meta Horizon Dark Mode
export const MetaHorizonDark: Story = {
  args: {
    title: 'Chats',
    leftAction: {
      icon: <View style={{ width: 24, height: 24, backgroundColor: '#B0B3B8', borderRadius: 12 }} />,
      onPress: () => console.log('Search pressed'),
      accessibilityLabel: 'Search',
    },
    rightAction: {
      icon: <View style={{ width: 24, height: 24, backgroundColor: '#B0B3B8', borderRadius: 4 }} />,
      onPress: () => console.log('Filter pressed'),
      accessibilityLabel: 'Filter',
    },
    elevation: true,
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="metaHorizon" initialColorScheme="dark">
        <View style={{ minHeight: 100, backgroundColor: '#18191A' }}>
          <Story />
        </View>
      </DesignLanguageProvider>
    ),
  ],
};

// Material Design - Left-aligned title
export const MaterialDesign: Story = {
  args: {
    title: 'Messages',
    leftAction: {
      icon: <SearchIcon />,
      onPress: () => console.log('Search pressed'),
      accessibilityLabel: 'Search',
    },
    rightAction: {
      icon: <FilterIcon />,
      onPress: () => console.log('Filter pressed'),
      accessibilityLabel: 'Filter',
    },
    elevation: true,
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="material" initialColorScheme="light">
        <View style={{ minHeight: 100, backgroundColor: '#F5F5F5' }}>
          <Story />
        </View>
      </DesignLanguageProvider>
    ),
  ],
};

// iOS Flat Design - Centered title
export const IOSFlat: Story = {
  args: {
    title: 'Messages',
    leftAction: {
      icon: <SearchIcon />,
      onPress: () => console.log('Search pressed'),
      accessibilityLabel: 'Search',
    },
    rightAction: {
      icon: <ComposeIcon />,
      onPress: () => console.log('Compose pressed'),
      accessibilityLabel: 'Compose',
    },
    elevation: false,
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="flat" initialColorScheme="light">
        <View style={{ minHeight: 100, backgroundColor: '#F2F2F7' }}>
          <Story />
        </View>
      </DesignLanguageProvider>
    ),
  ],
};

// No Actions - Title only
export const TitleOnly: Story = {
  args: {
    title: 'Simple App Bar',
    elevation: true,
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="metaHorizon" initialColorScheme="light">
        <View style={{ minHeight: 100, backgroundColor: '#F0F2F5' }}>
          <Story />
        </View>
      </DesignLanguageProvider>
    ),
  ],
};

// With Content Below (to show separation)
export const WithContent: Story = {
  args: {
    title: 'Communities',
    leftAction: {
      icon: <SearchIcon />,
      onPress: () => console.log('Search pressed'),
      accessibilityLabel: 'Search',
    },
    rightAction: {
      icon: <FilterIcon />,
      onPress: () => console.log('Filter pressed'),
      accessibilityLabel: 'Filter',
    },
    elevation: true,
  },
  decorators: [
    (Story) => (
      <DesignLanguageProvider initialDesignLanguage="metaHorizon" initialColorScheme="light">
        <View style={{ minHeight: 300, backgroundColor: '#F0F2F5' }}>
          <Story />
          <View style={{ padding: 16, gap: 12 }}>
            <Text style={{ fontSize: 15, color: '#1C1E21', fontWeight: '600' }}>
              Discover communities
            </Text>
            <View style={{ 
              padding: 16, 
              backgroundColor: '#FFFFFF', 
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 2,
            }}>
              <Text style={{ fontSize: 17, fontWeight: '600', color: '#1C1E21', marginBottom: 4 }}>
                Tabor Giveaway
              </Text>
              <Text style={{ fontSize: 13, color: '#65676B' }}>
                Ghosts of Tabor
              </Text>
              <Text style={{ fontSize: 13, color: '#31A24C', marginTop: 4 }}>
                78 online now
              </Text>
            </View>
            <View style={{ 
              padding: 16, 
              backgroundColor: '#FFFFFF', 
              borderRadius: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 2,
            }}>
              <Text style={{ fontSize: 17, fontWeight: '600', color: '#1C1E21', marginBottom: 4 }}>
                GoG Is Not Dead
              </Text>
              <Text style={{ fontSize: 13, color: '#65676B' }}>
                Gods of Gravity
              </Text>
              <Text style={{ fontSize: 13, color: '#31A24C', marginTop: 4 }}>
                40 online now
              </Text>
            </View>
          </View>
        </View>
      </DesignLanguageProvider>
    ),
  ],
};

