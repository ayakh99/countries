import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Topbar from '../components/topbar/Topbar';
import './layout.scss';

const Layout = () => {
  return (
    <Box>
      <Topbar />

      <main className="content__wrapper">
        <Box className="content">
          <Outlet />
        </Box>
      </main>
    </Box>
  );
};

export default Layout;
