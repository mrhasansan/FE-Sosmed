import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

type Message = {
  id: number;
  text: string;
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessage = () => {
    if (newMessage) {
      const id = messages.length + 1;
      const message: Message = { id, text: newMessage };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };
  return (
    <div>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" p="4">
        <Box h="400px" overflowY="scroll">
          {messages.map((message) => (
            <Flex key={message.id} mb="2">
              <Box p="2" bgColor="gray.100" borderRadius="lg">
                <Text>{message.text}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Flex mt="4">
          <Input flex="1" mr="2" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <Button onClick={handleNewMessage}>Send</Button>
        </Flex>
      </Box>
    </div>
  );
}
