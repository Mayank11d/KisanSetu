import classes from "./Rating.module.css";
import star from "../../assets/images/Rating Stars.svg";
import star2 from "../../assets/images/Rating Stars2.svg";
import star3 from "../../assets/images/Rating Stars3.svg";
import star4 from "../../assets/images/Rating Stars4.svg";

function Rating() {
  return (
    <>
      <section id="rating" className={classes.filter}>
        <div id="star" className={classes.starreviews}>
          <h4 id="reviewtitle">Customer Reviews</h4>
          <button id="str1btn">
            <img id="str1img" src={star} alt="rating" />
          </button>
          <button id="str2btn">
            <img id="str2img" src={star2} alt="rating" />
          </button>
          <button id="str3btn">
            <img id="str3img" src={star3} alt="rating" />
          </button>
          <button id="str4btn">
            <img id="str4img" src={star4} alt="rating" />
          </button>
        </div>
        <div id="pricefilter" className={classes.pricefilter}>
          <h4 id="priceTitle">Price</h4>
          <button id="pricebtn1">under ₹100</button>
          <button id="pricebtn2">₹100 to ₹200</button>
          <button id="pricebtn3">₹200 to ₹300</button>
          <button id="pricebtn4">₹300 to ₹400</button>
          <form id="priceinputfiled" action="">
            <input type="number"  id="pricemin" placeholder="₹min" />
            <input type="number" id="pricemax" placeholder="₹max" />
            <button id="pricegobtn">Go</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Rating