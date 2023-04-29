import { Box } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Navleft } from "../components/Navleft";
import { Navright } from "../components/Navright";

import { ActionFunctionArgs, redirect } from "react-router-dom";
import axios from "axios";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = { body: String(formData.get("body")) };
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);

  // FIXME: implement post route, the route itself can retrieve the param
  return redirect(`/posts/${response.data.id}`);
}

export function Home() {
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
