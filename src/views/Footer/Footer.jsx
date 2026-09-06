import { motion } from "framer-motion";
import { container, fadeUp } from "../../animations/animations";

import "./Footer.css";
import socialLinks from "../../data/socialLinks";

function Footer() {
  return (
    <motion.footer
      className="footer"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <motion.h3 variants={fadeUp}>
        Lovekush Kumar
      </motion.h3>

      <motion.p variants={fadeUp}>
        Aspiring Data Scientist | Machine Learning | AI
      </motion.p>

      <motion.div
        className="footer-links"
        variants={container}
      >
        <motion.a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          GitHub
        </motion.a>

        <motion.a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          LinkedIn
        </motion.a>

        <motion.a
          href={`mailto:${socialLinks.email}`}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          Email
        </motion.a>
      </motion.div>

      <motion.p
        className="copyright"
        variants={fadeUp}
      >
        © 2026 Lovekush Kumar. All Rights Reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;