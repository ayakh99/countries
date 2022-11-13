import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Grid, List, ListItem } from '@mui/material';
import CardSkeleton from '../../skeletons/CardSkeleton';
import './countrycard.scss';

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={5} md={3} sx={{ maxWidth: { md: '26.4rem' } }}>
      {country ? (
        <Card className="country__card">
          <CardActionArea disableRipple onClick={() => navigate(`${country.cca3}`)}>
            <CardMedia
              component="img"
              image={country.flags.png}
              alt={country.name.common}
              className="country__flag"
            />
            <CardContent component="article" className="country__content">
              <h1 className="country__name">{country.name.common}</h1>
              <List className="country__info">
                <ListItem disablePadding>
                  <span className="country__field">Population: </span>
                  {Intl.NumberFormat('en-US').format(country.population)}
                </ListItem>
                <ListItem disablePadding>
                  <span className="country__field">Region: </span>
                  {country.region}
                </ListItem>
                <ListItem disablePadding>
                  <span className="country__field">Capital: </span>
                  {country.capital ? country.capital[0] : '-'}
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <CardSkeleton />
      )}
    </Grid>
  );
};

export default CountryCard;
