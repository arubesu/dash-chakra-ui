import { Box, Button, Flex, Heading, Table, Th, Tr, Td, Thead, Tbody, Checkbox, Text, Icon } from "@chakra-ui/react"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";
import api from "../../services/api";

interface User {
  name: string;
  email: string;
  registered_date: string;
}

export default function UserList() {
  const [users, setUsers] = useState([] as User[])

  useEffect(() => {
    api.get('/api', {
      params: {
        inc: 'name,email,registered',
        results: 10
      }
    }).then(({ data }) => {

      const users = data.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        registered_date: Intl.DateTimeFormat('us-en',
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).format(new Date(user.registered.date))
      }))

      setUsers(users);
    })
  }, [])

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
            <Link href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}>
                Create new
            </Button>
            </Link>
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
              {
                users.map((user => (
                  <Tr key={user.email}>
                    <Td px='6'>
                      <Checkbox colorScheme='pink' />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>{user.name}</Text>
                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                      </Box>
                    </Td>
                    <Td >
                      {
                        user.registered_date
                      }
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
                )))
              }

            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}