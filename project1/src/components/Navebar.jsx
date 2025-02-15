import React from 'react'
import './Navebar.css'
import img1 from './os.png'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { RiAdminFill } from "react-icons/ri";

const Navebar = () => {

      const menuLinks = document.querySelectorAll(".menu-link");

      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          menuLinks.forEach((link) => {
            link.classList.remove("is-active");
          });
          link.classList.add("is-active");
        });
      });
    
  return (
    <>

 
<header class="header" id="header">
	<nav class="navbar container">
		<a href="./index.html" class="brand">Brand</a>
		<div class="menu" id="menu">
			<ul class="menu-list">
      <li class="menu-item">
					<a href="#" class="menu-link is-active">
						<i class="menu-icon ion-md-home"></i>
						<span class="menu-name">Home</span>
					</a>
				</li> 
				<li class="menu-item">
					<a href="/Login" class="menu-link">
						<i class="menu-icon ion-md-home"></i>
						<span class="menu-name">Login</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="/Admin" class="menu-link">
						<i class="menu-icon ion-md-home"></i>
						<span class="menu-name">Admin</span>
					</a>
				</li>
				
				<li class="menu-item">
					<a href="#" class="menu-link">
						<i class="menu-icon ion-md-search"></i>
						<span class="menu-name">Search</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="/Survelliance" class="menu-link">
						<i class="menu-icon ion-md-cart"></i>
						<span class="menu-name">Surveillance</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="/Smartwatch" class="menu-link">
						<i class="menu-icon ion-md-heart"></i>
						<span class="menu-name">SmartWatch</span>
					</a>
				</li>
				<li class="menu-item">
					<a href="/Wel" class="menu-link">
						<i class="menu-icon ion-md-contact"></i>
						<span class="menu-name">Shop</span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

 
 </>
  )
}

export default Navebar