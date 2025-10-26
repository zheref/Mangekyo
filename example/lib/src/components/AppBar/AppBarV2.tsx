import React, { ReactNode } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Constants from 'expo-constants';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';

export interface AppBarV2Props {
  /** The title text displayed in the center of the app bar */
  title: string;
  /** Left action button (typically search or back button) */
  leftAction?: {
    icon: ReactNode;
    onPress: () => void;
    accessibilityLabel?: string;
  };
  /** Right action button (typically filter, settings, or compose button) */
  rightAction?: {
    icon: ReactNode;
    onPress: () => void;
    accessibilityLabel?: string;
  };
  /** Additional left actions (array of action buttons) */
  leftActions?: Array<{
    icon: ReactNode;
    onPress: () => void;
    accessibilityLabel?: string;
  }>;
  /** Additional right actions (array of action buttons) */
  rightActions?: Array<{
    icon: ReactNode;
    onPress: () => void;
    accessibilityLabel?: string;
  }>;
  /** Custom style for the app bar container */
  style?: ViewStyle;
  /** Custom style for the title text */
  titleStyle?: TextStyle;
  /** Override global design language */
  designLanguage?: DesignLanguage;
  /** Whether to show the shadow/elevation */
  elevation?: boolean;
  /**
   * Safe area padding configuration
   * - true (default): Auto-detect platform and apply appropriate padding
   * - false: No safe area padding
   * - { top?: number, bottom?: number }: Manual control with specific values
   */
  safeArea?: boolean | { top?: number; bottom?: number };
}

export const AppBarV2: React.FC<AppBarV2Props> = ({
  title,
  leftAction,
  rightAction,
  leftActions = [],
  rightActions = [],
  style,
  titleStyle,
  designLanguage: overrideDesignLanguage,
  elevation = true,
  safeArea = true,
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const { semantic, components } = theme;
  const appBarTokens = components.appBar;

  // Combine single actions with arrays
  const allLeftActions = leftAction ? [leftAction, ...leftActions] : leftActions;
  const allRightActions = rightAction ? [rightAction, ...rightActions] : rightActions;

  /**
   * Calculate safe area padding based on platform and configuration
   * Uses expo-constants for reliable status bar height detection
   */
  const getSafeAreaPadding = (): { paddingTop: number; paddingBottom: number } => {
    if (safeArea === false) {
      return { paddingTop: 0, paddingBottom: 0 };
    }

    if (typeof safeArea === 'object') {
      return {
        paddingTop: safeArea.top ?? 0,
        paddingBottom: safeArea.bottom ?? 0,
      };
    }

    // Auto-detect platform-specific safe area using expo-constants
    // This works reliably on both iOS and Android with edge-to-edge mode
    const statusBarHeight = Constants.statusBarHeight ?? 0;
    return { paddingTop: statusBarHeight, paddingBottom: 0 };
  };

  const renderActionButton = (
    action: { icon: ReactNode; onPress: () => void; accessibilityLabel?: string },
    index: number
  ) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={action.onPress}
        style={styles.actionButton}
        accessibilityLabel={action.accessibilityLabel}
        accessibilityRole="button"
      >
        {action.icon}
      </TouchableOpacity>
    );
  };

  const getAppBarStyle = (): ViewStyle => {
    const safeAreaPadding = getSafeAreaPadding();
    
    // Total height includes the safe area padding + the app bar content height
    const totalHeight = appBarTokens.height + safeAreaPadding.paddingTop + safeAreaPadding.paddingBottom;
    
    const baseStyle: ViewStyle = {
      height: totalHeight,
      paddingHorizontal: appBarTokens.paddingHorizontal,
      paddingTop: safeAreaPadding.paddingTop,
      paddingBottom: safeAreaPadding.paddingBottom,
      backgroundColor: semantic.colors.background.primary,
    };

    // Add shadow/elevation if enabled
    if (elevation) {
      return {
        ...baseStyle,
        ...appBarTokens.shadow,
      };
    }

    return baseStyle;
  };

  const getTitleStyle = (): TextStyle => {
    return {
      fontFamily: appBarTokens.title.fontFamily,
      fontSize: appBarTokens.title.fontSize,
      fontWeight: appBarTokens.title.fontWeight as TextStyle['fontWeight'],
      lineHeight: appBarTokens.title.fontSize * appBarTokens.title.lineHeight,
      letterSpacing: appBarTokens.title.letterSpacing,
      color: semantic.colors.text.primary,
    };
  };

  // Meta Horizon centers the title, other designs may left-align
  const shouldCenterTitle = activeDesignLanguage === 'metaHorizon' || 
                           activeDesignLanguage === 'flat' ||
                           activeDesignLanguage === 'cupertino';

  return (
    <View style={[styles.container, getAppBarStyle(), style]}>
      {/* Left actions */}
      <View style={styles.leftActions}>
        {allLeftActions.map((action, index) => renderActionButton(action, index))}
      </View>

      {/* Title */}
      <View style={[styles.titleContainer, shouldCenterTitle && styles.titleCentered]}>
        <Text
          style={[styles.title, getTitleStyle(), titleStyle]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>

      {/* Right actions */}
      <View style={styles.rightActions}>
        {allRightActions.map((action, index) => renderActionButton(action, index))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minWidth: 40, // Ensure space for actions
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minWidth: 40, // Ensure space for actions
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  titleCentered: {
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  actionButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20, // Circular touch target
  },
});

