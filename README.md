# GitHub Topic Scraper 🕵️‍♂️

Welcome to **GitHub Issue Scraper**! This project is a Node.js-based tool for scraping GitHub repositories' issues and exporting the links as PDF files. It leverages **Cheerio** to scrape the web and **PDFKit** to generate well-organized PDFs for easy reference.

![GitHub](https://img.shields.io/badge/Node.js-v21.2.0-brightgreen)
![GitHub](https://img.shields.io/badge/WebScraping-Cheerio-blue)
![GitHub](https://img.shields.io/badge/PDF-Generator-yellowgreen)

---

## Features 🎯

- **Scrapes GitHub issues** from any public repository.
- **Exports issue links as a PDF** file organized by repository.
- **Automatically creates directories** based on GitHub topics.
- **Easy to use** with minimal setup.

---

## Getting Started 🚀

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v21.2.0 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/github-Topic-scraper.git
   cd github-Topic-scraper

  ```
📦 github-Topic-scraper
 ┣ 📂 topics
 ┃ ┣ 📜 [topic-name].pdf   # PDF file of issues for each repository
 ┣ 📜 main.js              # Main script to start the scraper
 ┣ 📜 reposPage.js         # Handles repository issue scraping
 ┣ 📜 issues.js
 ┣ 📜 README.md            # Project documentation
 ┗ 📜 package.json         # Node.js package information

