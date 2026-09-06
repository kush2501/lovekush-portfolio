import { motion } from "framer-motion";
import { container, fadeUp } from "../../animations/animations";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillCard from "../../components/SkillCard/SkillCard";
import "./Skills.css";
import skills from "../../data/skills";

function Skills() {
  return (
    <motion.section
      className="skills"
      id="skills"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <motion.div variants={fadeUp}>
        <SectionTitle title="Technical Skills" />
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={container}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={fadeUp}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;