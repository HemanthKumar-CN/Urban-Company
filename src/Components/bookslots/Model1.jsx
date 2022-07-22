import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { VscTriangleUp } from "react-icons/vsc";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useState } from "react";
import styles from "../../StyleComponents/Payment.module.css";
import { loadData, saveData } from "../../Utils/localstorage";

const dateBox = {
  border: "1px solid #ececec",
  borderRadius: "10px",
  h: "65px",
  w: "65px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  cursor: "pointer",
};

const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const Model1 = () => {
  const date = new Date();
  const currentDay = date.getDay();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modelOpen, setModelOpen] = useState(false);
  const [trig1, setTrig1] = useState(false);
  const [trig2, setTrig2] = useState(false);
  const [trig3, setTrig3] = useState(false);

  const modelClose = () => {
    setModelOpen(false);
  };
  const modelOp = () => {
    setModelOpen(true);
  };

  const addDate = (date, day) => {
    saveData("bookDate", { date, day });
  };
  const addTime = (time) => {
    saveData("time", time);
  };
  const payData = () => {
    let d = loadData("bookDate");
    let t = loadData("time");
    console.log(d, t);
  };
  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} size={"3xl"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex justifyContent={"space-between"}>
              <FaHome color="purple" />
              <Text m={"1rem 24rem 0 0"}>Home- selected city</Text>
              <FaAngleRight />
            </Flex>
            <Divider mt="1%" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h4" size="md">
              Select date of service
            </Heading>
            <Text>Your service will take approx. 1hr 5 mins</Text>
            <Flex w="35%" mt="2%" justifyContent={"space-between"}>
              {days.map((el, ind) =>
                ind + 1 === currentDay ? (
                  <>
                    <Box
                      {...dateBox}
                      className={trig1 ? styles.selected : ""}
                      onClick={() => {
                        addDate(date.getDate(), el);
                        setTrig1(true);
                        setTrig2(false);
                        setTrig3(false);
                      }}
                    >
                      <Text>{el}</Text>
                      <Text fontWeight={"bolder"}>{date.getDate()}</Text>
                    </Box>
                    <Box
                      {...dateBox}
                      className={trig2 ? styles.selected : ""}
                      onClick={() => {
                        addDate(date.getDate() + 1, days[ind + 1]);
                        setTrig1(false);
                        setTrig2(true);
                        setTrig3(false);
                      }}
                    >
                      <Text>
                        {ind + 1 > 7 ? `${days[0]}` : `${days[ind + 1]}`}
                      </Text>
                      <Text fontWeight={"bolder"}>{date.getDate() + 1}</Text>
                    </Box>
                    <Box
                      {...dateBox}
                      className={trig3 ? styles.selected : ""}
                      onClick={() => {
                        addDate(date.getDate() + 2, days[ind + 2]);
                        setTrig1(false);
                        setTrig2(false);
                        setTrig3(true);
                      }}
                    >
                      <Text>
                        {ind + 2 > 7 ? `${days[0]}` : `${days[ind + 2]}`}
                      </Text>
                      <Text fontWeight={"bolder"}>{date.getDate() + 2}</Text>
                    </Box>
                  </>
                ) : (
                  ""
                )
              )}
            </Flex>
            <VscTriangleUp />
            <Box w="100%">
              <Flex
                color="gray"
                h="40px"
                // mt="-2%"
                bg="#fbf6f7 "
                justifyContent={"left"}
                alignItems="center"
                fontSize={"16px"}
                fontWeight="300"
              >
                <AiOutlineCreditCard fontSize={"20px"} />
                <Text mt="2%">
                  Free cancelation till 2 hrs before the booked slot, post that
                  ₹50 chargable
                </Text>
              </Flex>
            </Box>
            <Box mt="5%">
              <Heading as="h4" size="md">
                Time to start the service
              </Heading>
              <SimpleGrid columns={3} rows={3} spacing={10} mt="5%">
                {[
                  "10:00 AM",
                  "11:00 AM",
                  "12:00 PM",
                  "01:00 PM",
                  "02:00 PM",
                  "03:00 PM",
                  "04:00 PM",
                  "05:00 PM",
                  "06:00 PM",
                ].map((time, index) => (
                  <Box
                    key={index}
                    border="1px solid #ececec "
                    h="50px"
                    borderRadius="10px"
                    textAlign={"center"}
                    pt="5%"
                    cursor="pointer"
                    onClick={() => addTime(time)}
                  >
                    {time}
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                payData();
                onClose();
                modelOp();
              }}
              w="100%"
              colorScheme={"purple"}
            >
              Make Payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Button onClick={modelOp}>SECOND</Button> */}

      <Modal onClose={modelClose} isOpen={modelOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody><Lorem count={2} /></ModalBody> */}
          <ModalFooter>
            <Button onClick={modelClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Model1;
