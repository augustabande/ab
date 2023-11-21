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
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      {skill.name}{" "}
                      <span className="badge badge-primary badge-pill">
                        {skill.percent}%
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Skills;