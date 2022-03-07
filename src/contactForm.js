import "./assets/styles/contactForm.css";

function ContactForm() {
  return (
    <div className="contact_container">
      <form className="contact">
        <fieldset className="contact_title">Contact Us</fieldset>

        <label for="fullname" className="contact_label">
          Full Name{" "}
        </label>
        <input
          type="text"
          className="contact_input"
          name="fullname"
          placeholder="Ram Kaji"
        />

        <label for="email" class="contact_label">
          Email
        </label>
        <input
          type="email"
          className="contact_input"
          name="email"
          placeholder="hello@lastdoor.store"
        />

        <label for="message" className="contact_label">
          Your Message
        </label>
        <textarea
          className="contact_input"
          rows="5"
          cols="10"
          placeholder="Type your message here..."
          name="message"
        ></textarea>

        <input
          type="submit"
          value="Submit Your Message"
          className="contact_submit"
        />
      </form>
    </div>
  );
}

export default ContactForm;
