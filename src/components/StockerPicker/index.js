import { Box, Input, Flex, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { CloseIcon } from '@chakra-ui/icons';

const StockerPicker = ({
  value,
  onChange = () => {},
  onSelect = () => {},
  onSearch = () => {},
  placeholder = '',
  results = [],
}) => {
  const ref = React.useRef();
  const inputRef = React.useRef();
  const [openDropdown, setOpenDropdown] = React.useState(false);

  React.useEffect(() => {
    if (results.length > 0) setOpenDropdown(true);
    else setOpenDropdown(false);
  }, [results]);

  const handleSelection = result => {
    setOpenDropdown(false);
    onSelect(result);
  };

  const handleSearch = e => {
    onChange(inputRef.current.value);
  };

  const handleClickSearch = () => {
    onSearch(inputRef.current.value);
    setOpenDropdown(false);
  };

  const handleClear = () => {
    inputRef.current.value = '';
    onChange('');
  };

  const whenClickedOutside = e => {
    if (openDropdown && !ref.current.contains(e.target)) {
      setOpenDropdown(false);
    }
  };

  React.useEffect(() => {
    if (!ref.current) return;
    document.addEventListener('click', whenClickedOutside);
    return () => document.removeEventListener('click', whenClickedOutside);
  }, [ref]);

  return (
    <Box ref={ref}>
      <Flex {...{ ...attributes.inputWrapper }}>
        <Box pos="relative" flex="1">
          <Input
            ref={inputRef}
            placeholder={placeholder}
            value={value}
            onChange={handleSearch}
            type="text"
            borderRightRadius={0}
          />
          {inputRef.current?.value && (
            <Box {...{ ...attributes.clear }} onClick={handleClear}>
              <CloseIcon w={4} h={4} />
            </Box>
          )}
        </Box>
        <Button borderLeftRadius={0} onClick={handleClickSearch}>
          Search
        </Button>
      </Flex>
      {openDropdown && (
        <Box pos="relative">
          <Flex {...{ ...attributes.list }}>
            {results.map((result, i) => (
              <Flex
                onClick={() => handleSelection(result)}
                key={result.symbol + i}
                {...{ ...attributes.listItem }}
              >
                <Box>
                  <Text fontWeight="bold">{result?.symbol}</Text>
                </Box>
                <Box>
                  <Text>{result?.name}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

const attributes = {
  inputWrapper: {
    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
    borderRadius: 'md',
    overflow: 'hidden',
  },
  clear: {
    pos: 'absolute',
    top: '0',
    right: '0',
    zIndex: 'docked',
    transform: 'translate(-50%, 25%)',
    cursor: 'pointer',
  },
  list: {
    as: 'ul',
    pos: 'absolute',
    top: '4',
    left: '0',
    w: 'full',
    borderRadius: 'md',
    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
    bg: 'white',
    direction: 'column',
    zIndex: 'dropdown',
  },
  listItem: {
    cursor: 'pointer',
    w: 'full',
    as: 'li',
    p: '2',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    _hover: { backgroundColor: '#eee' },
  },
};

export default StockerPicker;
