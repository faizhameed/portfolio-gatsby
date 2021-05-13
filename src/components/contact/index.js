import React, { useRef } from "react";
import { CONTACT_DATA } from "./enum";
import styles from "./index.module.scss";

const ContactForm = () => {
  const userName = useRef();
  const message = useRef();
  const phone = useRef();
  const email = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint =
      "https://h25w2ue6y0.execute-api.ap-south-1.amazonaws.com/default/ContactFormLambda";

    const body = {
      email: email.current.value,
      subject: `name:${userName.current.value} Ph:${phone.current.value}`,
      message: message.current.value,
    };
    const lambdaRequest = new Request(endpoint, {
      method: "POST",
      // Quick note: 'no-cors' mode is for development on localhost only!
      mode: "no-cors",
      body: JSON.stringify(body),
    });
    fetch(lambdaRequest)
      // This is where you can handle errors. This is just an example, so we won't cover that.
      .then((response) => {
        console.log(response);
        alert("Message Sent");
        email.current.value = "";
        userName.current.value = "";
        message.current.value = "";
        phone.current.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2>{CONTACT_DATA.SUBTITLE}</h2>
        <div>
          <p>{CONTACT_DATA.DESCRIPTION}</p>
        </div>
      </div>
      <form className={styles.form}>
        <h2>{CONTACT_DATA.TITLE}</h2>
        <div className={styles.inputGroup}>
          <input placeholder=" " type="text" name="Name" ref={userName} />
          <label htmlFor="Name">Name</label>
        </div>
        <div className={styles.inputGroup}>
          <input placeholder=" " type="email" name="email" ref={email} />
          <label htmlFor="email">Email</label>
        </div>
        <div className={styles.inputGroup}>
          <input placeholder=" " type="text" name="phone" ref={phone} />
          <label htmlFor="phone">Phone</label>
        </div>
        <div className={styles.inputGroup}>
          <input placeholder=" " type="text" name="message" ref={message} />
          <label htmlFor="message">Message</label>
        </div>
        <button className={styles.sbtn} type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
