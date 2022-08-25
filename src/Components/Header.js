import React from 'react'
import { Link } from 'react-router-dom'

// Images Folder
import logo from "../img/Home Page Assets/IVY Beds & Blinds-Home-Logo.webp"


const Header = () => {
  return (
    <>
    
    {/* <div className="bodyContainer">

    <div class="row" >

<nav class="navbar toggleable-md navbar-expand-lg navbar-light bg-white border " >

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <img class="logo" src={logo} alt="Girl in a jacket"
        width="150" height="50" />

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" id="guideul1">


            <li class="nav-item active">
                <a class="guide1" href="#">GUIDE TO BUYING</a>
            </li>
            <li class="nav-item">
                <a class="guide1" href="">KNOW YOUR FIT</a>
            </li>
            <li class="nav-item">
                <a class="guide1" href="#">CONTACT US</a>
            </li>
        </ul>

        <ul class="navbar-nav" id="guideul2">


            <i class="fa fa-power-off " id="loginicon"></i>

            <li class="nav-item">

                <Link class="guide2 " id="guide21" to="/Login">LOGIN</Link>
            </li>

            <i class="fa fa-heart" id="loginWishlist"></i>

            <li class="nav-item active">
                <a class="guide2" id="guide22" href="#">WISHLIST</a>
            </li>

            <i class="fa fa-shopping-basket" id="loginWishlist"></i>

            <li class="nav-item">
                <a class="guide2" id="guide23" href="">BASKIT</a>
            </li>

        </ul>
    </div>
</nav>

</div>

    </div> */}
    
    </>
  )
}

export default Header
