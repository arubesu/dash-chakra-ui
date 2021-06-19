import { Icon } from "@chakra-ui/core";
import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar"

export function Header() {
  const { onOpen } = useSidebarDrawer()
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
      {!isLargeScreen && (
        <IconButton
          aria-label='open navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        >

        </IconButton>
      )}


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