import React from 'react';
import SkillsData from '../../data/home/skillsData.json';

const Skills = () => {
  return (
    <section id="skills" className="block spacer p-top-xl">
      {/* My Skills */}
      <div className="wrapper">
        <div className="title" data-aos="fade-up">
          <h2>My Skills</h2>
        </div>
        <div className="gx-5">
          <div className="grid-container">
            {SkillsData.length > 0 &&
              SkillsData.map((skill, index) => (
                <div className="grid-item" key={index}>
                  <div className="skill-container">
                    <div className="skill-labels">
                      <label>{skill.name}</label>
                      <span className="skill-percentage">{skill.percent}%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;