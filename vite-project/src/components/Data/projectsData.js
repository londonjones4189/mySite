import IGH from "../photos/IGH.jpeg";
import claire from "../photos/claire.jpeg";
import blue from "../photos/blue.jpeg";

export const projectsData = {
  clarity: {
    id: "clarity",
    projectName: "Clarity",
    projectImage: claire,
    overview: "During my study abroad in Sydney, I worked with a healthcare AI startup developing a speech-to-text(STT) system that automatically logs patient medical information by listening to conversations. My team built a benchmarking tool to evaluate five STT providers. The frontend supports live audio and uploaded transcriptions, while the backend integrates speaker diarization and entity extraction to generate patient logs. We assessed each model using metrics such as word accuracy, entity extraction accuracy, latency, operations per second, cost, and semantic similarity.",
    role: "Software Engineer",
    contributors: ["Tracy Huang", "Nabeela Islam", "Elizabeth Fallat", "Lily Shiomitsu", "Peter Savinelli", "Zachary Wen", "Jessica Hollander"],
    techStack: [
      ["STT", "OpenAI, Deepgram, AWS Transcribe, Google Cloud, AssemblyAI"],
      ["Backend", "Flask"],
      ["AI/ML", "GPT-4o-mini"],
      ["Frontend", "React"]
    ],
    duration: "2 months",
    type: "Website",
    available: true,
    originalTechStack: ["#React", "#Flask", "#GPT-4o-mini"],
    description: "Worked with a healthcare startup developing a speech-to-text system that automatically logs patient medical information by listening to conversations"
  },
  nurtures_nest: {
    id: "nurtures_nest",
    projectName: "Nurture Nest",
    projectImage: IGH,
    overview: "I had the rewarding opportunity to work with IGH on Nurture Nest, a maternal health app developed in collaboration with Akyem Dwenase Medical Centre in Ghana. The app is designed to support maternal mental well-being through features such as free mental health screenings (including the PHQ-9 and EPDS), as well as a directory of nearby clinics and support resources. We also created a baby–fruit size comparison tool to help mothers track fetal development using familiar and relatable visuals.",
    role: "UX Lead",
    contributors: ["IGH Team"],
    techStack: [
      ["Design", "Figma"],
      ["Mobile Development", "Swift"],
    ],
    duration: "8 months",
    type: "Mobile App",
    available: true,
    originalTechStack: ["#Figma", "#Swift"],
    description: "Collaborated with partner clinic in Ghana to create an app that promotes mental health awareness for new and expecting mothers."
  },
  gday_mate: {
    id: "gday_mate",
    projectName: "G'Day Mate",
    projectImage: blue,
    overview: "Follow-up service project for the Benjamin A. Gilman International Scholarship Award. This project aims to connect scholarship recipients with local communities and resources, facilitating cultural exchange and ongoing support for international education experiences.",
    role: "Software Engineer",
    contributors: ["Gilman Scholarship Alumni", "International Education Office"],
    techStack: [
      ["Frontend", "React"],
      ["Styling", "TailwindCSS"],
      ["Backend", "Node.js"],
      ["Database", "SQLite"],
      ["Deployment", "Netlify"]
    ],
    duration: "4 months",
    type: "Website",
    available: false,
    originalTechStack: ["#Javascript", "#TailwindCSS", "#React"],
    description: "Follow-up service project for the Benjamin A. Gilman International Scholarship Award"
  }
};