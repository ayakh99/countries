import { useContext, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { DarkModeContext } from './context/darkModeContext';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Country from './pages/country/Country';
import './style/base.scss';
import './style/common.scss';

function App() {
  const { darkmode } = useContext(DarkModeContext);

  const [results, setResults] = useState([]);
  const [region, setRegion] = useState('');
  const [term, setTerm] = useState('');

  return (
    <StyledEngineProvider injectFirst>
      <Box className={darkmode ? 'app dark' : 'app'}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Navigate to="countries" />} />

            <Route path="countries" element={<Layout />}>
              <Route
                index
                element={
                  <Home
                    states={{
                      results,
                      setResults,
                      region,
                      setRegion,
                      term,
                      setTerm,
                    }}
                  />
                }
              />
              <Route path=":countryid" element={<Country />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </StyledEngineProvider>
  );
}

export default App;
