import imageOne from '../assets/one.jpg'
import imageTwo from '../assets/two.jpg'
import imageThree from '../assets/three.jpg'
import imageFour from '../assets/four.jpg'
import imageFive from '../assets/five.jpg'
import imageSix from '../assets/six.jpg'

export const cards = [
  // Acquisition
  { id: 1, title: "Contract Lifecycle Management", category: "Acquisition", image: imageOne },
  { id: 2, title: "Procurement Guidelines 2025", category: "Acquisition", image: imageTwo },
  { id: 3, title: "Supplier Risk Analysis", category: "Acquisition", image: imageThree },

  // Communication
  { id: 4, title: "Effective Remote Team Communication", category: "Communication", image: imageFour },
  { id: 5, title: "Cross-Cultural Collaboration", category: "Communication", image: imageFive },
  { id: 6, title: "Business Writing Essentials", category: "Communication", image: imageSix },

  // Engineering
  { id: 7, title: "Frontend Engineering Best Practices", category: "Engineering", image: imageOne },
  { id: 8, title: "DevOps Pipelines Explained", category: "Engineering", image: imageTwo },
  { id: 9, title: "Systems Design Patterns", category: "Engineering", image: imageThree },

  // Education
  { id: 10, title: "Modern Teaching Methods", category: "Education", image: imageFour },
  { id: 11, title: "Gamification in Learning", category: "Education", image: imageFive },
  { id: 12, title: "Building Online Courses", category: "Education", image: imageSix },

  // Productivity
  { id: 13, title: "Time Management Frameworks", category: "Productivity", image: imageOne },
  { id: 14, title: "Deep Work Strategies", category: "Productivity", image: imageTwo },
  { id: 15, title: "Agile Workflows", category: "Productivity", image: imageThree },

  // Training
  { id: 16, title: "Leadership Development Program", category: "Training", image: imageFour },
  { id: 17, title: "Cybersecurity Awareness Training", category: "Training", image: imageFive },
  { id: 18, title: "Onboarding 101", category: "Training", image: imageSix },

  // Workplace
  { id: 19, title: "Future of Hybrid Work", category: "Workplace", image: imageOne },
  { id: 20, title: "Workplace Culture Shift", category: "Workplace", image: imageTwo },
  { id: 21, title: "Office Design Trends", category: "Workplace", image: imageThree },

  // Documentation
  { id: 22, title: "Vue 3 + Vite Quickstart Guide", category: "Documentation", image: imageFour },
  { id: 23, title: "API Documentation Standards", category: "Documentation", image: imageFive },
  { id: 24, title: "Markdown Cheatsheet", category: "Documentation", image: imageSix },

  // UI
  { id: 25, title: "UI Bootstrap Components", category: "UI", image: imageOne },
  { id: 26, title: "Figma to Code Workflow", category: "UI", image: imageTwo },
  { id: 27, title: "Accessibility in Design", category: "UI", image: imageThree },

  // Mixed additional
  { id: 28, title: "Microservices Architecture", category: "Engineering", image: imageFour },
  { id: 29, title: "Advanced Communication Tools", category: "Communication", image: imageFive },
  { id: 30, title: "Workplace Wellness Guide", category: "Workplace", image: imageSix }
]


export const filterOptions = [
  { title: 'ALL', value: 'ALL', id: 'btn-All' },
  { title: 'Acquisition', value: 'Acquisition', id: 'btn-Acquisition' },
  { title: 'Communication', value: 'Communication', id: 'btn-Communication' },
  { title: 'Engineering', value: 'Engineering', id: 'btn-Engineering' },
  { title: 'Education', value: 'Education', id: 'btn-Education' },
  { title: 'Productivity', value: 'Productivity', id: 'btn-Productivity' },
  { title: 'Training', value: 'Training', id: 'btn-Training' },
  { title: 'Workplace', value: 'Workplace', id: 'btn-Workplace' }
]
