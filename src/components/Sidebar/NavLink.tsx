import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  title: string;
  icon: React.ElementType;
}

export function NavLink({ title, icon, ...rest }: NavLinkProps) {
  return (
    <Link
      display='flex'
      align='center'
      color='gray.100'
      py='1'
      {...rest}
    >

      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{title}</Text>
    </Link>
  )
}