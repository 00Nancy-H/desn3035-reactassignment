import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import '../components/contact.css';

export default function Contact() {
    return <>

        <Header />
        <Nav />

        <div className="contacttext">
            <h1>Let's Connect!</h1>
            <h3>We’d love to hear from you. Whether you have questions, feedback, or need assistance, our team is here to help. Simply fill out the form below, and we’ll get back to you as soon as possible. We look forward to hearing from you!</h3>
        </div >

        <div className="maincontainer">
            <div className="row">
                <div className="col-sm">
                    <img src="./images/candles23.jpg" alt="candlemaker1" className="candlemaker" />
                </div>

                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputlg">Name</label>
                        <input className="form-control input-lg" id="inputlg" type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputlg">Phone Number</label>
                        <input className="form-control input-lg" id="inputlg" type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputlg">Message</label>
                        <input className="form-control input-lg" id="inputlg" type="text" />
                    </div>

                    <a className="btn btn-primary" href="#" role="button">Submit</a>
                </div>
            </div>
        </div>

        <Footer />
    </>
}