import { logos } from "./logos.js";

// Function to generate the HTML for a logo section
function generateSection(logo) {
  const iconSizes =
    logo.class.includes("-horizontal") ||
    logo.class.includes("-wordmark") ||
    logo.class.includes("vertical")
      ? ["3x", "6x", "9x"]
      : ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3x", "4x"];
  const iconElements = iconSizes
    .map((size) => `<i class="${logo.class} ci-${size}"></i>`)
    .join("");

  return `
        <section class="flex flex-col gap-4">
            <div class="font-inter flex gap-4 items-center flex-wrap">
                <p>${logo.name}</p>
                <code class="bg-gray-200 px-3 rounded-lg shadow">
                    &lt;i class="${logo.class}"&gt;&lt;/i&gt;
                </code>
            </div>
            <br />
            <div class="flex gap-1 items-center">${iconElements}</div>
        </section>
    `;
}

// Generate the sections for each logo and add it to the body
const sectionsHtml = logos.map(generateSection).join("");
document.body.innerHTML += sectionsHtml;
