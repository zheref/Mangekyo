import { TextStyle } from 'react-native';
import { TypographyStyle } from '../types/tokens';

/**
 * Converts a typography style with relative lineHeight to absolute lineHeight
 * React Native requires lineHeight to be an absolute number, not a multiplier
 */
export const convertTypographyToTextStyle = (
  typography: TypographyStyle
): TextStyle => {
  return {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight as TextStyle['fontWeight'],
    lineHeight: typography.fontSize * typography.lineHeight, // Convert multiplier to absolute
    letterSpacing: typography.letterSpacing,
  };
};

