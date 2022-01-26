import { API_KEY } from '../config/app.constants';

const getCompanyOverviewBySymbol = (symbol = '') => {
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`;
  return fetch(url).then(res => res.json());
};

export default getCompanyOverviewBySymbol;
