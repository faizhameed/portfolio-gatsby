import React from "react";
import { CONTACT_DATA } from "./enum";
import styles from "./index.module.scss";

const ContactForm = () => {
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
          <label>Name</label>
          <input type="text" name="Name" />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="emai" name="email" />
        </div>
        <div className={styles.inputGroup}>
          <label>Phone</label>
          <input type="text" name="phone" />
        </div>
        <div className={styles.inputGroup}>
          <label>Message</label>
          <input type="text" name="message" />
        </div>
        <button className={styles.sbtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
