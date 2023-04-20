import { Box, IconButton, Text, Card, CardHeader, Flex, Avatar, Heading, CardBody, Image, Button, CardFooter, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Divider } from "@chakra-ui/react";
import { FaShare, FaRegCommentAlt } from "react-icons/fa";
import { AiFillLike, AiOutlineMore } from "react-icons/ai";
import { Post } from "../pages/Post";

export function Content(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" m={3}>
        <Avatar />
        <Button onClick={onOpen} w="100%" p="12px">
          Create Post
        </Button>
      </Box>
      <Divider m={3} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay p={0} m={0} />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Post />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Card w={{ base: "90%", lg: "100%" }} h="auto" boxShadow="lg" borderRadius="lg" overflow="hidden">
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
            <IconButton variant="ghost" colorScheme="gray" aria-label="See menu" icon={<AiOutlineMore />} />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.</Text>
        </CardBody>
        <Image objectFit="cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Chakra UI" />
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<AiFillLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<FaRegCommentAlt />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<FaShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
