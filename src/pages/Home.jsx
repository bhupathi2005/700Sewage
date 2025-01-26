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
import Navbar from "../components/Navbar.jsx";

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <section id="home_section">
                    <Homesec />
                </section>
                <section id="about_section">
                    <About />
                </section>
                <Working />
                <section id="services_section">
                    <Services />
                </section>
                <Promise />
                <WorkExp />
                <Reviews />
                <section id="contact">
                    <Contacts />
                </section>
                <Footer />
            </div>
        )
    }
}
export default Home