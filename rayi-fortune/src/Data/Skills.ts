// src/data/skills.ts
export type SkillCategory = {
  title: string;
  emoji: string;
  groups: { label: string; items: string[] }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    emoji: "💻",
    groups: [
      { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"] },
      { label: "Backend", items: ["Python", "JavaScript (Node.js)"] },
      { label: "Systems", items: ["C"] },
      { label: "Databases", items: ["SQL"] },
    ],
  },
  {
    title: "Frontend",
    emoji: "🎨",
    groups: [
      { label: "Core", items: ["HTML", "CSS", "Tailwind CSS"] },
      { label: "Frameworks", items: ["React", "Next.js"] },
      { label: "Animation", items: ["GSAP", "Framer Motion"] },
      { label: "Design", items: ["Figma"] },
      { label: "UI", items: ["Responsive Design", "Accessibility (WCAG)", "Modern UI/UX Principles"] },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    groups: [
      { label: "Runtime", items: ["Node.js"] },
      { label: "Frameworks", items: ["Express.js", "FastAPI"] },
      { label: "Authentication", items: ["JWT", "OAuth", "Session Authentication"] },
      { label: "APIs", items: ["REST APIs", "API Design", "API Documentation"] },
    ],
  },
  {
    title: "Databases",
    emoji: "🗄",
    groups: [
      { label: "SQL", items: ["PostgreSQL", "SQLite"] },
      { label: "NoSQL", items: ["MongoDB"] },
      { label: "ORM", items: ["Prisma", "SQLAlchemy"] },
    ],
  },
  {
    title: "Deployment & Cloud",
    emoji: "☁️",
    groups: [
      { label: "Platforms & Tools", items: ["Vercel", "Railway", "Docker", "GitHub Actions (CI/CD)", "Basic Linux", "Nginx", "AWS"] },
    ],
  },
  {
    title: "Machine Learning",
    emoji: "🤖",
    groups: [
      { label: "Mathematics", items: ["Linear Algebra", "Calculus (ML level)", "Probability", "Statistics", "Optimization"] },
      { label: "Python Libraries", items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"] },
      { label: "ML Concepts", items: ["Regression", "Classification", "Clustering", "Decision Trees", "Random Forests", "SVM", "Gradient Boosting"] },
      { label: "Deep Learning", items: ["Neural Networks", "CNNs", "RNNs", "LSTMs", "Transformers", "Attention"] },
      { label: "Computer Vision", items: ["OpenCV", "Image Processing", "Object Detection", "Image Classification", "Segmentation"] },
      { label: "NLP", items: ["Tokenization", "Embeddings", "LLM APIs", "Hugging Face", "Text Classification"] },
      { label: "MLOps", items: ["Model Deployment", "ML Pipelines", "Model Versioning", "Monitoring", "Docker", "FastAPI"] },
    ],
  },
  {
    title: "Tools",
    emoji: "🔧",
    groups: [{ label: "Everyday Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "Kaggle Notebook", "Google Colab"] }],
  },
  {
    title: "Networking",
    emoji: "🌍",
    groups: [{ label: "Fundamentals", items: ["HTTP/HTTPS", "DNS", "TCP/IP", "REST", "WebSockets", "CORS"] }],
  },
  {
    title: "Software Engineering",
    emoji: "🏗",
    groups: [
      { label: "Practices", items: ["OOP", "Functional Programming Basics", "Design Patterns", "SOLID Principles", "Clean Code", "Debugging", "Testing", "System Design"] },
    ],
  },
  {
    title: "Data Skills",
    emoji: "📊",
    groups: [{ label: "Practices", items: ["Data Cleaning", "Feature Engineering", "Data Visualization", "Exploratory Data Analysis (EDA)"] }],
  },
  {
    title: "AI",
    emoji: "🧠",
    groups: [
      { label: "Focus Areas", items: ["Classical Machine Learning", "Deep Learning", "Generative AI", "Prompt Engineering", "RAG (Retrieval-Augmented Generation)", "AI Product Development"] },
    ],
  },
  {
    title: "Business Skills",
    emoji: "📈",
    groups: [
      { label: "Skills", items: ["Client Communication", "Sales", "Requirements Gathering", "UI/UX Thinking", "Proposal Writing", "Project Management", "Product Thinking"] },
    ],
  },
];