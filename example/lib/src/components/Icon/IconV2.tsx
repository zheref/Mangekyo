import React from 'react';
import { Text, TextStyle, Platform } from 'react-native';
import { useDesignLanguage } from '../../themes/DesignLanguageContext';
import { DesignLanguage } from '../../types/tokens';

export type IconName = 
  | 'search'
  | 'filter'
  | 'settings'
  | 'close'
  | 'back'
  | 'menu'
  | 'share'
  | 'more'
  | 'add'
  | 'edit'
  | 'delete'
  | 'check'
  | 'chevron-left'
  | 'chevron-right'
  | 'home'
  | 'user'
  | 'star'
  | 'heart'
  | 'notification';

export interface IconV2Props {
  /** The semantic name of the icon */
  name: IconName;
  /** Size of the icon in pixels */
  size?: number;
  /** Color of the icon */
  color?: string;
  /** Override global design language */
  designLanguage?: DesignLanguage;
  /** Custom style */
  style?: TextStyle;
}

// Icon mappings for each design language
// Using NON-EMOJI Unicode glyphs that match design system styles
const ICON_GLYPHS: Record<DesignLanguage, Record<IconName, string>> = {
  // Meta Horizon - Clean outline icons (Ionicons-inspired)
  metaHorizon: {
    search: '⌕',        // Viewdata square (proper Unicode glyph, not emoji)
    filter: '☰',        // Trigram menu
    settings: '⚙',      // Gear (Unicode glyph U+2699)
    close: '✕',         // Multiplication X
    back: '←',          // Leftwards arrow
    menu: '☰',          // Trigram for heaven
    share: '⤴',         // Arrow pointing rightwards then curving upwards
    more: '⋯',          // Midline horizontal ellipsis
    add: '＋',          // Fullwidth plus
    edit: '✎',          // Lower right pencil
    delete: '⊗',        // Circled times (X in circle)
    check: '✓',         // Check mark
    'chevron-left': '‹',  // Single left-pointing angle quotation mark
    'chevron-right': '›', // Single right-pointing angle quotation mark
    home: '⌂',          // House
    user: '⚲',          // Neuter (person symbol)
    star: '☆',          // White star
    heart: '♡',         // White heart suit
    notification: '⍾',   // Bell symbol
  },

  // Material Design - Bold, filled icons (Material Icons style)
  material: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '≡',        // Identical to (triple line)
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',         // Multiplication X
    back: '←',          // Leftwards arrow
    menu: '☰',          // Trigram
    share: '⤴',         // Arrow up-right
    more: '⋮',          // Vertical ellipsis (Material/Android style)
    add: '＋',          // Fullwidth plus
    edit: '✎',          // Pencil
    delete: '⊗',        // Circled times
    check: '✓',         // Check mark
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '★',          // Black star (filled - Material style)
    heart: '♥',         // Black heart suit (filled)
    notification: '⍾',   // Bell
  },

  // iOS Flat Design - Thin, elegant icons (SF Symbols style)
  flat: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '⊚',        // Circled ring operator
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',         // Multiplication X
    back: '‹',          // Single left angle (thin - iOS style)
    menu: '☰',          // Trigram
    share: '⤴',         // Arrow up-right
    more: '⋯',          // Horizontal ellipsis (iOS style)
    add: '＋',          // Fullwidth plus
    edit: '✎',          // Pencil
    delete: '⊗',        // Circled times
    check: '✓',         // Check mark
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '☆',          // White star (outline - iOS style)
    heart: '♡',         // White heart (outline)
    notification: '⍾',   // Bell
  },

  // Holo Design - Bold Android icons (Holo style)
  holo: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '≡',        // Identical to
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',
    back: '←',
    menu: '☰',
    share: '⤴',         // Arrow up-right
    more: '⋮',          // Vertical ellipsis (Android style)
    add: '＋',          // Fullwidth plus
    edit: '✎',
    delete: '⊗',        // Circled times
    check: '✓',
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '★',          // Black star (filled - Android style)
    heart: '♥',         // Black heart (filled)
    notification: '⍾',   // Bell
  },

  // Liquid Glass - Modern, clean icons (glass morphism style)
  liquidGlass: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '⊚',        // Circled ring
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',         // Multiplication X
    back: '←',
    menu: '☰',
    share: '⤴',         // Arrow up-right
    more: '⋯',          // Horizontal ellipsis
    add: '＋',          // Fullwidth plus
    edit: '✎',
    delete: '⊗',        // Circled times
    check: '✓',
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '☆',          // White star (outline)
    heart: '♡',         // White heart (outline)
    notification: '⍾',   // Bell
  },

  // Metro - Windows Phone style (bold, geometric)
  metro: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '≡',        // Identical to (bold lines)
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',
    back: '←',
    menu: '☰',
    share: '⤴',         // Arrow up-right
    more: '⋯',          // Horizontal ellipsis
    add: '＋',          // Fullwidth plus
    edit: '✎',
    delete: '⊗',        // Circled times
    check: '✓',
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '★',          // Black star (filled - Metro bold)
    heart: '♥',         // Black heart (filled)
    notification: '⍾',   // Bell
  },

  // Fluent Design - Windows 11 style (soft, modern)
  fluent: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '⊚',        // Circled ring
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',
    back: '←',
    menu: '☰',
    share: '⤴',         // Arrow up-right
    more: '⋯',          // Horizontal ellipsis
    add: '＋',          // Fullwidth plus
    edit: '✎',
    delete: '⊗',        // Circled times
    check: '✓',
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '☆',          // White star (outline - Fluent)
    heart: '♡',         // White heart (outline)
    notification: '⍾',   // Bell
  },

  // Cupertino - macOS style (similar to iOS)
  cupertino: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '⊚',        // Circled ring
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',
    back: '‹',          // Thin chevron
    menu: '☰',
    share: '⤴',         // Arrow up-right
    more: '⋯',          // Horizontal ellipsis
    add: '＋',          // Fullwidth plus
    edit: '✎',
    delete: '⊗',        // Circled times
    check: '✓',
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '☆',          // White star (outline)
    heart: '♡',         // White heart (outline)
    notification: '⍾',   // Bell
  },

  // Aqua - Classic macOS style
  aqua: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '⊚',        // Circled ring
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',
    back: '‹',
    menu: '☰',
    share: '⤴',         // Arrow up-right
    more: '⋯',          // Horizontal ellipsis
    add: '＋',          // Fullwidth plus
    edit: '✎',
    delete: '⊗',        // Circled times
    check: '✓',
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '☆',          // White star (outline)
    heart: '♡',         // White heart (outline)
    notification: '⍾',   // Bell
  },

  // Aero Glass - Windows Vista/7 style (glossy)
  aeroGlass: {
    search: '⌕',        // Viewdata square (glyph)
    filter: '≡',        // Identical to (bold lines)
    settings: '⚙',      // Gear (Unicode glyph)
    close: '✕',
    back: '←',
    menu: '☰',
    share: '⤴',         // Arrow up-right
    more: '⋯',          // Horizontal ellipsis
    add: '＋',          // Fullwidth plus
    edit: '✎',
    delete: '⊗',        // Circled times
    check: '✓',
    'chevron-left': '‹',
    'chevron-right': '›',
    home: '⌂',
    user: '⚲',          // Neuter symbol
    star: '★',          // Black star (filled)
    heart: '♥',         // Black heart (filled)
    notification: '⍾',   // Bell
  },
};

