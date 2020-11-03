import ShowMoreText from 'react-show-more-text';
import React , { Component } from "react";
import { Row,Col } from "react-bootstrap";
import about from "../assets/about.jpg";
import WorkDone from "./workdone";
import Footer from "../component/footer";
import background from "../assets/background.jpg"


export default class AboutUs extends Component {
   
    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
   
    render() {
        return (
            <>
            <div className="container-fluid" id="about" style={{
                display:"flex",
                alignItems:"center",
                fontFamily:"Lexend Giga",
                flexDirection:"column",
                backgroundImage:`url(${background})`,
                backgroundSize:"100% 100%",
                height:"100%",
                padding:"6%"}}>
            <h1 data-aos="fade-up" style={{textAlign:"center", color:"white"}}>DIVE INTO OUR MELODY</h1>
            <div data-aos="fade-right" className="container-fluid " style={{margin:"2% 0", color:"white"}}>
            <Row>
                        <Col md={6} xs={12} style={{}} >
                            <div style={{backgroundImage:`url(${about})`,backgroundSize:"100% 100%",height:"100%"}} ></div>
                        </Col>
                        <Col md={6} xs={12}>
            <ShowMoreText
                
                lines={14}
                more='Deep more'
                less='Deep less'
                anchorClass=''
                onClick={this.executeOnClick}
                expanded={false}
                width={390}
                
            >
               The Eagles are a British rock band formed in London in 1996. Vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, and drummer Will Champion met at University College London and began playing music together from 1996 to 1998, first calling themselves Pectoralz and then Starfish before finally changing their name to Coldplay.The band's creative director and former manager Phil Harvey is often referred to as the fifth member by the band.

After changing their name to Coldplay, the band recorded and released two EPs: Safety in 1998 and The Blue Room in 1999. The latter was their first release on a major record label, after signing to Parlophone. Coldplay achieved worldwide fame with the release of the song "Yellow" in 2000, followed in the same year by their debut album Parachutes, which was nominated for the Mercury Prize. The band's second album, A Rush of Blood to the Head (2002), was released to critical acclaim. Their next release, X&Y, was best-selling album worldwide of 2005. Their Brian Eno-produced fourth studio album, Viva la Vida or Death and All His Friends (2008), the best-selling album worldwide of 2008, earned three Grammy Awards. In October 2011, Coldplay released their fifth studio album, Mylo Xyloto, which topped the charts in over 34 countries and was the UK's best-selling rock album of 2011. The band have since released Ghost Stories (2014), A Head Full of Dreams (2015) and Everyday Life (2019).
            </ShowMoreText>
            </Col>
         </Row>
        <WorkDone/>
          </div>
         </div>
         <Footer/>
         </>
        );
    }
}