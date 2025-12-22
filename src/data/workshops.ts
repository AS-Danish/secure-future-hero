export interface Workshop {
  id: string;
  title: string;
  date: string;
  duration: string;
  location: string;
  seats: number;
  description: string;
  image: string;
  instructor: string;
  topics: string[];
  isUpcoming: boolean;
  registrationOpen: boolean;
  category: string;
}

export const workshops: Workshop[] = [
  {
    id: "ethical-hacking-workshop",
    title: "Hands-On Ethical Hacking Workshop",
    date: "January 15-17, 2025",
    duration: "3 Days",
    location: "Offline + Live Online",
    seats: 25,
    description: "Intensive practical workshop covering reconnaissance, exploitation, and post-exploitation techniques. Learn real-world attack scenarios in a controlled environment.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
    instructor: "Rajesh Kumar",
    topics: ["Reconnaissance", "Vulnerability Scanning", "Exploitation", "Post-Exploitation", "Report Writing"],
    isUpcoming: true,
    registrationOpen: true,
    category: "Ethical Hacking",
  },
  {
    id: "soc-analyst-bootcamp",
    title: "SOC Analyst Bootcamp",
    date: "February 8-9, 2025",
    duration: "2 Days",
    location: "Online Live",
    seats: 50,
    description: "Learn threat detection, SIEM tools, and incident response procedures in a simulated SOC environment. Perfect for aspiring security analysts.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    instructor: "Amit Verma",
    topics: ["SIEM Fundamentals", "Log Analysis", "Threat Detection", "Incident Response", "Alert Triage"],
    isUpcoming: true,
    registrationOpen: true,
    category: "SOC & Blue Team",
  },
  {
    id: "bug-bounty-masterclass",
    title: "Bug Bounty Masterclass",
    date: "March 1, 2025",
    duration: "1 Day",
    location: "Hybrid",
    seats: 30,
    description: "From finding your first bug to building a career in bug bounty hunting with real platform experience.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
    instructor: "Arjun Mehta",
    topics: ["Bug Bounty Platforms", "Reconnaissance", "Web Vulnerabilities", "Report Writing", "Career Guidance"],
    isUpcoming: true,
    registrationOpen: false,
    category: "Bug Bounty",
  },
  {
    id: "cloud-security-essentials",
    title: "Cloud Security Essentials",
    date: "March 15-16, 2025",
    duration: "2 Days",
    location: "Online Live",
    seats: 40,
    description: "Deep dive into AWS, Azure, and GCP security. Learn to identify misconfigurations and secure cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    instructor: "Sneha Patel",
    topics: ["AWS Security", "Azure Security", "GCP Security", "IAM Best Practices", "Cloud Compliance"],
    isUpcoming: true,
    registrationOpen: false,
    category: "Cloud Security",
  },
  {
    id: "malware-analysis-basics",
    title: "Malware Analysis Fundamentals",
    date: "April 5, 2025",
    duration: "1 Day",
    location: "Offline",
    seats: 20,
    description: "Introduction to malware analysis techniques including static and dynamic analysis in a sandboxed environment.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    instructor: "Dr. Vikram Singh",
    topics: ["Static Analysis", "Dynamic Analysis", "Sandboxing", "Malware Types", "Reverse Engineering Basics"],
    isUpcoming: true,
    registrationOpen: false,
    category: "Malware Analysis",
  },
  {
    id: "ctf-training-camp",
    title: "CTF Training Camp",
    date: "April 20-21, 2025",
    duration: "2 Days",
    location: "Hybrid",
    seats: 35,
    description: "Prepare for Capture The Flag competitions with hands-on challenges in web, crypto, forensics, and reverse engineering.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    instructor: "Priya Sharma",
    topics: ["Web Challenges", "Cryptography", "Forensics", "Reverse Engineering", "Team Strategies"],
    isUpcoming: true,
    registrationOpen: false,
    category: "CTF & Competitions",
  },
];

export const getWorkshopById = (id: string): Workshop | undefined => {
  return workshops.find((workshop) => workshop.id === id);
};
