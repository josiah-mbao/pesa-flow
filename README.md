# Pesa-Flow

![Node.js](https://img.shields.io/badge/node-%3E%3D20-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-blue)

<img width="1440" height="900" alt="Screenshot 2025-10-26 at 00 38 26" src="https://github.com/user-attachments/assets/03e89eec-3e6a-4a6a-a716-6580712be267" />

Pesa-Flow is a **Next.js + TypeScript** frontend project designed to provide a sleek, interactive UI for financial dashboards and personal finance management. This project is the frontend component of a broader application ecosystem, aiming to help users visualize and manage their financial data efficiently.

## Features

- **Dashboard**: Interactive components to view financial metrics and analytics.
- **Transactions**: List and track all financial transactions.
- **Settings**: Customize your profile and application preferences.
- **Responsive UI**: Works seamlessly across desktop and mobile devices.
- **Component Library**: Modular React components for charts, navigation, and UI elements.

## Tech Stack

- **Frontend**: Next.js 16 + React + TypeScript
- **Styling**: Tailwind CSS / PostCSS
- **Linting**: ESLint
- **State Management**: React hooks (useState, useEffect)
- **Icons & Assets**: SVG-based icons in the `public/assets` folder

## Getting Started

### Prerequisites

- Node.js >= 20.x

- npm >= 9.x (or Yarn / pnpm)

### Installation


Clone the repository:

```bash
git clone https://github.com/josiah-mbao/pesa-flow.git
cd pesa-flow
```

Install dependencies:

```bash
npm install
# or
# yarn install
# or
# pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
```
Open http://localhost:3000 in your browser to see the app.

### Project Structure
```bash
pesa-flow/
├─ public/            # Static assets like images and SVGs
├─ src/
│  ├─ app/            # Next.js pages and layouts
│  │  ├─ dashboard/   # Dashboard pages and components
│  │  ├─ settings/    # Settings page
│  │  └─ transactions/ # Transactions page
│  ├─ components/     # Reusable UI components
│  ├─ lib/            # Mock data and utility functions
│  └─ types/          # TypeScript types
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ README.md
```

### Editing

The app auto-updates as you edit the files in the src/app directory. Start by modifying src/app/page.tsx or any components inside src/components.

### Learn More
- Next.js Documentation - learn about Next.js features and API.
- Learn Next.js - an interactive Next.js tutorial.
- Next.js Github Repository - check out the repo and contribute.

## Deployment

The easiest way to deploy this project is via Vercel, the creators of Next.js. Refer to the Next.js deplyment documentation for more details.

## Contributing

Contributions are welcome! Feel free to fork the repo and submit pull requests for new features, bug fixes, or improvements.

## License

This project is open-source and available under the MIT License.
