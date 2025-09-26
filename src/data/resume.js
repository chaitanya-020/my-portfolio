export const RESUME = {
  name: "GELIVI SAI CHAITANYA",
  role: "Computer Science • AI/ML • Full-Stack • Cybersecurity",
  location: "Norman, Oklahoma",
  email: "sai.chaitanya.gelivi-1@ou.edu",
  phone: "+1 405 413 2430",
  website: "",
  github: "https://github.com/",            // TODO: add handle
  linkedin: "https://www.linkedin.com/in/", // TODO: add handle
  about:
    "Dedicated CS grad student with hands-on AI/ML, full-stack, and cybersecurity experience—focused on shipping real systems.",
  skills: [
    "JavaScript","React","Vite","Tailwind CSS","HTML5","CSS3",
    "Python","TensorFlow","NumPy","Pandas","Matplotlib",
    "Node.js","SQL","MongoDB","C/C++","Java",
    "Wireshark","Nmap","Burp Suite","OpenCV","Solidity","Hardhat","Ethers.js","MetaMask","Git"
  ],
  projects: [
    {
      title: "Decentralized Job Board DApp",
      description:
        "Ethereum Sepolia smart contracts for jobs + escrow + reputation; React/Vite frontend with MetaMask.",
      details: [
      "Escrow smart contracts with milestone approvals",
      "On-chain reputation weighting client and worker ratings",
      "React + Vite + Ethers.js wallet integration",
      "Hardhat tests; CI for lint+tests on push",
      ],
      tags: ["Solidity","Hardhat","Ethers.js","React","Vite","MetaMask"],
      link: "https://github.com/chaitanya-020/secure_multiclient_chat.git", repo: "https://github.com/chaitanya-020/secure_multiclient_chat.git"
    },
    {
      title: "FlashChat App",
      description: "Firebase Auth + Firestore real-time group chat.",
      tags: ["Flutter","Firebase","Firestore","Auth"],
      link: "", repo: ""
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Hidden Naive Bayes & Bayesian Belief Networks; focus on recall for fraud.",
      details: [
        "Cleaned 284k transactions; downsampled to handle class imbalance.",
        "Optimized HNB structure via mutual information; improved recall by 12%.",
        "Evaluated with PR AUC and cost-sensitive metrics.",
      ],
      tags: ["Python","ML"], link: "", repo: ""
    },
    {
      title: "ClimaZen Weather App",
      description: "OpenWeatherMap API with responsive UI in Flutter.",
      tags: ["Flutter","Dart","API"], link: "", repo: ""
    },
    {
      title: "Sales Ticket Forecasting",
      description: "ARIMA/SARIMA + LSTM on multi-year ticket data; KPI dashboards.",
      tags: ["Python","Statsmodels","Keras","Time Series"], link: "", repo: ""
    },
    {
      title: "Face Mask Detection (CNN)",
      description: "OpenCV + TensorFlow/Keras for webcam detection.",
      tags: ["TensorFlow","OpenCV","Python"], link: "", repo: ""
    },
    {
      title: "Frozen Lake RL",
      description: "Q-Learning & Double Q-Learning; reduced overestimation bias.",
      tags: ["Python","NumPy","OpenAI Gym"], link: "", repo: ""
    }
  ],
  experience: [
    {
      company: "SenseLearn",
      role: "Cybersecurity Intern",
      start: "Sep 2023",
      end: "Feb 2024",
      bullets: [
        "Supported web app VAPT (Burp, Wireshark, Nmap); documented remediations.",
        "Contributed to threat modeling and attack surface analysis.",
        "Automated log parsing/anomaly detection with Python."
      ]
    },
    {
      company: "MassMutual",
      role: "Machine Learning Intern",
      start: "Aug 2022",
      end: "Jan 2023",
      bullets: [
        "Built ARIMA/SARIMA, Linear Regression, and LSTM models for forecasting.",
        "Engineered features from 3+ yrs of historical data.",
        "Created ETL pipelines and KPI visualizations."
      ]
    }
  ],
  education: [
    {
      school: "University of Oklahoma",
      degree: "M.S. in Computer Science & Engineering",
      start: "Aug 2024",
      end: "Present",
      details: ["CGPA: 3.80"]
    },
    {
      school: "Vardhaman College of Engineering",
      degree: "B.E. in CSE (AI & ML)",
      start: "Dec 2020",
      end: "May 2024",
      details: ["CGPA: 9.66"]
    }
  ],
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
    { label: "IEEE Paper", href: "https://doi.org/10.1109/I2CT61223.2024.10544328" }
  ]
};
