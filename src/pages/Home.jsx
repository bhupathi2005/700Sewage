import React, { Component } from "react";
import Homesec from "../components/Homesec";
import About from "../components/About"
import Working from "../components/Working";
import Services  from "../components/Services";
import Promise from "../components/Promise";
import WorkExp from "../components/WorkExp";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer.jsx"

class Home extends Component{
    render(){
        return(
            <div>
                <Homesec />
                <About />
                <Working />
                <Services />
                <Promise />
                <WorkExp />
                <Reviews />
                <Contacts />
                <Footer />
            </div>
        )
    }
}
export default Home