import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact__title">Contact Us</div>
      <div className="contact__content">
        Please fill out this contact form or email us at{" "}
        <a href="mailto: support@lindogourmet.com">support@lindogourmet.com</a>.
      </div>
      <div className="contact__input">
        <label for="fname">First name: </label>
        <input type="text"></input>
        <br />
        <label for="lname">Last name: </label>
        <input type="text"></input>
        <br />
        <label for="phone">Phone: </label>
        <input type="tel"></input>
        <br />
        <label for="email">Email: </label>
        <input type="email"></input>
        <br />
        <label for="request">Request</label>
        <select id="request" name="request">
          <option value="none"></option>
          <option value="customer">Become a customer</option>
          <option value="supplier">Become a supplier</option>
          <option value="partner">Become a partner</option>
          <option value="information">Additional information</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div className="contact__content">How can we be of help?</div>
      <textarea id="w3review" name="w3review" rows="12" cols="100"></textarea>
      <br />
      <input className="contact__submit" type="submit" value="Submit"></input>
    </div>
  );
}

export default Contact;
