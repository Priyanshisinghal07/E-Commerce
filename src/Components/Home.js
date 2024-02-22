import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Image1 from '../Image/img-1.jpg'
import cloth1 from '../Image/cloth.jpg'
import Beauty from '../Image/beauty.jpg'
import Shoes from '../Image/shoes.jpg'
import '../Css/Home.css'
import Shirt from '../Image/shirt.jpg'
import makeup from '../Image/beautytipe.jpg'
import menshoes from '../Image/shoes1.jpg'
import accesories from '../Image/download.jpg'

export default function Home() {
  return (
   <>
 
  <Navbar/>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Image1} height="450px" class="d-block w-100 " alt="..."/>
     \
    </div>
    <div class="carousel-item">
      <img src={Beauty} height="450px" class="d-block w-100" alt="..."/>
    
    </div>
    <div class="carousel-item">
      <img src={Shoes} height="450px" class="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="about-intro ">
        <div div className="container">
        
          <h5 className="card-title intro-heading mb-5"><i class="fa-solid fa-user"></i>E-Commerce <span>Website</span>
          </h5>
          <div className="card intro-box mb-5" >
          
            <div class="card-body 
  }">
              <h5 class="card-title mt-3 ms-4 ">Welcome to our Interactive Product Catalog</h5>
              

             
            </div>

            <div className="row row-cols-sm-1 row-cols-lg-4 row-cols-md-2 g-4 m-2 mb-5">
              <div className="col">
                <div className="card h-100 intro-box ">
                  <img src={Shirt} className="card-img-top" alt="loading_image" style={{height:"9.5rem"}}/>
                  <div className="card-body">
                    <Link className='link-head' to="/cloth">    <h5 className="card-title">Cloth</h5></Link>
                
                    <p className="card-text">a fabric formed by weaving, felting, etc., from wool, hair, silk, flax, cotton, or other fiber, used for garments, upholstery, and many other items. a piece of such a fabric for a particular purpose: an altar cloth.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 intro-box img2">
                  <img src={makeup} className="card-img-top" alt="loading_image" style={{height:"10rem"}}/>
                  <div className="card-body">
                    <h5 className="card-title">Make-up</h5>
                    <p className="card-text">lipstick, eye shadow, and powder which some women put on their faces to make themselves look more attractive or which actors use to change or improve their appearance.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 intro-box">
                  <img src={menshoes} className="card-img-top" alt="loading_image" style={{height:"9.5rem"}} />
                  <div className="card-body">
                    <h5 className="card-title">Shoes</h5>
                    <p className="card-text">A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 intro-box">
                  <img src={accesories} className="card-img-top" alt="loading_image" style={{height:"9.5rem"}}/>
                  <div className="card-body">
                    <h5 className="card-title">Accessories</h5>
                    <p className="card-text">decorative items worn for personal adornment, such as brooches, rings, necklaces, earrings, pendants, bracelets, and cufflinks.</p>
                  </div>
                </div>
              </div>
            </div>
   </div>
   </div>
   </div>
      
   </>
  )
}
