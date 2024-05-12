import React, { useEffect, useState, useRef } from 'react';
import SkillsData from '../../data/home/skillsData.json';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <section id="skills" className="block spacer p-top-xl" ref={ref}>
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
                      <div 
                        className="progress-bar"
                        style={{ 
                          width: isVisible ? `${skill.percent}%` : '0%',
                          transition: 'width 2s ease' 
                        }}
                      ></div>
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