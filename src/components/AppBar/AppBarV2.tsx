import React, { ReactNode } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';
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
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  const { semantic, components } = theme;
  const appBarTokens = components.appBar;

  // Combine single actions with arrays
  const allLeftActions = leftAction ? [leftAction, ...leftActions] : leftActions;
  const allRightActions = rightAction ? [rightAction, ...rightActions] : rightActions;

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
    const baseStyle: ViewStyle = {
      height: appBarTokens.height,
      paddingHorizontal: appBarTokens.paddingHorizontal,
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
    // Add safe area for iOS notch if needed
    ...(Platform.OS === 'ios' ? { paddingTop: 0 } : {}),
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

