import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logosPath = path.join(__dirname, "..", "public", "logos");
const cssPath = path.join(__dirname, "..", "src", "app", "logos.css");

let cssContent = "";

// Process each folder and its files
const processFolder = (folderName) => {
  const folderPath = path.join(logosPath, folderName);
  const files = fs.readdirSync(folderPath);

  // Group files by their base name (without -light suffix)
  const fileGroups = {};

  files.forEach((file) => {
    const baseName = file.replace("-light.", ".").replace(/\.[^/.]+$/, ""); // Remove extension and -light
    if (!fileGroups[baseName]) {
      fileGroups[baseName] = { dark: null, light: null };
    }
    if (file.includes("-light.")) {
      fileGroups[baseName].light = file;
    } else {
      fileGroups[baseName].dark = file;
    }
  });

  // Check if base logo exists, if not use wordmark as default
  const hasBaseLogo = Object.keys(fileGroups).some(
    (name) => name === folderName
  );
  const hasWordmark = Object.keys(fileGroups).some(
    (name) => name === `${folderName}-wordmark`
  );
  const defaultBase = hasBaseLogo
    ? folderName
    : hasWordmark
    ? `${folderName}-wordmark`
    : null;

  if (!defaultBase) return; // Skip if neither base nor wordmark exists

  // Process each group of files
  Object.entries(fileGroups).forEach(([baseName, variants]) => {
    // If using wordmark as default, include both base and wordmark classes
    if (!hasBaseLogo && baseName === `${folderName}-wordmark`) {
      if (variants.dark) {
        cssContent += `.ci-${folderName},
.ci-${folderName}-dark,
.ci-${folderName}-wordmark,
.ci-${folderName}-wordmark-dark {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
      }
      if (variants.light) {
        cssContent += `.ci-${folderName}-light,
.ci-${folderName}-wordmark-light {
  content: url("../../public/logos/${folderName}/${variants.light}");
}\n\n`;
      }
    } else {
      // Normal processing for other variants
      const className = baseName; // Use full baseName without stripping folderName

      if (variants.dark && variants.light) {
        // For vertical/stacked variants
        if (className.includes('vertical')) {
          cssContent += `.ci-${className.replace('vertical', 'stacked')},
.ci-${className.replace('vertical', 'stacked')}-dark,
.ci-${className},
.ci-${className}-dark {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${className.replace('vertical', 'stacked')}-light,
.ci-${className}-light {
  content: url("../../public/logos/${folderName}/${variants.light}");
}\n\n`;
        }
        // For horizontal/inline variants
        else if (className.includes('horizontal')) {
          cssContent += `.ci-${className.replace('horizontal', 'inline')},
.ci-${className.replace('horizontal', 'inline')}-dark,
.ci-${className},
.ci-${className}-dark {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${className.replace('horizontal', 'inline')}-light,
.ci-${className}-light {
  content: url("../../public/logos/${folderName}/${variants.light}");
}\n\n`;
        }
        // Regular case
        else {
          cssContent += `.ci-${className},
.ci-${className}-dark {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${className}-light {
  content: url("../../public/logos/${folderName}/${variants.light}");
}\n\n`;
        }
      } else if (variants.dark) {
        cssContent += `.ci-${className},
.ci-${className}-dark,
.ci-${className}-light {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
      }
    }
  });
};

// Read all folders and process
fs.readdir(logosPath, (err, folders) => {
  if (err) {
    console.error(`Error reading directory ${logosPath}: ${err}`);
    return;
  }

  folders.forEach((folder) => {
    if (fs.statSync(path.join(logosPath, folder)).isDirectory()) {
      processFolder(folder);
    }
  });

  // Write the CSS file
  fs.writeFileSync(cssPath, cssContent);
  console.log("CSS file generated successfully!");
});
