import useFetch from '../../custom-hooks/useFetch';
import { Box, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import ButtonSkeleton from '../../skeletons/ButtonSkeleton';
import { useNavigate } from 'react-router-dom';

const BorderButton = ({ code }) => {
  const navigate = useNavigate();

  const {
    status,
    data: [country],
    error,
  } = useFetch(`https://restcountries.com/v3.1/alpha/${code}`);

  return (
    <>
      {status === 'fetched' && country && (
        <Button
          className="country__button button"
          onClick={() => navigate(`/countries/${country.cca3}`)}
          disableRipple
        >
          {country.name.common}
        </Button>
      )}

      {status === 'fetching' && <ButtonSkeleton />}

      {error && (
        <Box className="error__icon">
          <ErrorIcon fontSize="large" titleAccess="Failed to retrieve bordering country!" />
        </Box>
      )}
    </>
  );
};

export default BorderButton;
