import { Grid, GridItem, Box, FormControl, FormLabel, Input, Button, Stack, Text, Container, Divider, Modal, ModalOverlay, ModalBody, ModalHeader, ModalContent, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Register } from "./Register";
import Axios from "axios";
import { API_URL } from "../Helper";

interface RegisterFormProps {
  email: string;
  password: string;
}

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: RegisterFormProps = {
      email,
      password,
    };
    console.log(formData);
    // lakukan pengiriman data ke server atau proses selanjutnya

    Axios.post(API_URL + `/users/login`, {
      email,
      password,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("sosmed", response.data.token);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        if (!err.response.data.success) {
          alert(err.response.data.message);
        }
        console.log("check error", err);
        console.log(err);
      });
  };

  return (
    <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} gap={6} bg="#F0F2F5" h="100%">
      <GridItem height="auto">
        <Box maxW={{ base: "md", md: "lg", lg: "2xl" }} mx="auto" mt={8} p={{ base: 4, md: 6, lg: 8 }} borderRadius={8}>
          <Container bg="transparant" borderRadius="md" padding="6" textAlign="justify">
            <Text fontSize="60px" fontWeight="bold" mb="2" color="#1877f2">
              facebook
            </Text>
            <Text fontSize="xl" mb="2">
              Facebook helps you connect and share with the people in your life.
            </Text>
          </Container>
        </Box>
      </GridItem>
      <GridItem height="auto">
        <Box maxW={{ base: "md", md: "lg", lg: "xl" }} mx="auto" mt={6} p={{ base: 4, md: 6, lg: 8 }}>
          <Stack spacing={4} padding="8" bg="white" borderWidth={1} borderRadius={8}>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mt={3}>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input type="email" id="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
              </FormControl>
              <FormControl isRequired mt={3}>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              </FormControl>
              <Button type="submit" mt={5} colorScheme="blue" size="lg" w="100%">
                Log in
              </Button>
            </form>
            <Divider orientation="horizontal" />
            <Button colorScheme="green" size="lg" w="100%" onClick={onOpen}>
              Create New Account
            </Button>
          </Stack>
        </Box>
      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Register />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Grid>
  );
}
