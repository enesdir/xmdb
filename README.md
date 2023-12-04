# XMDb

The IMDb Clone app, powered by [Prisma][Prisma-url], [tRPC][tRPC-url], [Next.js][Nextjs-url], [Tailwindcss][Tailwind-url] and [TypeScript][TS-url] offers essential features such as user authentication, movie management, and social interactions like user following and post liking. You can see: [Live Demo][Live-url]

<p align="center">
<a href="https://www.codefactor.io/repository/github/enesdir/xmdb"><img src="https://www.codefactor.io/repository/github/enesdir/xmdb/badge" alt="CodeFactor" /></a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/enesdir/xmdb"/>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/enesdir/xmdb"/>
  <a href="https://github.com/enesdir/xmdb/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/enesdir/xmdb?color=blue"/>
  </a>
    <a href="https://github.com/enesdir/xmdb/blob/master/LICENSE.md">
    <img alt="licence-badge" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue" />
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>
  <a target="_blank" href="https://nextjs.org/">
    <img alt="NextJS" src="https://img.shields.io/static/v1?color=white&label=Next&message=JS&?style=plastic&logo=Next.js">
  </a>
  <a href="https://prettier.io/">
    <img alt="prettier-badge" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" />
  </a>
</p>

<details>
<summary>Table of Contents</summary>

