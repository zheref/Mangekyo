import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import {
  DesignLanguage,
  ColorScheme,
  DesignLanguageTheme,
} from '../types/tokens';
import { createTheme, themes } from './themeFactory';

interface DesignLanguageContextValue {
  theme: DesignLanguageTheme;
  designLanguage: DesignLanguage;
  colorScheme: ColorScheme;
  setDesignLanguage: (language: DesignLanguage) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  setTheme: (theme: DesignLanguageTheme) => void;
  toggleColorScheme: () => void;
}

const DesignLanguageContext = createContext<DesignLanguageContextValue | undefined>(
  undefined
);

interface DesignLanguageProviderProps {
  children: ReactNode;
  initialDesignLanguage?: DesignLanguage;
  initialColorScheme?: ColorScheme;
  initialTheme?: DesignLanguageTheme;
}

export const DesignLanguageProvider: React.FC<DesignLanguageProviderProps> = ({
  children,
  initialDesignLanguage = 'material',
  initialColorScheme = 'light',
  initialTheme,
}) => {
  const [designLanguage, setDesignLanguageState] = useState<DesignLanguage>(
    initialTheme?.designLanguage ?? initialDesignLanguage
  );
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(
    initialTheme?.colorScheme ?? initialColorScheme
  );
  const [customTheme, setCustomTheme] = useState<DesignLanguageTheme | null>(
    initialTheme ?? null
  );

  // Memoize theme creation
  const theme = useMemo(() => {
    if (customTheme) {
      return customTheme;
    }
    return createTheme(designLanguage, colorScheme);
  }, [designLanguage, colorScheme, customTheme]);

  const setDesignLanguage = (language: DesignLanguage) => {
    setDesignLanguageState(language);
    setCustomTheme(null); // Clear custom theme when changing design language
  };

  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    setCustomTheme(null); // Clear custom theme when changing color scheme
  };

  const setTheme = (newTheme: DesignLanguageTheme) => {
    setCustomTheme(newTheme);
    setDesignLanguageState(newTheme.designLanguage);
    setColorSchemeState(newTheme.colorScheme);
  };

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  const value: DesignLanguageContextValue = {
    theme,
    designLanguage,
    colorScheme,
    setDesignLanguage,
    setColorScheme,
    setTheme,
    toggleColorScheme,
  };

  return (
    <DesignLanguageContext.Provider value={value}>
      {children}
    </DesignLanguageContext.Provider>
  );
};

export const useDesignLanguage = (): DesignLanguageContextValue => {
  const context = useContext(DesignLanguageContext);
  if (!context) {
    throw new Error(
      'useDesignLanguage must be used within a DesignLanguageProvider'
    );
  }
  return context;
};

// Convenience exports
export { themes, createTheme };
