import { Stack } from '@chakra-ui/react'
import { Flex, Button } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface FormInput {
  email: string;
  password: string;
}

type SignInFormData = FormInput;

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8, 'Password is too short - should be 8 chars minimum.'),
});

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<FormInput>({
    resolver: yupResolver(schema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000)
    })
    console.log(values);
  }

  return (
    <Flex
      w='100vw'
      h='100vw'
      align='center'
      justify='center'>

      <Flex
        as='form'
        width='100%'
        bg='gray.800'
        maxW={360}
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing='4'>

          <Input
            name='email'
            type='email'
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />

          <Input
            name='password'
            type='password'
            label='Password'
            error={errors.password}
            {...register('password')}
          />

        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={isSubmitting}
        >
          Sign In
        </Button>

      </Flex>
    </Flex>
  )
}