import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "../CSS/gallery.css";
import "react-alice-carousel/lib/alice-carousel.css";
import gallery from "../assets/gallery.jpg"
import Footer from "../component/footer";
import g1 from "../assets/g1.jpg"
import g2 from "../assets/g2.jpg"
import g3 from "../assets/g3.jpg"
import g4 from "../assets/g4.jpg"
import g5 from "../assets/g5.jpg"

function Gallery()
{
  return (
    <>
    <div className="Gallery">
    <div  style={{
            
            justifyContent:"center",
            
            fontFamily:"Lexend Giga",
            backgroundImage:`url(${gallery})`,
            padding:"2%"}}>
    <h1 data-aos="fade-up" style={{marginTop:"95px", textAlign:"center", fontFamily:"Lexend Giga", paddingBottom:"7px"}}>OUR MEMORIES</h1>
      <h4 data-aos="fade-up" style={{paddding:"4px" ,textAlign:"center", fontFamily:"Lexend Giga"}}>Some of our previous moments from our live concerts across different countries.</h4>
    <br></br>
    <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={g1} className="sliderimg"/>
      <img src={g2} className="sliderimg"/>
      <img src={g3} className="sliderimg"/>
      <img src={g4} className="sliderimg"/>
      <img src={g5} className="sliderimg"/>
     
      
      
</AliceCarousel>

</div>
<Footer/>
</div>
</>
  );
}
export default Gallery;