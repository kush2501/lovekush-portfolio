import { motion } from "framer-motion";
import { container, fadeUp } from "../../animations/animations";

import "./FeaturedProject.css";
import projects from "../../data/projects";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const featuredProject = projects.find(
  (project) => project.featured
);

function FeaturedProject() {
  return (
    <motion.section
      className="featured-project"
      id="projects"
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
          subtitle="Featured Project"
          title="My Latest Work"
        />
      </motion.div>

      <motion.div variants={fadeUp}>
        <ProjectCard
          project={featuredProject}
        />
      </motion.div>
    </motion.section>
  );
}

export default FeaturedProject;