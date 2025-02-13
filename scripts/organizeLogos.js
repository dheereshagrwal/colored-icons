import { promises as fsPromises } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname support in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the icons from the compiled JavaScript file (icons.js)
const iconsModule = await import("../src/constants/icons.js");
const icons = iconsModule.default;

// Helper to normalize strings for matching
const normalize = (str) => str.toLowerCase().replace(/[\s\W]+/g, "");

const logosDir = path.join(__dirname, "../public/logos");

(async () => {
  try {
    const items = await fsPromises.readdir(logosDir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        const folderName = item.name;
        const normalizedFolder = normalize(folderName);
        // Find icon whose normalized name matches the folder
        const icon = icons.find(
          (icon) => normalize(icon.name) === normalizedFolder
        );
        if (icon) {
          const category = icon.classes[0]
          const targetDir = path.join(logosDir, category);
          await fsPromises.mkdir(targetDir, { recursive: true });
          const oldPath = path.join(logosDir, folderName);
          const newPath = path.join(targetDir, folderName);
          console.log(`Moving "${folderName}" to "${category}" category.`);
          await fsPromises.rename(oldPath, newPath);
        } else {
          console.log(`No matching icon for folder: "${folderName}"`);
        }
      }
    }
  } catch (error) {
    console.error("Error organizing logos:", error);
  }
})();
