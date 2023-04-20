import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaUserFriends, FaUsers, FaUserClock, FaStore, FaYoutube, FaHistory, FaStar, FaFacebookMessenger, FaGamepad, FaCalendarCheck } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

const items = [
  { text: "Friends", icon: FaUserFriends },
  { text: "Groups", icon: FaUsers },
  { text: "Most recent", icon: FaUserClock },
  { text: "Marketplace", icon: FaStore },
  { text: "Watch", icon: FaYoutube },
  { text: "Memories", icon: FaHistory },
  { text: "Favourite", icon: FaStar },
  { text: "Messenger", icon: FaFacebookMessenger },
  { text: "ChatGPT", icon: SiOpenai },
  { text: "Games", icon: FaGamepad },
  { text: "Events", icon: FaCalendarCheck },
];
export function Navleft() {
  return (
    <div>
      <Box>
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
