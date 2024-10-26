interface Category {
  name: string;
}

interface Instructor {
  name: string;
  experience: number;
  mail: string;
  website?: string;
  bio: string;
  avatar: string;
  ratingDescription: string;
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  video: string;
  notes?: string;
  resources?: string;
}

interface Chapter {
  title: string;
  description: string;
  complexity: "Beginner" | "Intermediate" | "Advanced";
  lessons: Lesson[];
}

interface Course {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  category: Category;
  price: number | "Free of charge";
  rating: number;
  students: number;
  lessons: number;
  image: string;
  instructor: Instructor;
  chapters: Chapter[];
}

export type { Category, Instructor, Course, Chapter };
