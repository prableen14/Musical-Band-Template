import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../CSS/navbar.module.css";
import {Navbar, Nav} from "react-bootstrap";
import Icon from '@iconify/react';
import musicAscend from '@iconify/icons-emojione-v1/music-ascend';

const Navb = () => {
  const [isOpen, setOpen] = useState(false);
  return (
      <>
      <div>
        <Navbar style={{fontFamily:"Lexend Giga", backgroundColor:"#9032A2" }}  expand="lg" fixed="top">
            <Navbar.Brand style={{color:"beige"}}><Icon icon={musicAscend} />THE EAGLES<Icon icon={musicAscend} /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{margin:"0 0 0 auto"}} className="navlinks">
                
                
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
      <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start" >
             
            <NavLink style={{color:"beige"}} className="navbar-item" activeClassName="is-active" to="/">
            
              Home
            </NavLink>

            <NavLink style={{color:"beige"}}
              className="navbar-item"
              activeClassName="is-active"
              className={classes.Mylinks}
              to="/about"
            >
              About
            </NavLink>
            <NavLink style={{color:"beige"}}
              className="navbar-item"
              activeClassName="is-active"
              className={classes.Mylinks}
              to="/Songs"
            >
              Our Music
            </NavLink>
           
            <NavLink style={{color:"beige"}}
              className="navbar-item"
              activeClassName="is-active"
              className={classes.Mylinks}
              to="/Shows"
            >
              Shows
            </NavLink>
            <NavLink style={{color:"beige"}}
              className="navbar-item"
              activeClassName="is-active"
              className={classes.Mylinks}
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink style={{color:"beige"}}
              className="navbar-item"
              activeClassName="is-active"
              className={classes.Mylinks}
              to="/review"
            >
              Testimonials
            </NavLink>
            <NavLink style={{color:"beige"}}
              className="navbar-item"
              activeClassName="is-active"
              className={classes.Mylinks}
              to="/contact"
            >
              Book Us
            </NavLink>
          </div>

          
        </div>
      </div>
    </nav>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </div>
    </>
  );
};

export default Navb;