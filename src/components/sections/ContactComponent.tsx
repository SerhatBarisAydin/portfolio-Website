import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isActive, setIsActive] = useState(Boolean);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !message) {
      alert("Please fill in all fields.");

      return;
    }

    emailjs
      .sendForm("sbarisaydin", "template_ohevla3", form.current, {
        publicKey: "zNv6Q15m8dbrPyNsd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          setEmail("");
          setName("");
          setSurname("");
          setMessage("");
          setIsActive(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-screen  flex flex-col items-center justify-center gap-5  pb-10 pt-10">
      <h1 className="font-bold md:text-5xl text-5xl md:mb-20 mb-5 ">Contact Me</h1>
      <div className="flex md:flex-row flex-col justify-center items-center gap-5 w-full h-full">
        <fieldset className="fieldset bg-base-200 border-base-300  shadow-sm flex flex-col justify-center gap-4 rounded-box md:w-2xl w-xs h-full border p-4">
          <h1 className="md:text-5xl text-xl font-bold">Contact With Me 📬</h1>
          <p className="md:text-xl text-sm text-gray-500">
            I'm always open to discussing my projects, brainstorming new ideas,
            or just saying hello. Feel free to reach out to me by sending an
            email or by filling out the form below. I believe we can shape the
            digital world together.
          </p>
        </fieldset>
        

        <form
          ref={form}
          className="bg-base-200 border-base-300 shadow-sm flex flex-col gap-4 rounded-box w-xs border p-4"
          onSubmit={sendEmail}
        >
          <label className="floating-label items-start">
            <span>Your Name</span>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-md"
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </label>
          <label className="floating-label">
            <span>Your Surname</span>
            <input
              type="text"
              placeholder="Your Surname"
              className="input input-md"
              onChange={(e) => setSurname(e.target.value)}
              name="surname"
            />
          </label>
          <label className="floating-label">
            <span>Your E-mail</span>
            <input
              type="email"
              placeholder="Your E-mail"
              className="input input-md"
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
            />
          </label>

          <label className="label">Your Message</label>
          <textarea
            placeholder="Your message here..."
            className="textarea textarea-l"
            onChange={(e) => setMessage(e.target.value)}
            name="user_message"
          ></textarea>

          <button className="btn btn-neutral mt-4" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
