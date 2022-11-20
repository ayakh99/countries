import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, Grid, InputBase } from '@mui/material';
import './search.scss';

const Search = ({ term, setTerm, resetPage }) => {
  const handleChange = (event) => {
    setTerm(event.target.value);
    resetPage();
  };

  return (
    <Grid item md={5} xs={12} className="search">
      <FormControl className="search__wrapper">
        <Box className="search__icon">
          <SearchIcon />
        </Box>

        <InputBase
          className="search__input"
          type="text"
          placeholder="Search for a country..."
          value={term}
          onChange={handleChange}
        />
      </FormControl>
    </Grid>
  );
};

export default Search;
