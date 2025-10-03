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

- **Smooth Transitions:** Added animations when filtering cards and screen resizing for better user experience.
- **Show More / Show Less:**
  - By default, only **6 cards** are shown.
  - Clicking **Show More** reveals all available cards in a scrollable list.
  - Selecting a **new filter** automatically resets the view back to **6 cards**, keeping the UI consistent.
- **Dynamic UI / Responsive Layout:**
  - The card grid adapts to smaller screen and also compatible to mobile device.

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Vitest](https://vitest.dev/) (for testing)

## About the Test
This project uses Vitest for testing. Tests cover all reusable components and functionality:
- Hover states for interactive buttons
- Bookmark toggle behavior
- Filter functionality (single-selection assumption)
- Show More / Show Less functionality

## About Reusable Components
All reusable components are made using Lit

## Assumptions
-Data is mock data from mockData.js.
-No backend/API integration is required.
-Only one filter can be selected at a time.

## Setup & Run
❗ **Important:** Make sure to use Node,js v22

*How to run the application*
   ```bash
   git clone https://github.com/natetjen/JnA_assessment.git
   cd ./JnA_assessment/JnA_assessment
   npm install
   npm run dev
   (the application will run on http://localhost:5173/)

*How to run the test*
  cd ./JnA_assessment/JnA_assessment
  npm run test
```

Displays:
<img width="1628" height="835" alt="Screenshot 2025-10-03 at 1 48 33 AM" src="https://github.com/user-attachments/assets/a6645cab-b3c8-467a-aeed-a3da736d3ed7" />
<img width="904" height="577" alt="Screenshot 2025-10-03 at 1 48 56 AM" src="https://github.com/user-attachments/assets/2f452c84-dfd4-4fe5-8e41-78a2b4f4b0c5" />
<img width="1460" height="750" alt="Screenshot 2025-10-03 at 1 49 45 AM" src="https://github.com/user-attachments/assets/05584785-eda1-4b8c-bd74-6d0c5c945427" />
<img width="506" height="871" alt="Screenshot 2025-10-03 at 1 54 32 AM" src="https://github.com/user-attachments/assets/4a6ed56f-9fd5-4ecd-a322-0a5435404cb3" />




