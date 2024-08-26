import { useState } from "react";
import "../myCss/sectionContact.css"

export const SectionContact = () => {
  const[name,setName]= useState("")
  const[email,setEmail]= useState("")
  const[message,setMessage]= useState("")
  const[error,setError] = useState(false)
  const handleSend = (e)=>{
    e.preventDefault();
  }
  return (
    <section className="sectionContact">
      <h2>Get In Touch</h2>
      <p>Interested in working with me or hiring me for your next project? Drop me a line and let's make it happen.
        <br />
        <br />
        Get in touch today and let's bring your ideas to life.
      </p>
      <form>
        <input type="text" id="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea name="message" id="message" placeholder="Your message" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
        <button type="submit" onClick={handleSend}>Send</button>
      </form>
    </section>
  );
};
