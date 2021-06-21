import { Box, HStack, Text } from "@chakra-ui/react";
import { PageButton } from "./PageButton";

export function Pagination() {
  return (
    <HStack
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'>

      <Box>
        <Text as='strong'> 1 </Text>
        -
        <Text as='strong'> 10 </Text>
        de
        <Text as='strong'> 100 </Text>
      </Box>
      <HStack spacing='2'>
        <PageButton pageNumber={1} isActive={true} />
        <PageButton pageNumber={2} />
        <PageButton pageNumber={3} />
        <PageButton pageNumber={4} />
        <PageButton pageNumber={5} />
      </HStack>
    </HStack>
  )
}