import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";

import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      src:"https://drive.google.com/file/d/1Dip22w1t3LKhVuterjnTso8SkDYQUCxC/view?usp=sharing",
    },
    {
      id: 2,
      src:"https://drive.google.com/file/d/1erbzAXbPPjoF1gDifslnodETbyewlc1I/view?usp=sharing"
    },
   
  ];

  return (
    <div className="App">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
              />
              {/* <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;