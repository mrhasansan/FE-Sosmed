import { Grid, GridItem, Box, FormControl, FormLabel, Input, Button, Stack, Text, Container, Divider } from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";

export function Login() {
  return (
    <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} gap={6} bg="#F0F2F5">
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
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Masukkan alamat email Anda" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Kata Sandi</FormLabel>
              <Input type="password" placeholder="Masukkan kata sandi Anda" />
            </FormControl>
            <Button colorScheme="blue" size="lg" w="100%">
              Log in
            </Button>
            <Divider orientation="horizontal" />
            <Button colorScheme="green" size="lg" w="100%">
              Create New Account
            </Button>
          </Stack>
        </Box>
      </GridItem>
    </Grid>
  );
}
