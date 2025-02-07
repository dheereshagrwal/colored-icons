import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to CSS files
const cssFiles = [
  path.join(__dirname, '..', 'src', 'app', 'logos.css'),
  path.join(__dirname, '..', 'src', 'app', 'sample.css')
];

// Updated parseCssGroups function using a regex
const parseCssGroups = (content) => {
  const urlGroups = new Map();
  const regex = /([^{}]+)\{[^}]*url\(["']([^"']+)["']\)[^}]*\}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const selectorsText = match[1].trim();
    const url = match[2].trim();
    const selectors = selectorsText.split(',')
      .map(s => s.trim())
      .filter(s => s);
    if (!urlGroups.has(url)) {
      urlGroups.set(url, new Set());
    }
    selectors.forEach(selector => urlGroups.get(url).add(selector));
  }
  return urlGroups;
};

// Process each CSS file
cssFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const urlGroups = parseCssGroups(content);
    const sortedUrls = Array.from(urlGroups.keys()).sort();
    
    let sortedContent = '';
    sortedUrls.forEach(url => {
      // Get all selectors for this URL and sort them
      const selectors = Array.from(urlGroups.get(url)).sort();
      
      // Create CSS rule block
      sortedContent += `${selectors.join(',\n')} {\n  content: url("${url}");\n}\n\n`;
    });
    
    fs.writeFileSync(filePath, sortedContent);
    console.log(`Successfully sorted ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Error processing ${path.basename(filePath)}:`, error);
  }
});
