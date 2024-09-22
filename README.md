# Feline Project Frontend

This project provides a frontend for the Feline Project, where users can view their cat's next delivery details. The frontend interacts with a backend API to fetch delivery information and manage navigation between different user accounts.

## Demo 

   ### Mobile View
   https://github.com/user-attachments/assets/daf036e9-4c01-40b9-ac13-b40dc7692f52



   ### Desktop View
   https://github.com/user-attachments/assets/843d121c-d1ce-4f78-a83a-8b0de5bd5ba2


   
## Prerequisites

- **Node.js** version 18 or later.
- **Yarn** (or npm) to install and manage dependencies.

## How to Run the Frontend

1. **Clone the repository and change into the project directory**:

   ```bash
   git clone https://github.com/aaronowusu/feline-project-fe.git

   cd feline-project-fe
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Start the application**:
   ```bash
   yarn start
   ```
   The server will be running at http://localhost:5173

## Project Structure

  ### **src**
  This directory contains the main codebase for the frontend.

  ### **components**
  Reusable UI components, including buttons, cards, and ribbons.

  ### **pages**
  Main pages for the application, such as the WelcomePage and NotFoundPage.

  ### **hooks**
  Custom React hooks, including hooks for media queries and navigation buttons.

  ### **utils**
  Utility functions such as `extractName` and `cx` for Tailwind CSS class merging.

  ### **types**
  TypeScript types used throughout the application.

  ### **assets**
  Images and other static assets used in the UI.

## Environment Variables

Make sure to create a `.env` file in the root of your project to specify your backend API base URL use the .env.example file as a template.

```bash
VITE_BASE_URL=http://localhost:3000

```

## Running Tests
Unit tests are written using Jest and React Testing Library. To run the tests, use the following command:

```bash
yarn test
```

## Improvements

1. **State Management for Scalability**:
   Adding a state management library such as **Zustand** or **React Context** would ensure better scalability of the application.

2. **Storybook Integration**:
   Introducing **Storybook** would allow us to visualise and test UI components in isolation.

3. **Design Token-Based System for Responsiveness**:
   Now that we are using **CVA** (Class Variance Authority) and **Tailwind Merge** for style management, we could implement a **token-based design system**. This would enhance responsiveness across the app by defining tokens for text properties such as:
   
   - **Font Size**
   - **Letter Spacing**
   - **Line Height**
   
   This approach would improve consistency, responsiveness, and maintainability by allowing easy adjustments across different breakpoints and screen sizes.

