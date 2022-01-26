import { API_KEY } from '../config/app.constants';

const mapResultsToDisplay = (data = {}) => {
  return data?.bestMatches?.map(match => ({
    symbol: match?.['1. symbol'],
    name: match?.['2. name'],
  }));
};

const searchByTerm = (searchTerm = '') => {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${API_KEY}`;
  return fetch(url)
    .then(res => res.json())
    .then(mapResultsToDisplay);
};

export default searchByTerm;
