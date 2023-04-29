import { Avatar, FormControl, Input, Divider, Button, Box } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export function Post() {
  return (
    <div>
      <Box w={{ base: "90%", lg: "100%" }} h="auto" boxShadow="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Form method="post" action="/home">
          <Box display="flex" alignItems="center" justifyContent="center" m={3}>
            <Avatar />
            <FormControl isRequired p="12px">
              <Input name="body" type="text" id="body" placeholder="What's on your main" />
            </FormControl>
          </Box>

          <Divider />

          <Button type="submit" mt={5} colorScheme="blue" size="lg" w="100%">
            Post
          </Button>
        </Form>
      </Box>
    </div>
  );
}
