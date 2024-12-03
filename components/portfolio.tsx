'use client';

interface ExperienceProps {
  experiences: {
    title: string;
    date: string;
    location: string;
    tasks: string[];
  }[];
}

const Portfolio: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {experiences.map((experience, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">{experience.title}</h2>
          <p className="text-sm">
            {experience.date} | {experience.location}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {experience.tasks.map((task, taskIndex) => (
              <li key={taskIndex} className="text-base">
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};





export default Portfolio;
