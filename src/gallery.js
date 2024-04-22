import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import Image1 from "./assets/image1.jpg";
import Image2 from "./assets/image2.jpg";

export default function Gallery() {
  return (
    <Carousel>
      <div>
        <img src={Image1} alt="img1" />
      </div>
      <div>
        <img src={Image2} alt="img2" />
      </div>
    </Carousel>
  );
}
