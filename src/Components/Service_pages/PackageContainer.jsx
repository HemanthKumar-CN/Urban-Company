import React from "react";
import List from "./List";
import { Heading,Button } from "@chakra-ui/react";
export default function PackageContainer({ title, price, time, para }) {
  // console.log("para--",para)
  return (
    <div style={{ width: "100%", border: "1px solid blue" }}>
      <Heading as="h6" size="xs" color="rgb(6, 153, 163)">
        PACKAGE
      </Heading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
          
        }}
      >
        {" "}
        <div style={{borderBottom: "1.5px solid rgb(15, 15, 15) ",}}>
          {" "}
          <Heading
            color="rgb(15, 15, 15)"
            fontFamily="os_bold"
            fontWeight="700"
            maxWidth="90%"
            size="md"
          >
            {title}
          </Heading>
          <p>🌟 4.5(10M)</p>
          <div style={{ display: "flex" }}>
            {" "}
            <p>{price}</p>
            <List para={time} />
          </div>
        </div>
        <div>
          <button>add</button>
        </div>
      </div>

      <div style={{ textAlign: "left" }}>
        {para != undefined
          ? para.map((val, index) => {
              return (
                <>
                  <List key={index} para={val.para} />
                </>
              );
            })
          : ""}

        {/* <List /> */}
        <Button colorScheme='black' variant='outline' >
    Edit your package
  </Button>
      </div>
    </div>
  );
}
