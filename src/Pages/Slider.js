import React from "react";
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image2 from "../Asset/Images/HomeBG.jpeg";
import Image1 from "../Asset/Images/02copy.png";
import Image3 from "../Asset/Images/Smart Soft Logo JPG-01.jpg";
import Image4 from "../Asset/Images/Smart Soft Logo v4-01.png";
import Image5 from "../Asset/Images/SmartSoftLogov44-02-2.png";

export default function Slider(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      //   slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      //   slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      //   slidesToSlide: 1 // optional, default to 1.
    },
  };
  return (
    <div style={{ marginTop: 50, boxShadow: "inset 0 0 0 400px rgba(0, 0, 0, 0.4)" }}>
      <h1>Slider</h1>
      <Carousel
        swipeable={true}
        // draggable={true}
        // additionalTransfrom={-20 * 5}
        showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
      >
        <div>
          <img src={Image1} alt="img" style={{minHeight: 100, maxWidth: 1100}}/>
        </div>
        <div>
          <img src={Image2} alt="img" style={{minHeight: 400, maxWidth: 600}}/>
        </div>
        <div>
          <img src={Image3} alt="img" style={{minHeight: 400, maxWidth: 600}}/>
        </div>
        <div>
          <img src={Image4} alt="img" style={{minHeight: 400, maxWidth: 600}}/>
        </div>
        <div>
          <img src={Image5} alt="img" style={{minHeight: 100, maxWidth: 600}}/>
        </div>
      </Carousel>
    </div>
  );
}
