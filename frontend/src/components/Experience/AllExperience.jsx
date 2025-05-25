import React from 'react'

const AllExperienceData = [
    {
        job: 'Software Developer Intern',
        company: 'eSentire',
        date: 'May 2025 - Present',
        responsibilities: ["Detection and Incident Response (IR) Team"]
    },
    {
        job: 'Research Intern',
        company: 'Navrachana University',
        date: 'May 2023 - Aug 2023',
        responsibilities: ["Conducted a comparative study of research papers on AI models (Random Forest, SVM) for anxiety prediction, identifying key limitations and model accuracies (85–92%)",
            "Explored Deep Learning techniques (MLP, RNN) and researched clinical parameters (GAD-7, PHQ-9, symptom duration/severity) influencing prediction outcomes"]
    }
]

export const AllExperience = () => {
  return (
    <div>
        {AllExperienceData.map((experience, index) => {
            // return <SingleExperience key={index} experience={experience} />;
        })}
    </div>
  )
}
