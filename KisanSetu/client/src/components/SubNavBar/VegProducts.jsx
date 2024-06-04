import { DUMMAY_PRODUCTS } from "../../util/vegetables";
import Products from "../HomePage/Products";

function VegProducts() {
  return (
    <>
      <h1 id="title">Vegatables</h1>
      <Products products={DUMMAY_PRODUCTS} />
    </>
  );
}
export default VegProducts;
