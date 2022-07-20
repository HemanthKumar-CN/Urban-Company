import { Avatar, Box, Button, Container, Image, Text } from "@chakra-ui/react";
import React from "react";

const cardData = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
    service: "Salon For Women",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png",
    service: "Hair, Skin & Nails",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
    service: "Women's Therapies",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
    service: "Salon For Men",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
    service: "Men's Therapies",
  },
];

const ServicesCategory = () => {
  return (
    <Container
      border="1px solid white"
      borderRadius={"5px"}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      maxW="4xl"
      h="150px"
      mt="-5%"
      bg="white"
      display="flex"
    >
      {cardData.map((item) => (
        <Button
          h="80%"
          m="auto"
          bg="white"
          colorScheme="gray"
          display="flex"
          flexDirection={"column"}
          justifyContent="space-around"
          fontSize={'15px'}
        >
          <Image src={item.logo} name={item.service} borderRadius />
          <Text>{item.service}</Text>
        </Button>
      ))}
    </Container>
  );
};

export default ServicesCategory;
