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
          <input placeholder=" " type="text" name="Name" pm />
          <label htmlFor="Name">Name</label>
        </div>
        <div className={styles.inputGroup}>
          <input placeholder=" " type="email" name="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className={styles.inputGroup}>
          <input placeholder=" " type="text" name="phone" />
          <label htmlFor="phone">Phone</label>
        </div>
        <div className={styles.inputGroup}>
          <input placeholder=" " type="text" name="message" />
          <label htmlFor="message">Message</label>
        </div>
        <button className={styles.sbtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
