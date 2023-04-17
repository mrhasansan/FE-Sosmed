import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Content } from "./Content";
export function Layout() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }}
      gridTemplateRows={{ base: "auto", lg: "1fr auto 1fr" }}
      gridTemplateAreas={{
        base: `
          "header"
          "content"
          "left"
          "right"
        `,
        lg: `
          "header header header header header header header header header header header header"
          "left left left content content content content content content right right right"
        `,
      }}
      gap={4}
    >
      <Box gridArea="header" bg="white" color="black" p={4} boxShadow="sm">
        <Header />
      </Box>
      <Box gridArea="left" bg="#F0F2F5" color="black" p={4} display={{ base: "none", lg: "block" }}>
        Right
      </Box>
      <Box gridArea="content" bg="white">
        <Content />
      </Box>
      <Box gridArea="right" bg="#F0F2F5" color="black" p={4} display={{ base: "none", lg: "block" }}>
        Left
      </Box>
    </Box>
  );
}
