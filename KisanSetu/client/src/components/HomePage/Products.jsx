import Product from "./Product";
import classes from "./Products.module.css";


 function Products({ products }) {
  // console.log(DUMMAY_PRODUCTS)
  return (
    <>
      <section id="products">
        <div id="productinfo" className={classes.productsgrid}>
          {products.map((p) => (
            <Product
              key={p.id}
              image={p.image}
              title={p.title}
              subtitle={p.subtitle}
              starCount={p.starCount}
              verified={p.verified}
              price={p.price}
              weight={p.weight}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Products