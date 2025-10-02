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
- **Dynamic UI / Responsive Layout:**
  - The card grid adapts to smaller screen (however, mobile compatibility is not implemented)

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Setup & Run

1. Clone the repository:
   ```bash
   git clone https://github.com/natetjen/JnA_assessment.git
   cd ./JnA_assessment/JnA_assessment
   npm install
   npm run dev
   (the application will run on http://localhost:5173/)


  Assumptions

Data is mock data from mockData.js.

No backend/API integration is required.

Displays:
<img width="1531" height="876" alt="Screenshot 2025-10-02 at 4 05 39 AM" src="https://github.com/user-attachments/assets/bcd97627-a856-4d30-9482-98823a0f44ac" />
<img width="910" height="317" alt="Screenshot 2025-10-02 at 4 06 13 AM" src="https://github.com/user-attachments/assets/717e3add-6fa8-4cb1-8ba9-9deee1784c7f" />
<img width="1452" height="814" alt="Screenshot 2025-10-02 at 4 06 39 AM" src="https://github.com/user-attachments/assets/c9806eb9-73bf-4fc7-9752-edf9fb1dcdb9" />
<img width="1487" height="934" alt="Screenshot 2025-10-02 at 4 07 07 AM" src="https://github.com/user-attachments/assets/271de6f4-ccd4-40fb-9f4f-2fc54847985a" />
<img width="938" height="973" alt="Screenshot 2025-10-02 at 4 14 20 AM" src="https://github.com/user-attachments/assets/4f303a73-d306-44e3-9e79-9bec8a849651" />




