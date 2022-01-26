import React from 'react';
import Autocomplete from '../Autocomplete';
import { Box } from '@chakra-ui/react';
import { debouncer } from '../../utils/debouncer';
import { useAutocomplete } from '../../hooks/useAutocomplete';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const [setValue, results] = useAutocomplete();

  React.useEffect(() => {
    console.log(results);
  }, [results]);

  const handleSelection = result => {
    if (result.symbol) navigate(`/stock/?q=${result.symbol}`);
  };

  return (
    <Box p="8">
      <Autocomplete
        onSelect={handleSelection}
        placeholder="Search by stock symbol"
        results={results}
        onChange={debouncer(setValue)}
        onSearch={setValue}
      />
    </Box>
  );
};

export default SearchPage;
