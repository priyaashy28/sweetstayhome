import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import Image1 from "./assets/image1.jpg";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.jpg";
import Image4 from "./assets/image4.jpg";
import Image5 from "./assets/image5.jpg";
import Image6 from "./assets/image6.jpg";
import Image8 from "./assets/image8.jpg";
import Image9 from "./assets/image9.jpg";

export default function Gallery() {
  return (
    <Carousel>
      <div>
        <img src={Image1} alt="img1" />
      </div>
      <div>
        <img src={Image2} alt="img2" />
      </div>
      <div>
        <img src={Image3} alt="img3" />
      </div>
      <div>
        <img src={Image4} alt="img4" />
      </div>
      <div>
        <img src={Image5} alt="img5" />
      </div>
      <div>
        <img src={Image6} alt="img6" />
      </div>
      <div>
        <img src={Image8} alt="img8" />
      </div>
      <div>
        <img src={Image9} alt="img9" />
      </div>
    </Carousel>
  );
}
