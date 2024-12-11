import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import './components/home.css';

export default function Home() {
  return <>

        <Header />
        <Nav />

        <div className="heroimage">
          <img src="./images/candlebackground.png"
            alt="img1" className="candlebg1" />
            </div>
            <div className="headertext">
          <h1>Welcome to Scentful Bliss Candles</h1>
          <p>
            “Handcrafted to Perfection, Inspired by Memories, Designed for Your Senses."
          </p>
        </div>

        <div className="button">
        <a className="btn btn-primary" href="./shop" role="button">Shop Now</a>
</div>

        <center><div className="card-group">
          <div className="card">
            <img src="./images/peach blossommm.png" className="card-img-top" alt="peachblossom" />
            <div className="card-body">
              <h5 className="card-title">Peach Blossom Candle</h5>
              <p className="card-text">Peach, Jasmine, White Amber, Grapefruit, Freesia</p>
              <p className="card-text"><small className="text-muted">$15.99</small></p>
            </div>
          </div>
          <div className="card">
            <img src="./images/Sageeee1.png" className="card-img-top" alt="sagecd" />
            <div className="card-body">
              <h5 className="card-title">Serenity Sage</h5>
              <p className="card-text">Rosewater, Green Ivy, Lily, Musk, Peony</p>
              <p className="card-text"><small className="text-muted">$14.99</small></p>
            </div>
          </div>
          <div className="card">
            <img src="./images/Blooming Gardenia.png" className="card-img-top" alt="garcd" />
            <div className="card-body">
              <h5 className="card-title">Blooming Gardenia</h5>
              <p className="card-text">Green Leaves, Gardenia, Jasmine, White Lily, Soft Musk</p>
              <p className="card-text"><small className="text-muted">$18.99</small></p>
            </div>
          </div>
        </div>
        </center>

<div className="button">
<a className="btn btn-primary" href="./shop" role="button">Shop Best Sellers</a>
</div>

    <Footer />
  </>
}