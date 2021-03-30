import React from "react";
import ContactForm from "../components/contact";
import Head from "../components/head";
import Layout from "../components/layout";
const ContactPage = () => {
  return (
    <Layout>
      <Head title="contact-faiz" />
      <ContactForm />
      <div>
        <h1>Contact us</h1>
        <p>+919544646977</p>
        <p>Im develop website and applications that scale</p>
      </div>
    </Layout>
  );
};

export default ContactPage;
