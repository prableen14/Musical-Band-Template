import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../CSS/review.css";
import Footer from "../component/footer";
import back2 from "../assets/back2.jpg"

export default class Review extends Component {
  render() {
    return (
      <>
      <div className="Review">
      <div  style={{
            
            justifyContent:"center",
            fontFamily:"Lexend Giga",
            backgroundColor:"whitesmoke",
            backgroundImage:`url(${back2})`,
                backgroundSize:"100% 100%",
                height:"100%",
            marginTop:"2%",
            padding:"5%"}}>
            
    <h1 data-aos="fade-up" style={{textAlign:"center", fontFamily:"Lexend Giga", fontWeight:"bolder"}}>TESTIMONIALS</h1>
    <h4 data-aos="fade-down" style={{textAlign:"center", fontFamily:"Lexend Giga", fontWeight:"bolder"}}>Check out what our fans think about us :)</h4>
    
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz </h3>
            <h4>New York Magazine</h4>
            <p>
            Best MUSICAL BAND in the world. There music just instantly connects the crowd and touches our souls.Everyone has got different taste in music. For me The Eagles sings the feeling I will never be able to put into the words.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <p>
            The Eagles is an AMAZING band that got 3rd place on the Xfactor in England. They are fun, exciting, funny, cute, great singers, and always have fun. They are AMAZING in my opinion :)
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <p>
            One of the most inspiring bands I've ever heard.
I collected almost all of their albums and I don't regret a bit. They've got music for every mood, occasion and taste.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
    </div>
    
    <Footer/>
  </>
    );
  }
}