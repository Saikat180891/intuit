import React from 'react';
import { useLocation } from 'react-router-dom';
import getCompanyOverviewBySymbol from '../services/getCompanyOverviewBySymbol';

const useStockDetails = (initialInterval = 0) => {
  const location = useLocation();
  const [interval, setInterval] = React.useState(initialInterval);
  const [details, setDetails] = React.useState({});
  const [calls, setCalls] = React.useState(0);
  const callbackRef = React.useRef();

  React.useEffect(() => {
    callbackRef.current = () => {
      const query = location.search.split('=')[1];
      getCompanyOverviewBySymbol(query).then(setDetails);
    };
  }, [location]);

  React.useEffect(() => {
    const callback = () => callbackRef.current();
    if (interval < 3000) {
      callback();
    } else {
      let id = setTimeout(() => {
        callback();
        setCalls(calls + 1);
      }, interval);
      return () => clearTimeout(id);
    }
  }, [interval, calls]);

  return [details, setInterval];
};

export default useStockDetails;
