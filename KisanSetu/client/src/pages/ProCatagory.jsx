import React from 'react'
import kisanimage from '../assets/images/kisanimage.jpg'
import  './ProCatagory.css'
import Header from '../components/Layouts/Header'
import Products from "../components/HomePage/Catagorys";
import { DUMMAY_PRODUCTS } from "../util/procatagory";
function ProCatagory() {
  return (
    <>
    <Header />
        <div className="mx-4 header">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={kisanimage}
                            className="d-block w-100" alt="carousel images" />
                    </div>
                    <div className="img_text">
                        <h1>KisanSetu</h1>
                        <p>Bridging between 
                           <span> farmer </span>
                           and 
                           <span> happiness</span>
                        </p>
                    </div>
                    </div>
                </div>
        </div>
        {/* <article className="text-center mt-5 bg-green" style={"width: 100%; "} >
       */}
            <h1 className="marg css-selector text-center mt-5 bg-green">BEST PRODUCT'S CATEGORY</h1>
            
          {/* </article>  */}
          <Products products={DUMMAY_PRODUCTS} />
    </>
  )
}

export default ProCatagory
