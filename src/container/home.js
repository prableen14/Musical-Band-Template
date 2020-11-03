import React , { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import GetStarted from "./getStarted";
import AboutUs from "./about";
import Contact from "./contact";
import Songs from "./Songs";
import Navb from "./navbar";
import Review from "./review";
import Gallery from "./gallery";
import Shows from "./Shows";
import { BrowserRouter,Route, Switch } from 'react-router-dom'


const Home = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
    return(
        <>
           <BrowserRouter>
      <Navb />
      
        <Switch>
          <Route exact path="/">
            <GetStarted />
          </Route>
          <Route path="/about">
            <AboutUs />
            </Route>
          <Route path="/Songs">
            <Songs />
          </Route>
          <Route path="/Shows">
            <Shows/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      
    </BrowserRouter>
    </>
    )
}


export default Home;