import { Input, Button, IconButton, Menu, MenuButton, MenuGroup, MenuList, MenuItem, MenuDivider, Avatar, Grid, GridItem, Box } from "@chakra-ui/react";
import { FaFacebook, FaHome, FaYoutube, FaUsers, FaFacebookMessenger, FaBell, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineShop, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(!showInput);
  };
  return (
    <div>
      <Grid templateColumns="1fr 2fr 1fr" bg="white">
        <GridItem w="100%" h="10">
          <Box bg="white" h="100%" w="100%" display="flex" alignItems="center" justifyContent="start">
            <FaFacebook size={28} color="#1877F2" />
            <IconButton aria-label="Search" icon={<AiOutlineSearch />} onClick={handleClick} bg="transparant" />
            {showInput || <Input type="text" placeholder="Search ..." marginLeft={2} marginRight={2} />}
          </Box>
        </GridItem>
        <GridItem w="100%" h="10" display={{ base: "none", md: "block" }}>
          <Box bg="transparant" h="100%" w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Button bg="transparant">
              <Link to="/">
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
          <Box bg="transparant" h="100%" w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Button bg="transparant">
              <Link to="/">
                <AiOutlinePlus size={28} />
              </Link>
            </Button>

            <Button bg="transparant">
              <Link to="/">
                <FaFacebookMessenger size={28} />
              </Link>
            </Button>
            <Button bg="transparant">
              <Link to="/">
                <FaBell size={28} />
              </Link>
            </Button>
            <Menu>
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
                    <NavLink style={{ color: "black" }} className="ps-0" to="/login">
                      <Box display="flex">
                        <FaSignOutAlt size={24} /> <span className="m-2">Logout</span>
                      </Box>
                    </NavLink>
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
