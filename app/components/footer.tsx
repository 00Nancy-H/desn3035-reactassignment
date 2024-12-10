import React from "react";
import './footer.css';

export default function Footer() {
    return <>


        <div className="container-text-center">
            <div className="row">
                <div className="col-6">
                    <h4>Join our email list and be the first to discover our newest candles and scents.</h4>
                    <input className="form-control" type="text" placeholder="Enter Your Email Here.." aria-label="default input example"></input>
                </div>

                <div className="col-2">
                    <h5>About</h5>
                    <p>Our Story</p>
                </div>

                <div className="col-2">
                    <h5>Shop</h5>
                    <p>Best Sellers</p>
                    <p>New Arrivals</p>
                </div>

                <div className="col-2">
                    <h5>Contact Us</h5>
                    <p>416-232-3455</p>
                    <p>info@scentfulbliss.ca</p>
                </div>
            </div>
        </div>


        <div className="footercontainer">
            <p>&copy; 2024 Scentful Bliss Candles. All rights reserved.</p>
        </div>

    </>
}