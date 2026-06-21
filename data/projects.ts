export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Plant Disease Detection Model",
    description:
      "Developed a computer vision application that automatically identifies plant diseases from leaf images using a custom CNN architecture.",

    image: "/PLant_DIsease_Detection.avif",

    tech: [
      "CNN",
      "Keras",
      "TensorFlow",
      "Python",
      "React",
      "JavaScript",
    ],

    github: "https://github.com/yourusername/citizenvoice",
  },

  {
    title: "Credit Card Fraud Detection",
    description:
      "Developed a machine learning model to detect fraudulent credit card transactions using historical data and feature engineering.",

    image: "/credit.avif",

    tech: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Matplotlib",
      "NumPy",
      "Pandas",
    ],

    github: "https://github.com/SanSaniya/Credit-Card-Fraud-Detectioon.git",
    
  },

  {
    title: "AI Resume Analyzer",
    description:
      "ATS resume checker that evaluates resumes, extracts skills and provides improvement suggestions.",

    image: "/resume-analyzerr.avif",

    tech: [
      "React",
      "TypeScript",
      "OpenAI",
      "Tailwind CSS",
    ],

    github: "https://github.com/SanSaniya/ai-resume-analyzer.git",
    
  },

  {
    title: "Portfolio Website",
    description:
      "Responsive developer portfolio featuring projects, animations and interactive UI components.",

    image: "/portfolio.avif",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
        "TypeScript",
    ],

    github: "https://github.com/SanSaniya/portfolio-v2.git",
  },
];