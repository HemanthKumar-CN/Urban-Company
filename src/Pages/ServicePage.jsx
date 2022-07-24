import React, { useEffect } from "react";
import PackageContainer from "../Components/Service_pages/PackageContainer";
import PackageContainer2 from "../Components/Service_pages/PackageContainer2";
//import PackagesBox from "../Components/Service_pages/PackagesBox";
 import Split from "../Components/Service_pages/Split";
import { useDispatch,useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Services/action";
import { Box,Image,Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";



const ServicePage = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
    const allProduct = useSelector((store) => store?.allProduct)
    useEffect(() => {
        dispatch(getAllProducts())
     
      
    }, [dispatch])

    const handalClick=()=>{
navigate("/:city/summary")
    }
    
    const womensdata=allProduct.data[0]
    // console.log("test-", allProduct.data[0])
    // .Salon_for_women_data[0].Title
    //  console.log("Data- ",womensdata)   
  //   setTimeout(()=>{
  //     const womensdata=allProduct.data[0]
  //     // .Salon_for_women_data[0].Title
  //      console.log(womensdata)
  //  },5000)

  return <div>
     {/* <h1>hello</h1> */}
     {/* {console.log("women--",womensdata!=undefined?womensdata?.Salon_for_women_data[0].package:"nonee")} */}

{womensdata!=undefined? <Split title={womensdata.Salon_for_women_data[0]?.Title} videos={womensdata.Salon_for_women_data[0]?.videos}/> : ''}

    
    <Box display="flex">
    {womensdata!=undefined? 
         
    womensdata.Salon_for_women_data[0].package.map((val,index) =>{
      return(<>
        <Box key={index} maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden' margin="10px" marginBottom="30px">
        <Image src={val.img} borderRadius='lg' />
        <Heading as='h6' size='xs'>
      {val.para}
  </Heading>
    </Box>
      </>)
    })
    : ""}
    
    </Box>
<Box height="500px" width="60%" border="" overflow="auto" marginLeft="30px" marginBottom="10px">
<Box marginBottom="30px" >
    {womensdata!=undefined? 
         
         womensdata.Salon_for_women_data[0].packages_components1.map((val,index) =>{
           return(<>
             <PackageContainer key={index} title={val.title} price={val.price} time={val.time} para={val.para} />
           </>)
         })
         : ""}
         </Box>
<Box marginBottom="30px">
{womensdata!=undefined? 
         
         womensdata.Salon_for_women_data[0].packages_components2.map((val,index) =>{
           return(<>
             <PackageContainer2 key={index} title={val.title} price={val.price} time={val.time} para={val.para} />
           </>)
         })
         : ""}
</Box>
    </Box>

    <Button colorScheme='blue' size='lg' onClick={handalClick}>
    View Cart
  </Button>
   </div>; 
};

export default ServicePage;
