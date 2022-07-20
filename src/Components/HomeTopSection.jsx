import {
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { BsFlagFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import ServicesCategory from "./ServicesCategory";

const HomeTopSection = () => {
  return (
    <Box>
      <Box
        h="36rem"
        background='linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url("https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg")'
        backgroundSize={"100%"}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Container color="whitesmoke" fontSize={"12px"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Selected city</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        <Heading
          as={"h1"}
          fontSize="48px"
          fontWeight="500"
          color="white"
          lineHeight={"72px"}
        >
          Home services, on demand.
        </Heading>
        <br />
        <br />
        <Container maxW="3xl" lineHeight={"24px"}>
          <Flex h="60px" justifyContent={"space-between"}>
            <Flex
              alignItems={"center"}
              bgColor={"whitesmoke"}
              borderRadius="5px"
            >
              I
              <Avatar
                bg="whitesmoke"
                borderRadius
                w="40px"
                h="30px"
                icon={<BsFlagFill fontSize="1.5rem" />}
              />
              <Text>Selected Country</Text>
              <Popover isLazy>
                <PopoverTrigger>
                  <Button>
                    <GoTriangleDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent mt='3%' w="50vh" h='150px' >
                  <PopoverHeader fontWeight="semibold">
                    <Flex justifyContent={"space-around"} alignItems="center">
                      <GrLocation />
                      <Text>Current Location</Text>
                      <Text color="purple.600">detect using gps </Text>
                    </Flex>
                  </PopoverHeader>
                  <PopoverArrow ml='-10rem' />
                  <PopoverCloseButton />
                  <PopoverBody mt='3%' h='40%' >
                    <Flex w="100%" h="100%">
                      <Button
                        borderRadius={"5px 0 0 5px"}
                        h="100%"
                        bg="whitesmoke"
                      >
                        <AiOutlineSearch />
                      </Button>
                      <Input
                        fontSize="15px"
                        w="100%"
                        autoFocus
                        borderRadius={"0 5px 5px 0"}
                        h="100%"
                        bg="whitesmoke"
                        focusBorderColor="none"
                        outline='none'
                        placeholder="Search for Society/ Appartment.."
                      />
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Flex w="70%" h="100%">
              <Button borderRadius={"5px 0 0 5px"} h="100%" bg="whitesmoke">
                <AiOutlineSearch />
              </Button>
              <Input
                w="100%"
                borderRadius={"0 5px 5px 0"}
                h="100%"
                bg="whitesmoke"
                focusBorderColor="none"
                placeholder="Search for services"
              />
            </Flex>
          </Flex>
        </Container>
        <br />
        <Container color="white" marginLeft="37%">
          <Breadcrumb separator=",">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Women's Therapies</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Salon for Men</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Men's Therapies</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>
        <ServicesCategory/>
    </Box>
  );
};

export default HomeTopSection;
