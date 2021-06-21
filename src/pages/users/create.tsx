import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";

interface CreateUserFormInput {
  name: string;
  password: string;
  email: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8, 'Password is too short - should be 8 chars minimum.'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'Password confirmation does not match the password')
})

export default function CreateUser() {
  const {
    handleSubmit,
    register,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<CreateUserFormInput>({
    resolver: yupResolver(createUserFormSchema)
  })

  const onCreateUser: SubmitHandler<CreateUserFormInput> = async (values) => {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 500)
    })
  }

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
          as='form'
          flex='1'
          borderRadius={8}
          bg='gray.800'
          p='8'
          onSubmit={handleSubmit(onCreateUser)}
        >

          <Heading size='lg' fontWeight='normal'>Create user</Heading>
          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid
              minChildWidth='240px'
              spacing='8'
              w='100%'>
              <Input
                name='name'
                label='Name'
                error={errors.name}
                {...register('name')} />
              <Input
                name='email'
                type='email'
                label='E-mail'
                error={errors.email}
                {...register('email')} />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth='240px'
              spacing='8'
              w='100%'>
              <Input
                name='password'
                type='password'
                label='Password'
                error={errors.password}
                {...register('password')} />
              <Input
                name='password_confirmation'
                type='password'
                label='Password Confirmation'
                error={errors.password_confirmation}
                {...register('password_confirmation')} />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button colorScheme='whiteAlpha'>
                  Cancel
              </Button>
              </Link>
              <Button
                type='submit'
                colorScheme='pink'
                isLoading={isSubmitting}
              >
                Confirm
              </Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
}