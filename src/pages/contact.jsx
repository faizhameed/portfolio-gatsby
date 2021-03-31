import React from "react";
import ContactForm from "../components/contact";
import Head from "../components/head";
import Layout from "../components/layout";
const ContactPage = () => {
  return (
    <Layout>
      <Head title="contact-faiz" />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
