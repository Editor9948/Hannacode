#!/usr/bin/env node
/**
 * Usage:
 *   node scripts/updateLessonContent.js --course "JavaScript Essentials" --lesson "Variables and Data Types" --file ./updates/variables_and_data_types.md
 *   or pass inline content:
 *   node scripts/updateLessonContent.js --course "JavaScript Essentials" --lesson "Variables and Data Types" --content "# New Content" 
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Course = require('../src/models/Course');
const Lesson = require('../src/models/Lesson');

(async () => {
  const args = process.argv.slice(2);
  const getArg = (name) => {
    const idx = args.indexOf(`--${name}`);
    return idx !== -1 ? args[idx + 1] : null;
  };

  const courseTitle = getArg('course');
  const lessonTitle = getArg('lesson');
  const filePath = getArg('file');
  const inlineContent = getArg('content');

  if (!courseTitle || !lessonTitle || (!filePath && !inlineContent)) {
    console.error('Missing required arguments.');
    console.log('Required: --course <title> --lesson <title> (--file <path> | --content <markdown>)');
    process.exit(1);
  }

  let newContent = inlineContent || '';
  if (filePath) {
    const abs = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
    if (!fs.existsSync(abs)) {
      console.error('File not found:', abs);
      process.exit(1);
    }
    newContent = fs.readFileSync(abs, 'utf8');
  }

  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI not set in environment.');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const course = await Course.findOne({ title: courseTitle });
    if (!course) {
      console.error('Course not found');
      process.exit(1);
    }

    const lesson = await Lesson.findOne({ course: course._id, title: lessonTitle });
    if (!lesson) {
      console.error('Lesson not found');
      process.exit(1);
    }

    lesson.content = newContent;
    lesson.updatedAt = new Date();
    await lesson.save();

    console.log(`Updated lesson '${lessonTitle}' in course '${courseTitle}'.`);
  } catch (err) {
    console.error('Error updating lesson:', err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
})();
