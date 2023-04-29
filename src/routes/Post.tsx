import { BoxProps, Flex, Avatar, FormControl, Input, Divider, Button, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface RegisterFormProps {
  status: string;
}

export function Post() {
  const [status, setStatus] = useState("");

  const handlestatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: RegisterFormProps = {
      status,
    };
    console.log(formData);
    // lakukan pengiriman data ke server atau proses selanjutnya
  };
  return (
    <div>
      <Box w={{ base: "90%", lg: "100%" }} h="auto" boxShadow="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <form onSubmit={handleSubmit}>
          <Box display="flex" alignItems="center" justifyContent="center" m={3}>
            <Avatar />
            <FormControl isRequired p="12px">
              <Input type="text" id="status" placeholder="What's on your main" value={status} onChange={handlestatusChange} />
            </FormControl>
          </Box>
          <Divider />
          <Button type="submit" mt={5} colorScheme="blue" size="lg" w="100%">
            Post
          </Button>
        </form>
      </Box>
    </div>
  );
}
