import React from 'react';
import searchByTerm from '../services/search.service';

const useStockerPicker = () => {
  const [value, setValue] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    if (value) {
      searchByTerm(value).then(data => setResults(data));
    } else {
      setResults([]);
    }
  }, [value]);

  return [setValue, results];
};

export default useStockerPicker;
