import React from "react"
import Layout from "../components/layout"

const ContactPage = () => (
  <Layout>
    <h1>Contact Us</h1>
    <p>Send us a message to improve our services.</p>
    <form>
      <div>
        <label htmlFor="name">Your Name </label>
        <input type="text" placeholder="Please enter your name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Your Email </label>
        <input type="text" placeholder="Please enter your email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Your Message </label>
        <input
          type="text"
          placeholder="Please enter your message"
          id="message"
        />
      </div>
      <input type="submit" />
    </form>
  </Layout>
)

export default ContactPage
