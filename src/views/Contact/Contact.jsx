import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { container, fadeUp } from "../../animations/animations";

import "./Contact.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import socialLinks from "../../data/socialLinks";

function Contact() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
 


  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
 
  const validateForm = () => {

      const newErrors = {};

      if (!name.trim()) {
            newErrors.name = "Name is required";
        }else if (name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters";
      }

     if (!email.trim()) {
          newErrors.email = "Email is required";
      } else if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ) {
          newErrors.email = "Enter a valid email address";
    }

      if (!message.trim()) {
            newErrors.message = "Message is required";
        } else if (message.trim().length < 10) {
            newErrors.message =
                "Message must be at least 10 characters";
      }

      return newErrors;
  };

  const clearError = (field) => {
      setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "",
      }));
  };

 const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
        return;
    }

    const templateParams = {
        name,
        email,
        message,
    };

    setIsSending(true);

    try {

          await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
      );

        toast.success(
            "Thanks! Your message has been sent successfully."
        );

        setName("");
        setEmail("");
        setMessage("");
        setErrors({});

    } catch (error) {

        toast.error(
            "Something went wrong. Please try again."
        );

    }
    finally {
      setIsSending(false);
    }

};
  return (
    <motion.section
      className="contact"
      id="contact"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <motion.div variants={fadeUp}>
        <SectionTitle
          subtitle="Contact"
          title="Get In Touch"
        />
      </motion.div>

      <motion.p
        className="contact-description"
        variants={fadeUp}
      >
        Interested in collaborating or hiring?
        Let's connect.
      </motion.p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">

          <label htmlFor="name">
            Name
          </label>

          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
                setName(e.target.value);
                clearError("name");
            }}
          />

          {errors.name && (
              <p className="error-text">
                  {errors.name}
              </p>
          )}

        </div>

       <div className="form-group">

        <label htmlFor="email">
          Email
        </label>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
              setEmail(e.target.value);
              clearError("email");
          }}
        />

        {errors.email && (
          <p className="error-text">
              {errors.email}
          </p>
      )}

      </div>

      <div className="form-group">

        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          rows="6"
          placeholder="Write your message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearError("message");
        }}
        ></textarea>

        {errors.message && (
          <p className="error-text">
              {errors.message}
          </p>
      )}

        <button
            type="submit"
            className="submit-btn"
            disabled={isSending}
            >
            {isSending ? (
                <>
                    <span className="spinner"></span>
                    Sending...
                </>
            ) : (
                "Send Message"
            )}
        </button>

      </div>

    </form>

      <motion.div
        className="contact-links"
        variants={container}
      >
        <motion.a
          href={`mailto:${socialLinks.email}`}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          📧 Email
        </motion.a>

        <motion.a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          💼 LinkedIn
        </motion.a>

        <motion.a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          💻 GitHub
        </motion.a>

        <motion.a
          href={socialLinks.resume}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          📄 Resume
        </motion.a>
      </motion.div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </motion.section>
  );
}

export default Contact;