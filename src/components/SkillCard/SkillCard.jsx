import "./SkillCard.css";

function SkillCard({ skill }) {
  return (
    <div className="skill-card">

      <div className="skill-header">

        <h3>{skill.name}</h3>

        <span>{skill.level}%</span>

      </div>

     <div className="skill-progress-bar">

      <div
        className="skill-progress"
        style={{ width: `${skill.level}%` }}
      ></div>

    </div>

  </div>
  );
}

export default SkillCard;