#!/usr/bin/env node

import fs from 'fs';

// Read the README.md file
const readmeContent = fs.readFileSync('README.md', 'utf8');

// Find all ## headers (but not ###)
const headers = readmeContent.match(/^## [^\n]+/gm);

if (!headers) {
  console.error('No ## headers found in README.md');
  process.exit(1);
}

// Generate TOC entries
const tocEntries = headers.map(header => {
  const title = header.replace('## ', '');
  // Create GitHub-style anchor links: lowercase, spaces to hyphens, remove punctuation
  const anchor = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
  return `- [${title}](#${anchor})`;
}).join('\n');

// Find the Contents section and add our TOC
const updatedContent = readmeContent.replace(
  /(## Contents\n)/,
  `$1\n${tocEntries}\n`
);

// Write the updated content back to README.md
fs.writeFileSync('README.md', updatedContent);

console.log('Table of contents updated successfully!');