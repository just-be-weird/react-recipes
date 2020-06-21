import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    color: '#2c2c2c'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    color: '#ffffff'
  },
};

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {
  },
});