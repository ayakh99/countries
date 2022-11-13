import { Grid } from '@mui/material';
import CountryCard from '../countrycard/CountryCard';
import './countrygrid.scss';

const CountryGrid = ({ countries, loading }) => {
  const DEFAULT = 8;

  return (
    <Grid className="countries" container>
      {!countries && !loading && 'No results found.'}
      {loading && Array.from(Array(DEFAULT).keys()).map((i) => <CountryCard key={i} />)}
      {countries &&
        countries.map((country) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
    </Grid>
  );
};

export default CountryGrid;
