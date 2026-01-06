import pawmart from '../assets/pawmart.png';
import toy from '../assets/toy.png';
import blood from '../assets/blood.png';

export const projects = [
  {
    id: "01",
    title: "BloodCare",
    subtitle: "Blood Donation & Management Platform",
    image: blood,
    tags: ["MongoDB", "Express", "React", "Node"],
    mainTechStack: [
      "React.js for frontend interface",
      "Node.js & Express.js for backend API",
      "MongoDB for database management",
      "Firebase Authentication",
      "TailwindCSS for styling"
    ],
    description: "BloodCare is a comprehensive platform designed to bridge the gap between blood donors and those in need. It streamlines the donation process, manages donor records, and facilitates quick communication during emergencies.",
    liveLink: "https://blood-care-1.netlify.app/",
    githubLink: "https://github.com/ripasarkar49/blood-donation-client",
    challenges: [
      "Implementing real-time availability tracking for blood types.",
      "Ensuring secure user authentication and data privacy for medical information.",
      "Optimizing database queries for efficient search functionality."
    ],
    improvements: [
      "Add a mobile application for easier access.",
      "Implement push notifications for urgent blood requests.",
      "Integrate with hospital management systems for automated updates."
    ]
  },
  {
    id: "02",
    title: "Pawmart",
    subtitle: "Pet Care & Product Marketplace",
    image: pawmart,
    tags: ["MongoDB", "Express", "React", "Node"],
    mainTechStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe Integration for payments"
    ],
    description: "Pawmart is a vibrant marketplace for pet lovers, offering a wide range of pet products and care services. It features a user-friendly shopping experience, secure checkout, and a community blog for pet care tips.",
    liveLink: "https://pawmart-app.netlify.app/",
    githubLink: "https://github.com/ripasarkar49/pawmart-client-side",
    challenges: [
      "Managing complex product variations and inventory states.",
      "Integrating secure payment gateways and handling transaction lifecycles.",
      "Designing a responsive UI that works seamlessly across devices."
    ],
    improvements: [
      "Implement personalized product recommendations.",
      "Add a vet consultation booking feature.",
      "Create a user loyalty reward program."
    ]
  },
  {
    id: "03",
    title: "ToyNook",
    subtitle: "Kids Toy Marketplace",
    image: toy,
    tags: ["React", "Recharts", "Tailwind", "JSON"],
    mainTechStack: [
      "React.js",
      "TailwindCSS",
      "Firebase",
      "Recharts for analytics"
    ],
    description: "ToyNook is a delightful online store dedicated to children's toys. It provides an engaging shopping environment with categorized filtering, detailed product views, and a simplified checkout process for parents.",
    liveLink: "https://toynook.netlify.app/",
    githubLink: "https://github.com/ripasarkar49/toyNook-app",
    challenges: [
      "Creating performant filtering and sorting for a large catalog.",
      "Designing a playful yet professional aesthetic suitable for the niche.",
      "Handling image optimization for fast load times."
    ],
    improvements: [
      "Add user reviews and ratings system.",
      "Implement a wishlist feature.",
      "Introduce a gift-wrapping option at checkout."
    ]
  }
];
