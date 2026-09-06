import { motion } from "framer-motion";
import {
  container,
  fadeUp,
  fadeRight,
} from "../../animations/animations";

import personal from "../../data/personal";
import Button from "../../components/Button/Button";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <motion.p
          className="hello"
          variants={fadeUp}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
        >
          {personal.name}
        </motion.h1>

        <motion.h2
          variants={fadeUp}
        >
          {personal.role}
        </motion.h2>

        <motion.p
          className="hero-skills"
          variants={fadeUp}
        >
          <Typewriter
            words={[
              "Machine Learning",
              "Deep Learning",
              "Data Science",
              "MLOps",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </motion.p>

        <motion.p
          className="description"
          variants={fadeUp}
        >
          {personal.description}
        </motion.p>

        <motion.div
          className="buttons"
          variants={fadeUp}
        >
          <Button
            text="View My Work"
            href="#projects"
          />

          <Button
            text="Download CV"
            href="/resume.pdf"
            primary={false}
          />
        </motion.div>

      </motion.div>

      <motion.div
        className="hero-right"
        variants={fadeRight}
        initial="hidden"
        animate="visible"
      >
        <div className="profile-card">

          <div className="circle"></div>

          <h3>Open to Work</h3>

          <p>Data Science | ML | AI</p>

        </div>
      </motion.div>

    </section>
  );
}

export default Home;