const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv")
const slugify = require("slugify")
const Course = require("../models/Course")
const Lesson = require("../models/Lesson")

// Load env vars
dotenv.config({ path: "./config/config.env" })

// Connect to DB
mongoose.connect(process.env.MONGO_URI)

// Generate random date within last year
const getRandomDate = () => {
  const now = new Date()
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
  return new Date(oneYearAgo.getTime() + Math.random() * (now.getTime() - oneYearAgo.getTime()))
}

// Create courses
const createCourses = async () => {
  const courses = [
    {
      title: "HTML Fundamentals",
      description: "Learn the basics of HTML5, including semantic markup, forms, and multimedia elements.",
      weeks: 4,
      tuition: 199,
      minimumSkill: "beginner",
      scholarshipsAvailable: true,
      bootcamp: "60d21b4667d0d8992e610c85",
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("HTML Fundamentals", { lower: true }),
      createdAt: getRandomDate(),
      updatedAt: getRandomDate()
    },
    {
      title: "CSS Styling",
      description: "Master CSS3 including flexbox, grid, animations, and responsive design.",
      weeks: 6,
      tuition: 299,
      minimumSkill: "intermediate",
      scholarshipsAvailable: true,
      bootcamp: "60d21b4667d0d8992e610c85",
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("CSS Styling", { lower: true }),
      createdAt: getRandomDate(),
      updatedAt: getRandomDate()
    },
    {
      title: "JavaScript Programming",
      description: "Learn modern JavaScript including ES6+, DOM manipulation, and async programming.",
      weeks: 8,
      tuition: 399,
      minimumSkill: "intermediate",
      scholarshipsAvailable: true,
      bootcamp: "60d21b4667d0d8992e610c85",
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("JavaScript Programming", { lower: true }),
      createdAt: getRandomDate(),
      updatedAt: getRandomDate()
    },
    {
      title: "PHP Development",
      description: "Master PHP programming including OOP, MVC, and database integration.",
      weeks: 10,
      tuition: 499,
      minimumSkill: "intermediate",
      scholarshipsAvailable: true,
      bootcamp: "60d21b4667d0d8992e610c85",
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("PHP Development", { lower: true }),
      createdAt: getRandomDate(),
      updatedAt: getRandomDate()
    },
    {
      title: "Responsive Web Design",
      description: "Learn to create responsive websites that work on all devices.",
      weeks: 4,
      tuition: 199,
      minimumSkill: "beginner",
      scholarshipsAvailable: true,
      bootcamp: "60d21b4667d0d8992e610c85",
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Responsive Web Design", { lower: true }),
      createdAt: getRandomDate(),
      updatedAt: getRandomDate()
    },
    {
      title: "Web Accessibility",
      description: "Learn to create accessible websites that work for everyone.",
      weeks: 4,
      tuition: 199,
      minimumSkill: "beginner",
      scholarshipsAvailable: true,
      bootcamp: "60d21b4667d0d8992e610c85",
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Web Accessibility", { lower: true }),
      createdAt: getRandomDate(),
      updatedAt: getRandomDate()
    }
  ]

  return Course.insertMany(courses)
}

// Create lessons
const createLessons = async (courses) => {
  const lessons = []

  for (const course of courses) {
    for (let i = 0; i < 10; i++) {
      lessons.push({
        title: `Lesson ${i + 1}`,
        content: `# Lesson ${i + 1} Content\n\nThis is the content for lesson ${i + 1}.`,
        topic: "General",
        resources: [
          {
            name: `Lesson ${i + 1} Guide`,
            type: "pdf",
            url: `https://example.com/resources/${course._id}/lesson-${i + 1}-guide.pdf`,
          },
          {
            name: `Lesson ${i + 1} Code`,
            type: "code",
            url: `https://example.com/resources/${course._id}/lesson-${i + 1}-code.zip`,
          },
        ],
        quiz: [],
        createdAt: getRandomDate(),
        updatedAt: getRandomDate(),
      })
    }
  }
      
  return Lesson.insertMany(lessons)
}

// Import all data
const importData = async () => {
  try {
    // Clear all collections
    await Course.deleteMany()
    await Lesson.deleteMany()

    console.log("Data cleared...".red.inverse)

    // Create courses
    const courses = await createCourses()
    console.log(`${courses.length} courses created...`.green)

    // Create lessons
    const lessons = await createLessons(courses)
    console.log(`${lessons.length} lessons created...`.green)

    console.log("Data imported successfully!".green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Delete all data
const deleteData = async () => {
  try {
    await Course.deleteMany()
    await Lesson.deleteMany()

    console.log("Data destroyed...".red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Determine which action to take based on command line args
if (process.argv[2] === "-i") {
  importData()
} else if (process.argv[2] === "-d") {
  deleteData()
} else {
  console.log("Please use correct command:".yellow)
  console.log("  npm run seed -- -i  (to import data)".yellow)
  console.log("  npm run seed -- -d  (to delete all data)".yellow)
  process.exit()
} 