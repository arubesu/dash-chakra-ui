import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text> Bruno Souza</Text>
        <Text color='gray.300'
          fontSize='small'>bruno.arubesu@gmail.com</Text>
      </Box>

      <Avatar
        size='md'
        name='Bruno Souza'
        src='https://github.com/arubesu.png' />
    </Flex>
  )
}