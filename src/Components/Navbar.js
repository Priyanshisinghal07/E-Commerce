import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/navbar.css'

export default function Navbar() {
  return (
   <>
     <div class="navbar navbar-light bg-light shadow-lg  rounded">
  <Link href="#" class="navbar-brand">E-Commerce</Link>
  <div class="navbar-icons">
    <Link href="#">  <i class="fa-solid fa-heart"></i></Link>
    <Link href="#">  <i class="fa-solid fa-cart-shopping"></i></Link>
  </div>
</div>
   </>
  )
}
