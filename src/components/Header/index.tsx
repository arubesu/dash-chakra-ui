import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar"

export function Header() {
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Logo />
      {isLargeScreen && <SearchBar />}
      <Flex
        align='center'
        ml='auto'
      >
        <NotificationsNav />
        <Profile showProfileData={isLargeScreen} />
      </Flex>
    </Flex >
  )
}