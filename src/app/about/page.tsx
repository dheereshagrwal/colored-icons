"use client";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import { icons } from "@/constants";
import useCopy from '@/hooks/useCopy';

// Updated showcase icons with both tech and social icons
const showcaseIcons = {
  tech: [
    "react",
    "nextjs",
    "typescript",
    "tailwind",
    "javascript",
    "python",
    "nodejs",
    "vscode",
  ],
  social: [
    "github",
    "linkedin",
    "twitter",
    "instagram",
    "facebook",
    "youtube",
    "discord",
    "twitch",
  ],
};

const getIconsByType = (type: "tech" | "social") => {
  return icons.filter((icon) =>
    showcaseIcons[type].includes(icon.classes[0].toLowerCase())
  );
};

export default function About() {
  const { copied, handleCopy } = useCopy();

  return (
    <div className="relative isolate scroll-smooth">
      <section className="max-w-7xl mx-auto px-6">
        <Navbar />
      </section>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-20 lg:py-28">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About Colored Icons
          </h1>
          <p className="text-lg leading-8 text-gray-600 sm:text-xl/8">
            A carefully curated collection of beautiful, customizable icons for
            your next project
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {/* Project Description */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              The Project
            </h2>
            <p className="text-gray-600">
              Colored Icons is an open-source project designed to provide
              developers and designers with high-quality, customizable icons.
              Each icon is carefully crafted to maintain consistency while
              offering flexibility in color and style.
            </p>
          </section>

          {/* Icon Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Explore Our Icon Collection
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Development & Technology Icons
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {getIconsByType("tech").map((icon) => (
                    <div
                      key={icon.name}
                      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white shadow-sm border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all"
                    >
                      <i
                        className={`ci ci-${icon.classes[0]} ci-3x text-gray-800`}
                      ></i>
                      <span className="text-sm font-medium text-gray-600">
                        {icon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Brand & Social Media Icons
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {getIconsByType("social").map((icon) => (
                    <div
                      key={icon.name}
                      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white shadow-sm border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all"
                    >
                      <i
                        className={`ci ci-${icon.classes[0]} ci-3x text-gray-800`}
                      ></i>
                      <span className="text-sm font-medium text-gray-600">
                        {icon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-center mt-6">
                These are just a few examples from our extensive collection.
                Explore our full library to find the perfect icons for your
                project.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-purple-600">•</span>
                <span>Over 100+ professionally designed icons</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600">•</span>
                <span>Multiple variations for popular brands and logos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600">•</span>
                <span>Easy implementation with simple HTML/CSS classes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600">•</span>
                <span>Regular updates and new icon additions</span>
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Quick Start
            </h2>
            <div className="prose prose-gray max-w-full">
              <p className="text-gray-600 mt-4">Include via CDN:</p>
              <div className="mt-4 relative">
                <pre className="bg-gray-800/95 text-white p-4 pr-14 rounded-lg whitespace-pre-wrap word-break-all">
                  <code>{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.9/src/app/ci.min.css" />`}</code>
                </pre>
                <button
                  onClick={() =>
                    handleCopy(
                      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.9/src/app/ci.min.css" />'
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-white/10 transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <HiOutlineClipboardCheck className="w-5 h-5 text-green-400" />
                  ) : (
                    <HiOutlineClipboard className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* Community */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Join the Community
            </h2>
            <p className="text-gray-600">
              Colored Icons is built with and for the developer community. We
              welcome contributions, suggestions, and feedback to make this
              project even better.
            </p>
            <div className="mt-4">
              <Link
                href="https://github.com/dheereshagrwal/colored-icons"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black shadow-lg hover:shadow-gray-900/20 transition-all"
              >
                <FaGithub className="text-xl" />
                <span className="font-medium">View on GitHub</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
