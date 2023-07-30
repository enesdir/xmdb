# XMDb

<p align="center">
  <a href="https://github.com/enesdir/xmdb/blob/master/LICENSE.md">
    <img alt="licence-badge" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue" />
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/enesdir/xmdb"/>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/enesdir/xmdb"/>
  <a href="https://github.com/enesdir/xmdb/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/enesdir/xmdb?color=blue"/>
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
  - [Stacks](#stacks)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Running Locally](#running-locally)
    - [Storybook](#storybook)
      - [Run Storybook](#run-storybook)
      - [Build Static Storybook](#build-static-storybook)
    - [Test](#test)
      - [Run test](#run-test)
- [Useful notes](#useful-notes)
  - [Commands](#commands)
  - [Files of note](#files-of-note)
  - [License](#license)

</details>

## Stacks

This repository is packed with:

- 🟦 [TypeScript](https://www.typescriptlang.org/)
- ⚡ **Full-stack React with Next.js**: [Next.js + react](https://nextjs.org/)
- 🪳 **Database**: [PostgreSQL](https://www.postgresql.org/)
- 🔐 **Auth**: [next-auth](https://authjs.dev/)
- 🧙‍♂️ **E2E typesafety with**: [tRPC](https://github.com/trpc/trpc)
- 🌇 **Image upload with** [cloudinary](https://cloudinary.com/)
- ▲ **Deployment**: [Vercel](https://vercel.com)
- 🎨 **Styling**: [Tailwindcss](https://tailwindcss.com/)
- ⭐️ [React Icons](https://react-icons.github.io/react-icons/)
- 🤖 **Data Validator**: [Zod](https://zod.dev/) + [zodios](https://github.com/ecyrbe/zodios)
- 📅 [Day.js](https://day.js.org/)
- 🔐 Env var validation

Tooling & Test:

- 🔥 Storybook — [Storybook](https://storybook.js.org/) with [storybook-addon-next](https://github.com/RyanClementsHax/storybook-addon-next)
- 🃏 **Vitest** — [Vitest](https://github.com/vitest-dev/vitest) Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` and `~/` prefix
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Format your code consistently also will **auto sort** your imports
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- ⚙️ VSCode extensions

## Features

- Reponsive layout / navigation.
- Sign In / Sign Up screens.
- Account profile screens.
- Movie creation and listing
- Search User / Search User Created Movies
- Developer eXperience improved with ESLint, Prettier and Husky
- Deployment made easy using Next.js

## Getting Started

### Prerequisites

- node >=18.4.0
- postgressql or postgres database url

### Running Locally

This application requires Node.js.

1. Clone the repository to your local machine.

```bash
git clone https://github.com/enesdir/xmdb.git
cd xmdb
```

2. Install dependencies by running `npm install`.

```bash
npm install
```

3. Set environment variables. Create a `.env.local` file in the root directory of the project and add the following variables:

```bash
cp .env.example .env.local
```

4. Start the development database server

```bash
docker-compose up
```

5. Start the development database server

```bash
npm run db:migrate
```

6. Start the development server by running

```bash
npm run dev
```

### Storybook

[Storybook](https://storybook.js.org/) is an Open Source tool to help you
develop framework agnostic components in isolation and document them.

[GitHub](https://github.com/storybookjs/storybook) · [License MIT](https://github.com/storybookjs/storybook/blob/next/LICENSE)

#### Run Storybook

```bash
npm run dev:storybook
```

#### Build Static Storybook

```bash
npm run build-storybook
```

### Test

- vitest and `testing-library/react` for unit and integration tests

#### Run test

```bash
npm run test
```

# Useful notes

## Commands

```bash
npm run build # runs `prisma generate` + `prisma migrate` + `next build`
npm run dev   # starts next.js
npm run test  # runs normal Vitest unit tests
```

## Files of note

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
      <td><a href="./src/server/router.ts"><code>./src/server/router.ts</code></a></td>
      <td>Your app's different tRPC-routers</td>
    </tr>
    <tr>
      <td><a href="./src/server/authOptions.ts"><code>./src/server/authOptions.ts</code></a></td>
      <td>NextAuth settings</td>
    </tr>
    <tr>
      <td><a href="./src/components/"><code>./src/components/</code></a></td>
      <td>Shared UI Elements</td>
    </tr>
    <tr>
      <td><a href="./src/types/"><code>./src/types/</code></a></td>
      <td>Shared TypeScript types</td>
    </tr>
  </tbody>
</table>

## License

This project uses MIT license: [License](https://github.com/enesdir/xmdb/blob/master/LICENSE.md)
