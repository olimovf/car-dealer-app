# Car Dealer Application

This project is a car dealer web application built with Next.js that allows users to filter vehicles by make and model year. The application fetches vehicle data from an external API and displays the results in a user-friendly interface styled using Tailwind CSS.

## Features

- Filter vehicles by make and model year.
- Display vehicle models on another page.
- Responsive design using Tailwind CSS.
- Error handling for API data fetching.

## Getting Started

Follow these instructions to get the project up and running locally.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js v18.17.1 or later
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/olimovf/car-dealer-app.git
   cd car-dealer-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building the Application

To build the app for production:

```bash
npm run build
# or
yarn run build
```

The production files will be generated in the `.next` directory.

### ESLint and Prettier Configuration

The project uses ESLint for linting and Prettier for code formatting. The configuration files are:

- `.eslintrc.js`: ESLint configuration.
- `.prettierrc`: Prettier configuration.
