import { ChakraProvider } from "@chakra-ui/react";
import RouteApp from "./routes/RouteApp";
import { LoginProvider } from "./contexts/LoginContext";

function App() {
  return (
    <ChakraProvider>
      <LoginProvider>
        <RouteApp />
      </LoginProvider>
    </ChakraProvider>
  );
}

export default App;
