import React from "react";
import Carousel from "better-react-carousel";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "../../StyleComponents/Home.module.css";
import { useNavigate } from "react-router-dom";



const HomePageCarousel = ({ data,hideArrow}) => {
  const navigate=useNavigate()
  const handleClick=(index)=>{
    navigate(`/:city/${index}/services`)
  }
  return (
    <Box w="80%" m="2% auto " p="22px 0" h='300px' >
      <Carousel cols={4} rows={1} gap={0} hideArrow={hideArrow} loop={false} >
        {data.map((item, index) => (
          <Carousel.Item key={index} cols={1} >
            <Flex className={styles.zoom}>
              <Image src={item.logo} borderRadius={"10px"} mt='2%' onClick={()=>handleClick(index)}  />
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
