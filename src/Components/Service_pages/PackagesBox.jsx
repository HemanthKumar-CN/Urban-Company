import React from 'react'
import { Box,Image,Heading } from '@chakra-ui/react'

function PackagesBox(property) {
  return (
    <div>
        <Box maxW='100px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} borderRadius='lg' />

      <Heading as='h7' size='xs'>
      {property.title}
  </Heading>
    </Box>
    </div>
  )
}

export default PackagesBox
