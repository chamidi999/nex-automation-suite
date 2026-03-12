# Nex Computer - Automation Testing Suite

This repository contains a comprehensive Automated UI Testing suite for the **Nex Computer** E-commerce platform. As a Web Developer transitioning into QA Engineering, I developed these scripts to ensure the reliability of critical user flows.

## Tech Stack
* **Framework:** Playwright
* **Language:** TypeScript
* **Browser Coverage:** Chromium (Desktop), Mobile Safari (iPhone 13)
* **Reporting:** Playwright HTML Reporter

## Key Test Scenarios
1. **Shopping Cart Flow:** - Navigating to product pages.
   - Adding products to the cart and verifying the cart badge update.
   - Handling dynamic UI elements and network delays using smart assertions.

## Features
* **Cross-Browser Testing:** Verified on both Desktop and Mobile environments.
* **Automated Evidence:** - **Screenshots:** Captured for every test run (Pass/Fail).
  - **Video Recording:** Retained on test failure for easy debugging.
  - **Trace Viewer:** Enabled for deep-dive analysis of failures.

##  How to Run
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run tests: `npx playwright test`.
4. View Report: `npx playwright show-report`.
