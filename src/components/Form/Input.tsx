import {
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  Input as ChakraInput,
  FormErrorMessage,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputForwardRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  ({ name, label, error = null, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput
          name={name}
          id={name}
          focusBorderColor='gray.900'
          borderColor='gray.900'
          bg='gray.900'
          variant='filled'
          _hover={{
            bgColor:
              'gray.900'
          }}
          size='lg'
          {...rest}
          ref={ref}
        />

        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    )
  }

export const Input = forwardRef(InputForwardRef)