import React, { useState } from "react";
import { Link } from "react-router-dom";
function CustomerDetails() {
  const [name, setCustomerName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmailId] = useState("");
  const [disable, setDisable] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [isLinkDisabled, setIsLinkDisabled] = useState(true);

  

  function validate(event) {
    event.preventDefault(); // Prevent form submission
    let vstatus = true; // Initialize to true
  
    if (name === "") {
      alert("Name should not be blank");
      vstatus = false; // Set to false on validation failure
    } else if (name.length >= 25) {
      alert("Name should be less than 25 characters");
      vstatus = false;
    }
  
    if (age < 18) {
      alert("Age should be greater than 18");
      vstatus = false;
    }
  
    if (phone.length !== 10) {
      alert("Enter a valid phone number");
      vstatus = false;
    }
  
    if (!email.match(/^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/)) {
      alert("Enter a valid email id");
      vstatus = false;
    }
  
    // Update the disable state based on vstatus
    
    setDisable(!vstatus);
    setIsLinkDisabled(!vstatus);

    if (vstatus) {
      // Enable the "Next" button if all validations pass
      setNextButtonDisabled(false);
      alert("Form submitted successfully");
      // You can perform further actions here, such as sending data to a server
    }
  }
  

  return (
    <div>
      <center>
        <b className="titleStyle">CustomerDetails</b>
        <form onSubmit={validate}>
          <label htmlFor="name" className="labelStyle">
            Customer Name:
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
            value={name}
            className="inputStyle"
            
          />
          <br />
          <label htmlFor="age"
          className="labelStyle">
            Age:
          </label>
          <input
            type="number"
            id="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
            className="inputStyle"
      
          />
          <br />
          <label htmlFor="address" className="inputStyle">
            Address:
          </label>
          <br />
          <textarea
            rows="5"
            columns="20"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
            className="textareaStyle"
          ></textarea>
          <br />
          <label htmlFor="phone" sclassName="labelStyle">
            Phone Number:
          </label>
          <br />
          <input
            type="number"
            id="phone"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phone}
            className="inputStyle"
          />
          <br />
          <label htmlFor="email"  className="labelStyle">
            Email id:
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
            value={email}
            className="inputStyle"
          />
          <br />
         
          <input type="submit" value="ADD" className="buttonStyle" />
          
          <input type="reset" value="RESET" className="buttonStyle"/>
          <br />
          {isLinkDisabled ? (
            <button type="button" onClick={() => alert("Next Button Clicked")} disabled={nextButtonDisabled}>
              <Link to='/Catalog'><h3>Next</h3></Link>
            </button>
          ) : (
            <Link to='/Catalog'><h3>Next</h3></Link>
          )}

        </form>
      </center>
      <b>CustomerName</b>:{name}
      <br />
      <b>CustomerAge</b>:{age}
      <br />
      <b>CustomerAddress</b>:{address}
      <br />
      <b>Phone Number</b>:{phone}
      <br />
      <b>Email ID</b>:{email}
      <br />
    </div>
  );
}

// CSS styles


export default CustomerDetails;