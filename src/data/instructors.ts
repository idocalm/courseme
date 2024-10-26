import { Instructor } from "@/types/d";

export const defaultInstructor: Instructor = {
  name: "Unknown",
  experience: 0,
  mail: "",
  website: "",
  bio: "",
  avatar: "",
  ratingDescription: "",
};

const instructors: Record<string, Instructor> = {
  idocalm: {
    name: "Ido C.",
    bio: "I am a full-stack developer who works at Google. I've majored in math, and I was always amazed by the universe. I'm super hyped to invite you to join me in the process of learning new things!!",
    avatar:
      "https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    experience: 5,
    mail: "idocalman@outlook.com",
    ratingDescription:
      "committed and knowledgeable instructor, who is always willing to help, and is very patient with students.",
  },
};

export default instructors;
