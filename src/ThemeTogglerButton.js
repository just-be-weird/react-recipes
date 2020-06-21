import React from 'react';
import {ThemeContext} from './Context/theme-context';

const ThemeToggleButton = () => {
  // console.log('ThemeToggleButton is rendering')
  // The Theme Toggling Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={() => toggleTheme(theme)}
          style={{backgroundColor: theme.background, color: theme.color}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeToggleButton;