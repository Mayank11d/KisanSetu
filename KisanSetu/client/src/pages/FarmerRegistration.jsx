import React, { useRef, useState } from "react";
import icon from "../assets/images/circle-user-solid.svg";
import {
  validateForm,
  indianStates,
  districts,
} from "../util/registration.js";
import "./FarmerRegistration.css";

function FarmerRegistration() {
  const [state, setState] = useState("");
  const [district, setDistricts] = useState("");

  const firstName = useRef();
  const middleName = useRef();
  const lastName = useRef();
  const mobileNumber = useRef();
  const email = useRef();
  const stateName = useRef();
  const districtName = useRef();
  const formNumber = useRef();
  const bankAccount = useRef();
  const ifscCode = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const pdfProof = useRef();
  const adharCard = useRef();

  console.log(state);
  console.log();
  const handleSubmit = () => {
    let firstName = firstName.current.value;
    let middleName = middleName.current.value;
    let lastName = lastName.current.value;
    let mobileNumber = mobileNumber.current.value;
    let email = email.current.value;
    let stateName = stateName.current.value;
    let districtName = districtName.current.value;
    let formNumber = formNumber.current.value;
    let bankAccount = bankAccount.current.value;
    let ifscCode = ifscCode.current.value;
    let password = password.current.value;
    let confirmPassword = confirmPassword.current.value;
    let pdfProof = pdfProof.current.value;
    let adharCard = adharCard.current.value;
    
    validateForm(
      firstName,
      middleName,
      lastName,
      mobileNumber,
      email,
      stateName,
      districtName,
      formNumber,
      bankAccount,
      ifscCode,
      password,
      confirmPassword,
      pdfProof,
      adharCard
    );
  };

  return (
    <div id="FarmerRegistrationContainer">
      <div id="container">
        <div id="box">
          
          <form id="registrationForm">
            
            <h2 id="heading">
              Farmer
              <img 
                id="userIcon" 
                src={icon} 
                alt="user" 
              />
              Registration
            </h2>
            
            <div class="flexinputs">
              <input
                id="firstName"
                className="inputs"
                type="text"
                placeholder="First Name"
                ref={firstName}
              />
              <input
                id="middleName"
                className="inputs"
                type="text"
                placeholder="Middle Name"
                ref={middleName}
              />
              <input
                id="lastName"
                className="inputs"
                type="text"
                placeholder="Last Name"
                ref={lastName}
              />
            </div>
            
            <div className="flexinputs">
              <input
                id="mobileNumber"
                className="inputs"
                type="tel"
                placeholder="Mobile Number"
                ref={mobileNumber}
              />
              <input
                id="email"
                className="inputs"
                type="email"
                placeholder="Email ID"
                ref={email}
              />
              <div id="smallInputsDiv">
                <select
                  id="state"
                  className="inputs small-inputs"
                  type="text"
                  placeholder="State"
                  ref={stateName}
                  onChange={(e) => setState(e.target.value)}
                >

                  {indianStates.map((state) => (
                    <option value={state}>{state}</option>
                  ))}
                
                </select>
                <select
                  id="district"
                  className="inputs small-inputs"
                  type="text"
                  placeholder="Dist"
                  ref={districtName}
                >

                  {districts[state]?.map((district) => (
                    <option value={district}>{district}</option>
                  ))}
                  
                </select>
              </div>
            </div>
            
            <div className="flexinputs">
              <input
                id="formNumber"
                className="inputs"
                type="number"
                placeholder="7/12 From No."
                ref={formNumber}
              />
              <input
                id="bankAccount"
                className="inputs"
                type="number"
                placeholder="Bank Account"
                ref={bankAccount}
              />
              <input
                id="ifscCode"
                className="inputs"
                type="text"
                placeholder="IFSC Code"
                ref={ifscCode}
              />
            </div>
            
            <div className="flexinputs">
              <input
                id="password"
                className="inputs"
                type="text"
                placeholder="Password"
                ref={password}
              />
              <input
                id="confirmPassword"
                className="inputs"
                type="text"
                placeholder="Confirm Password"
                ref={confirmPassword}
              />
            </div>
            
            <div className="flexinputs">
              <span>
                <label for="">Upload PDF Proof:</label>
                <input
                  id="pdfProof"
                  className="inputs file-in"
                  type="file"
                  placeholder="PDF Proof"
                  ref={pdfProof}
                />
              </span>
              <span>
                <label for="">Upload Adhar card:</label>
                <input
                  id="adharCard"
                  className="inputs file-in"
                  type="file"
                  placeholder="PDF Proof"
                  ref={adharCard}
                />
              </span>
            </div>

            <input
              id="submitbtn"
              type="submit"
              value="Submit"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default FarmerRegistration;
