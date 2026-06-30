// Content for the research and teaching portfolio.
// Academic framing: PhD and its subject are named, teaching is front and centre,
// and the full publication list is shown. Plain first person, no dashes.

export const profile = {
  name: "Umair Javaid Manj",
  role: "PhD Researcher & Educator",
  location: "Auckland, New Zealand",
  email: "umairjavaidmanj@gmail.com",
  phone: "+64 20 4483186",
  github: "https://github.com/Umair-JM",
  linkedin: "https://linkedin.com/in/umairjm",
  intro:
    "I am a PhD researcher in health and applied AI at Auckland University of Technology, and an educator who enjoys the classroom as much as the lab. I have taught and supervised more than a hundred students, published across machine learning and biomedical engineering, and I am looking for lecturing and teaching assistant work that fits alongside my doctoral study.",
  about: [
    "My doctoral research at AUT develops an AI based biomarker for identifying chronic lower back pain, combining clinical signals with machine learning. Around that I keep an active publication record in medical AI, neuroimaging and secure systems.",
    "Teaching is the other half of my work. I have designed full courses, delivered lectures and labs, marked and moderated assessments, and supervised student projects from proposal to defence. I hold New Zealand work rights and am available for part time lecturing and teaching assistant roles.",
  ],
};

export const metrics = [
  { num: "100+", cap: "students taught" },
  { num: "12", cap: "publications and submissions" },
  { num: "9.15", cap: "Best Instructor score, of 10" },
];

export const interests = [
  "Machine Learning",
  "Health & Biomedical AI",
  "Neuroimaging",
  "Explainable AI",
  "Deep Learning",
  "Secure Systems",
  "Data Analysis",
];

export const teachingSkills = {
  Teaching: ["Curriculum & course design", "Lecture delivery", "Lab instruction", "Assessment design & marking", "Moderation", "Project supervision"],
  Research: ["Machine learning", "Deep learning", "Neuroimaging pipelines", "Explainable AI", "Applied cryptography", "Technical writing"],
  Technical: ["Python", "C++", "PyTorch / scikit-learn", "Data analysis", "Cybersecurity fundamentals", "Networking"],
};

export const experience = [
  {
    role: "Instructor",
    org: "HISDP, AI Lounge & Murabbi, NUST",
    date: "2023 to 2024",
    blurb:
      "Designed and delivered technical courses to a class of 106. Authored course outlines, ran lectures and labs, set and moderated quizzes, assignments and term exams, and jointly supervised 18 student projects. Awarded Best Instructor (9.15 of 10 across six feedback metrics).",
  },
  {
    role: "Project Manager",
    org: "Coding, Robotics & AI Learning Project, NUST",
    date: "2024 to 2025",
    blurb:
      "Led a national STEAM education project, coordinating 80 trainers, monitoring teaching quality and curriculum adherence, and designing metrics to evaluate teaching effectiveness and learning outcomes.",
  },
  {
    role: "Research Associate",
    org: "COGNET Lab, SEECS, NUST",
    date: "2022 to 2023",
    blurb:
      "Conducted applied research in quantum resistant cryptography and adversarial machine learning, and mentored junior research assistants.",
  },
  {
    role: "Research Assistant",
    org: "COGNET Lab, SEECS, NUST",
    date: "2021 to 2022",
    blurb:
      "Built a verifiable voting system ensuring ballot integrity with computer vision and cryptography, and helped prepare technical teaching and lab material.",
  },
];

export const education = [
  {
    degree: "PhD, Health & Artificial Intelligence",
    org: "Auckland University of Technology, New Zealand",
    date: "2025 to present",
    blurb: "Developing an AI based biomarker for identifying chronic lower back pain.",
  },
  {
    degree: "MS, Computational Science & Engineering",
    org: "National University of Sciences & Technology (NUST)",
    date: "2021",
    blurb: "Thesis on energy optimisation in data centers using fuzzy inference systems, around a 30 percent cost reduction.",
  },
  {
    degree: "BE, Computer Engineering",
    org: "National University of Sciences & Technology (NUST)",
    date: "2016",
    blurb: "Thesis implementing a NATO narrowband waveform on an SDR kit with convolutional encoding and phase modulation.",
  },
];

// Featured first-author work for the home page.
export const featuredPubs = [
  "Beyond accuracy: a cross-cohort reliability audit of deep learning Alzheimer's disease classifiers on structural MRI.",
  "A particle swarm-optimized stacking ensemble framework for early Parkinson's disease detection from multimodal clinical and vocal biomarkers.",
  "Reliability, generalization and explainability in deep learning for Alzheimer's disease diagnosis from neuroimaging: a systematic review.",
];

