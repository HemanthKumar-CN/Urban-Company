import { Box } from "@chakra-ui/react";
import React from "react";
import HomeTopSection from "../Components/homepage/HomeTopSection";
import HomePageService from "../Components/homepage/HomePageService";


const Home = () => {
  return <Box>
    <HomeTopSection/>
    <HomePageService/>
  </Box>
};

export default Home;
