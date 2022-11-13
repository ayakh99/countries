import { createContext, useEffect, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

const INITIAL_STATE = {
  darkmode: JSON.parse(localStorage.getItem('darkmode')) || false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('darkmode', JSON.stringify(state.darkmode));
  }, [state.darkmode]);

  return (
    <DarkModeContext.Provider value={{ darkmode: state.darkmode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
