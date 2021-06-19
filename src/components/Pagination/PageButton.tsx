import { Button } from "@chakra-ui/react";

interface PageButtonProps {
  pageNumber: number;
  isActive?: boolean;
}

export function PageButton({ pageNumber, isActive = false }: PageButtonProps) {
  return isActive ?
    (
      <Button
        size='sm'
        fontSize='xs'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default',
        }}>
        {pageNumber}
      </Button>
    ) :
    (

      <Button
        size='sm'
        fontSize='xs'
        width='4'
        bg='gray.700'
        _hover={{
          bgColor: 'gray.500',
        }}>
        {pageNumber}
      </Button>
    )
}