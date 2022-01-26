import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

const Tiles = ({ name, value, colSpan = 3, ...rest }) => {
  return (
    <GridItem
      colSpan={colSpan}
      boxShadow="0 0 5px rgba(0,0,0,0.3)"
      borderRadius="md"
      {...rest}
    >
      <Flex direction="column" p="4">
        <Text>{name}:&nbsp;</Text>
        <Text fontWeight="bold">{value}</Text>
      </Flex>
    </GridItem>
  );
};

export default Tiles;
