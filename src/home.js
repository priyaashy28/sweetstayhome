import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./navbar.css";

import { Carousel } from "react-responsive-carousel";
import React from "react";

export default function Home() {
  return (
    <Carousel
      autoPlay
      showStatus={false}
      showThumbs={false}
      width="40%"
      className="homeAlign"
      infiniteLoop
    >
      <div>
        <img src="images/image1.jpg" alt="sweet stay" />
      </div>
      <div>
        <img src="images/image2.jpg" alt="sweet stay" />
      </div>
      <div>
        <img src="images/image3.jpg" alt="sweet stay" />
      </div>
      <div>
        <img src="images/image4.jpg" alt="sweet stay" />
      </div>
      <div>
        <img src="images/image5.jpg" alt="sweet stay" />
      </div>
      <div>
        <img src="images/image6.jpg" alt="sweet stay" />
      </div>
      <div>
        <img src="images/image7.jpg" alt="sweet stay" />
      </div>
      <div>
        <img src="images/image8.jpg" alt="sweet stay" />
      </div>
      <div>
        <img src="images/image9.jpg" alt="sweet stay" />
      </div>
    </Carousel>
  );
}
