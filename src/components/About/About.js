import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/girl-svgrepo-com.svg"
            alt="girl-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Anjali Sinha</strong>, originally from Bihar, India. I am currently pursuing a Bachelor of Technology in Computer Science at Lovely Professional University, Punjab, where I have been living for the past three years. Throughout my academic journey, I have developed strong coding skills, enhanced my communication abilities, and cultivated a high level of adaptability, all of which have significantly contributed to my personal and professional growth.            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which inspired me to pursue a degree in Computer Science. Despite the challenges along the way, my determination and the support of lasting friendships helped me navigate through the demanding curriculum. During my time at Lovely Professional University (LPU), I had the opportunity to work on several exciting and meaningful projects, further strengthening my technical skills and real-world experience.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Working collaboratively within a team toward a shared objective has been an incredibly rewarding and enriching experience for me. I am excited to continue exploring new and challenging projects, with a particular passion for web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
