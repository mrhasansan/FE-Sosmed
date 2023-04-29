import {
  Input,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Grid,
  GridItem,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { FaFacebook, FaHome, FaYoutube, FaUsers, FaFacebookMessenger, FaBell, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineShop, AiOutlineSearch } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";

import { Chat } from "../components/Chat";
import { useAuth } from "../contexts/useAuth";

export function Header() {
  const [showInput, setShowInput] = useState(false);
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    setShowInput(!showInput);
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Grid templateColumns="1fr 2fr 1fr" bg="white">
        <GridItem w="100%" h="10">
          <Box bg="white" h="100%" w="100%" display="flex" alignItems="center" justifyContent="felx-start">
            <FaFacebook size={28} color="#1877F2" />
            <IconButton aria-label="Search" icon={<AiOutlineSearch />} onClick={handleClick} bg="transparant" />
            {showInput || <Input type="text" placeholder="Search ..." marginLeft={2} marginRight={2} />}
          </Box>
        </GridItem>
        <GridItem w="100%" h="10" display={{ base: "none", md: "block" }}>
          <Box bg="transparant" h="100%" w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Button bg="transparant">
              <Link to="/home">
                <FaHome size={28} />
              </Link>
            </Button>
            <Button bg="transparant">
              <Link to="/">
                <FaYoutube size={28} />
              </Link>
            </Button>
            <Button bg="transparant">
              <Link to="/">
                <AiOutlineShop size={28} />
              </Link>
            </Button>
            <Button bg="transparant">
              <Link to="/profile">
                <FaUsers size={28} />
              </Link>
            </Button>
          </Box>
        </GridItem>
        <GridItem w="100%" h="10">
          <Box bg="transparant" h="100%" w="100%" display="flex" alignItems="center" justifyContent="flex-end">
            <Popover>
              <PopoverTrigger>
                <Button bg="transparant">
                  <FaFacebookMessenger size={28} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Chat</PopoverHeader>
                <PopoverBody>
                  Inbox
                  <Chat />
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Button bg="transparant">
              <Link to="/">
                <FaBell size={28} />
              </Link>
            </Button>
            <Menu>
              {user && <p>{user.userName}</p>}
              <MenuButton as={Button} colorScheme="transparant">
                <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>
                    <Link to="/profile">My Account</Link>
                  </MenuItem>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>
                    {user && (
                      <>
                        <FaSignOutAlt size={24} />
                        <span onClick={handleLogoutClick}>Logout</span>
                      </>
                    )}
                    <Box display="flex"></Box>
                  </MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}
