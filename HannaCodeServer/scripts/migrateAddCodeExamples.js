#!/usr/bin/env node
// One-off migration: populate codeExamples for a specific lesson (JavaScript Essentials > Variables and Data Types)
require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../src/models/Lesson');
const Course = require('../src/models/Course');

(async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error('MONGO_URI missing');
    await mongoose.connect(process.env.MONGO_URI);

    const course = await Course.findOne({ title: 'JavaScript Essentials' });
    if (!course) throw new Error('Course not found');

  const lesson = await Lesson.findOne({ course: course._id, title: 'Variables and Data Types' });
    if (!lesson) throw new Error('Lesson not found');

    // Skip if already migrated
    if (lesson.codeExamples && lesson.codeExamples.length) {
      console.log('Already has codeExamples. Aborting.');
      process.exit(0);
    }

    const content = lesson.content || '';
    // Extract first fenced block
    const fence = content.match(/```javascript[\r\n]+([\s\S]*?)```/i);
    if (!fence) throw new Error('No code fence found');
    const codeBlock = fence[1];
    // Split examples by comment markers
    const rawExamples = codeBlock.split(/\n\s*\/\/\s*Example\s+/).filter(Boolean);
    const examples = [];
    rawExamples.forEach(chunk => {
      // chunk starts with like "1: Variable Declarations\n..."
      const firstLineEnd = chunk.indexOf('\n');
      const headerLine = firstLineEnd === -1 ? chunk : chunk.slice(0, firstLineEnd);
      const body = firstLineEnd === -1 ? '' : chunk.slice(firstLineEnd + 1);
      const headerMatch = headerLine.match(/^(\d+):?\s*(.*)$/);
      if (!headerMatch) return;
      const num = headerMatch[1];
      const title = headerMatch[2] ? headerMatch[2].trim() : `Example ${num}`;
      examples.push({ number: parseInt(num,10), title, code: body.trim() });
    });

    // Extract explanation section
    const explSec = content.match(/###\s+Explanation[\s\S]*?(?=###\s+Practice|##\s+Additional|$)/i);
    let explanationMd = explSec ? explSec[0] : '';
    // For each example find subsection
    // Determine base language from course (map 'other' to plaintext)
    const allowedLangs = ['javascript','css','html','python','php','dart','cpp','java','csharp','go','rust','plaintext'];
    const courseLang = (course.language === 'other') ? 'plaintext' : course.language;

    const detectLang = (code) => {
      const snippet = code.slice(0,300);
      if (/^#include\s+<.*?>/m.test(snippet) || /std::/m.test(snippet)) return 'cpp';
      if (/^def\s+\w+\(/m.test(snippet) || /print\(/m.test(snippet)) return 'python';
      if (/^<\/?[a-z!]/i.test(snippet) && /<html/i.test(snippet)) return 'html';
      if (/^{?\s*function\s+|=>|console\.log/.test(snippet)) return 'javascript';
      if (/^class\s+\w+\s*{/.test(snippet) && /public\s+static\s+void\s+main/.test(snippet)) return 'java';
      if (/System\.out\.println/.test(snippet)) return 'java';
      if (/echo\s+|\$[a-zA-Z_]+\s*=/.test(snippet)) return 'php';
      if (/import\s+'dart:|void\s+main\(\)/.test(snippet)) return 'dart';
      if (/fn\s+main\(\)/.test(snippet)) return 'rust';
      if (/[.#][a-zA-Z0-9_-]+\s*\{/.test(snippet) && /;/.test(snippet)) return 'css';
      return courseLang && allowedLangs.includes(courseLang) ? courseLang : 'plaintext';
    };

    const codeExamples = examples.map(ex => {
      let exExpl = '';
      const regex = new RegExp(`###+\\s+Example\\s+${ex.number}[\\r\\n]+([\\s\\S]*?)(?=###+\\s+Example|$)`, 'i');
      const m = explanationMd.match(regex);
      if (m) exExpl = m[1].trim();
      if (!exExpl) exExpl = 'Explanation coming soon.';
      const lang = detectLang(ex.code);
      return {
        title: ex.title,
        language: allowedLangs.includes(lang) ? lang : 'plaintext',
        code: ex.code,
        explanation: exExpl
      };
    });

    lesson.codeExamples = codeExamples;
    await lesson.save();
    console.log(`Migrated ${codeExamples.length} examples.`);
    process.exit(0);
  } catch (e) {
    console.error('Migration error:', e.message);
    process.exit(1);
  }
})();
