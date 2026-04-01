export const personalInfo = {
  name: "Jeremy David Alexander",
  title: "Network Security Engineer",
  tagline: "Building secure networks, one packet at a time.",
  location: "Bekasi, Indonesia",
  email: "jeremydavida11@mail.com",
  linkedin: "https://www.linkedin.com/in/jeremy-david-alexander-8b6944213",
  about: [
    "I'm a passionate IT enthusiast with a deep focus on computer networking and security. Every day brings a new opportunity to learn, adapt, and grow — and that's exactly what keeps me driven in this field.",
    "Currently working as a Junior Engineer at XecureIT, I've had the privilege of implementing enterprise-grade security solutions in government institutions across Indonesia. My background spans network security, cloud infrastructure, and web development.",
    "Beyond technical work, I've served as a Cloud Computing Mentor in the Bangkit program — empowering the next generation of Indonesian tech talent."
  ]
}

export const skills = [
  {
    category: "Networking", icon: "🌐", theme: "blue",
    items: ["OPNsense", "VLAN", "Subnetting", "Firewall Management", "Routing & Switching", "Asymmetric Routing", "NTP", "STP"]
  },
  {
    category: "Cloud & Infrastructure", icon: "☁️", theme: "cyan",
    items: ["Google Cloud Platform", "Compute Engine", "VPC", "Hierarchical Firewall", "IAP Tunnel"]
  },
  {
    category: "Security", icon: "🛡️", theme: "purple",
    items: ["PKI / EJBCA", "mTLS", "CRL Management", "Firewall Policy", "IDS/IPS"]
  },
  {
    category: "Tools & Platforms", icon: "🔧", theme: "indigo",
    items: ["Linux (Ubuntu/Rocky)", "Docker", "Zabbix", "Nginx", "Git"]
  },
  {
    category: "Programming & Scripting", icon: "💻", theme: "pink",
    items: ["Python", "Bash"]
  }
]

export const experiences = [
  {
    company: "XecureIT",
    role: "Junior Engineer",
    period: "Feb 2025 – Present",
    points: [
      "Implemented Xecure Zone security products in client data centers, including government institutions such as the Ministry of Defense, Indonesian Army Headquarters (Mabes TNI AD), and Ministry of Home Affairs.",
      "Performed data center infrastructure installation covering servers, network switches, racks, and structured cabling, followed by full system and network configuration.",
      "Performed troubleshooting and technical support to resolve user-reported issues in a timely manner.",
      "Conducted user training sessions on the proper operation and usage of Xecure Zone products."
    ]
  },
  {
    company: "Bangkit — led by Google, GoTo & Traveloka",
    role: "Cloud Computing Mentor",
    period: "Feb 2024 – Jul 2024",
    points: [
      "Guided a class of 25 mentees through the Cloud Computing learning path with structured weekly consultations.",
      "Provided constructive feedback on mentees' project work to support their learning progress.",
      "Organized study group sessions and one-on-one consultations for mentees needing additional support.",
      "Assisted in facilitating weekly ILT sessions covering cloud computing, soft skills, and professional English."
    ]
  },
  {
    company: "Dinas Pendidikan Kota Surabaya",
    role: "Intern",
    period: "Jan 2023 – Feb 2023",
    points: [
      "Developed an online attendance web application for elementary school students using the Laravel framework.",
      "Diagnosed and resolved hardware and software issues within the office environment."
    ]
  }
]

export const projects = [
  {
    name: "Rejuvify",
    emoji: "🧴",
    description: "A mobile application that accurately predicts facial skin diseases and provides personalized skincare recommendations powered by a machine learning model. Responsible for backend development including REST API design, database management, and cloud deployment.",
    tech: ["Express.js", "Google Cloud Run", "Cloud SQL", "Cloud Storage", "Google Maps API"],
    github: "#"
  },
  {
    name: "Studio Musik 29 — App UI/UX",
    emoji: "🎵",
    description: "Designed the UI/UX for a music studio booking application, enabling customers to reserve studio sessions seamlessly without scheduling conflicts. Focused on intuitive user flows and a clean visual language.",
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    figma: "#"
  }
]

export const certifications = [
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    period: "Oct 2023 – Oct 2026",
    icon: "☁️",
    theme: "google"
  },
  {
    name: "Certified Ethical Hacker (CEHv13)",
    issuer: "EC-Council",
    period: "Oct 2025 – Oct 2028",
    icon: "🛡️",
    theme: "ec"
  }
]