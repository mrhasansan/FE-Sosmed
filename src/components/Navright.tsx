import { Box, List, ListItem, ListIcon, Divider } from "@chakra-ui/react";

import { FcBusinessContact } from "react-icons/fc";

const items = [
  { text: "Malaka", icon: FcBusinessContact },
  { text: "Lisa", icon: FcBusinessContact },
  { text: "Alam", icon: FcBusinessContact },
];

export function Navright() {
  return (
    <div>
      <Box paddingBottom={4}>
        <h1>Birthday</h1>
        <p>Mustofa and 4 others have their birthdays today</p>
      </Box>
      <Divider borderColor="blue.500" />
      <Box paddingTop={4}>
        <h1>Contact</h1>
        <List spacing={5}>
          {items.map(({ text, icon: Icon }) => (
            <ListItem key={text} display="flex" alignItems="center">
              <ListIcon as={Icon} color="#4267B2" boxSize={8} />
              {text}
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
