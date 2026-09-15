// Content for the research and teaching portfolio.
// Voice: plain first person, no dashes, no repetitive "I am X, I am Y" lines.
// Teaching is framed at university level; the full publication list is shown.

export const profile = {
  name: "Umair Javaid Manj",
  role: "PhD Researcher & Educator",
  location: "Auckland, New Zealand",
  email: "umairjavaidmanj@gmail.com",
  phone: "+64 20 4483186",
  github: "https://github.com/Umair-JM",
  linkedin: "https://linkedin.com/in/umairjm",
  intro:
    "I research health and applied AI at Auckland University of Technology, and I teach. Over the past few years I have lectured technical courses to full classrooms, supervised student projects from proposal to defence, and published across machine learning and biomedical engineering.",
  about: [
    "My doctoral research develops an AI based biomarker for identifying chronic lower back pain, combining clinical signals with machine learning. Around that I keep an active publication record in medical AI, neuroimaging and secure systems.",
    "Teaching is the other half of the work. I have designed courses end to end, delivered lectures and labs, marked and moderated assessments, and mentored students through their projects. I am looking for lecturer and teaching assistant roles in Auckland.",
  ],
};

export const metrics = [
  { num: "5", cap: "courses taught" },
  { num: "12", cap: "publications and submissions" },
  { num: "18", cap: "student projects supervised" },
];

export const interests = ["Machine Learning", "Health & Biomedical AI", "Neuroimaging", "Explainable AI", "Deep Learning", "Secure Systems", "Data Analysis"];

export const courses = [
  "Programming (C++ and Python)",
  "Data Structures & Algorithms",
  "Computer Networks",
  "Cybersecurity Fundamentals",
  "Machine Learning",
  "Data Analysis",
];

export const marqueeA = ["Machine Learning", "Neuroimaging", "Explainable AI", "Biomedical AI", "Deep Learning", "Data Analysis", "Secure Systems"];
export const marqueeB = ["Python", "PyTorch", "scikit-learn", "Course design", "Lecturing", "Lab instruction", "Assessment", "Supervision", "Technical writing"];

export const teachingSkills = {
  Teaching: ["Curriculum & course design", "Lecture delivery", "Lab instruction", "Assessment & moderation", "Project supervision"],
  Research: ["Machine learning", "Deep learning", "Neuroimaging pipelines", "Explainable AI", "Technical writing"],
  Technical: ["Python", "C++", "PyTorch", "scikit-learn", "Data analysis"],
};

export const experience = [
  {
    role: "Instructor",
    org: "HISDP, AI Lounge & Murabbi, NUST",
    date: "2023 to 2024",
    blurb:
      "Designed and delivered university level courses, authored the outlines, ran lectures and labs, set and moderated assessments, and supervised 18 student projects. Awarded Best Instructor.",
  },
  {
    role: "Program Manager",
    org: "Coding, Robotics & AI Learning Project, NUST",
    date: "2024 to 2025",
    blurb:
      "Led a national education program, coordinating 80 instructors, monitoring teaching quality and curriculum, and designing metrics to evaluate teaching effectiveness and learning outcomes.",
  },
  {
    role: "Research Associate",
    org: "COGNET Lab, SEECS, NUST",
    date: "2022 to 2023",
    blurb:
      "Conducted applied research in machine learning and security, and mentored junior researchers through their first projects.",
  },
  {
    role: "Research Assistant",
    org: "COGNET Lab, SEECS, NUST",
    date: "2021 to 2022",
    blurb:
      "Worked on machine learning and secure systems research and helped prepare technical teaching and lab material.",
  },
];

export const education = [
  { degree: "PhD, Health & Artificial Intelligence", org: "Auckland University of Technology, New Zealand", date: "2025 to present", blurb: "Developing an AI based biomarker for identifying chronic lower back pain." },
  { degree: "MS, Computational Science & Engineering", org: "National University of Sciences & Technology (NUST)", date: "2017 to 2021", blurb: "Thesis on energy optimisation in data centers using fuzzy inference systems, around a 30 percent cost reduction." },
  { degree: "BE, Computer Engineering", org: "National University of Sciences & Technology (NUST)", date: "2012 to 2016", blurb: "Thesis implementing a NATO narrowband waveform on an SDR kit with convolutional encoding and phase modulation." },
];

export const featuredPubs = [
  "A comparative assessment of deep fusion architectures for diabetes screening using plantar thermograms.",
  "Neuro-symbolic AI-driven secure communication framework for autonomous cyber-physical systems.",
  "Sleep disorder prediction with PSO-optimized machine and deep learning models.",
];

