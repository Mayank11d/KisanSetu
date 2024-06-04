import React from 'react'
import Catagory from "./Catagory";
import classes from "./Catagorys.module.css";

function Catagorys({products}) {
  return (
    <>
      <section id="products">
        <div id="productinfo" className={classes.productsgrid}>
          {products.map((p) => (
            <Catagory
              key={p.id}
              image={p.image}
              title={p.title}
              subtitle={p.subtitle}
              starCount={p.starCount}
              verified={p.verified}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Catagorys
