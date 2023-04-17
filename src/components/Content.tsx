import { Box } from "@chakra-ui/react";
import { Home } from "../pages/Home";
export function Content(): JSX.Element {
  return (
    <Box w={{ base: "90%", lg: "100%" }} h="auto" boxShadow="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Home />
    </Box>
  );
}
