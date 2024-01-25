import React from 'react';
import "./Layout.css";
import {Outlet ,Link}from "react-router-dom";
export default function Layout(){
    return(
        <div>
            <nav>
                <ul className="nav-bar">
                    <li><Link className='l'>Home</Link></li>
                    <li><Link className='l' to="/about">About</Link></li>
                    <li><Link className='l' to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <outlet/>
            <div className='g1'>
            <div className='g'>1</div>
            <div className='g'>2</div>
            <div className='g'>3</div>
            <div className='g'>4</div>
            <div className='g'>5</div>
            <div className='g'>6</div>
            </div>
        </div>
    );
}