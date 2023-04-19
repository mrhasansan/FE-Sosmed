import { Box, IconButton, Text } from "@chakra-ui/react";

import { FaThumbsUp } from "react-icons/fa";

export function Content(): JSX.Element {
  return (
    <Box w={{ base: "90%", lg: "100%" }} h="auto" boxShadow="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box display="flex" alignItems="center" bg="gray.100" borderRadius="md" p={2} _hover={{ bg: "gray.200", cursor: "pointer" }}>
        <IconButton aria-label="like button" icon={<FaThumbsUp />} size="md" mr={2} />
        <Text fontWeight="bold">Like</Text>
      </Box>
    </Box>
  );
}
