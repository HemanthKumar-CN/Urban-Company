import { Box } from "@chakra-ui/react";
import React from "react";
import HomePageNav from "../Components/HomePageNav";
import HomePageService from "../Components/HomePageService";
import HomeTopSection from "../Components/HomeTopSection";

const Home = () => {
  return <Box>
    <HomeTopSection/>
    <HomePageService/>
  </Box>
};

export default Home;
