import { Layout } from "./lib/components/layout";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Layout />
    </MantineProvider>
  );
}

export default App;
