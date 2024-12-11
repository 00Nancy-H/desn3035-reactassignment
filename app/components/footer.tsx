import React from "react";
import './footer.css';

export default function Footer() {
    return <>


        <div className="container-text-center">
            <div className="row">
                <div className="col-6">
                    <h4>Join our email list and be the first to discover our newest candles and scents.</h4>
                    <input className="form-control" type="text" placeholder="Enter Your Email Here.." aria-label="default input example"></input>
                    <br></br>
                    <a className="btn btn-primary" href="#" role="button">Submit</a>
                </div>

                <div className="col-2">
                    <h5>About</h5>
                    <h6>Our Story</h6>
                </div>

                <div className="col-2">
                    <h5>Shop</h5>
                    <h6>Best Sellers</h6>
                </div>

                <div className="col-2">
                    <h5>Contact Us</h5>
                    <h6>416-232-3455</h6>
                    <h6>info@scentfulbliss.ca</h6>
                </div>
            </div>
        </div>


        <div className="footercontainer">
            <p>&copy; 2024 Scentful Bliss Candles. All rights reserved.</p>
        </div>

    </>
}