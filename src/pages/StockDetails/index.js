import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import Tiles from '../../components/Tiles';
import IntervalController from '../../components/IntervalController';
import useStockDetails from '../../hooks/useStockDetails';

const StockDetails = () => {
  const [details, setInterval] = useStockDetails();

  return (
    <Box px="8">
      <Grid w="full" templateColumns="repeat(12, 1fr)" gap={6}>
        <IntervalController onIntervalChange={setInterval} />
        {Object.keys(details).length === 0 || details?.Note ? (
          <GridItem colSpan={12}>
            <Text textAlign="center">
              Sorry!!! No details found for the above mentioned stock
            </Text>
          </GridItem>
        ) : (
          <>
            <Tiles name="Symbol" value={details?.Symbol} />
            <Tiles name="Name" value={details?.Name} />
            <Tiles
              name={`Current Price (${details?.Currency})`}
              value={details?.BookValue}
            />
            <Tiles name="Industry" value={details?.Industry} />
            <Tiles name="PE Ratio" value={details?.PERatio} />
            <Tiles
              name="Market Capitalization"
              value={details?.MarketCapitalization}
            />
            <Tiles
              name="Description"
              value={details?.Description}
              colSpan={6}
              colStart={1}
            />
          </>
        )}
      </Grid>
    </Box>
  );
};

export default StockDetails;
