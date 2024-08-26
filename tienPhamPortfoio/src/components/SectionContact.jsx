import "../myCss/sectionContact.css"

export const SectionContact = () => {
  return (
    <section className="sectionContact">
      <h2>Get In Touch</h2>
      <p>Interested in working with me or hiring me for your next project? Drop me a line and let's make it happen.
        <br />
        <br />
        Get in touch today and let's bring your ideas to life.
      </p>
      <form>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <textarea name="message" id="message" placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
