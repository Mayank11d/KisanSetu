import { DUMMAY_PRODUCTS } from "../../util/fruits";
import Products from "../HomePage/Products";

function Fruits() {
  return (
    <>
      <h1 id="title">Fruits</h1>
      <Products products={DUMMAY_PRODUCTS} />
    </>
  );
}
export default Fruits;
