import React from "react";
import List from "./List";
import { Heading } from "@chakra-ui/react";
export default function PackageContainer({ title, price, time, para }) {
  console.log("para--",para)
  return (
    <div>
      <div>
        {" "}
        <div>
          {" "}
          <Heading as="h6" size="xs" color="skyblue">
            Packages
          </Heading>
          <Heading as="h4" size="md" color="skyblue">
            {title}
          </Heading>
          <p>Rating</p>
          <p>{price}</p>
       
          <List  />

        </div>
        <div>
          <button>add</button>
        </div>
      </div>

      <List />
      <button>Edit</button>
    </div>
  );
}
