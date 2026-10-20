import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Contact is not connected yet. Your message was not sent.");
  };

  return (
    <section className="container page-section">
      <div className="row justify-content-center g-4">
        <div className="col-lg-5">
          <p className="eyebrow">We’re here to help</p>
          <h1 className="page-title">Let’s talk.</h1>
          <p className="section-subtitle">
            Questions about your order or looking for a little guidance? Send
            us a note.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/contact.jpg`}
            alt="A welcoming contact desk"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-6">
          <form
            className="content-panel p-4 p-md-5"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-premium">
              Send Message
            </button>
            {message && (
              <p className="alert alert-warning mt-3 mb-0" role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
