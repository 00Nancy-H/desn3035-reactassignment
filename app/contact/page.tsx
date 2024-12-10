import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Contact() {
    return <>
        <Header />
        <Nav />

        <div className="contactform">
            <h1>Contact Us</h1>
            <h3>Let’s connect! We’d love to hear from you. Whether you have questions, feedback, or need assistance, our team is here to help. Simply fill out the form below, and we’ll get back to you as soon as possible. We look forward to hearing from you!</h3>


        </div >

        <Footer />
    </>
}