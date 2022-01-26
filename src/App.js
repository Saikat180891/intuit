import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import NoSearchResult from './pages/NoSearchResults';
import StockDetails from './pages/StockDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Search />
        <Routes>
          <Route path="/" element={<NoSearchResult />} />
          <Route path="/stock/" element={<StockDetails />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
