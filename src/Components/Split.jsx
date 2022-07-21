import React from 'react'
import "./VideoCarousel.css";
import { Button,Heading} from '@chakra-ui/react'
import VideoCarousel from './VideoCarousel'

function Split() {
  return (
    <div>
     <div className="container">
    <div id="child1">
    <Button colorScheme='Black' variant='outline'>
    UC Safe
  </Button>
  <br/>
  <br/>
    <Heading as='h2' size='2xl'>
    Salone For Men
  </Heading>
  <br/>
  <p>🌟 4.5(10M)</p>
    </div>
    <div id="child2">
         <VideoCarousel/>
      
    </div>


</div>
    </div>
  )
}

export default Split
