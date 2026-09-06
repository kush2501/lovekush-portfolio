import { motion } from "framer-motion";
import { container, fadeUp } from "../../animations/animations";

import "./About.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <div className="about-left">

        <motion.div variants={fadeUp}>
          <SectionTitle
            title="About Me"
          />
        </motion.div>

        <motion.p variants={fadeUp}>
          I am an aspiring Data Scientist with a strong interest in
          Machine Learning, Deep Learning, and Artificial Intelligence.
          I enjoy solving real-world problems by transforming data into
          meaningful insights and building intelligent applications.
        </motion.p>

        <motion.p variants={fadeUp}>
          Alongside Data Science, I am learning MLOps to understand how
          Machine Learning models are deployed, monitored, and maintained
          in production environments.
        </motion.p>

      </div>

      <div className="about-right">

        <motion.div
          className="info-box"
          variants={fadeUp}
        >
          <h3>Education</h3>
          <p>MCA (Computer Science)</p>
        </motion.div>

        <motion.div
          className="info-box"
          variants={fadeUp}
        >
          <h3>Experience</h3>
          <p>Fresher</p>
        </motion.div>

        <motion.div
          className="info-box"
          variants={fadeUp}
        >
          <h3>Projects</h3>
          <p>Machine Learning & MLOps</p>
        </motion.div>

      </div>

    </motion.section>
  );
}

export default About;