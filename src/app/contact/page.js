"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdSend } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const hasRecaptcha =
    recaptchaSiteKey && recaptchaSiteKey !== "YOUR_RECAPTCHA_SITE_KEY";

  useEffect(() => {
    // Check if reCAPTCHA is loaded
    if (typeof window !== "undefined" && window.grecaptcha && hasRecaptcha) {
      setRecaptchaLoaded(true);
    }

    // Check for success parameter in URL (from formsubmit.co redirect)
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("success") === "true") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Clean up URL
        window.history.replaceState({}, "", window.location.pathname);
        // Reset status message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    }
  }, [hasRecaptcha]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Verify reCAPTCHA only if it's enabled
    if (hasRecaptcha && typeof window !== "undefined" && window.grecaptcha) {
      const recaptchaValue = window.grecaptcha.getResponse();
      if (!recaptchaValue) {
        setSubmitStatus("error");
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
        return;
      }
    }

    try {
      // Prepare form data
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_subject", "New Contact Form Submission");
      formDataToSend.append("_captcha", "true");
      formDataToSend.append("_template", "box");

      // Add reCAPTCHA response if available
      if (hasRecaptcha && typeof window !== "undefined" && window.grecaptcha) {
        const recaptchaValue = window.grecaptcha.getResponse();
        if (recaptchaValue) {
          formDataToSend.append("g-recaptcha-response", recaptchaValue);
        }
      }

      // Submit to formsubmit.co using AJAX endpoint
      const response = await fetch(
        "https://formsubmit.co/ajax/88f09bc8c0f277e906b21fb18992652f",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset reCAPTCHA if enabled
        if (
          hasRecaptcha &&
          typeof window !== "undefined" &&
          window.grecaptcha
        ) {
          window.grecaptcha.reset();
        }

        // Reset status message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/faizhameed/",
      icon: FaLinkedin,
      color: "text-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/faizhameed",
      icon: FaGithub,
      color: "text-gray-800 dark:text-gray-200",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/faizhameedv/",
      icon: FaInstagram,
      color: "text-pink-600",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@faiz_hameed",
      icon: FaYoutube,
      color: "text-red-600",
    },
    {
      name: "Medium",
      url: "https://faizhameed.medium.com/",
      icon: FaMedium,
      color: "text-gray-800 dark:text-gray-200",
    },
  ];

  return (
    <>
      {hasRecaptcha && (
        <Script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
          onLoad={() => setRecaptchaLoaded(true)}
        />
      )}
      <div className="bg-background-light dark:bg-background-dark text-heading-light dark:text-heading-dark font-body antialiased min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="py-12 md:py-24">
            <div className="max-w-4xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
                  Let&apos;s Work Together
                </h1>
                <p className="text-lg md:text-xl text-subtle-light dark:text-subtle-dark max-w-2xl mx-auto">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 md:p-8 border border-border-light dark:border-border-dark shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">
                      Send me a message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold mb-2 text-heading-light dark:text-heading-dark"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-heading-light dark:text-heading-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold mb-2 text-heading-light dark:text-heading-dark"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border-2 border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-heading-light dark:text-heading-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold mb-2 text-heading-light dark:text-heading-dark"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-heading-light dark:text-heading-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold mb-2 text-heading-light dark:text-heading-dark"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl border-2 border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-heading-light dark:text-heading-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project or idea..."
                        />
                      </div>

                      {/* reCAPTCHA */}
                      {hasRecaptcha ? (
                        <div className="flex justify-center">
                          <div
                            className="g-recaptcha"
                            data-sitekey={recaptchaSiteKey}
                          ></div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200 text-sm">
                          <p className="font-semibold mb-1">
                            reCAPTCHA not configured
                          </p>
                          <p>
                            To enable spam protection, add your Google reCAPTCHA
                            site key to{" "}
                            <code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">
                              NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                            </code>{" "}
                            in your{" "}
                            <code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">
                              .env.local
                            </code>{" "}
                            file.
                          </p>
                          <p className="mt-2">
                            Get your key from:{" "}
                            <a
                              href="https://www.google.com/recaptcha/admin/create"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-yellow-900 dark:hover:text-yellow-100"
                            >
                              Google reCAPTCHA Admin
                            </a>
                          </p>
                        </div>
                      )}

                      {submitStatus === "success" && (
                        <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200">
                          Thank you! Your message has been sent. I&apos;ll get
                          back to you soon.
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200">
                          {hasRecaptcha
                            ? "Please complete the reCAPTCHA verification before submitting."
                            : "Something went wrong. Please try again later."}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white font-semibold py-3.5 px-7 rounded-xl flex items-center justify-center gap-2.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">⏳</span> Sending...
                          </>
                        ) : (
                          <>
                            <MdSend className="text-xl" /> Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>

                {/* Contact Info & Social Links */}
                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-border-light dark:border-border-dark shadow-lg">
                    <h3 className="text-xl font-bold mb-6">Get in touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FaLinkedin className="text-2xl text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-subtle-light dark:text-subtle-dark mb-1">
                            Best way to reach me
                          </p>
                          <a
                            href="https://www.linkedin.com/in/faizhameed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-heading-light dark:text-heading-dark hover:text-primary transition-colors"
                          >
                            Reach out on LinkedIn
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MdLocationOn className="text-2xl text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-subtle-light dark:text-subtle-dark mb-1">
                            Location
                          </p>
                          <p className="text-heading-light dark:text-heading-dark">
                            Available for remote work
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-border-light dark:border-border-dark shadow-lg">
                    <h3 className="text-xl font-bold mb-6">Follow me</h3>
                    <div className="space-y-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-xl border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                          >
                            <Icon
                              className={`text-2xl ${social.color} group-hover:scale-110 transition-transform`}
                            />
                            <span className="font-semibold text-heading-light dark:text-heading-dark">
                              {social.name}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
