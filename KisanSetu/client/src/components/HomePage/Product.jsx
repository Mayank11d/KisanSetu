import classes from './Product.module.css';

 function Product({ image, title, subtitle, starCount, verified, price, weight }) {
    return (<>
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
            <span id='priceAndweightinfo'>
                <h2 id='priceinfo'>₹{price}/</h2>
                <h4 id='weightinfo'>{weight}gm</h4>
            </span>
            <button  id='addcardbtn'>Add to cart</button>
        </div>
    </>)
}

export default Product