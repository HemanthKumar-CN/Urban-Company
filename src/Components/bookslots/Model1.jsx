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
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { VscTriangleUp } from "react-icons/vsc";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useState } from "react";
import styles from "../../StyleComponents/Payment.module.css";
import { loadData, saveData } from "../../Utils/localstorage";

const schedule = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];
const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let localday = saveData("bookDay", "");
let localtime = saveData("time", "");
let localdate = saveData("bookDate");
const date = new Date();
const month = date.getMonth();
const currentDay = date.getDay();
let curMonth = "";
months.map((el, i) => {
  if (i === month) curMonth = el;
});
const Model1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modelOpen, setModelOpen] = useState(false);
  const toast = useToast();
  const [trig, setTrig] = useState(-1);
  const [t, setT] = useState(-1);
  const modelClose = () => {
    setModelOpen(false);
  };
  const modelOp = () => {
    setModelOpen(true);
  };

  const addDate = (date, day) => {
    setTrig(date);
    saveData("bookDate", date);
    saveData("bookDay", day);
  };
  const addTime = (time, index) => {
    saveData("time", time);
    setT(index);
  };

  const payData = () => {
    localday = loadData("bookDay");
    localdate = loadData("bookDate");
    localtime = loadData("time");
    if (localday && localtime && localdate) {
      onClose();
      modelOp();
    } else {
      toast({
        title: "Booking Failed",
        description: "Select both Date and Time",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button
        onClick={() => {
          setTrig(-1);
          setT(-1);
          saveData("bookDate", "");
          saveData("time", "");
          onOpen();
        }}
      >
        Trigger modal
      </Button>

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
                      className={`${styles.dateBox} ${
                        trig === date.getDate() ? styles.selected : ""
                      }`}
                      onClick={() => {
                        addDate(date.getDate(), el);
                      }}
                    >
                      <Text>{el}</Text>
                      <Text fontWeight={"bolder"}>{date.getDate()}</Text>
                    </Box>
                    <Box
                      className={`${styles.dateBox}
                        ${trig === date.getDate() + 1 ? styles.selected : ""}`}
                      onClick={() => {
                        addDate(date.getDate() + 1, days[ind + 1]);
                      }}
                    >
                      <Text>
                        {ind + 1 > 7 ? `${days[0]}` : `${days[ind + 1]}`}
                      </Text>
                      <Text fontWeight={"bolder"}>{date.getDate() + 1}</Text>
                    </Box>
                    <Box
                      className={`${styles.dateBox}
                        ${trig === date.getDate() + 2 ? styles.selected : ""}`}
                      onClick={() => {
                        addDate(date.getDate() + 2, days[ind + 2]);
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
              <Flex className={styles.note}>
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
                {schedule.map((time, index) => (
                  <Box
                    key={index}
                    onClick={() => addTime(time, index)}
                    className={`${styles.scheduleBox} ${
                      index === t ? `${styles.selected}` : ""
                    }`}
                  >
                    {time}
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => payData()} w="100%" colorScheme={"purple"}>
              Make Payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Payment done model */}

      <Modal onClose={modelClose} isOpen={modelOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontWeight={"700"}
            color="purple.500"
            textAlign={"center"}
          >
            Payment Successfull
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h5" size="15px" mb="2%">
              Your Booking Details
            </Heading>
            <Text fontWeight={"500"}>
              Date of Booking : {`${localdate} ${curMonth} `}
            </Text>
            <Text fontWeight={"500"}>Day : {localday}</Text>
            <Text fontWeight={"500"}>Time : {localtime}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={modelClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Model1;
