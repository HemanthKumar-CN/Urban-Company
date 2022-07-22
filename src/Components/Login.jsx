import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Checkbox,
  Select,
  HStack,
  SelectField,
  Spacer,
  Box,
  PinInput,
  PinInputField,
  Heading,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../Utils/Firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import Flag from "./Flag";
import { verify } from "../Redux/AuthReducer/action";
// import "../StyleComponents/phone.css";

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [phoneNumber, setPhoneNumber] = useState("");

  const [expandForm, setExpandForm] = useState(false);

  const dispatch = useDispatch();

  const [pin, setPin] = useState(0);

  const Auth = useSelector((state) => state.AuthReducer);

  const { isAuth, isLoading, isError } = Auth;

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const requestOTP = () => {
    // e.preventDefault();
    if (phoneNumber.length >= 10) {
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const verifyPin = (e) => {
    setPin(e);

    if (pin.length === 6) {
      // console.log(pin);

      let confirmationResult = window.confirmationResult;
      // confirmationResult
      //   .confirm(pin)
      //   .then((result) => {
      //     // User signed in successfully.
      //     const user = result.user;
      //     console.log(user.uid);
      //   })
      //   .catch((error) => {
      //     // User couldn't sign in (bad verification code?)
      //     // ...
      //   });

      dispatch(verify(confirmationResult, pin));
    }
  };

  // console.log(pin, pin.length);
  // console.log(phoneNumber);
  // console.log(isAuth);

  return (
    <>
      {isAuth ? (
        <Button colorScheme="blackAlpha.900">Logout - User</Button>
      ) : (
        <Button ref={btnRef} colorScheme="blackAlpha.900" onClick={onOpen}>
          Login/Signup
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Please login to continue</DrawerHeader>

          <DrawerBody>
            <Flag setPhoneNumber={setPhoneNumber} />
            <Button onClick={requestOTP} mt={5} width={"100%"}>
              Continue
            </Button>
            {expandForm ? (
              <Box>
                <Text
                  mt={"5"}
                  mb={"2.5"}
                  fontWeight={"bold"}
                  fontFamily={"sans-serif"}
                >
                  Enter OTP:
                </Text>
                <PinInput onChange={verifyPin}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </Box>
            ) : (
              <></>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" width={"100%"} mr={3} onClick={onClose}>
              Login
            </Button>
            {/* <Button colorScheme="blue">Login</Button> */}
            <div id="recaptcha-container"></div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
