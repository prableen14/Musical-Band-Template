import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Content from "../container/services";
import { Card, Col, Row } from "react-bootstrap";
import classes from "../CSS/Songs.module.css";
import Footer from "../component/footer";
import back from "../assets/back.jpg";
import MultiPlayer from "./multiplayer";


const Songs = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div className="Facilities">
            <div className="container-fluid" id="collection" style={{display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            fontFamily:"Lexend Giga",
            backgroundImage:`url(${back})`,
            backgroundSize:"100% 100%",
            backgroundColor:"whitesmoke",
            padding:"4%"}}>
            
                <h1 data-aos="fade-up" style={{textAlign:"center",marginBottom:"2%"}}>OUR TOP BILLBOARD SONGS</h1>
                <Row >
                {
                    Content.services.map((service)=>{
                       return(
                           <>
                            <Col data-aos="fade-right" md={6} xs={12} lg={4} style={{display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"column",
                            padding:0}}>
                            <Card className={classes.Card}>
                                <Card.Img variant="top" src={service.image} className={classes.Img} />
                                <Card.Body>
                                    <Card.Title style={{textAlign:"center"}}>{service.title} </Card.Title>
                                    <MultiPlayer
        urls={[
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
        ]}
      />
                                </Card.Body>
                            </Card>
                        </Col>
                           </>
                       )
                    })
                }
                </Row>
            </div>
            </div> 
            <Footer/>
        </>
    )
}
export default Songs;