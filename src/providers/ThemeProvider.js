import { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

	const [mode, setMode] = useState('light');

  useEffect(() => {

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark')
    }

    window.matchMedia('(prefers-color-scheme: light)')
      .addEventListener('change', event => setMode(event.matches ? 'light' : 'dark'));

    return () => {
      window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', () => {
      });
    }
  }, []);
	
	return (
		<ThemeContext.Provider value={[mode]}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider