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
} from "@chakra-ui/react";

import React, { useState } from "react";
import { authentication } from "../Utils/Firebase-config";
import PhoneInput from "react-phone-number-input";
// import "../StyleComponents/phone.css";

export function Login() {
  const countryCode = "+91";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [phoneNumber, setPhoneNumber] = useState(countryCode);

  const [expandForm, setExpandForm] = useState(false);

  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true);

      //   window.recaptchaVerifier = new RecaptchaVerifier(
      //     "sign-in-button",
      //     {
      //       size: "invisible",
      //       callback: (response) => {
      //         // reCAPTCHA solved, allow signInWithPhoneNumber.
      //       },
      //     },
      //     authentication
      //   );
    }
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="blackAlpha.900" onClick={onOpen}>
        Login/Signup
      </Button>
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
            <HStack>
              <SelectField>
                <option> &#x1F1EE;&#x1F1F3;</option>
              </SelectField>
              <Input value={phoneNumber} placeholder="Your phone number" />
            </HStack>

            <br />
            <Button>Continue</Button>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            {/* <Button colorScheme="blue">Login</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
