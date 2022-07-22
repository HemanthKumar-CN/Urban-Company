import React from "react";

// const Navbar = () => {
//   return <div>Navbar</div>;
// };

// export default Navbar;

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as Go } from "react-router-dom";
import { Login } from "./Login";

// const Links = ["Blog", "Register as Proffessional", "My Bookings"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      // bg: useColorModeValue("gray.200", "blackAlpha.900"),
    }}
  >
    {children}
  </Link>
);

export default function LandingPage_Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    { title: "Blog", link: "/blog" },
    { title: "Register as Proffessional", link: "/" },
    { title: "My Bookings", link: "/bookings" },
  ];

  return (
    <>
      <Box
        // bg={useColorModeValue("blackAlpha.100", "blackAlpha.900")}
        bg={"blackAlpha.900"}
        color={"whiteAlpha.900"}
        px={4}
        // paddingRight={"250px"}
        // marginRight={"20"}
        w={"100%"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          fontWeight={"bold"}
          justifyContent={"space-around"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            color={"blackAlpha.900"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            border={"1px  red"}
            width={"90%"}
            spacing={8}
            alignItems={"center"}
          >
            <Box>
              <Go to={`/${localStorage.getItem("location")}`}>
                <Image
                  src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
                  width={"30%"}
                />
              </Go>
            </Box>
            <HStack
              as={"nav"}
              spacing={20}
              display={{ base: "none", md: "flex" }}
              // border={"1px solid red"}
            >
              {Links.map((link, index) => (
                <Go to={link.link} key={index}>
                  {link.title}
                </Go>
              ))}
            </HStack>

            {/* <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  color={"whiteAlpha.900"}
                >
                  {"Login"}
                </MenuButton>
                <MenuList color={"blackAlpha.900"}>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </Flex> */}
            <Login />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <Go to={link.link} key={index}>
                  {link.title}
                </Go>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
