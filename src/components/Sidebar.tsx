import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiGitMergeLine, RiEditLine } from "react-icons/ri";

export function SideBar() {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>
        <Box>
          <Text
            fontweight='bold'
            color='gray.400'
            fontSize='small'>GENERAL</Text>
          <Stack
            spacing='4'
            mt='8'
            align='stretch'>
            <Link
              display='flex'
              align='center'
              color='gray.100'
              py='1'>

              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Dashboard</Text>
            </Link>
            <Link
              display='flex'
              align='center'
              color='gray.100'
              py='1'>

              <Icon as={RiContactsLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Users</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text
            fontweight='bold'
            color='gray.400'
            fontSize='small'>AUTOMATION</Text>
          <Stack
            spacing='4'
            mt='8'
            align='stretch'>
            <Link
              display='flex'
              align='center'
              color='gray.100'
              py='1'>

              <Icon as={RiEditLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Forms</Text>
            </Link>
            <Link
              display='flex'
              align='center'
              color='gray.100'
              py='1'>

              <Icon as={RiGitMergeLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Automation</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}