// Emoji fallbacks for when glyphs aren't available
const EMOJI_FALLBACKS: Record<IconName, string> = {
  search: '🔍',
  filter: '⚙️',
  settings: '⚙️',
  close: '✖️',
  back: '◀️',
  menu: '☰',
  share: '📤',
  more: '⋯',
  add: '➕',
  edit: '✏️',
  delete: '🗑️',
  check: '✅',
  'chevron-left': '◀',
  'chevron-right': '▶',
  home: '🏠',
  user: '👤',
  star: '⭐',
  heart: '❤️',
  notification: '🔔',
};

export const IconV2: React.FC<IconV2Props> = ({
  name,
  size = 24,
  color,
  designLanguage: overrideDesignLanguage,
  style,
}) => {
  const { theme, designLanguage: globalDesignLanguage } = useDesignLanguage();
  const activeDesignLanguage = overrideDesignLanguage ?? globalDesignLanguage;

  // Get the icon glyph for the active design language
  const glyph = ICON_GLYPHS[activeDesignLanguage]?.[name] || EMOJI_FALLBACKS[name] || '?';

  // Use theme color if not specified
  const iconColor = color || theme.semantic.colors.text.primary;

  return (
    <Text
      style={[
        {
          fontSize: size * 1.2, // Slightly larger to compensate for glyph rendering
          color: iconColor,
          lineHeight: size * 1.2,
          textAlign: 'center',
          includeFontPadding: false,
          // Use system font for proper Unicode glyph rendering
          fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
          fontWeight: '400', // Regular weight for glyphs
        },
        style,
      ]}
      allowFontScaling={false}
    >
      {glyph}
    </Text>
  );
};

