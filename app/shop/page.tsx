import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import '../components/shop.css';
import Link from "next/link";


export default function Shop() {
    return <>
                <Header />
                <Nav />

                <div className="toptext">
                    <h1>Best Sellers</h1>
                    <center><hr></hr></center>
                </div>

                <div className="breadcrumb-container">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Best Sellers</li>
                </ol>
                </nav>
                </div>

<div className="dropdown">
  <button className="btn btn active dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Scent Types
  </button>
  <ul className="dropdown-menu">
  <li><button className="dropdown-item" type="button">Earthy</button></li>
  <li><button className="dropdown-item" type="button">Fresh</button></li>
    <li><button className="dropdown-item" type="button">Floral</button></li>
    <li><button className="dropdown-item" type="button">Sweet</button></li>
    <li><button className="dropdown-item" type="button">Tropical</button></li>
  </ul>


  <button className="btn btn active dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Sort By: Featured
  </button>
  <ul className="dropdown-menu">
  <li><button className="dropdown-item" type="button">Newest Arrivals</button></li>
  <li><button className="dropdown-item" type="button">Price (Low to High)</button></li>
    <li><button className="dropdown-item" type="button">Price (High to Low)</button></li>
    <li><button className="dropdown-item" type="button">Popularity </button></li>
  </ul>
</div>


<div className="row row-cols-1 row-cols-md-3 g-4">
<div className="col">
    <div className="card h-100">
    <img src="./images/peach blossommm.png" className="card-img-top" alt="peachblossom1" />
    <div className="card-body">
      <h5 className="card-title">Peach Blossom</h5>
      <p className="card-text">Peach, Jasmine, White Amber, Grapefruit, Freesia</p>
      <p className="card-text"><small className="text-body-secondary">$15.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100">
    <img src="./images/whitedream11.png" className="card-img-top" alt="whitefloral" />
    <div className="card-body">
      <h5 className="card-title">White Floral Dream</h5>
      <p className="card-text">Jasmine, Gardenia, White Rose, Lily of the Valley, Soft Musk</p>
      <p className="card-text"><small className="text-body-secondary">$13.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100">
    <img src="./images/Pink Velvet Rose111.png" className="card-img-top" alt="pinkV" />
    <div className="card-body">
      <h5 className="card-title">Pink Velvet Rose</h5>
      <p className="card-text">Pink Rose, Vanilla Bean, Sandalwood, Sweet Musk</p>
      <p className="card-text"><small className="text-body-secondary">$17.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100">
    <img src="./images/Blooming Gardenia.png" className="card-img-top" alt="bloomG" />
    <div className="card-body">
      <h5 className="card-title">Blooming Gardenia</h5>
      <p className="card-text">Green Leaves, Gardenia, Jasmine, White Lily, Soft Musk</p>
      <p className="card-text"><small className="text-body-secondary">$18.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
    </div>


    <div className="col">
    <div className="card h-100">
    <img src="./images/Golden Vanillafinal.png" className="card-img-top" alt="goldenVanilla" />
    <div className="card-body">
      <h5 className="card-title">Golden Vanilla</h5>
      <p className="card-text">Golden Amber, Madagascar Vanilla, Coconut, Sandalwood</p>
      <p className="card-text"><small className="text-body-secondary">$16.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100">
    <img src="./images/candle mock up11111.png" className="card-img-top" alt="wildflowerBre" />
    <div className="card-body">
      <h5 className="card-title">Wildflower Breeze</h5>
      <p className="card-text">Lavender, Daisy, Violet, Wildflowers, Soft Woods, Fresh Grass</p>
      <p className="card-text"><small className="text-body-secondary">$14.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
    </div>

    <div className="col">
    <div className="card h-100">
    <img src="./images/linen111.png" className="card-img-top" alt="freshlinen" />
    <div className="card-body">
      <h5 className="card-title">Fresh Linen & Lavender</h5>
      <p className="card-text">Lavender, Cotton Blossom, Fresh Linen, Musk</p>
      <p className="card-text"><small className="text-body-secondary">$14.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
    <img src="./images/Sageeee1.png" className="card-img-top" alt="sage1" />
    <div className="card-body">
      <h5 className="card-title">Serenity Sage</h5>
      <p className="card-text">Eucalyptus, Sage, Lavender, Cedarwood</p>
      <p className="card-text"><small className="text-body-secondary">$15.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
  </div>

  <div className="col">
  <div className="card h-100">
    <img src="./images/coconut dream.png" className="card-img-top" alt="coconutDream" />
    <div className="card-body">
      <h5 className="card-title">Coconut Honey Dream</h5>
      <p className="card-text">Coconut Milk, Honey, Almond, Vanilla</p>
      <p className="card-text"><small className="text-body-secondary">$17.99</small></p>
      <a href="#" className="btn btn-primary">View Product</a>
    </div>
    </div>
  </div>
</div>


<Footer />
    </>
}