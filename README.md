# Defence Mandate App

A React application built with Vite, TypeScript, and modern tooling.

## Docker Setup

This project includes Docker support for easy deployment and development.

### Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier container management)

### Quick Start with Docker

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Or build and run manually:**
   ```bash
   # Build the image
   docker build -t defence-mandate-app .

   # Run the container
   docker run -d -p 3000:80 defence-mandate-app
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

### Docker Commands

- **Stop the container:** `docker-compose down` or `docker stop defence-app`
- **Rebuild after changes:** `docker-compose up --build`
- **View logs:** `docker-compose logs` or `docker logs defence-app`

## Development Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Prerequisites

- Node.js 20.19+ or 22+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **Docker** - Containerization

## Vercel Deployment Checklist

1. Import this repository in Vercel.
2. Keep the default build settings:
  - Build Command: `npm run build`
  - Output Directory: `dist`
3. Add project environment variables in Vercel for all environments you use (Production, Preview):
  - `VITE_GOOGLE_APPS_SCRIPT_URL` = your deployed Google Apps Script Web App URL
4. Redeploy after setting environment variables.

### Google Apps Script Requirements (Contact Form)

For contact submissions to reach Google Sheets consistently:

1. Deploy the script as a Web App.
2. Set access to `Anyone`.
3. Ensure your script handles `POST` JSON bodies and writes rows to the intended sheet/tab.
4. If script code changes, create a new deployment/version and update the web app URL if needed.

## Contact Form To Google Sheets

The contact form supports sending enquiries to a Google Apps Script Web App URL.

### 1. Add environment variable

Copy `.env.example` to `.env` and set:

VITE_GOOGLE_APPS_SCRIPT_URL=YOUR_APPS_SCRIPT_WEB_APP_URL

### 2. Apps Script expected payload

The frontend sends this payload as JSON text:

- firstName
- lastName
- company
- email
- phone
- requirement
- source

### 3. Deployment note

Deploy your Apps Script as a Web App and allow access for public requests (for example, `Anyone`) so website users can submit enquiries.

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
