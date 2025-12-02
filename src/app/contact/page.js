"use client";

import { useState } from "react";
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

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
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
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 md:p-8 border border-border-light dark:border-border-dark shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

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

                    {submitStatus === "success" && (
                      <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200">
                        Thank you! Your message has been sent. I&apos;ll get
                        back to you soon.
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
                      <MdEmail className="text-2xl text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-subtle-light dark:text-subtle-dark mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:contact@faizhameed.com"
                          className="text-heading-light dark:text-heading-dark hover:text-primary transition-colors"
                        >
                          contact@faizhameed.com
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
  );
}
