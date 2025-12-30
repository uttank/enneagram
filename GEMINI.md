# GEMINI Project Context

## Project Overview

This project is an interactive Enneagram test web application designed for students. It's a client-side, single-page application (SPA) built with vanilla JavaScript, HTML, and CSS. The application provides users with a choice between a "Simple Test" (18 questions) and a "Full Test" (108 questions). After completing the test, it presents the user with their calculated Enneagram type, a summary, and tailored strategies for learning, interpersonal relationships, and career paths.

The architecture is straightforward:
- **`index.html`**: Contains the complete HTML structure, with different screens implemented as `section` elements whose visibility is controlled by JavaScript.
- **`app.js`**: Holds the core application logic. It handles UI flow, fetching test data, calculating results, and displaying them.
- **`style.css`**: Provides the styling for the application. It is written with a mobile-first approach and uses CSS variables for theming.
- **`data.json`**: A static file that contains all the application's data, including questions for both test types (`simple_questions`, `full_questions`) and the detailed results for each of the 9 Enneagram types.

The project also includes an end-to-end (E2E) testing setup using Playwright to automate and verify the main user flows.

## Building and Running

This is a static web project with no build step required. However, it needs to be served by a local web server to handle `fetch` requests for `data.json` correctly and avoid CORS issues.

### Dependencies

The only development dependency is Playwright for testing.

```bash
# Install development dependencies
npm install
```

### Running the Application

1.  **Start a local web server.** A simple Python server is recommended for this.
    ```bash
    python -m http.server
    ```
2.  **Access the application.** Open a web browser and navigate to `http://localhost:8000`.

### Running Tests

The project uses Playwright for end-to-end testing. The tests simulate a user taking both the simple and full tests.

1.  **Ensure the local server is running** (see command above).
2.  **Run the Playwright test suite.**
    ```bash
    npx playwright test
    ```
3.  **View the test report.** After the tests run, you can view a detailed HTML report.
    ```bash
    npx playwright show-report
    ```

## Development Conventions

- **Data Separation:** All text content, questions, and results are stored in `data.json` to keep them separate from the application logic.
- **Styling:** CSS uses variables for colors and spacing, making it easier to theme. The layout is responsive and mobile-first. Logos and type-specific images are rendered using styled `div` elements to avoid external dependencies.
- **JavaScript:** The code is written in a single file (`app.js`) and is wrapped in a `DOMContentLoaded` event listener to ensure the DOM is ready before execution. It dynamically creates and manages the UI based on user interaction.
- **Testing:** The `tests/` directory contains E2E tests written for Playwright. The tests cover the core user journeys for both the simple and full test modes, ensuring reliability from the user's perspective.
- **Version Control:** A `.gitignore` file is configured to exclude `node_modules`, test results, and other non-essential files from version control.
