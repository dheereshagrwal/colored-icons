import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logosPath = path.join(__dirname, "..", "public", "logos");
const cssPath = path.join(__dirname, "..", "src", "app", "logos.css");

let cssContent = "";

// Map of logo aliases
const logoAliases = {
  codeforces: ["cf"],
  discord: ["dc"],
  digitalocean: ["do"],
  ethereum: ["eth"],
  facebook: ["fb"],
  go: ["golang"],
  leetcode: ["lc"],
  microsoft: ["msft", "ms"],
  nodejs: ["node"],
  expressjs: ["express"],
  instagram: ["insta"],
  nuxtjs: ["nuxt"],
  nextjs: ["next"],
  ola: ["olacabs"],
  react: ["reactjs"],
  ringcentral: ["rc"],
  youtube: ["yt"],
  cplusplus: ["cpp"],
  louisvuitton: ["lv"],
  framer: ["framer-motion"]
};

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
      const className = baseName;

      // Function to generate class names including aliases
      const generateClassNames = (baseClassName) => {
        let classes = [baseClassName];

        // Check if this base class has aliases
        const baseNameWithoutPrefix = baseClassName.replace(
          `${folderName}-`,
          ""
        );
        if (logoAliases[folderName]) {
          logoAliases[folderName].forEach((alias) => {
            // If it's a base class
            if (baseClassName === folderName) {
              classes.push(alias);
            } else {
              // For variants like horizontal, vertical, etc.
              classes.push(`${alias}-${baseNameWithoutPrefix}`);
            }
          });
        }

        return classes.join(",\n.ci-");
      };

      if (variants.dark && variants.light) {
        // For vertical/stacked variants
        if (className.includes("vertical") || className.includes("stacked")) {
          const baseClass = className
            .replace("vertical", "")
            .replace("stacked", "");
          cssContent += `.ci-${generateClassNames(baseClass + "vertical")},
.ci-${generateClassNames(baseClass + "vertical-dark")},
.ci-${generateClassNames(baseClass + "stacked")},
.ci-${generateClassNames(baseClass + "stacked-dark")} {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${generateClassNames(
            baseClass + "vertical-light"
          )},
.ci-${generateClassNames(baseClass + "stacked-light")} {
  content: url("../../public/logos/${folderName}/${variants.light}");
}\n\n`;
        }
        // For horizontal/inline variants
        else if (
          className.includes("horizontal") ||
          className.includes("inline")
        ) {
          const baseClass = className
            .replace("horizontal", "")
            .replace("inline", "");
          cssContent += `.ci-${generateClassNames(baseClass + "horizontal")},
.ci-${generateClassNames(baseClass + "horizontal-dark")},
.ci-${generateClassNames(baseClass + "inline")},
.ci-${generateClassNames(baseClass + "inline-dark")} {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${generateClassNames(
            baseClass + "horizontal-light"
          )},
.ci-${generateClassNames(baseClass + "inline-light")} {
  content: url("../../public/logos/${folderName}/${variants.light}");
}\n\n`;
        }
        // Regular case
        else {
          cssContent += `.ci-${generateClassNames(className)},
.ci-${generateClassNames(className + "-dark")} {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
          cssContent += `.ci-${generateClassNames(className + "-light")} {
  content: url("../../public/logos/${folderName}/${variants.light}");
}\n\n`;
        }
      } else if (variants.dark) {
        // For vertical/stacked variants
        if (className.includes("vertical") || className.includes("stacked")) {
          const baseClass = className
            .replace("vertical", "")
            .replace("stacked", "");
          cssContent += `.ci-${generateClassNames(baseClass + "vertical")},
.ci-${generateClassNames(baseClass + "vertical-dark")},
.ci-${generateClassNames(baseClass + "vertical-light")},
.ci-${generateClassNames(baseClass + "stacked")},
.ci-${generateClassNames(baseClass + "stacked-dark")},
.ci-${generateClassNames(baseClass + "stacked-light")} {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
        }
        // For horizontal/inline variants
        else if (
          className.includes("horizontal") ||
          className.includes("inline")
        ) {
          const baseClass = className
            .replace("horizontal", "")
            .replace("inline", "");
          cssContent += `.ci-${generateClassNames(baseClass + "horizontal")},
.ci-${generateClassNames(baseClass + "horizontal-dark")},
.ci-${generateClassNames(baseClass + "horizontal-light")},
.ci-${generateClassNames(baseClass + "inline")},
.ci-${generateClassNames(baseClass + "inline-dark")},
.ci-${generateClassNames(baseClass + "inline-light")} {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
        }
        // Regular case
        else {
          cssContent += `.ci-${generateClassNames(className)},
.ci-${generateClassNames(className + "-dark")},
.ci-${generateClassNames(className + "-light")} {
  content: url("../../public/logos/${folderName}/${variants.dark}");
}\n\n`;
        }
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
