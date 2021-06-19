import { Box, Button, Flex, Heading, Table, Th, Tr, Td, Thead, Tbody, Checkbox, Text, Icon } from "@chakra-ui/react"
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'
      >
        <SideBar />
        <Box
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p='8'>
          <Flex
            mb='8'
            justify='space-between'
            align='center'>

            <Heading
              size='lg'
              fontWeight='normal'
            >
              Users
            </Heading>
            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='pink'
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}>
              Create new
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' width='8'>
                  <Checkbox colorScheme='pink'></Checkbox>
                </Th>
                <Th >User</Th>
                <Th>Register Date</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Bruno Souza</Text>
                    <Text fontSize='sm' color='gray.300'>bruno.arubesu@gmail.com</Text>
                  </Box>
                </Td>
                <Td >
                  July 15th, 2021
                </Td>
                <Td >
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}>
                    Edit
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Bruno Souza</Text>
                    <Text fontSize='sm' color='gray.300'>bruno.arubesu@gmail.com</Text>
                  </Box>
                </Td>
                <Td >
                  July 15th, 2021
                </Td>
                <Td >
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}>
                    Edit
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Bruno Souza</Text>
                    <Text fontSize='sm' color='gray.300'>bruno.arubesu@gmail.com</Text>
                  </Box>
                </Td>
                <Td >
                  July 15th, 2021
                </Td>
                <Td >
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='purple'
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}>
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}