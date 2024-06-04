import Products from "../components/HomePage/Products";
import Rating from "../components/HomePage/Rating";
import "./HomePage.css";
import { DUMMAY_PRODUCTS } from "../util/products";

export default function HomePage() {
  return (
    <>
      <main>
        <Rating />
        <Products products={DUMMAY_PRODUCTS} />
      </main>
    </>
  );
}
