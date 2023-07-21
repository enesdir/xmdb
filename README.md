# XMDb

## Stacks

This repository is packed with:

- **Framework**: [Next.js + Typescript](https://nextjs.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Auth**: [next-auth](https://authjs.dev/)
- **API**: [tRPC](https://github.com/trpc/trpc)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwindcss](https://tailwindcss.com/)
- **Data Validator**: [Zod](https://zod.dev/) + [zodios](https://github.com/ecyrbe/zodios)

Tooling & Test:

- 🔥 Storybook — [Storybook](https://storybook.js.org/) with [storybook-addon-next](https://github.com/RyanClementsHax/storybook-addon-next)
- 🃏 **Vitest** — [Vitest](https://github.com/vitest-dev/vitest) Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` and `~/` prefix
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Format your code consistently also will **auto sort** your imports
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit

## Features

- User registration and authentication
- Movie creation and listing

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

1. Start the development database server

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

### Test & Storybook

#### Run Storybook

```bash
npm run dev:storybook
```

#### Build Static Storybook

```bash
npm run build-storybook
```

#### Run test

```bash
npm run test
```

# Useful notes

## Commands

```bash
npm run build      # runs `prisma generate` + `prisma migrate` + `next build`
npm run dev        # starts next.js
npm run test       # runs normal Vitest unit tests

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
      <td>Prisma schema</td>
    </tr>
    <tr>
      <td><a href="./src/app/api/trpc/[trpc].ts"><code>./src/app/api/trpc/[trpc].ts</code></a></td>
      <td>tRPC response handler</td>
    </tr>
    <tr>
      <td><a href="./src/server/router"><code>./src/server/router</code></a></td>
      <td>Your app's different tRPC-routers</td>
    </tr>
  </tbody>
</table>
