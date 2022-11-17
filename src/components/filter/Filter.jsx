import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { FormControl, Grid, MenuItem, OutlinedInput, Select } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './filter.scss';

const Filter = ({ region, setRegion }) => {
  const handleChange = (event) => {
    if (event.target.value === 'All') setRegion('');
    else setRegion(event.target.value);
  };

  const { darkmode } = useContext(DarkModeContext);

  const MenuProps = {
    autoFocus: false,
    PaperProps: {
      id: 'menu',
      style: {
        backgroundColor: darkmode ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        boxShadow: 'var(--shadow)',
        marginTop: '0.5rem',
        paddingBlock: '0.8rem',
        color: darkmode ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
      },
    },
  };

  const iconComponent = (props) => {
    return <ExpandMoreIcon className={props.className} />;
  };

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All'];

  return (
    <Grid item md={2} xs={12}>
      <FormControl className="filter" sx={{ width: { xs: '60%', md: '100%' } }}>
        <Select
          displayEmpty
          value={region}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected === '') {
              return 'Filter by region';
            } else return selected;
          }}
          IconComponent={iconComponent}
          input={<OutlinedInput className="filter__select" />}
          MenuProps={MenuProps}
        >
          {regions.map((region) => (
            <MenuItem key={region} value={region} className="filter__option" disableRipple>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default Filter;