- [XMDb](#xmdb)
  - [Features](#features)
  - [RoadMap](#roadmap)
  - [Built With](#built-with)
    - [Dependencies](#dependencies)
    - [Dev Dependencies](#dev-dependencies)
  - [Installation \& Usage](#installation--usage)
    - [Prerequisites](#prerequisites)
    - [Running Locally](#running-locally)
    - [Storybook](#storybook)
      - [Run Storybook](#run-storybook)
    - [Test](#test)
      - [Run test](#run-test)
    - [Commands](#commands)
  - [Project Structure](#project-structure)
    - [Project Folder Structure](#project-folder-structure)
    - [Important files](#important-files)
  - [Disclaimer](#disclaimer)
  - [License](#license)

</details>

## Features

This project setup will include following features.

- 🔑 Fully functional Sign In, Sign Up, and Forgot Password screens.
- 🧙‍♂️ Comprehensive account profile screens.
- 🎥 Capability to create and list movies.
- 🔎 Search functionality for users.
- 🔎 Ability to search movies created by users.
- 🗽 Implementation for users to follow each other.
- 💖 Post liking feature for logged-in users.
- 📊 Statistics for user follows.
- 📈 Statistics for post likes.
- 🚀 Blazing fast development server and build process.
- 🔗 The routing feature is thoughtfully designed to mimic the familiar and intuitive navigation patterns of IMDb.com.
- 🔥 Visually appealing and intuitive landing layout.
- 🌇 Incorporation of an interactive carousel image slider.
- ⭐️ Application-wide responsive design and navigation.
- 🎨 [Storybook][Storybook-url] integration for effortless development of UI components.
- 🔐 Env var validation
- 🔧 Optimized developer experience with [ESLint][ESLint-url], [Prettier][Prettier-url], and [Husky][Husky-url].
- 📌 Absolute import support with path aliases using `@/` and `~/` prefix.
- 🤖 [Conventional Commit][Conventional-Commit-url], [commitlint][Commitlint-url], and [commitizen][Commitizen-url] for ensuring adherence to commit standards.
- 📎 [Vercel][Vercel-url] deployment configurations for seamless deployment.
- 📜 Recommendations for useful [VSCode][vscode-url] extensions, and settings configuration for optimal development.

## RoadMap

- () The functionality should be added to the **Forgot Password** screen.
- () UI improvements for TMDB.

## Built With

[![NodeJS][Nodejs]][Nodejs-url] [![PostgreSQL][PostgreSQL]][PostgreSQL-url] [![Javascript][Javascript]][Nodejs-url] [![TypeScript][Typescript]][TS-url] [![NextJS][Nextjs]][Nextjs-url] [![React][React.js]][React-url] [![tRPC][tRPC]][tRPC-url] [![React Query][react-query]][react-query-url] [![Tailwind][Tailwind]][Tailwind-url]

### Dependencies

| Package                                | Description                                                                                                                                                            |
| -------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React][React-url]                     | The library for web and native user interfaces                                                                                                                         |
| [Next.js][Nextjs-url]                  | The React Framework                                                                                                                                                    |
| [tRPC][tRPC-url]                       | Move Fast and Break Nothing. End-to-end typesafe APIs made easy                                                                                                        |
| [Prisma][Prisma-url]                   | Next-generation Node.js and TypeScript ORM                                                                                                                             |
| [next-auth][next-auth-url]             | Authentication for the Web.                                                                                                                                            |
| [react-query][react-query-url]         | Powerful asynchronous state management, server-state utilities and data fetching for the web.                                                                          |
| [react-hook-form][react-hook-form-url] | React Hooks for form state management and validation (Web + React Native)                                                                                              |
| [React Icons][React-icons-url]         | Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using. |
| [Zod][Zod-url]                         | TypeScript-first schema validation with static type inference                                                                                                          |
| [zodios][zodios-url]                   | typescript http client and server with zod validation                                                                                                                  |
| [Day.js][Dayjs-url]                    | Fast 2kB alternative to Moment.js with the same modern API                                                                                                             |
| [react-hot-toast][react-hot-toast-url] | Lightweight, customizable Notifications for React.                                                                                                                     |
| [superjson][superjson-url]             | Safely serialize JavaScript expressions to a superset of JSON, which includes Dates, BigInts, and more.                                                                |
| [bcrypt][bcrypt-url]                   | bcrypt for NodeJS                                                                                                                                                      |
| [tailwind-merge][tailwind-merge-url]   | Merge Tailwind CSS classes without style conflicts                                                                                                                     |
| [clsx][clsx-url]                       | A tiny (228B) utility for constructing `className` strings conditionally.                                                                                              |

### Dev Dependencies

| Package                                        | Description                                                                                                                                           |
| ---------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Vite][Vite-url]                               | Next generation frontend tooling. It's fast!                                                                                                          |
| [Typescript][TS-url]                           | TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.                                                                       |
| [Storybook][Storybook-url]                     | Storybook is a frontend workshop for building UI components and pages in isolation.                                                                   |
| [Vitest][Vitest-url]                           | Next generation testing framework powered by Vite.                                                                                                    |
| [Husky][Husky-url]                             | Git hook management                                                                                                                                   |
| [Conventional Commit][Conventional-Commit-url] | A specification for adding human and machine readable meaning to commit messages.                                                                     |
| [Commitlint][Commitlint-url]                   | Lint commit messages                                                                                                                                  |
| [Commitizen][Commitizen-url]                   | Using a standardized set of rules to write commits, makes commits easier to read, and enforces writing descriptive commits.                           |
| [Lint Staged][Lint-Staged-url]                 | Run linters against staged git files and don't let 💩 slip into your code base!                                                                       |
| [ESLint][ESLint-url]                           | A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.                                                                 |
| [Prettier][Prettier-url]                       | An opinionated code formatter                                                                                                                         |
| [wait-on][wait-on-url]                         | wait-on is a cross-platform command line utility and Node.js API which will wait for files, ports, sockets, and http(s) resources to become available |

## Installation & Usage

### Prerequisites

- **Runtime environment** : [Node.js][Nodejs-url] >=18.4.0
- **Package manager** : [npm][npm-url] >=9.x.x
- **Database** : [PostgreSQL][PostgreSQL-url] >=15.3

### Running Locally

This application requires Node.js.

Clone the repository to your local machine.

```bash
git clone https://github.com/enesdir/xmdb.git
cd xmdb # Access the project directory.
```

Install dependencies by running `npm install`.

```bash
npm install
```

Set environment variables. Create a `.env.local` file in the root directory of the project and add the following variables:

```bash
cp .env.example .env.local
```

Start the development database server

```bash
docker-compose up
```

Start the development database server

```bash
npm run db:migrate
```

Start the development server by running

```bash
npm run dev
```

### Storybook

[Storybook](https://storybook.js.org/) is an Open Source tool to help you
develop framework agnostic components in isolation and document them.

#### Run Storybook

```bash
npm run dev:storybook
```

### Test

- vitest and `testing-library/react` for unit and integration tests

#### Run test

```bash
npm run test
```

### Commands

| Command                   | Description                                              |
| ------------------------- | :------------------------------------------------------- |
| `npm run dev`             | Starts the server in dev mode                            |
| `npm run lint`            | Runs ESLint on the project                               |
| `npm run lint:fix`        | Runs Prettier on entire src folder                       |
| `npm run prettier:verify` | Runs Prettier-check and throws error if fails            |
| `npm run lint-staged`     | Runs Prettier on only staged (changed) files             |
| `npm run type-check`      | Runs TSC                                                 |
| `npm run build`           | runs `prisma generate` + `prisma migrate` + `next build` |
| `npm run start`           | Runs start production server                             |
| `npm run test`            | runs normal Vitest unit tests                            |
| `npm run dev:storybook`   | Runs storybook                                           |
| `npm run build:storybook` | Build Static Storybook                                   |

## Project Structure

### Project Folder Structure

The following is the structured layout of the project directory, providing an overview of the organization of files and folders.

```plaintext
- root
  - .github/                # Contains GitHub-related files
  - .husky/                 # Configuration for Husky
  - .storybook/             # Customizations for Storybook
  - .vscode/                # VSCode settings
  - prisma/                 # Prisma DB schema
  - public/                 # Stores static assets and files served to the client
    - assets/               # Publicly accessible assets: images, fonts, etc.
  - src/                    # Source code for the application
    - app/                  # Next.js 14 app directory that houses the application routing
      - api/                # API Router
    - components/           # Reusable UI components used throughout the application
      - {ComponentName}/    # Houses reusable React components shared across the features
    - constants/            # Functional modules or sections of the application
    - features/             # Functional modules or sections of the application
      - {featureName}/      # Contains a specific feature module with its components, actions, and views
        - types/            # TypeScript type definitions and interfaces specific to this feature
    - hooks/                # Custom React hooks used across the application
    - lib/                  # External libraries and third-party integrations
    - providers/            # Context, state, and dependency injection providers
    - server/               # Backend files
      - modules             # App's different tRPC-routers
        - {featureName}/    # Houses tRPC-routers for specific features
    - styles/               # Everything related to styling and theming
    - utils/                # Utility functions and helper modules
  .commitlintrc.cjs         # Commitlint Configuration file
  .env.example              # Example environment variables file
  .npmrc                    # npm configuration
  .nvmrc                    # Node version configuration
  .gitignore                # Git ignore file
  .eslintrc.cjs             # ESLint configuration
  .lintstagedrc.cjs         # lint-staged configuration
  docker-compose.yml        # Docker compose configuration
  knip.json                 # Knip configuration
  next.config.mjs           # Next.js configuration
  package.json              # Node package file
  tailwind.config.cjs       # Tailwind CSS configuration
  tsconfig.json             # TypeScript configuration
  turbo.json                # Turbo configuration
  vercel.json               # Vercel deployment configuration
  vitest.config.ts          # vitest configuration
```

### Important files

<table>
  <thead>
    <tr>
      <th>Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="./prisma/schema.prisma"><code>./prisma/schema.prisma</code></a></td>
      <td>Prisma DB schema</td>
    </tr>
    <tr>
      <td><a href="./src/app/api/trpc/[trpc].ts"><code>./src/app/api/trpc/[trpc].ts</code></a></td>
      <td>tRPC response handler</td>
    </tr>
      <tr>
      <td><a href="./src/app/api/trpc/[trpc].ts"><code>./src/app/api/auth/[...nextauth]/route.ts</code></a></td>
      <td>next-auth handler</td>
    </tr>
    <tr>
      <td><a href="./src/server/router.ts"><code>./src/server/router.ts</code></a></td>
      <td>App's different tRPC-routers</td>
    </tr>
    <tr>
      <td><a href="./src/server/authOptions.ts"><code>./src/server/authOptions.ts</code></a></td>
      <td>NextAuth settings</td>
    </tr>
  </tbody>
</table>

## Disclaimer

The Tailwind name and logos are trademarks of Tailwind Labs Inc.
The Next.js and Vercel names and logos are trademarks of Vercel.
The IMDb name is a trademark of imdb.com.
The use of The Movie Database (TMDb) API is subject to the terms of TMDb's API Service Agreement.
xmdb is an independent project and is not affiliated with or endorsed by Tailwind Labs Inc, Vercel, or imdb.com.

## License

This project uses MIT license: [License](https://github.com/enesdir/xmdb/blob/master/LICENSE.md)

<!-- MARKDOWN LINKS & IMAGES -->

[Vite-url]: https://vitejs.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/
[Live-url]: https://xmdb.enesesen.com/
[Husky-url]: https://typicode.github.io/husky/
[Conventional-Commit-url]: https://www.conventionalcommits.org/
[Commitlint-url]: https://commitlint.js.org/#/
[ESLint-url]: https://eslint.org/
[Prettier-url]: https://prettier.io/
[Commitizen-url]: https://commitizen-tools.github.io/commitizen/
[Lint-Staged-url]: https://github.com/okonet/lint-staged#readme
[Storybook-url]: https://storybook.js.org/
[Vitest-url]: https://github.com/vitest-dev/vitest
[tRPC]: https://img.shields.io/badge/tRPC-2596BE.svg?style=for-the-badge&logo=tRPC&logoColor=white
[tRPC-url]: https://github.com/trpc/trpc
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Nextjs]: https://img.shields.io/badge/Next.JS-black?style=for-the-badge&logo=nextdotjs&logoColor=21130d&color=ffffff
[Nextjs-url]: https://nextjs.org/
[Vercel-url]: https://vercel.com
[Zod-url]: https://zod.dev/
[zodios-url]: https://github.com/ecyrbe/zodios
[DayJs-url]: https://day.js.org/
[React-icons-url]: https://react-icons.github.io/react-icons/
[next-auth-url]: https://authjs.dev/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[tailwind-merge-url]: https://github.com/dcastil/tailwind-merge
[superjson-url]: https://github.com/blitz-js/superjson
[react-query]: https://img.shields.io/badge/react-query-FF4154?style=for-the-badge&logo=react-query&logoColor=white
[react-query-url]: https://github.com/tanstack/query
[clsx-url]: https://github.com/lukeed/clsx
[react-hot-toast-url]: https://github.com/timolins/react-hot-toast
[Prisma-url]: https://www.prisma.io
[react-hook-form-url]: https://github.com/react-hook-form/react-hook-form
[bcrypt-url]: https://github.com/kelektiv/node.bcrypt.js
[wait-on-url]: https://github.com/jeffbski/wait-on
[NodeJS]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[Javascript]: https://img.shields.io/badge/Javascript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[vscode-url]: https://code.visualstudio.com/
