import { useState } from "react";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

interface RegisterFormProps {
  userName: string;
  email: string;
  password: string;
}

export function Register() {
  const [userName, setuserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleuserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: RegisterFormProps = {
      userName,

      email,
      password,
    };
    console.log(formData);
    // lakukan pengiriman data ke server atau proses selanjutnya
  };

  return (
    <>
      <Box maxWidth={400} mx="auto" mt={10} p={5} borderWidth={1} borderRadius={5}>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="userName">Username:</FormLabel>
            <Input type="text" id="userName" value={userName} onChange={handleuserNameChange} />
          </FormControl>
          <FormControl isRequired mt={3}>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input type="email" id="email" value={email} onChange={handleEmailChange} />
          </FormControl>
          <FormControl isRequired mt={3}>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </FormControl>
          <Button type="submit" mt={5} colorScheme="blue">
            Register
          </Button>
        </form>
      </Box>
    </>
  );
}
