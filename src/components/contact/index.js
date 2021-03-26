import React from "react";
import styles from "./index.module.scss";

const ContactForm = () => {
  return (
    <div>
      <form className={styles.form}>
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
