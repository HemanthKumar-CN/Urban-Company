import React from "react";
import Carousel from "better-react-carousel";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "../../StyleComponents/Home.module.css";



const HomePageCarousel = ({ data,hideArrow}) => {
  return (
    <Box w="80%" m="2% auto " p="22px 0" h='300px' >
      <Carousel cols={4} rows={1} gap={0} loop hideArrow={hideArrow}  >
        {data.map((item, index) => (
          <Carousel.Item key={index} >
            <Flex className={styles.zoom}>
              <Image src={item.logo} borderRadius={"10px"} mt='2%' />
              <br />
              <Text fontWeight={"500"}>{item.services}</Text>
              <Text fontSize={"12px"}>{item.text}</Text>
            </Flex>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomePageCarousel;
