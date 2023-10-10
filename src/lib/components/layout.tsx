import { useDisclosure } from "@mantine/hooks";
import { AppShell, Button, Group, Skeleton } from "@mantine/core";
import { MxEditor } from "./editor";

export const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 200 }}>
      <AppShell.Header>where the fuck is this going</AppShell.Header>

      <AppShell.Main>
        <MxEditor />
      </AppShell.Main>
    </AppShell>
  );
};
