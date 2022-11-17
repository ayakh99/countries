import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../custom-hooks/useFetch';
import { Box, Grid, Pagination, PaginationItem, useMediaQuery, useTheme } from '@mui/material';
import Search from '../../components/search/Search';
import Filter from '../../components/filter/Filter';
import CountryGrid from '../../components/countrygrid/CountryGrid';
import './home.scss';

const Home = ({ states }) => {
  const { status, data: countries, error } = useFetch('https://restcountries.com/v3.1/all');
  const { results, setResults, region, setRegion, term, setTerm, resPage, setResPage } = states;

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1');

  useEffect(() => {
    if (term || region) {
      // first search or filter || combined search and filter || adding to a pre-exiting search or filter
      if (!resPage || (term && region) || (resPage && (!term || !region))) {
        navigate('/countries', { replace: true });
      }
      setResPage(true);
    }

    // no search or filtering anymore
    if (!term && !region && resPage) {
      navigate('/countries', { replace: true });
      setResPage(false);
    }

    const handleSearch = () => {
      setResults(
        countries.filter((c) => {
          const match = c.name.common.includes(term) || c.name.common.toLowerCase().includes(term);
          if (region) {
            return match && c.region === region;
          }
          return match;
        })
      );
    };

    const handleFilter = () => {
      setResults(countries.filter((c) => c.region === region));
    };

    handleFilter();
    handleSearch();
  }, [term, region, setResults, countries, resPage, setResPage, navigate]);

  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid container direction="column" className="home">
      <Grid item>
        <Grid container className="home__filtering">
          <Search term={term} setTerm={setTerm} />
          <Filter region={region} setRegion={setRegion} />
        </Grid>
      </Grid>
      <Grid item className="home__countries">
        {status === 'fetching' && <CountryGrid loading={true} />}
        {status === 'fetched' && countries && (
          <CountryGrid
            countries={
              !term && !region
                ? countries.slice(24 * (page - 1), 24 * page)
                : results.length > 0
                ? results.slice(24 * (page - 1), 24 * page)
                : null
            }
          />
        )}
        {error && <Box className="error">Failed to retrieve data. Please try again later!</Box>}
      </Grid>

      {status === 'fetched' && countries && (
        <Grid item className="home__pagination">
          <Pagination
            siblingCount={matchesBreakpoint ? 2 : 0}
            className="home__pagination__list"
            page={page}
            count={
              !term && !region ? Math.ceil(countries.length / 24) : Math.ceil(results.length / 24)
            }
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                className="home__pagination__item"
                component={Link}
                to={`/countries${item.page === 1 ? '' : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Home;
