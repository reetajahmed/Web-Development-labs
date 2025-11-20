// src/data.js

export const categories = [
  { id: 1, title: "Generative AI", image: "/images/AI Engineer Course.png" },
  { id: 2, title: "IT Certifications", image: "/images/IT Course.png" },
  { id: 3, title: "Data Science", image: "/images/DataScience Course.png" },
];

export const aiCourses = [
  {
    id: 1,
    title: "The AI Engineer Course 2025",
    instructor: "Rahul Raj Singh",
    rating: "4.6",
    price: "£349.99",
    image: "/images/AI Engineer Course.png"          // ← your photo
  },
  {
    id: 2,
    title: "Intro to AI Agents",
    instructor: "Various",
    rating: "4.6",
    price: "£349.99",
    image: "/images/Course2.png"
  },
  {
    id: 3,
    title: "AI Foundations",
    instructor: "Various",
    rating: "3.0",
    price: "£349.99",
    image: "/images/course3.png"
  },
  {
    id: 4,
    title: "AI Powered Salesforce Dev",
    instructor: "Various",
    rating: "4.8",
    price: "£349.99",
    image: "/images/course4.png"
  },
];

export const promoBanner = {
  image: "/images/promo.jpg"
};

export const companies = [
  { name: "Google", logo: "/images/google.webp" },
  { name: "Amazon", logo: "/images/amazon.png" },
  { name: "Meta", logo: "/images/meta.png" },
  { name: "Microsoft", logo: "/images/microsoft.jpg" },
];