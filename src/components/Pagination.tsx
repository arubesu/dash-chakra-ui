import { Box, Button, HStack, Text } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'>

      <Box>
        <Text as='strong'> 3 </Text>
        -
        <Text as='strong'> 10 </Text>
        de
        <Text as='strong'> 100 </Text>
      </Box>
      <HStack spacing='2'>
        <Button
          size='sm'
          fontSize='xs'
          colorScheme='pink'
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',
          }}>
          1
      </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bgColor: 'gray.500',
          }}>
          2
      </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bgColor: 'gray.500',
          }}>
          3
      </Button>
        <Button
          size='sm'
          fontSize='xs'
          width='4'
          bg='gray.700'
          _hover={{
            bgColor: 'gray.500',
          }}>
          4
      </Button>
      </HStack>
    </HStack>
  )
}