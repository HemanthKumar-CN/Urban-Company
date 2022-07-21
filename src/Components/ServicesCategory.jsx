import { Avatar, Box, Button, Container, Image, Text } from "@chakra-ui/react";
import React from "react";


const ServicesCategory = ({data}) => {
  return (
    <Container
      border="1px solid white"
      borderRadius={"5px"}
      boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
      maxW="4xl"
      h="150px"
      mt="-5%"
      bg="white"
      display="flex"
    >
      {data.map((item) => (
        <Button
          h="80%"
          m="auto"
          bg="white"
          display="flex"
          flexDirection={"column"}
          justifyContent="space-around"
          fontSize={'15px'}
          key={item.service}
        >
          <Image src={item.logo} name={item.service} borderRadius />
          <Text>{item.service}</Text>
        </Button>
      ))}
    </Container>
  );
};

export default ServicesCategory;
