import { ChakraProvider } from "@chakra-ui/react";

import RouteApp from "./routes/RouteApp";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <RouteApp />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
