# Resource Cards App

This project is a Vue 3 + Bootstrap application that displays a list of resource cards with category filters, bookmarking functionality, and a "Show More" option.

## Features

- **Category Filtering:** Articles are filtered based on the selected category.
- **Chips:** Filter chips reflect the current selection, defaulting to **ALL**.
- **Bookmarking:** Each card has a bookmark icon that toggles bookmark status when clicked.
- **UI Buttons:**
  - Four action icons in the header
  - A context menu button on each card
  - A “Show More / Show Less” button at the bottom
  *(UI only — no extra functionality required for this exercise)*
- **Hover States:** All buttons include hover styles for better interactivity.

## Bonus Features ✨

- **Smooth Transitions:** Added animations when filtering cards for better user experience.
- **Show More / Show Less:**
  - By default, only **6 cards** are shown.
  - Clicking **Show More** reveals all available cards in a scrollable list.
  - Selecting a **new filter** automatically resets the view back to **6 cards**, keeping the UI consistent.

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Setup & Run

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   npm install
   npm run dev
   (the application will run on http://localhost:5173/)


  Assumptions

Data is mock data from mockData.js.

No backend/API integration is required.
