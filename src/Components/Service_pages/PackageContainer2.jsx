import React from "react";
import List from "./List";
import { Heading,Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Redux/Services/action";

export default function PackageContainer2({ title, price, time, para }) {
 
  const dispatch = useDispatch()

  
   


  const handaleadd=(title,price,para,time)=>{
const payload={title,price,time,para,id:"1",count:1}
console.log(payload)
dispatch(addProducts(payload))
  }

  
  return (
    <div style={{ width: "100%", border: "1px solid grey",marginBottom:"10px" ,borderRadius:"10px",padding:"30px"}}>
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
            <List para={time}  textAlign="right"/>
          </div>
        </div>
        <div>
        <Button colorScheme='blue' variant='outline'  onClick={()=>handaleadd(title,price,para,time)}>
    Add
  </Button>
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
