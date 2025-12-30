# GEMINI Project Context

## Project Overview

This project is an interactive Enneagram test web application named "MEM 3.0: 통합 성장 플랫폼" designed to be mobile-friendly. It's a client-side, single-page application (SPA) built with vanilla JavaScript, HTML, and Tailwind CSS. The application features a 27-question Enneagram test using a 1-10 point scale for precise analysis. After the test, it provides users with their calculated Enneagram type, detailed insights, and tailored strategies for learning, career, and interpersonal relationships. The app also includes dynamic compatibility analysis between different Enneagram types.

The architecture is straightforward:
-   **`index.html`**: Contains the complete HTML structure for various screens (Splash, Auth, Welcome, Survey, Result, Dashboard) implemented as `section` elements. Visibility is controlled by JavaScript. It also includes the necessary links for Tailwind CSS and `app.js`.
-   **`app.js`**: Holds the core application logic. This includes UI flow management, data structures for Enneagram types, questions, and relationship descriptions, test score calculation, result display, dashboard content rendering for various tabs (Home, Learning, Career, Relationship), local storage integration for data persistence, and general UX enhancements like toast notifications and loading spinners.
-   **`style.css`**: (Not explicitly created, but inline styles and Tailwind CSS utility classes handle styling.) Provides basic gradient background for the body and custom spinner animation.
-   **Local Storage**: Used for client-side data persistence, including the current user's email and their detailed Enneagram profile.

## Building and Running

This is a static web project with no build step required. However, it needs to be served by a local web server to function correctly.

1.  **Start a local web server.** A simple Python server is recommended for this.
    ```bash
    python -m http.server
    ```
2.  **Access the application.** Open a web browser and navigate to `http://localhost:8000`.

## Development Conventions

-   **Data Embedding**: All static data, including Enneagram type information, test questions, integration paths, and relationship descriptions, is directly embedded within `app.js` as JavaScript objects.
-   **Styling**: Primarily uses Tailwind CSS for utility-first styling. A mobile-first approach is adopted, with glassmorphism effects and rounded corners applied to UI components. Backgrounds feature indigo-purple-pink gradients.
-   **JavaScript**: The application logic is written in vanilla JavaScript within a single `app.js` file. It leverages `DOMContentLoaded` to ensure the DOM is fully loaded before script execution. UI elements are dynamically rendered and managed based on user interaction and application state.
-   **Screen Management**: A `showScreen` function manages visibility of different application sections (`<section>`) by toggling CSS `hidden` classes.
-   **Data Persistence**: User authentication state (current user email) and user profile data (test results, etc.) are stored using the browser's `localStorage` API.
-   **User Feedback**: Implemented with toast notifications for temporary messages, a general message modal for important alerts, and a loading spinner for operations that might take a moment.
