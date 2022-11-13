import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../custom-hooks/useFetch';
import { Button, Grid } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CountryDetails from '../../components/countrydetails/CountryDetails';
import './country.scss';

const Country = () => {
  const { countryid } = useParams();
  const navigate = useNavigate();

  const {
    status,
    data: [country],
    error,
  } = useFetch(`https://restcountries.com/v3.1/alpha/${countryid}`);

  return (
    <Grid container className="country">
      <Grid item xs={12}>
        <Button
          variant="text"
          className="button country__button"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => navigate(-1)}
          disableRipple
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={12} className="country__details">
        {status === 'fetching' && <CountryDetails />}
        {status === 'fetched' && country && <CountryDetails country={country} />}
        {error && 'Failed to retrieve data. Try again later!'}
      </Grid>
    </Grid>
  );
};

export default Country;
