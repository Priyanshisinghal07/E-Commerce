import React from 'react'
import Navbar from './Navbar'
import '../Css/cloth.css'
import { Link } from 'react-router-dom'
import shirt1 from '../Image/shirt/shirt1.webp'
import shirt2 from '../Image/shirt/shirt2.webp'
import shirt3 from '../Image/shirt/shirt3.webp'
import shirt4 from '../Image/shirt/shirt4.webp'

export default function cloth() {
  return (
   


    <>
<Navbar/>
<div className='clth'>

    <div className='container'>
    <Link className='back ' to="/home"><h5 className='mt-3  back-heading'>Back</h5></Link> 
    <div class="row row-cols-1 row-cols-md-4 g-4 shadow mt- ">
  <div class="col mb-4">
    <div class="card h-100 shadow">
      <img src={shirt1} class="card-img-top" style={{height:"12rem"}} alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Stylish Partywear Men Shirt</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100 shadow">
      <img src={shirt2} class="card-img-top" style={{height:"12rem"}} alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Fancy Fashionista Men Shirt</h5>
        <p class="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100 shadow">
      <img src={shirt3} class="card-img-top"  style={{height:"12rem"}}  alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Trendy Fashionable Men Shirt</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100 shadow">
      <img src={shirt4} class="card-img-top" style={{height:"12rem"}} alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Classy Sensationable Men Shirt</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
</div>
    </div>
</div>
    </>
  )
}
