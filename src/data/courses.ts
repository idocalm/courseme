import { Course } from "@/types/d";
import categories, { defaultCategory } from "./categories";
import instructors, { defaultInstructor } from "./instructors";

const courses: Course[] = [
  {
    id: "1",
    name: "Linear Algebra",
    description: "Learn the basics of linear algebra",
    fullDescription:
      "In this course, you will learn the basics of linear algebra, including vectors, matrices, and more.",
    category: categories.math ?? defaultCategory,
    price: "Free of charge",
    rating: 4.5,
    students: 100,
    lessons: 10,
    image:
      "https://plus.unsplash.com/premium_photo-1724266846347-bd10efdd330e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: instructors.idocalm ?? defaultInstructor,
    chapters: [
      {
        title: "Linear Equations Systems",
        description:
          "The art of linear algebra starts here, with solving linear equations.",
        complexity: "Beginner",
        lessons: [
          {
            id: "1.1",
            title: "Equations Involving an Unknown",
            description:
              "Learn to solve basic equations involving one unknown.",
            duration: "15 minutes",
            video: "placeholder",
          },
          {
            id: "1.2",
            title: "Equation by Equation",
            description:
              "Understand the step-by-step process of solving equations by isolation.",
            duration: "20 minutes",
            video: "placeholder",
          },
          {
            id: "1.3",
            title: "Simple Inequalities",
            description: "Explore methods for solving basic inequalities.",
            duration: "18 minutes",
            video: "placeholder",
          },
          {
            id: "1.4",
            title: "Systems of Equations - Ordered Systems",
            description: "Solve systems of equations in a specific order.",
            duration: "25 minutes",
            video: "placeholder",
          },
          {
            id: "1.5",
            title: "Nonlinear Systems",
            description: "Learn to solve equations involving nonlinear terms.",
            duration: "22 minutes",
            video: "placeholder",
          },
          {
            id: "1.6",
            title: "Dependent Systems",
            description:
              "Explore systems of equations that are dependent on each other.",
            duration: "30 minutes",
            video: "placeholder",
          },
          {
            id: "1.7",
            title: "Equations with Multiple Solutions",
            description:
              "Study cases where equations can have more than one solution.",
            duration: "28 minutes",
            video: "placeholder",
          },
          {
            id: "1.8",
            title: "Approximation of Solutions",
            description:
              "Learn techniques for approximating solutions to complex equations.",
            duration: "26 minutes",
            video: "placeholder",
          },
          {
            id: "1.9",
            title: "The Method of Differences",
            description: "Solve systems using the method of differences.",
            duration: "25 minutes",
            video: "placeholder",
          },
          {
            id: "1.10",
            title: "Advanced Systems",
            description: "Dive into more complex systems of equations.",
            duration: "30 minutes",
            video: "placeholder",
          },
          {
            id: "1.11",
            title: "Combining Solutions of Systems",
            description:
              "Explore how to combine solutions of different systems.",
            duration: "28 minutes",
            video: "placeholder",
          },
          {
            id: "1.12",
            title: "Mixed Dependent Systems",
            description: "Study mixed systems that have dependent variables.",
            duration: "35 minutes",
            video: "placeholder",
          },
          {
            id: "1.13",
            title: "Ordered Systems A and B",
            description: "Differentiate between two types of ordered systems.",
            duration: "20 minutes",
            video: "placeholder",
          },
        ],
      },
      {
        title: "Complex Functions of One Variable",
        description:
          "Introduction to functions and concepts in complex analysis.",
        complexity: "Intermediate",
        lessons: [
          {
            id: "1.1",
            title: "Functions of a Complex Variable",
            description:
              "Understanding the basics of complex variable functions.",
            duration: "13 minutes",
            video: "placeholder",
          },
          {
            id: "1.2",
            title: "Limits",
            description: "A deep dive into limits in the complex plane.",
            duration: "23 minutes",
            video: "placeholder",
          },
          {
            id: "1.3",
            title: "Derivatives",
            description:
              "Exploring the concept of derivatives in complex analysis.",
            duration: "37 minutes",
            video: "placeholder",
          },
          {
            id: "1.4",
            title: "Complex Functions - Properties",
            description: "Examining the properties of complex functions.",
            duration: "44 minutes",
            video: "placeholder",
          },
          {
            id: "1.5",
            title: "Harmonic Functions",
            description:
              "Learning about harmonic functions and their applications.",
            duration: "54 minutes",
            video: "placeholder",
          },
          {
            id: "1.6",
            title: "Fundamental Theorem of Complex Calculus",
            description:
              "Understanding the foundational theorem in complex calculus.",
            duration: "60 minutes",
            video: "placeholder",
          },
          {
            id: "1.7",
            title: "Line Integrals",
            description: "Analyzing line integrals in complex analysis.",
            duration: "63 minutes",
            video: "placeholder",
          },
          {
            id: "1.8",
            title: "Cauchy's Theorem",
            description: "Cauchy's theorem and its implications.",
            duration: "69 minutes",
            video: "placeholder",
          },
          {
            id: "1.9",
            title: "Cauchy-Riemann Equations",
            description: "Investigating the Cauchy-Riemann equations.",
            duration: "72 minutes",
            video: "placeholder",
          },
          {
            id: "1.10",
            title: "Maximum Modulus Principle",
            description: "The maximum modulus principle in complex functions.",
            duration: "79 minutes",
            video: "placeholder",
          },
          {
            id: "1.11",
            title: "Taylor Series",
            description:
              "Introduction to the Taylor series for complex functions.",
            duration: "98 minutes",
            video: "placeholder",
          },
          {
            id: "1.12",
            title: "Laurent Series",
            description: "Exploring Laurent series and their applications.",
            duration: "103 minutes",
            video: "placeholder",
          },
          {
            id: "1.13",
            title: "Residue Theorem",
            description:
              "Learning about the residue theorem in complex analysis.",
            duration: "115 minutes",
            video: "placeholder",
          },
        ],
      },
      {
        title: "Series and Sequences",
        description:
          "In-depth analysis of series and sequences in mathematics.",
        complexity: "Intermediate",
        lessons: [
          {
            id: "2.1",
            title: "Introduction to Sequences",
            description:
              "Basic understanding of sequences and their properties.",
            duration: "143 minutes",
            video: "placeholder",
          },
          {
            id: "2.2",
            title: "Convergence Tests",
            description: "Learning about convergence tests for sequences.",
            duration: "145 minutes",
            video: "placeholder",
          },
          {
            id: "2.3",
            title: "Power Series",
            description: "Introduction to power series and their convergence.",
            duration: "159 minutes",
            video: "placeholder",
          },
          {
            id: "2.4",
            title: "Fourier Series",
            description: "Understanding Fourier series and their applications.",
            duration: "173 minutes",
            video: "placeholder",
          },
          {
            id: "2.5",
            title: "Conformal Mappings",
            description:
              "Learning about conformal mappings in complex functions.",
            duration: "175 minutes",
            video: "placeholder",
          },
          {
            id: "2.6",
            title: "Gamma Function",
            description: "Exploring the gamma function and its uses.",
            duration: "183 minutes",
            video: "placeholder",
          },
          {
            id: "2.7",
            title: "Special Functions",
            description:
              "Investigating various special functions in complex analysis.",
            duration: "191 minutes",
            video: "placeholder",
          },
          {
            id: "2.8",
            title: "Appendix",
            description: "Further analysis and applications of series.",
            duration: "203 minutes",
            video: "placeholder",
          },
        ],
      },
    ],
  },
];

export default courses;
