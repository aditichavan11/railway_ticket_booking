import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import Header from "./Header";

const Signup = () => {
  const navigate = useNavigate();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [email, setemail] = useState("");
  const [aadharno, setaadharno] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(null);

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [aadharError, setAadharError] = useState("");

  const [notification, setNotification] = useState(null); // New state for notification

  function handleSearch() {
    if (validatePhone() && validateEmail() && validateAadhar()) {
      // navigate("/Login");
      setNotification("Sign-up successful!"); // Set the notification message
    } else {
      alert("Please correct the errors in the form before submitting.");
    }
  }

  function validatePhone() {
    const phoneRegex = /^\d{10}$/;

    if (!phoneno) {
      setPhoneError("Phone number is required");
      return false;
    } else if (!phoneno.match(phoneRegex)) {
      setPhoneError("Invalid phone number (must be 10 digits)");
      return false;
    } else {
      setPhoneError("Valid phone number");
      return true;
    }
  }

  function validateEmail() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!email.match(emailRegex)) {
      setEmailError("Invalid email address");
      return false;
    } else {
      setEmailError("Valid email address");
      return true;
    }
  }

  function validateAadhar() {
    if (aadharno.length !== 12) {
      setAadharError("Aadhar number must be 12 digits long");
      return false;
    } else {
      setAadharError("Valid Aadhar number");
      return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userdetail = {
      firstname,
      lastname,
      phoneno,
      email,
      aadharno,
      username,
      password,
    };

    const response = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type
      },
      body: JSON.stringify({
        firstname,
        lastname,
        phoneno,
        email,
        aadharno,
        username,
        password,
      }), // Send userdetail as JSON
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error || "An error occurred during signup");
    } else {
      setfirstname("");
      setlastname("");
      setphoneno("");
      setemail("");
      setaadharno("");
      setpassword("");
      setusername("");
      setError(null);
      alert("SIGNED UP SUCCESSFULLY!")
      // navigate("/Login");
      // setNotification("Sign-up successful!"); // Set the notification message
      console.log("Sign-up details added", json);
    }
  };

  return (
    <div className={classes.body}>
      <Header />
      <h1 className={classes.headersigninTitle}>
        <u>Sign up</u>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.box}>
          FIRST NAME :{" "}
          <input
            type="text"
            placeholder=""
            value={firstname}
            name="firstname"
            onChange={(e) => setfirstname(e.target.value)}
          />{" "}
          <br />
        </div>
        <div className={classes.box}>
          LAST NAME :{" "}
          <input
            type="text"
            placeholder=""
            value={lastname}
            name="lastname"
            onChange={(e) => setlastname(e.target.value)}
          />{" "}
          <br />
        </div>
        <div className={classes.box}>
          PHONE.NO :{" "}
          <input
            type="text"
            placeholder=""
            value={phoneno}
            name="phoneno"
            onChange={(e) => setphoneno(e.target.value)}
          />{" "}
          <br />
          <p className={classes.error}>{phoneError}</p>
        </div>
        <div className={classes.box}>
          E-MAIL :{" "}
          <input
            type="text"
            placeholder=""
            value={email}
            name="email"
            onChange={(e) => setemail(e.target.value)}
          />{" "}
          <br />
          <p className={classes.error}>{emailError}</p>
        </div>
        <div className={classes.box}>
          AADHAR NO. :{" "}
          <input
            type="text"
            placeholder=""
            value={aadharno}
            name="aadharno"
            onChange={(e) => setaadharno(e.target.value)}
          />{" "}
          <br />
          <p className={classes.error}>{aadharError}</p>
        </div>
        <div className={classes.box}>
          USERNAME :{" "}
          <input
            type="text"
            placeholder=""
            value={username}
            name="username"
            onChange={(e) => setusername(e.target.value)}
          />{" "}
          <br />
        </div>
        <div className={classes.box}>
          PASSWORD :{" "}
          <input
            type="password"
            placeholder=""
            value={password}
            name="password"
            onChange={(e) => setpassword(e.target.value)}
          />{" "}
          <br />
        </div>
        {error && <p className={classes.error}>{error}</p>}
        <button
          className={classes.SubmitBtn}
          onClick={handleSearch}
          type="submit"
        >
          SUBMIT
        </button>
        
      </form>
      
    </div>
  );
};

export default Signup;
