import React , {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import contact from "../assets/contact.jpg"
import classes from "../CSS/contact.module.css";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "react-bootstrap";
import Footer from "../component/footer";
import { Row} from "react-bootstrap";


import { Form, Input,Checkbox } from 'antd';
const { TextArea } = Input;
const useStyles = makeStyles(() => ({
    root: {
        background: "white",
        padding:"0 1%",
        borderRadius:"10px"
      },
      input: {
        color: "black",
        padding:"1%"
      }
    }));



const Contact = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const myclasses = useStyles();
    return(
             <>
            <div className={classes.Contact} id="contact" style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                fontFamily:"Lexend Giga",
                backgroundImage:`url(${contact})`,
                backgroundSize:"100% 100%",
                padding:"2%",
                marginTop: "1%",
                color:"black"
            }}>
                <h1 data-aos="fade-up" style={{textAlign:"center"}}>BOOk US</h1>
                <br/>
                <Row>
                
                <h4 data-aos="fade-up" style={{ color:"black"}}></h4>
                <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
        
          <h2 data-aos="fade-down" >Get in Touch</h2>
          <p data-aos="fade-up" >Book Us for a greatest concert or music night or show. </p>
        </div>
        <Form data-aos="fade-left"
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input placeholder="Full Name" />
          </Form.Item><br/><br/>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Address"/>
          </Form.Item><br/><br/>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telephone" />
          </Form.Item><br/><br/>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Subject" />
          </Form.Item><br/><br/>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Message" />
          </Form.Item><br/><br/>
          <Form.Item>
            <Form.Item  
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox style={{color:"white"}}>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{backgroundColor:"#9032A2"}}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      
    </div>  
               
           
</Row>
</div>
<div><Footer/></div>
        
          </>
    )
}
export default Contact;