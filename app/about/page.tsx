import React from "react";
import Header from "../components/header"
import Nav from "../components/nav";
import Footer from "../components/footer";
import '../components/about.css';

export default function About() {
    return <>

                <Header />
                <Nav />

                <div className="containervideo">
                    <video src="./videos/candlemaking-video.mp4" className="object-fit-contain" autoPlay></video>
                    </div>
                    <div className="text2">
                    <h1>Our Story</h1>
                    <hr></hr>
                </div>

                <div className="containercenter">
                    <div className="row">
                        <div className="col">
                            <p>
                                Scentful Bliss began with a simple yet powerful idea — to create candles that evoke the warmth of cherished memories. What started as a small, passion-driven venture in Toronto has blossomed into a brand known for its handcrafted soy candles, each made with care and attention to detail.
                                <br></br>
                                <br></br>

                                Using only the finest ingredients, we pour our candles by hand, ensuring every piece is a work of art. The clean, rich scents are carefully selected to transport you to moments of nostalgia, whether it's a cozy evening at home or a summer breeze. Every candle is crafted with love, dedication, and the belief that the perfect scent can transform any space.
                                <br></br>
                                <br></br>

                                Born out of a love for creating something beautiful and meaningful, Scentful Bliss is a celebration of the art of candle-making — a process that’s as much about the experience as it is about the result.
                            </p>
                        </div>
                        <div className="col">
                            <img src="./images/pouringcandle.jpg" alt="img1" className="Image1" />
                            <br></br>
                            <br></br>
                            <img src="./images/holdingcandle.jpg" alt="img2" className="Image2" />
                        </div>
                    </div>
                </div>

        <Footer />
    </>
}