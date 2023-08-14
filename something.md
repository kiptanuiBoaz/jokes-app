# Jokes App 

Deploy URL: https://jokes-1lulx1mms-kiptanuiboaz.vercel.app/

Welcome to the documentation for the Jokes App, a React-based web application built using modern technologies and best practices. This document provides an overview of the project's structure, features, and usage instructions.

## Table of Contents

- [Overview](#overview)
- [Project Setup](#project-setup)
- [Features](#features)
- [Usage](#usage)
- [Deployment](#deployment)

## Overview

The Jokes App is a web application that allows users to view, edit, and delete jokes fetched from an external API. The app is bootstrapped with Vite, built using React and TypeScript, and styled with SCSS. State management is handled with Redux Toolkit, and date formatting is achieved using date-fns. The app employs react-router-dom for routing, axios for making API requests, and Notiflix for displaying notifications. The user experience is enhanced with responsive design, lazy loading, pagination, and a theme toggle.

## Project Setup

To run the Jokes App locally on your machine, follow these steps:

1. Clone the repository: `git clone https://github.com/kiptanuiBoaz/jokes-app.git`
2. Navigate to the project directory: `cd jokes-app`
3. Install dependencies: `npm install`
4. Set the environment variable for the cookie token: `VITE_COOKIE_TOKEN=<your-cookie-token>`
5. Start the development server: `npm run dev`

## Features

### Fetching and Displaying Jokes

- Fetches an array of jokes from an external API.
- Displays the jokes in a table with columns for title, author, created date, and views.
- Clicking on the title navigates to the edit form page.

### Editing and Deleting Jokes

- Navigates to an edit form page when a joke's title is clicked.
- Allows users to edit the content of a joke and save the changes.
- Provides an option to delete a joke.

### Simulated Login and Authentication

- Simulates login by setting a cookie token in the browser.
- Protects the home route using a `RequireAuth` component that checks for the presence of the cookie token.

### Pagination and Items Per Page

- Implements pagination for the jokes table.
- Allows users to change the number of items displayed per page.

### Responsive Design

- Ensures that the app's user interface is responsive across various device sizes and orientations.

### Theme Toggle

- Provides a theme toggle that allows users to switch between light and dark themes.
- Sets the initial theme based on the user's system preferences.

### Global Styles and Modular Code

- Defines global styles in the root `index.css` file for consistent theming and styling.
- Adopts a modular coding approach to ensure maintainability and minimize prop drilling.

### Lazy Loading and Loading State

- Implements lazy loading for improved performance by loading components only when needed.
- Presents a loading state while fetching data or loading components.

## Usage

1. After cloning the repository and setting the environment variable for the cookie token, start the development server with `npm run dev`.
2. Access the app in your browser by navigating to `http://127.0.0.1:5173/`.

## Deployment

The Jokes App is deployed on Vercel for production. To access the live version of the app, visit [Jokes App on Vercel](https://jokes-1lulx1mms-kiptanuiboaz.vercel.app/).

---

Thank you for using the Jokes App! If you have any questions or need further assistance, feel free to contact us.

