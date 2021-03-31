import React from "react";
import styles from "./index.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <h2>Where to reach me</h2>
      </div>
      <form className={styles.form}>
        <h2>Contact Us</h2>
        <label>
          Name
          <input type="text" name="Name" />
        </label>
        <label>
          Email
          <input type="emai" name="email" />
        </label>
        <label>
          Phone
          <input type="text" name="phone" />
        </label>
        <label>
          Message
          <input type="text" name="message" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
