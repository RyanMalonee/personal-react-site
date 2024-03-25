import React from "react";
export default function ContactMe() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log("formData", ...formData);

    formData.append("access_key", "2d503882-a64b-49fe-b028-a8bcd7b6fc3f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      <form className="contact-form-container" onSubmit={onSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact-input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact-label">
          <span className="text-md">Message</span>
          <textarea
            className="contact-input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button className="btn btn-primary contact-form-btn">Submit</button>
        </div>
      </form>
      <span className="email-result">{result}</span>
    </section>
  );
}
