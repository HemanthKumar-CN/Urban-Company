import React from 'react'
import List from './List'
import { Heading } from '@chakra-ui/react'

export default function PackageContainer2(props) {
  return (
    <div>
        <div> <div>  <Heading as='h7' size='xs' color="skyblue">
    Packages
        </Heading>
        <Heading as='h4' size='md' color="skyblue">
    {props.heading}
        </Heading>
      <p>Rating</p>
      <p>234</p>
      <List para="Time"/></div>
      <div>
        <image href={props.image}/>
        <button>add</button>
        
        </div></div>
       
       <List/>
<button>Edit</button>
    </div>
  )
}
