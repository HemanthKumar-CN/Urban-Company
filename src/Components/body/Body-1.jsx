import {
  Box,
  HStack,
  Image,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../../StyleComponents/body_1.css";
import woman from "../../assets/woman_uc.png";
import { Cities } from "../../assets/Cities";
import { Link, useNavigate } from "react-router-dom";

const Body_1 = () => {
  console.log(Cities);

  const [city, setCity] = useState("");
  const navigate = useNavigate();
  // const history = useHistory();

  // console.log(city);

  const handleChange = (value) => {
    setCity(value);
    localStorage.setItem("location", value);
    navigate(`/${value}`);
  };

  return (
    <div>
      <Box className="hero" pos={"relative"}>
        <Image w={"56%"} src={woman} />

        <Box
          width={"100%"}
          height={"100%"}
          // border={"1px solid yellow"}
          className="text"
          fontWeight={"bold"}
          pos={"absolute"}
          right="0.5"
          top={"0.5"}
        >
          {/* <Text border={"1px solid yellow"}>Sample Text</Text> */}
          <Box
            // border={"1px solid blue"}
            width={"44%"}
            marginLeft={"55%"}
            h={"100%"}
          >
            <VStack gap={5}>
              <Text className="heading">URBAN COMPANY</Text>
              <Text className="subHeading">
                Quality home services, on demand
              </Text>
              <br />
              <Text className="exp" w={"25rem"} textAlign={"left"}>
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
                <Select
                  cursor={"pointer"}
                  placeholder="Select City"
                  value={city}
                  width={"20em"}
                  onChange={(e) => handleChange(e.target.value)}
                >
                  {Cities.map((item, index) =>
                    item.city ? (
                      <option
                        key={index}
                        style={{ cursor: "pointer" }}
                        value={item.city}
                      >
                        {item.city}
                      </option>
                    ) : (
                      <option key={index} disabled value={item.country}>
                        {item.country}
                      </option>
                    )
                  )}
                </Select>
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