// Authoritative list (Manj Publication List). Ordered published, submitted,
// under review. Name is bolded in true position by the page.
export const publications = [
  { cite: "Rizvi, D. Q., Manj, U. J., Majeed, M., & Haq, M. I. U. (2025). Sleep disorder prediction with PSO-optimized machine and deep learning models. <em>5th International Conference on Digital Futures and Transformative Technologies (ICODT2)</em>.", status: "Published", badge: "published" },
  { cite: "Haq, M. I. U., Ahmad, Z., Manj, U. J., Akhter, M. N., Arfeen, Z. A., & Qamar, S. D. (2026). Bio-inspired soft robotic gripper with variable stiffness using magneto-rheological control. <em>7th International Conference on Robotics and Automation in Industry (ICRAI)</em>.", status: "Published", badge: "published" },
  { cite: "Haq, M. I. U., Manj, U. J., Paracha, S. Q., Imam, Y., Rizvi, D. Q., & Farooqi, A. R. (2026). Neuro-symbolic AI-driven secure communication framework for autonomous cyber-physical systems. <em>APAN 2026, Track 2: AI, Machine Learning and Computer Vision</em>.", status: "Published", badge: "published" },
  { cite: "Haq, M. I. U., Manj, U. J., Qamar, D., Imam, Y., Yasin, J., & Perwaiz, N. (2026). Rethinking intrusion detection evaluation: evidence of performance inflation under random data splits. <em>International Conference on Frontiers of Information Technology (FIT26), Machine Learning and its Applications Track</em>.", status: "Submitted", badge: "review" },
  { cite: "Murad, M. A., Manj, U. J., Haq, M. I. U., Qamar, D., & Imam, Y. (2026). Rethinking intrusion detection evaluation: evidence from temporal and unseen attack generalization. <em>International Conference on Frontiers of Information Technology (FIT26), Machine Learning and its Applications Track</em>.", status: "Submitted", badge: "review" },
  { cite: "Akhter, M. N., Ali, H., Niazi, I. K., Manj, U. J., & Taylor, D. (2026). Predicting ground reaction force during sit to walk: towards kinetically instrumenting the Timed Up and Go test. <em>Medical & Biological Engineering & Computing</em>.", status: "Submitted", badge: "review" },
  { cite: "Akhter, M. N., Manj, U. J., Ali, H., Niazi, I. K., & Taylor, D. (2026). Deep learning-based kinetics and center of pressure estimation during sit-to-walk transitions from a single sacrum-mounted IMU. <em>IEEE Transactions on Biomedical Engineering</em>.", status: "Submitted", badge: "review" },
  { cite: "Akhter, M. N., Ali, H., Niazi, I. K., Manj, U. J., & Taylor, D. (2026). Application of machine learning techniques in the measurement of ground reaction force (GRF) waveforms using inertial measurement unit (IMU) sensors: a systematic literature review. <em>Medical Engineering & Physics</em>.", status: "Submitted", badge: "review" },
  { cite: "Naveed, M., Perwaiz, N., Sultana, S., Ahmad, M., Fraz, M. M., & Manj, U. J. (2026). V-SenseDrive-PK: a multimodal benchmark dataset for driver behaviour analysis in Pakistan's urban and highway traffic. <em>International Journal of Computational Intelligence Systems</em>.", status: "Submitted", badge: "review" },
  { cite: "Haq, M. I. U., Manj, U. J., Qamar, D., Fatima, K., Imam, Y., & Rizvi, H. (2026). Quantized CNN–Transformer inference on FPGA for real-time RF spectrum intelligence and adaptive jamming defense. <em>Engineering Reports</em>.", status: "Submitted", badge: "review" },
  { cite: "Mabood, A., Shahzad, S., Sultana, S., Perwaiz, N., & Manj, U. J. (2026). Real-time radiometric thermal fire detection with OTFAN: accuracy meets deployability. <em>Sensing and Imaging</em>.", status: "Submitted", badge: "review" },
  { cite: "Manj, U. J., Rizvi, S. D. Q., Niazi, I. K., Akhter, M. N., & Ali, H. (2026). A comparative assessment of deep fusion architectures for diabetes screening using plantar thermograms. <em>The Computer Journal</em>.", status: "Submitted", badge: "review" },
];

export const certHighlights = [
  { issuer: "IBM", name: "Cybersecurity Analyst" },
  { issuer: "Coursera / IBM", name: "Machine Learning & Data Science" },
  { issuer: "Cisco", name: "CCST Cybersecurity" },
  { issuer: "TryHackMe", name: "Jr Penetration Tester" },
  { issuer: "IBM", name: "Pen Testing, IR & Forensics" },
  { issuer: "Princeton", name: "Bitcoin & Cryptocurrency Technologies" },
];

export const navGrid = [
  { to: "/publications", label: "Publications", note: "All 12 papers and submissions" },
  { to: "/teaching", label: "Teaching", note: "Courses, labs and supervision" },
  { to: "/guestbook", label: "Guestbook", note: "Leave a note" },
];

export const now = {
  date: "June 2026",
  text: "I am doing my PhD at AUT and looking for lecturer and teaching assistant work in Auckland.",
};
