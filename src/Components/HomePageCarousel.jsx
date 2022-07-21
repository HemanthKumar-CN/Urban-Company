import React from "react";
import Carousel from "better-react-carousel";
import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./Home.module.css";



const HomePageCarousel = ({ data, hideArrow }) => {
  return (
    <Box w="80%" m="5% auto " p="25px">
      <Carousel cols={4} rows={1} gap={30} loop hideArrow={hideArrow}>
        {data.map((item,index ) => (
          <Carousel.Item key={index}>
            <Box className={styles.zoom}>
              <Image src={item.logo} borderRadius={"10px"} />
              <br />
              <Text fontWeight={"500"}>{item.text}</Text>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomePageCarousel;
