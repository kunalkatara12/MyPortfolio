import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div id="contact">
      <div id="contact__section">
        <div id="contact__heading">
          <h4 id="contacts__subtitle">Get in touch</h4>
          <h3 id="contacts__title">Contact</h3>
        </div>

        <div id="contact__box">
          <div className="contact__box-inside form">
            <h4 id="form__heading">Send a Message</h4>
            <form id="form" action="">
              <div className="form__box">
                <div className="row50">
                  <div className="inptBox">
                    <span>First Name</span>{" "}
                    <input type="text" name="firstName" id="firstName" />
                  </div>
                  <div className="inptBox">
                    <span>Last Name</span>{" "}
                    <input type="text" name="lastName" id="lastName" />
                  </div>
                </div>
                <div className="row50">
                  <div className="inptBox">
                    <span>Email</span>{" "}
                    <input type="email" name="email" id="email" />
                  </div>
                  <div className="inptBox">
                    <span>Mobile No.</span>{" "}
                    <input type="number" name="mobile_no" id="mobile_no" />
                  </div>
                </div>
                <div className="row100">
                  <div className="inptBox">
                    <span>Message</span>{" "}
                    <textarea placeholder="Write your message..."></textarea>
                  </div>
                </div>
                <div className="row100">
                  <div className="inptBox">
                    <span>Submit</span>
                     <input type="submit" value="Send" id="submitBtn"/>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="contact__box-inside info"></div>
          <div className="contact__box-inside map">map</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
