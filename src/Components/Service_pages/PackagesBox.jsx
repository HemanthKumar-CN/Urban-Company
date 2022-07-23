import React from 'react'
import { Box,Image,Heading } from '@chakra-ui/react'

function PackagesBox({image,para}) {
  console.log("props-",image,para)
  return (
    <div color='red'>
        <Box maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={image} borderRadius='lg' />

      <Heading as='h7' size='xs'>
      {para}
  </Heading>
    </Box>
    </div>
  )
}

export default PackagesBox
