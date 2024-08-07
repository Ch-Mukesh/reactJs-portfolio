import React from "react";
import styles from "./SkillsStyles.module.css";
import checkmarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="Html" />
        <SkillList src={checkmarkIcon} skill="Css" />
        <SkillList src={checkmarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="ReactJs" />
        <SkillList src={checkmarkIcon} skill="TailwindCss" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="Node" />
        <SkillList src={checkmarkIcon} skill="Express" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="MongoDb" />
      </div>
    </section>
  );
}

export default Skills;
