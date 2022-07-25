import { Box, Flex, Image, Input, Select, Text } from "@chakra-ui/react";
import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Flag = ({ setPhoneNumber }) => {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    error: "",
  });

  // const [phNumber, setPhNumber] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountryState({
          ...countryState,
          loading: true,
        });

        const dataUrl = "https://restcountries.com/v3.1/all";
        const response = await axios.get(dataUrl);

        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,

          error: "Sorry Something went wrong",
        });
      }
    };

    fetchData();
  }, []);

  const { loading, countries, error } = countryState;

  const [selectedCountry, setSelectedCountry] = useState();

  //   console.log(loading, countries, error);

  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }

    return false;
  });

  return (
    <Box>
      <Box>
        <Box>
          <Select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            placeholder="Select Country"
            display={"flex"}
            alignItems={"end"}
          >
            {/* <option value="">Select city</option> */}
            {countries.map((item) => {
              return (
                <option key={uuidv4()} value={item.name.common}>
                  {item.name.common}
                </option>
              );
            })}
          </Select>
        </Box>

        {searchSelectedCountry ? (
          <Flex gap={4} mt={"5"}>
            <Box h={"7"} borderBottom={"2px solid"}>
              <Image
                w={10}
                h={5}
                src={searchSelectedCountry && searchSelectedCountry.flags.png}
              />
            </Box>
            <Box h={"7"} borderBottom={"2px solid"}>
              <Text>
                {searchSelectedCountry && searchSelectedCountry.idd.root}
                {searchSelectedCountry && searchSelectedCountry.idd.suffixes}
              </Text>
            </Box>
            <Box>
              <Input
                onChange={(e) => setPhoneNumber("+91" + e.target.value)}
                border={"none"}
                h={"7"}
                borderBottom={"2px solid"}
                type={"tel"}
                placeholder={"Phone"}
              />
            </Box>
          </Flex>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default Flag;
