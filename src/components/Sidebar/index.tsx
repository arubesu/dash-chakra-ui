import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiGitMergeLine, RiEditLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBar() {
  return (
    <Box as='aside' w='64' mr='8'>
      <Stack spacing='12' align='flex-start'>

        <NavSection title='GENERAL'>
          <NavLink title='DashBoard' icon={RiDashboardLine} />
          <NavLink title='Users' icon={RiContactsLine} />
        </NavSection>

        <NavSection title='AUTOMATION'>
          <NavLink title='Forms' icon={RiEditLine} />
          <NavLink title='Automation' icon={RiGitMergeLine} />
        </NavSection>

      </Stack>
    </Box>
  )
}