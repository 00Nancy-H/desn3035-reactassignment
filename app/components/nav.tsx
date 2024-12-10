import Link from "next/link";
import React from "react";
import './nav.css';

export default function Nav() {
    return <>
        <div className="navcontainer">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/shop">Shop</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/faq">FAQ</a>
                </li>
            </ul>
        </div>
    </>
}