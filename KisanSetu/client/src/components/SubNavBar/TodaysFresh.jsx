import React from "react";
import Products from "../HomePage/Products";
import { DUMMAY_PRODUCTS } from "../../util/todayfresh";
import './SubNavBar.css';

function TodaysFresh() {
  return (
    <>
      <h1 id="title">Today's Fresh</h1>
      <Products products={DUMMAY_PRODUCTS} />
    </>
  );
}
export default TodaysFresh;
