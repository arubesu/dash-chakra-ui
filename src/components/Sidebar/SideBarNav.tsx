import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiEditLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
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
  )
}