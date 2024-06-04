import React from 'react'
import classes from './Catagory.module.css';
function Catagory({ image, title, subtitle, starCount, verified}) {
  return (
    <>
       <div id='productcard '
            className={classes.productcard}>
            <div id='productImageContainer'
                 className={classes.productimg}>
                <img id='productimage'
                src={image} alt="productimg"/>
            </div>
            <h2 id='productTitle'>{title}</h2>
            <h4 id='producsubtTitle'>{subtitle}</h4>
            <img alt="rating" 
                id='ratingImg' 
                src={starCount}  />
            <h5 id='verify'>{verified ? 'Verified' : ''}</h5>
            <button  id='addcardbtn'>Explore All</button>
        </div>
    </>
  )
}

export default Catagory
