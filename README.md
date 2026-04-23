# Developer Productivity MVP

## Overview
This project is a focused full-stack MVP designed to help an Individual Contributor (developer) understand productivity metrics and take meaningful action.

Instead of just displaying raw metrics, this application converts developer metrics into:
- clear interpretation
- actionable insights
- practical next steps

## Problem Statement
Developer productivity metrics such as Lead Time, Cycle Time, Bug Rate, Deployment Frequency, and PR Throughput are often difficult to interpret.

Raw metrics alone do not answer:
- why performance is low or high
- what actions should be taken next

## Solution
This MVP bridges the gap by converting raw metrics into:

Metrics → Insight → Action

It provides:
- a clean dashboard for metrics
- a likely story behind the numbers
- practical recommendations for improvement

## Tech Stack
- Next.js (App Router)
- React Functional Components
- Tailwind CSS
- Next.js API Routes

## Metrics Used
- Lead Time for Changes
- Cycle Time
- Bug Rate
- Deployment Frequency
- PR Throughput

## Features
### 1. Developer Dashboard
Displays all key productivity metrics in a card-based UI.

### 2. Health Score
A calculated score out of 100 representing overall developer performance.

### 3. Insight Generation
The system interprets metrics and generates a likely story explaining what might be happening.

### 4. Actionable Recommendations
Provides practical next steps based on detected issues.

### 5. Mock API Integration
Metrics are fetched via a Next.js API route (`/api/metrics`).

## Approach Taken
The application is built around a single focused user journey:

Developer → Sees Metrics → Understands Problem → Gets Suggestions → Takes Action

Instead of building a large unfinished dashboard, the focus was on clarity, simplicity, and actionable output.

## API Integration
A mock API route was created using Next.js at:

`/api/metrics`

This returns developer data including all required metrics and simulates backend behavior.

## AI Usage
I built the project independently from scratch, including the component structure, UI design, logic implementation, and deployment.

AI tools were used only for:
- debugging issues
- refining UI and code structure
- validating implementation ideas

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000`

## Live Demo
PASTE_YOUR_VERCEL_LINK_HERE

## GitHub Repository
PASTE_YOUR_GITHUB_LINK_HERE

## Improvements With More Time
If given more time, I would:
- add trend charts
- create a manager summary page
- store data in a real database
- improve animations and micro-interactions
- improve accessibility and SEO

## Limitations
- uses mock data instead of real-time workbook ingestion
- simplified health score logic
- no historical trend tracking

## Conclusion
This MVP demonstrates how developer productivity data can be transformed into meaningful insights and actionable recommendations.

The focus was on building a clear, usable, and explainable product rather than a broad unfinished dashboard.

## Author
Akshat Sirohi