import React from "react";
import Products from "../HomePage/Products";
import { DUMMAY_PRODUCTS } from "../../util/dryfruits";

function DryFruits() {
  return (
    <>
      <h1 id="title">Dry Fruits</h1>
      <Products products={DUMMAY_PRODUCTS} />
    </>
  );
}
export default DryFruits;
