import { Grid } from '@mui/material';
import BorderButton from '../borderbutton/BorderButton';
import './borderscontainer.scss';

const BordersContainer = ({ borderingCountries }) => {
  return (
    <Grid container className="borders">
      <h2 className="borders__title">Border Countries:</h2>
      {borderingCountries.map((code) => (
        <Grid key={code} item>
          <BorderButton code={code} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BordersContainer;
