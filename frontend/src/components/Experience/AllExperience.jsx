import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { SingleExperience } from './SingleExperience';

const AllExperienceData = [
    {
        job: 'Software Developer Intern',
        company: 'eSentire',
        date: 'May 2025 - Present',
        responsibilities: ["Detection and Incident Response (IR) Team"],
        bgImage: "../../images/esentire_icon.png"
    },
    {
        job: 'Research Intern',
        company: 'Navrachana University',
        date: 'May 2023 - Aug 2023',
        responsibilities: ["Conducted a comparative study of research papers on AI models (Random Forest, SVM) for anxiety prediction, identifying key limitations and model accuracies (85–92%)",
            "Explored Deep Learning techniques (MLP, RNN) and researched clinical parameters (GAD-7, PHQ-9, symptom duration/severity) influencing prediction outcomes"],
        bgImage: "../../images/navrachana.png"
    }
]

export const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-center gap-40'>
        {AllExperienceData.map((experience, index) => {
            return (
                <>
                    <SingleExperience key={index} experience={experience} />
                    {index < 1? (<FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>) : ("")}
                </>
            );
        })}
    </div>
  )
}
