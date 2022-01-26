import React from 'react';
import StockerPicker from '../StockerPicker';
import { Box } from '@chakra-ui/react';
import { debouncer } from '../../utils/debouncer';
import useStockerPicker from '../../hooks/useStockerPicker';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const [setValue, results] = useStockerPicker();

  const handleSelection = result => {
    if (result.symbol) navigate(`/stock/?q=${result.symbol}`);
  };

  return (
    <Box p="8">
      <StockerPicker
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
