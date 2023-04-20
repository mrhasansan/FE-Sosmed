import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Navleft } from "./Navleft";
import { Navright } from "./Navright";
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
      bg="#F0F2F5"
    >
      <Box gridArea="header" bg="white" color="black" p={4} boxShadow="sm">
        <Header />
      </Box>
      <Box gridArea="left" color="black" p={4} display={{ base: "none", lg: "block" }}>
        <Navleft />
      </Box>
      <Box gridArea="content" p={4}>
        <Content />
      </Box>
      <Box gridArea="right" color="black" p={4} display={{ base: "none", lg: "block" }}>
        <Navright />
      </Box>
    </Box>
  );
}
