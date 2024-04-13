import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => (
	<VerticalTimelineElement
		contentStyle={{ background: "#1D1836", color: "#FFFFFF" }}
    contentArrowStyle={{ borderRight:'7px solid #232631' }}
    iconStyle={{ background: experience.iconBg }}
    date={experience.date}
    icon={
      <div className="w-full h-full flex justify-center items-center" >
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain rounded-full"
        />
      </div>
    }
	>
    <div>
      <h3 className="text-white text-[24px] font-bold " >{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}} >{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2 " >
      {experience.points.map((point,index) => (
        <li
          key={`experience_point_${index}`}
          className=" text-white-100 text-[14px] pl-1 tracking-wider "
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>WHAT I HAVE DONE SO FAR</p>
				<h1 className={`${styles.sectionHeadText}`}>Work Experience.</h1>
			</motion.div>
			<div>
				<VerticalTimeline className=" mt-6 flex flex-col ">
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
