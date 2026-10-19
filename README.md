# MySpace — Personal New Tab Dashboard

A minimalist, personalized browser new tab extension designed to make everyday browsing more focused, convenient, and inspiring.

MySpace transforms the default browser new tab into a personal dashboard where users can check the time, access frequently used websites, save an inspirational quote, and write quick notes — all in one place.

## Table of Contents

- [Overview](#overview)
- [Design Philosophy](#design-philosophy)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Browser Extension Setup](#browser-extension-setup)
- [Functional Requirements](#functional-requirements)
- [Development Roadmap](#development-roadmap)
- [Design Principles for AI Coding Agents](#design-principles-for-ai-coding-agents)
- [Project Status](#project-status)

## Overview

**Project Name:** MySpace

**Project Type:** Browser Extension — Custom New Tab

**Primary Goal:** Replace the default new tab page with a clean, personal, and functional dashboard.

MySpace focuses on essential everyday features rather than overwhelming users with unnecessary widgets, advertisements, or information.

The initial version is designed for desktop browsers and prioritizes a lightweight interface, local data persistence, and a responsive layout.

## Design Philosophy

MySpace follows a minimalist visual direction with a calm, monochromatic-inspired color palette.

### Visual Principles

- **Minimalism:** Keep the interface clean and focused.
- **Soft Neutral Colors:** Use muted blue-gray, warm gray, beige, and off-white.
- **Subtle Glassmorphism:** Apply translucent cards, soft borders, and gentle shadows where appropriate.
- **Visual Consistency:** Maintain consistent spacing, typography, icon sizes, and corner radii.
- **Responsive Design:** Adapt the layout to different screen sizes.
- **Usability First:** Make important features immediately accessible without unnecessary interactions.

Avoid pure black backgrounds, excessively bright white surfaces, and aggressive accent colors.

The approved visual reference is the primary source of truth for the interface.

## Features

### 1. Clock and Greeting

Display the current date, time, and a greeting based on the time of day.

Requirements:

- Use the device's local system time.
- Update automatically without refreshing the page.
- Support the 24-hour clock format.
- Display the date in Vietnamese locale format.
- Change the greeting according to the current time.
- Avoid hardcoded time and date values.

### 2. Quick Access Shortcuts

Provide a grid of frequently used websites with recognizable icons.

Default shortcuts:

| Website | URL |
|---|---|
| GitHub | https://github.com |
| YouTube | https://www.youtube.com |
| Gmail | https://mail.google.com |
| ChatGPT | https://chatgpt.com |
| Claude | https://claude.ai |
| Notion | https://www.notion.so |

Requirements:

- Display shortcuts in a two-column grid on desktop.
- Use recognizable brand icons or logos.
- Open the corresponding website when clicked.
- Provide subtle hover and keyboard-focus effects.
- Keep shortcut data separate from presentation components.
- Structure the feature so shortcut customization can be added later.

Adding, editing, deleting, and rearranging shortcuts are not required in the initial release.

### 3. My Quote

A personal space for saving an inspirational quote.

Requirements:

- Display a card titled **My Quote** or **Câu nói của tôi**.
- Include a quotation icon and an edit button.
- Show a placeholder when no quote has been saved.
- Allow users to enter or edit the quote text.
- Optionally store the author's name.
- Provide Save and Cancel actions.
- Update the interface immediately after saving.
- Restore the previous saved content when editing is canceled.
- Preserve the saved quote when the page is reopened.

The initial version stores one quote at a time. No external quote API is required.

### 4. My Notes

A lightweight personal note-taking area integrated into the new tab page.

Requirements:

- Display a card titled **My Notes** or **Ghi chú**.
- Include a document icon and an edit button.
- Support multiline text.
- Display a placeholder when the note is empty.
- Provide Save and Cancel actions.
- Preserve the previous content when editing is canceled.
- Save the note locally so it remains available after reopening the browser or creating another new tab.
- Handle long text without breaking the layout.
- Allow scrolling when the content exceeds the available space.

The initial version supports one personal note. Multiple notes, folders, search, and cloud synchronization are outside the initial scope.

### 5. Weather Display — Optional

The header design includes a weather icon, location, and temperature.

This feature is optional and should not block the initial release.

Requirements if implemented:

- Obtain weather information from a real data source.
- Do not display hardcoded values as live weather data.
- Handle loading, errors, and unavailable data.
- Avoid exposing private API keys in frontend code.

If no weather service has been configured, the weather section should be hidden or display an appropriate unavailable state.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript | Application logic |
| Tailwind CSS | Styling and responsive layout |
| Vite | Development server and production build |
| Chrome Extension Manifest V3 | Browser extension configuration |
| Chrome Storage API | Persistent local extension settings and user content |
| Lucide React | General-purpose interface icons |

Brand logos should use appropriate brand assets rather than generic icons when practical.

No backend is required for the initial version.

## Project Structure

Proposed project structure:

```text
myspace/
├── public/
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ClockGreeting.jsx
│   │   ├── ShortcutGrid.jsx
│   │   ├── ShortcutItem.jsx
│   │   ├── QuoteCard.jsx
│   │   ├── NotesCard.jsx
│   │   └── EditDialog.jsx
│   │
│   ├── data/
│   │   └── shortcuts.js
│   │
│   ├── hooks/
│   │   └── useClock.js
│   │
│   ├── services/
│   │   └── storageService.js
│   │
│   ├── utils/
│   │   └── dateUtils.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

This is the proposed structure, not a requirement to create every file immediately. Components and utilities should be introduced as the implementation develops.

## Getting Started

### Prerequisites

Install the following software on Windows:

- Node.js LTS, including npm.
- Visual Studio Code.
- Google Chrome for extension testing.

Verify the installation in PowerShell or the VS Code terminal:

```powershell
node -v
npm -v
```

### 1. Create the React Project

```powershell
npm create vite@latest myspace -- --template react
cd myspace
npm install
```

### 2. Install Tailwind CSS

For a new project using Tailwind CSS v4 with Vite:

```powershell
npm install tailwindcss @tailwindcss/vite
```

Configure the Tailwind Vite plugin in `vite.config.js` and import Tailwind in the main CSS file.

### 3. Install Icons

```powershell
npm install lucide-react
```

### 4. Start Development

```powershell
npm run dev
```

Open the local URL displayed by Vite in your browser.

### 5. Build for Production

```powershell
npm run build
```

The production build is generated in the `dist/` directory.

## Browser Extension Setup

MySpace is intended to replace the browser's default new tab page.

A Chromium extension can use the `chrome_url_overrides` field in Manifest V3 to provide a custom new tab page.

The extension manifest should include the equivalent of:

```json
{
  "manifest_version": 3,
  "name": "MySpace — Personal New Tab",
  "version": "0.1.0",
  "description": "A minimalist personal dashboard for your browser new tab.",
  "chrome_url_overrides": {
    "newtab": "index.html"
  }
}
```

This is an illustrative manifest fragment. The final extension configuration must also account for the Vite production build and ensure that `manifest.json` is copied into `dist/`.

### Load the Extension in Chrome

1. Run `npm run build`.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Select **Load unpacked**.
5. Choose the generated `dist/` directory.
6. Open a new tab to test the extension.

After changing source code, rebuild the project and reload the extension.

Support for replacing the new tab page in other Chromium-based browsers, including Cốc Cốc, should be verified separately.

## Functional Requirements

### Local Persistence

The following user data must persist across new tabs and browser restarts:

- Personal quote text.
- Quote author, if provided.
- Personal note content.

Use Chrome Storage API where appropriate for extension-specific data. Keep the storage implementation behind a small service module so it can be tested and changed independently.

The interface should handle empty storage and storage errors gracefully.

### Editing Behavior

For both My Quote and My Notes:

1. Display the current saved content.
2. Enter editing mode when the edit button is clicked.
3. Allow the user to change the content.
4. Save changes only after an explicit Save action.
5. Discard unsaved changes when Cancel is selected.
6. Update the visible content after successful saving.

### Responsive Layout

**Desktop:**
- Two main columns.
- Shortcuts and clock on the left.
- Quote and notes cards on the right.
- A subtle vertical divider between the columns.

**Narrow screens:**
- Stack the main sections vertically.
- Adjust the shortcut grid to fit the available width.
- Prevent overflow, clipping, and overlapping content.

## Development Roadmap

### Phase 1 — Approved UI

- Finalize the visual design.
- Confirm the main layout and spacing.
- Confirm typography, color palette, icons, and card styling.
- Confirm editing interactions before implementation.

### Phase 2 — Core Dashboard

- Implement the header.
- Implement the clock and greeting.
- Implement the shortcut grid.
- Implement the quote card.
- Implement the notes card.
- Apply responsive styling.

### Phase 3 — Persistence

- Implement local storage.
- Add Save and Cancel behavior.
- Handle loading and storage errors.
- Verify persistence across multiple new tabs.

### Phase 4 — Extension Packaging

- Configure Manifest V3.
- Integrate the Vite production build.
- Test the extension in Chrome.
- Verify new tab replacement behavior.
- Test on different screen sizes.

### Phase 5 — Optional Improvements

Potential future enhancements:

- Add, edit, remove, and rearrange shortcuts.
- Support custom backgrounds.
- Add theme customization.
- Support multiple quotes and quote selection.
- Support multiple notes.
- Integrate weather data.
- Add keyboard shortcuts.

These improvements should only be implemented after the initial version is stable and the user approves their scope.

## Design Principles for AI Coding Agents

When working on this project, the coding agent must follow these rules:

1. Treat the latest user-approved mockup as the source of truth for the UI.
2. Do not redesign approved sections without permission.
3. Do not begin implementation before the user explicitly approves the design and authorizes coding.
4. Inspect the existing project before proposing or modifying its structure.
5. Prefer small, reusable React components.
6. Keep application data, storage logic, and UI components appropriately separated.
7. Avoid unnecessary dependencies and external services.
8. Do not introduce a backend unless explicitly requested.
9. Do not hardcode live data such as time or weather.
10. Preserve saved user content when editing is canceled or the page is reopened.
11. Explain proposed file changes before making significant architectural changes.
12. Report build errors and incomplete functionality honestly.

### Current Agent Instruction

If implementation has not been authorized, operate in planning mode only.

Analyze the requirements, identify ambiguities, and propose an implementation plan. Do not create, edit, or delete project files until the user explicitly approves implementation.

## Project Status

**Current stage:** UI design and requirements definition.

The visual direction and initial feature scope have been outlined. Implementation should begin only after the user approves the final mockup.

**Primary objective:** Build a lightweight, elegant, and practical personal browser dashboard that makes the new tab page useful without making it visually overwhelming.

---

Made for a calmer, more personal browsing experience.

**MySpace — Your space, your way.**
