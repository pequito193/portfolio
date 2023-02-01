import './styles/app.css';
import { useState } from 'react';
import React from 'react';
import Header from './components/header';
import Main from './components/main';

function App() {

  const [ theme, setTheme ] = useState('light');

  // Toggle between light and dark theme
  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } 
    else {
      setTheme('light');
    }
  }

  return (
      <React.Fragment>
          <div className={`${theme} app`}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Main theme={theme} />
          </div>
      </React.Fragment>
  );
}

export default App;
