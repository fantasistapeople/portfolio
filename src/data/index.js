export const personalInfo = {
  name: "Jeremy David Alexander",
  title: "Junior IT Engineer",
  tagline: "Monitor. Engineer. Repeat.",
  location: "Bekasi, Indonesia",
  email: "jeremydavida11@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeremy-david-alexander-8b6944213",
  about: [
    "I'm a passionate IT enthusiast with a deep focus on computer networking and security. Every day brings a new opportunity to learn, adapt, and grow — and that's exactly what keeps me driven in this field.",
    "Currently working as a Junior IT Engineer at XecureIT, I've had the privilege of implementing enterprise-grade security solutions for public-sector and enterprise clients across Indonesia. My background spans network security, cloud infrastructure, and web development.",
  ]
}

export const skills = [
  {
      category: "Networking", icon: "🌐", theme: "blue",
      items: ["Static Routing", "VLAN", "NAT", "Firewall Management"]
  },
  {
      category: "Security", icon: "🛡️", theme: "purple",
      items: ["OPNsense", "Suricata (IDS/IPS)"]
  },
  {
      category: "Cloud & Infrastructure", icon: "☁️", theme: "cyan",
      items: ["Google Cloud Platform", "Linux (Ubuntu/Rocky)", "Zabbix"]
  },
  {
      category: "Programming & Scripting", icon: "💻", theme: "pink",
      items: ["JavaScript"]
  }
]

export const experiences = [
  {
    company: "XecureIT",
    role: "Junior IT Engineer",
    period: "Aug 2025 – Present",
    points: [
      "Implemented Xecure Zone security products in data centers for public-sector and enterprise clients.",
      "Performed data center infrastructure installation covering servers, network switches, racks, and structured cabling, followed by full system and network configuration.",
      "Performed troubleshooting and technical support to resolve user-reported issues in a timely manner.",
      "Conducted user training sessions on the proper operation and usage of Xecure Zone products."
    ]
  },
  {
    company: "XecureIT",
    role: "SOC Analyst",
    period: "Feb 2025 – Aug 2025",
    points: [
      "Monitored and analyzed incoming logs and alerts using a SIEM platform to detect potential security threats.",
      "Identified suspicious IP addresses using tools such as VirusTotal and WHOIS to assess and validate potential threats.",
      "Reported verified malicious alerts to the CSIRT (Computer Security Incident Response Team) for further investigation and response.",
      "Monitored network traffic and data center devices using an availability monitoring system to ensure operational stability.",
      "Performed routine storage truncation on network traffic analyzers and IDS devices when disk usage approached full capacity.",
      "Conducted weekly updates of IDS rules and signatures to ensure up-to-date protection against emerging threats.",
      "Created and managed firewall rules to allow or block specific network traffic as required.",
      "Exported daily log files from the SIEM platform for reporting and documentation purposes."
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

export const trainings = [
  {
    name: "Bangkit Academy 2023 Batch 1",
    organizer: "Bangkit Academy — led by Google, Tokopedia, Gojek & Traveloka",
    year: "2023",
    duration: "6 Months",
    period: "Feb 2023 – Jul 2023",
    credentialUrl: null
  },
  {
    name: "Back-End Developer Specialization",
    organizer: "DBS Foundation",
    year: "2023",
    duration: "11 Months",
    period: "Jan 2023 – Nov 2023",
    credentialUrl: null
  }
]

export const projects = [
  {
    name: "Rejuvify",
    emoji: "🧴",
    description: "A mobile application that accurately predicts facial skin diseases and provides personalized skincare recommendations powered by a machine learning model. Responsible for backend development including REST API design, database management, and cloud deployment.",
    tech: ["Express.js", "Google Cloud Run", "Cloud SQL", "Cloud Storage", "Google Maps API"],
    github: "https://github.com/fantasistapeople/rejuvify-backend.git"
  },
  {
    name: "SubnetLens",
    emoji: "🌐",
    description: "A clean, professional-grade IP subnet calculator built for network engineers. Provides real-time CIDR calculation, binary IP visualization, subnet splitting, IP range to CIDR conversion, network overlap detection, and a full /0–/32 cheat sheet — all in a single, elegant dark-themed interface.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/fantasistapeople/subnetlens",
    demo: "https://subnetlens.vercel.app/"
  },
  {
    name: "Studio Musik 29 — App UI/UX",
    emoji: "🎵",
    description: "Designed the UI/UX for a music studio booking application, enabling customers to reserve studio sessions seamlessly without scheduling conflicts. Focused on intuitive user flows and a clean visual language.",
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    figma: "https://www.figma.com/proto/poQK8IypVpahWD3HJiZ2Hk/DESAIN-PELANGGAN-STUDIO-MUSIK-29?node-id=1-973&p=f&t=9eG616owliwaMJLQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  }
]

export const certifications = [
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    period: "Oct 2023 – Oct 2026",
    icon: "☁️",
    theme: "google",
    credentialUrl: "https://www.credly.com/badges/2f7032ee-7ddf-4bab-a8ae-01b0ecdcedf9/public_url",
    credentialType: "view"
  },
  {
    name: "Certified Ethical Hacker (CEHv13)",
    issuer: "EC-Council",
    period: "Oct 2025 – Oct 2028",
    icon: "🛡️",
    theme: "ec",
    credentialUrl: "https://aspen.eccouncil.org/Certificate/DownloadDigitalCert?Serial=//p3RrtmJ2v0Z2nIVGGVmAGOi/+vyWq8kR2Oi3xKp0k=",
    credentialType: "download"
  }
]