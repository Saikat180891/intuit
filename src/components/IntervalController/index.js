import { GridItem, Text, Input, Button, HStack } from '@chakra-ui/react';
import React from 'react';

const IntervalController = ({ onIntervalChange = () => {} }) => {
  const [interval, setInterval] = React.useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    if (interval) {
      onIntervalChange(parseInt(interval));
    }
  };
  return (
    <GridItem colSpan={12}>
      <HStack as="form" alignItems="center" onSubmit={handleSubmit}>
        <Text>Interval:&nbsp;</Text>
        <Input
          value={interval}
          onChange={e => setInterval(e.target.value)}
          type="number"
          placeholder="Change refresh interval"
        />
        <Button type="submit">Change</Button>
      </HStack>
    </GridItem>
  );
};

export default IntervalController;