export const journalPubs = [
  { cite: "Manj, U. J., Rizvi, D. Q., & Haq, M. I. U. (2026). Beyond accuracy: a cross-cohort reliability audit of deep learning Alzheimer's disease classifiers on structural MRI with subject-level leakage control and temporal-consistency analysis.", status: "Under review", badge: "review" },
  { cite: "Manj, U. J., Majeed, M., & Haq, M. I. U. (2026). A particle swarm-optimized stacking ensemble framework for early Parkinson's disease detection from multimodal clinical and vocal biomarkers.", status: "Under review", badge: "review" },
  { cite: "Manj, U. J., Taylor, D., Ghani, U., & Niazi, I. K. (2026). Reliability, generalization, and explainability in deep learning for Alzheimer's disease diagnosis from neuroimaging: a systematic review.", status: "In preparation", badge: "prep" },
  { cite: "Akhter, M. N., Manj, U. J., et al. (2026). Deep learning-based kinetics and center of pressure estimation during sit-to-walk transitions from a single sacrum-mounted IMU. <em>IEEE Transactions on Biomedical Engineering / IEEE Journal of Translational Engineering in Health and Medicine.</em>", status: "Submitted", badge: "review" },
  { cite: "Akhter, M. N., Ali, H., Niazi, I. K., Manj, U. J., & Taylor, D. (2026). Predicting ground reaction force during sit to walk: towards kinetically instrumenting the Timed Up and Go test. <em>Medical & Biological Engineering & Computing.</em>", status: "Submitted", badge: "review" },
  { cite: "Akhter, M. N., Ali, H., Niazi, I. K., Manj, U. J., & Taylor, D. (2026). Application of machine learning techniques in the measurement of ground reaction force (GRF) waveforms using inertial measurement unit (IMU) sensors: a systematic literature review. <em>Computer Methods and Programs in Biomedicine / Medical Engineering & Physics.</em>", status: "Submitted", badge: "review" },
];

export const conferencePubs = [
  { cite: "Rizvi, D. Q., Manj, U. J., Majeed, M., & Haq, M. I. U. (2025). Sleep disorder prediction with PSO-optimized machine and deep learning models. <em>5th International Conference on Digital Futures and Transformative Technologies (ICODT2)</em>, Dec 2025.", status: "Presented", badge: "published" },
  { cite: "Haq, M. I. U., Ahmad, Z., Manj, U. J., Akhter, M. N., Arfeen, Z. A., & Qamar, S. D. (2026). Bio-inspired soft robotic gripper with variable stiffness using magneto-rheological control. <em>7th International Conference on Robotics and Automation in Industry (ICRAI)</em>, May 2026.", status: "Accepted", badge: "accepted" },
  { cite: "Manj, U. J., Rizvi, D. Q., & Khan, S. (2026). Domain-guided hybrid learning with particle swarm optimization and stacking ensemble for superior RUL prediction. <em>AI2ML 2026 (International Conference on AI & ML)</em>.", status: "Ready to submit", badge: "prep" },
  { cite: "Manj, U. J., Rizvi, D. Q., & Khan, S. (2026). CNN and Swin Transformer based Alzheimer's detection using explainable AI. <em>AI2ML 2026 (International Conference on AI & ML)</em>.", status: "Ready to submit", badge: "prep" },
  { cite: "Haq, M. I. U., Manj, U. J., Paracha, S. Q., Imam, Y., Rizvi, D. Q., & Farooqi, A. R. (2026). Neuro-symbolic AI-driven secure communication framework for autonomous cyber-physical systems. <em>APAN 2026 (Track 2: AI, Machine Learning and Computer Vision)</em>.", status: "Submitted", badge: "review" },
  { cite: "Haq, M. I. U., Manj, U. J., Farooqi, A. R., Rizvi, D. Q., Paracha, S. Q., & Rizvi, S. H. H. (2026). Cognitive cyber communication architecture with self-evolving AI agents for zero-trust 6G networks. <em>APAN 2026 (Track 1: Future Internet, R&E Networks and Infrastructure)</em>.", status: "Submitted", badge: "review" },
];

export const certHighlights = [
  { issuer: "Coursera / IBM", name: "Machine Learning & Data Science foundations", status: "done" },
  { issuer: "n8n", name: "Automation 101, 102 & 103", status: "progress" },
  { issuer: "IBM", name: "Cybersecurity Analyst", status: "done" },
  { issuer: "Princeton", name: "Bitcoin & Cryptocurrency Technologies", status: "done" },
  { issuer: "Microsoft", name: "SC-200 Security Operations", status: "progress" },
  { issuer: "Cisco", name: "CCNA", status: "progress" },
];
