import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Body_1 from "../Components/body/Body-1";
import Body_2 from "../Components/body/Body_2";
import Body_3 from "../Components/body/Body_3";
import Footer from "../Components/Footer";
import LandingPage_Navbar from "../Components/LandingPg_Navbar";
import Navbar from "../Components/LandingPg_Navbar";

const LandingPage = () => {
  return (
    <>
      <Box>
        <LandingPage_Navbar />
        <Body_1 />
        <Body_2 />
        <Box h={"2.5"} bg={"gray.200"}></Box>
        <Body_3 />
        <Footer />
      </Box>
    </>
  );
};

export default LandingPage;
