import React ,{useEffect} from "react";
import Wrapper from "./UI/Wrapper/Wrapper";
import Title from "./UI/Title/Title";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Button from "react-png-button";
import Aos from "aos";
import classes from "../CSS/getStarted.module.css";
import Subtitle from "./UI/Subtitle/Subtitle";


const img1 =  require( "../assets/shadows.png");
const img2 = require('../assets/coldplay.jpg');
const img3 = require( "../assets/image3.jpg");
const img4 = require( "../assets/image1.jpg");

const GetStarted = () => {
  const nextSlideHandler = React.useRef();
  const previousSlideHandler = React.useRef();
  useEffect(()=>{
    Aos.init({duration:3000});
},[]);
  return (
    <>
    <div className={classes.GetStarted} id="getStarted">
    <HeroSlider
      nextSlide={nextSlideHandler}
      previousSlide={previousSlideHandler}
      slidingAnimation="left_to_right"
      orientation="horizontal"
      set
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000"
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 8000,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <Wrapper>
          <Title>Welcome to</Title>
          <Subtitle>
            THE EAGLES
          </Subtitle>
          <div>
            <Button
              style={{
                width: 100,
                margin: "12px 8px",
                backgroundColor:"#9032A2"
              }}
              button="danger"
              onClick={() => previousSlideHandler.current()}
            >
              Previous
            </Button>
            <Button
              style={{
                width: 100,
                margin: "12px 8px",
                backgroundColor:"#9032A2"
              }}
              button="success"
              onClick={() => nextSlideHandler.current()}
            >
              Next
            </Button>
          </div>
        </Wrapper>
      </OverlayContainer>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: img1,
          backgroundAnimation: "fade"
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: img2,
          backgroundAnimation: "fade"
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: img3,
          backgroundAnimation: "fade"
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: "#8A8A8A",
          maskBackgroundBlendMode: "luminosity",
          backgroundImage: img4,
          backgroundAnimation: "fade"
        }}
      />

      <Nav />
    </HeroSlider>
    </div>
    </>
  );
};

export default GetStarted;
