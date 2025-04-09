// src/components/ExperienceCarousel.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "AI Engineer",
    company: "AI Cloud (Stealth Startup)",
    date: "Jan 2025 – Present",
    points: [
      "Built multi-agent systems using CrewAI, LLaMA3, and GPT-4o-mini for tutor matching and course generation.",
      "Developed AI chatbot and PoCs, optimizing workflows and improving engagement metrics."
    ],
    stack: "CrewAI, LLaMA3, GPT-4o-mini, AutoGen, LangChain, ChromaDB, FastAPI, Supabase, FAISS"
  },
  {
    role: "Data Engineer",
    company: "Consello Technologies",
    date: "May 2024 – Dec 2024",
    points: [
      "Built ETL pipeline and dashboards improving data insight and agent performance.",
      "Applied ML (PCA, K-Means) for optimization in training and bonus allocation."
    ],
    stack: "AWS Glue, Athena, Power BI, QuickSight, Python, SQL, K-Means, PCA"
  },
  {
    role: "AI Engineer",
    company: "Flow Global Technologies",
    date: "Feb 2024 – May 2024",
    points: [
      "Built AI-powered lead generation and BERT-based classification model with 92% accuracy.",
      "Used Graph Neural Networks (GNNs) to reduce duplicate outreach by 50%."
    ],
    stack: "BERT, PyTorch, GNN, Selenium, BeautifulSoup, NER"
  },
  {
    role: "SQL Developer Co-op",
    company: "Safertek Pvt",
    date: "Sep 2021 – Jan 2022",
    points: [
      "Migrated CRM to GCP and rewrote 500+ SQL queries for 35% efficiency boost.",
      "Built Django-based backend with REST APIs to streamline customer ops."
    ],
    stack: "GCP, SQL Server, Django, REST API"
  },
  {
    role: "Backend Engineer Intern",
    company: "Annamrajus Designs & Technologies",
    date: "Jun 2021 – Sep 2021",
    points: [
      "Developed ADEF e-commerce backend, cutting deployment time by 50%.",
      "Built Django REST API integrated with PostgreSQL."
    ],
    stack: "Django Rest Framework, PostgreSQL"
  }
];

const ExperienceCarousel = ({ experienceVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!experienceVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length);
    }, 7000); // Increased interval to 7 seconds
    return () => clearInterval(interval);
  }, [experienceVisible]);

  if (!experienceVisible) return null;

  return (
    <div className="section bg-black text-white px-6 md:px-20 py-16 overflow-hidden relative h-[500px]">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-10 border-b-4 border-lime-400 pb-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="w-full h-full flex items-center justify-center">
        <motion.div
          key={currentIndex}
          className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl text-left p-6 absolute"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-lime-300 mb-2">{experiences[currentIndex].role}</h3>
          <p className="text-sm text-gray-400 mb-1">{experiences[currentIndex].company} | {experiences[currentIndex].date}</p>
          <ul className="text-sm md:text-base text-gray-200 list-disc pl-5 mb-2">
            {experiences[currentIndex].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 italic">Tech Stack: {experiences[currentIndex].stack}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
