/**
 * Script to generate an alphabetical index of all projects in the Awesome AI Agents repository
 * 
 * This script:
 * 1. Scans all category files in the categories/ directory
 * 2. Extracts project names, descriptions, GitHub links, and categories
 * 3. Sorts them alphabetically
 * 4. Generates a markdown file with links to both GitHub repositories and internal category files
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CATEGORIES_DIR = path.join(__dirname, 'categories');
const OUTPUT_FILE = path.join(__dirname, 'alphabetical-index.md');
const README_FILE = path.join(__dirname, 'README.md');

// Regular expressions for parsing markdown files
const PROJECT_REGEX = /### \[(.*?)\]\((.*?)\)/g;
const DESCRIPTION_REGEX = /\]\(.*?\)\n\n(?:.*\n)*?(.*?)(?:\n\n|$)/;
const GITHUB_BADGE_REGEX = /\[!\[GitHub Repo\].*?\]\((https:\/\/github\.com\/.*?)\)/;
const SECTION_REGEX = /^## (.*?)$/m;

// Function to extract projects from a markdown file
function extractProjects(filePath, categoryFileName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const projects = [];
  
  // Get the category name from the file (first h1)
  const categoryName = content.match(/# (.*?)(?:\n|$)/)[1];
  
  // Find all sections in the file
  const sections = [];
  let currentSection = null;
  
  content.split('\n').forEach(line => {
    const sectionMatch = line.match(SECTION_REGEX);
    if (sectionMatch) {
      currentSection = sectionMatch[1];
      sections.push(currentSection);
    }
  });
  
  // Extract all projects
  let match;
  while ((match = PROJECT_REGEX.exec(content)) !== null) {
    const projectName = match[1];
    const projectLink = match[2];
    const startPos = match.index + match[0].length;
    
    // Get the description (text after the project header and badges)
    const descriptionMatch = content.substring(startPos).match(DESCRIPTION_REGEX);
    const description = descriptionMatch ? descriptionMatch[1].trim() : '';
    
    // Get GitHub link if available
    const githubMatch = content.substring(startPos, startPos + 500).match(GITHUB_BADGE_REGEX);
    const githubLink = githubMatch ? githubMatch[1] : projectLink;
    
    // Determine which section this project belongs to
    let projectSection = '';
    let lastSectionPos = 0;
    
    for (const section of sections) {
      const sectionPos = content.indexOf(`## ${section}`);
      if (sectionPos < match.index && sectionPos > lastSectionPos) {
        projectSection = section;
        lastSectionPos = sectionPos;
      }
    }
    
    projects.push({
      name: projectName,
      description: description,
      githubLink: githubLink,
      category: categoryName,
      section: projectSection,
      internalLink: `./categories/${categoryFileName}#${projectName.toLowerCase().replace(/[^\w]+/g, '-')}`
    });
  }
  
  return projects;
}

// Main function to generate the index
function generateIndex() {
  let allProjects = [];
  
  // Read all category files
  const categoryFiles = fs.readdirSync(CATEGORIES_DIR)
    .filter(file => file.endsWith('.md'));
  
  // Extract projects from each file
  categoryFiles.forEach(file => {
    const filePath = path.join(CATEGORIES_DIR, file);
    const projects = extractProjects(filePath, file);
    allProjects = allProjects.concat(projects);
  });
  
  // Sort projects alphabetically
  allProjects.sort((a, b) => a.name.localeCompare(b.name));
  
  // Generate the markdown content
  let markdownContent = '# Alphabetical Index of AI Agent Projects\n\n';
  markdownContent += 'This is an automatically generated index of all projects in the repository, sorted alphabetically.\n\n';
  
  // Add table of contents with letter anchors
  markdownContent += '## Table of Contents\n\n';
  
  let currentLetter = '';
  allProjects.forEach(project => {
    const firstLetter = project.name.charAt(0).toUpperCase();
    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      markdownContent += `- [${currentLetter}](#${currentLetter.toLowerCase()})\n`;
    }
  });
  
  markdownContent += '\n';
  
  // Add projects grouped by first letter
  currentLetter = '';
  allProjects.forEach(project => {
    const firstLetter = project.name.charAt(0).toUpperCase();
    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      markdownContent += `## ${currentLetter}\n\n`;
    }
    
    markdownContent += `### [${project.name}](${project.githubLink})\n\n`;
    markdownContent += `**Category:** [${project.category}](${project.internalLink.split('#')[0]})`;
    
    if (project.section) {
      markdownContent += ` > ${project.section}`;
    }
    
    markdownContent += `\n\n${project.description}\n\n`;
    markdownContent += `[View in Repository](${project.internalLink})\n\n`;
  });
  
  // Write the markdown file
  fs.writeFileSync(OUTPUT_FILE, markdownContent);
  console.log(`Index generated at ${OUTPUT_FILE}`);
  
  // Update README.md to include a link to the alphabetical index
  let readmeContent = fs.readFileSync(README_FILE, 'utf8');
  
  // Check if the link already exists
  if (!readmeContent.includes('alphabetical-index.md')) {
    // Find the Contents section
    const contentsMatch = readmeContent.match(/## Contents\n\n((?:- \[.*?\]\(.*?\)\n)*)/);
    
    if (contentsMatch) {
      const newContentsSection = contentsMatch[0] + '- [Alphabetical Index](alphabetical-index.md)\n';
      readmeContent = readmeContent.replace(contentsMatch[0], newContentsSection);
      
      fs.writeFileSync(README_FILE, readmeContent);
      console.log('README.md updated with link to alphabetical index');
    }
  }
}

// Run the script
generateIndex();
