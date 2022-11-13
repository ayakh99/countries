import { useContext } from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import { DarkModeOutlined, DarkMode } from '@mui/icons-material';
import { DarkModeContext } from '../../context/darkModeContext';
import './topbar.scss';

const Topbar = () => {
  const { darkmode, dispatch } = useContext(DarkModeContext);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <AppBar className="topbar">
      <Toolbar className="topbar__content">
        <h1 className="topbar__title">Where in the world?</h1>
        <Button
          variant="text"
          disableRipple
          className="button topbar__toggle"
          onClick={handleToggle}
          startIcon={(darkmode && <DarkMode />) || <DarkModeOutlined />}
        >
          Dark Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
