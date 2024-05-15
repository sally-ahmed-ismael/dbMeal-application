
import { validateEmail, validatePassword, validatePhone } from "../util/validatation";
import { useState } from "react";
import './ContactUs.css'
function ContactUs() {

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };
  
  const submit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Name Is Required");
      return;
    }
    if (name.length < 5) {
      setNameError("Name Must Be More Than 5 Characters");
      return;
    }
    setNameError("");
/////////////////
    if (!email) {
      setEmailError("Email Is Required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Email format: alicE_sMith.1-23@example.com");
      return;
    }
    setEmailError("")
/////////////////
if(!phone){
  setPhoneError("Phone Is Required");
  return;
}
if (!validatePhone(phone)) {
  setPhoneError("phone format: 012-3456-7890 or 01234567890");
  return;
}
setPhoneError("")
    
/////////////////
    if(!password){
      setpasswordError("Write a Password!!");
      return;
    }
    if (!validatePassword(password)) {
      setpasswordError("at least a small letter,a capital letter,a number,a special character, length between 8, 15");
      return;
    }
    setpasswordError("");
//////////////////
    if(rePassword !== password) {
      setRePasswordError("Re-enter the same password ");
      return;
    } 
    setRePasswordError("");

    console.log(name,email,phone,age, password, rePassword);
  };
   
    return(
      <>
      <div className="contactContainer bg-black">
      <h1>ContactUs</h1>
      <form className="row gy-2 gx-3 align-items-center"
        onSubmit={submit}>
      <div className="row g-3">
        <div className="col">
          <input type="text" autoFocus className="form-control required bg-black text-light"
           placeholder="Enter your name" onChange={handleChangeName} />
             <span id="nameError" className="error"></span>

           {nameError &&
          <span style={{ color: "red", fontSize: "smaller" }}>{nameError}</span>}

        </div>
        <div className="col">
          <input type="text" className="form-control required bg-black text-white" 
          placeholder="Enter your Email" onChange={handleChangeEmail} />
          {emailError &&
          <span style={{ color: "red", fontSize: "smaller" }}>{emailError}</span>}

        </div>
      </div>
      <div className="row g-3">
        <div className="col">
         <input type="text" className="form-control required bg-black text-white" 
          placeholder="Enter your phone" onChange={handleChangePhone} />
          {phoneError &&
          <span style={{ color: "red", fontSize: "smaller" }}>{phoneError}</span>}

        </div>
        <div className="col">
          <input type="text" className="form-control bg-black text-white"
           placeholder="Enter your age" onChange={handleChangeAge}  />
        </div>
      </div>
      <div className="row g-3">
        <div className="col">
          <input type="password" className="form-control required bg-black text-white" 
          placeholder="Enter your password" onChange={handleChangePassword} />
          {passwordError && (
          <span style={{ color: "red", fontSize: "smaller" }}>{passwordError}</span>
        )}

        </div>
        <div className="col">
          <input type="password" className="form-control required bg-black text-white" 
          placeholder="Re-password" onChange={handleChangeRePassword} />
          {rePasswordError && (
          <span style={{ color: "red", fontSize: "smaller" }}>{rePasswordError}</span>
        )}

        </div>
      </div>
      
        <div className="col-auto mx-auto">
          <button type="submit" className="btn bg-black border-warning text-warning ">Submit</button>
        </div>
      </form>
      </div>
      </>
    );
  
  
}

export default ContactUs