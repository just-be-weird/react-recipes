import React from 'react';
import {ThemeContext, themes} from './Context/theme-context';
import ThemeToggleButton from './ThemeTogglerButton';

const App = () => {
  const toggleTheme = (theme) => {
    setState({
      ...state,
      theme:
        theme === themes.dark
          ? themes.light
          : themes.dark,
    });
  };
  // console.log('App is rendering');
  const mouseOver = (theme) => {
    toggleTheme(theme)
  }

  const [state, setState] = React.useState({
    theme: themes.light,
    toggleTheme: toggleTheme,
  });


  return (
    <div className='App'>
      <ThemeContext.Provider value={state}>
        <Content/>
      </ThemeContext.Provider>
      <Button theme={state.theme} mouseOver={mouseOver}/>
    </div>
  );
}

const Content = () => {
  // console.log('Content is rendering')
  return (
    <div>
      <ThemeToggleButton/>
    </div>
  );
};

const Button = ({theme, mouseOver}) => {
  // console.log('Button is rendering')
  return (
    <button
      onClick={() => mouseOver(theme)}
      style={{backgroundColor: theme.background, color: theme.color}}>
      Toggle Theme Button 2
    </button>
  );
}

export default App;

// ThemeToggleButton without memo
// init App -> Content -> ThemeToggleButton -> Button
// update App -> Content -> ThemeToggleButton -> Button

// ThemeToggleButton with memo
// init App -> Content -> ThemeToggleButton -> Button
// update App -> Content -> Button (X ThemeToggleButton)