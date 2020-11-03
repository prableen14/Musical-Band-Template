import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ShowList from "../container/ShowList";
import { Card, Col, Row } from "react-bootstrap";
import classes from "../CSS/Songs.module.css";
import Footer from "../component/footer";
import preview from "../assets/preview.jpg";



const Shows = ()=>{
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
            backgroundImage:`url(${preview})`,
            backgroundSize:"100% 100%",
            padding:"7%"}}>
            
                <h1 data-aos="fade-down" style={{textAlign:"center",marginBottom:"2%",fontWeight:"bolder"}}>OUR UPCOMING SHOWS</h1><br></br>
                <Row >
                {
                    ShowList.services.map((service)=>{
                       return(
                           <>
                            <Col data-aos="fade-left" md={6} xs={12} lg={4} style={{display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"column",
                            padding:0}}>
                            <Card className={classes.Card}>
                                
                                <Card.Body style={{color:"lightblue", backgroundColor:"black"}}>
                                    <Card.Title style={{textAlign:"center"}}>{service.title} </Card.Title>
                                    
              
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
export default Shows;