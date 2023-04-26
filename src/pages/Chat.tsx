import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { OpenAIApi, Configuration } from "openai";

type Message = {
  id: number;
  text: string;
};
const apiKey = "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";
const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, input: string, setOutput: React.Dispatch<React.SetStateAction<string>>): Promise<void> => {
    e.preventDefault();
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: input,
      max_tokens: 100,
    });

    const outputText = response.data.choices[0].text;
    if (outputText !== undefined) {
      setOutput(outputText);
    } else {
      setOutput("");
    }
  };
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
