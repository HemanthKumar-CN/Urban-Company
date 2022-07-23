import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Model1 from "../Components/bookslots/Model1";

const Checkout = () => {
  const [load, setLoad] = useState(false);



 useEffect(() => {
   const timer = setTimeout(() => {
     setLoad(true);
   }, 3000);

   return () => {
     clearTimeout(timer);
   };
 }, []);
  return (
    <Box>
      {load ? (
        <>
          <Box h='500px' w='500px' m='5%' >
            <Image src="https://media4.giphy.com/media/PijzuUzUhm7hcWinGn/giphy_s.gif" alt='auth-img'/>
          </Box>

          <Model1 />
        </>
      ) : (
        <>
          <Heading>Checking User...</Heading>
        </>
      )}
    </Box>
  );
};

export default Checkout;
