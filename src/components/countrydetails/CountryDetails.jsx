import { Box, Grid, List, ListItem } from '@mui/material';
import DetailsSkeleton from '../../skeletons/DetailsSkeleton';
import FlagSkeleton from '../../skeletons/FlagSkeleton';
import Borders from '../borderscontainer/BordersContainer';
import './countrydetails.scss';

const CountryDetails = ({ country }) => {
  const getField = (prop, subprop) => {
    const field = [];
    for (const [key, value] of Object.entries(prop)) {
      subprop ? field.push(value[subprop]) : field.push(value);
    }
    return field.join(', ');
  };

  return (
    <Grid container direction={{ md: 'row', xs: 'column' }} className="details">
      <Grid item flex={1}>
        {country ? (
          <Box
            component="img"
            src={country.flags.svg}
            alt={country.name.common}
            className="details__flag"
          ></Box>
        ) : (
          <FlagSkeleton />
        )}
      </Grid>
      <Grid item flex={1}>
        <Grid container direction="column" className="details__text">
          {country ? (
            <>
              <h1 className="details__name">{country.name.common}</h1>
              <List>
                <Grid container className="details__list">
                  <Grid item flex={1} className="details__sublist">
                    <ListItem disablePadding>
                      <span className="details__field">Native Name(s): </span>
                      {getField(country.name.nativeName, 'common')}
                    </ListItem>

                    <ListItem disablePadding>
                      <span className="details__field">Population: </span>
                      {Intl.NumberFormat('en-US').format(country.population)}
                    </ListItem>

                    <ListItem disablePadding>
                      <span className="details__field">Region: </span>
                      {country.region}
                    </ListItem>

                    {country.subregion && (
                      <ListItem disablePadding>
                        <span className="details__field">Sub Region: </span>
                        {country.subregion}
                      </ListItem>
                    )}

                    {country.capital && (
                      <ListItem disablePadding>
                        <span className="details__field">Capital: </span>
                        {country.capital.join(', ')}
                      </ListItem>
                    )}
                  </Grid>

                  <Grid item flex={1} className="details__sublist">
                    <ListItem disablePadding>
                      <span className="details__field">Top Level Domain: </span>
                      {country.tld.join(', ')}
                    </ListItem>

                    <ListItem disablePadding>
                      <span className="details__field">Currencies: </span>
                      {getField(country.currencies, 'name')}
                    </ListItem>

                    <ListItem disablePadding>
                      <span className="details__field">Languages: </span>
                      {getField(country.languages)}
                    </ListItem>
                  </Grid>
                </Grid>
              </List>

              {country.borders && <Borders borderingCountries={country.borders} />}
            </>
          ) : (
            <DetailsSkeleton />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountryDetails;
