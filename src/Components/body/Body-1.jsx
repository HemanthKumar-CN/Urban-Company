import {
  Box,
  HStack,
  Image,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import "../../StyleComponents/body_1.css";
import woman from "../../assets/woman_uc.png";

const Body_1 = () => {
  return (
    <div>
      <Box className="hero" pos={"relative"} border={"1px solid red"}>
        <Image w={"56%"} src={woman} />

        <Box
          width={"100%"}
          height={"100%"}
          border={"1px solid yellow"}
          className="text"
          fontWeight={"bold"}
          pos={"absolute"}
          right="0.5"
          top={"0.5"}
        >
          {/* <Text border={"1px solid yellow"}>Sample Text</Text> */}
          <Box
            border={"1px solid blue"}
            width={"44%"}
            marginLeft={"55%"}
            h={"100%"}
          >
            <VStack>
              <Text className="heading">URBAN COMPANY</Text>
              <Text className="subHeading">
                Quality home services, on demand
              </Text>
              <br />
              <Text className="exp" w={"15rem"} textAlign={"left"}>
                Experienced, hand-picked Professionals to serve you at your
                doorstep
              </Text>
              <br />
              <Box
                bg={"whiteAlpha.900"}
                borderRadius={"8"}
                padding={"5"}
                color={"blackAlpha.900"}
              >
                <Text>Where do you need a service?</Text>
                {/* <br /> */}
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Body_1;
