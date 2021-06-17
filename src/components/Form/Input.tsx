import {
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  Input as ChakraInput,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor='gray.900'
        borderColor='gray.900'
        variant='filled'
        _hover={{
          bgColor:
            'gray.900'
        }}
        size='lg'
        {...rest}
      >

      </ChakraInput>
    </FormControl>
  )
}