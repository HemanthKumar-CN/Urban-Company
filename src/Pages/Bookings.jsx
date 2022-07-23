import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import BookingButton from "../Components/BookingButton";

import LandingPage_Navbar from "../Components/LandingPg_Navbar";

const Bookings = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box>
      <LandingPage_Navbar />
      <Container mt={"20"} textAlign={"center"} border={"1px solid red"}>
        <Text fontWeight={"bold"} fontSize={"x-large"} letterSpacing={"widest"}>
          My Bookings
        </Text>
        <Flex justifyContent={"center"} mt={"5"}>
          <Button
            bg={"blackAlpha.900"}
            color={"whiteAlpha.900"}
            _hover={{
              background: "whiteAlpha.900",
              color: "blackAlpha.900",
              border: "2px solid black",
            }}
          >
            ONGOING
          </Button>
          <Button
            bg={"whiteAlpha.900"}
            border={"2px solid black"}
            _hover={{
              background: "blackAlpha.900",
              color: "whiteAlpha.900",
              border: "2px solid black",
            }}
          >
            HISTORY
          </Button>
        </Flex>

        <Container mt={"20"}>
          <Text fontWeight={"medium"}>
            You don't have any active projects right now
          </Text>
        </Container>
        <Button
          letterSpacing={"0.6em"}
          bg={"blackAlpha.900"}
          color={"whiteAlpha.900"}
          _hover={{
            background: "whiteAlpha.900",
            color: "blackAlpha.900",
            border: "2px solid black",
          }}
          mt={"5"}
          onClick={handleClick}
        >
          BOOK A SERVICE
        </Button>
      </Container>
      {/* <BookingButton /> */}
    </Box>
  );
};

export default Bookings;
