import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiEditLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title='GENERAL'>
        <NavLink href='/dashboard' title='DashBoard' icon={RiDashboardLine} />
        <NavLink href='/users' title='Users' icon={RiContactsLine} />
      </NavSection>

      <NavSection title='AUTOMATION'>
        <NavLink href='/forms' title='Forms' icon={RiEditLine} />
        <NavLink href='/automation' title='Automation' icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}