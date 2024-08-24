import React from "react";

const Contact = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Have Some Questions?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img
            src="https://image.freepik.com/free-photo/chalkboard-with-blue-envelopes-drawn-hand_1205-996.jpg"
            alt="Contact"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Full Name"
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
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-dark">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
