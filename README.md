# Yourflix

## Stacks

to see in detail the technologies used in this project: [Next.js + Typescript](https://nextjs.org/)

- **Framework**: [Next.js + Typescript](https://nextjs.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwindcss](https://tailwindcss.com/)
- **Data Validator**: [Zod](https://zod.dev/)

## Getting Started

### Prerequisites

- node >=18.4.0
- postgressql or postgres database url

### Running Locally

This application requires Node.js.

1. Clone the repository to your local machine.

```bash
git clone https://github.com/enesdir/yourflix.git
cd yourflix
```

2. Install dependencies by running `npm install`.

```bash
npm install
```

3. Set environment variables. Create a `.env.local` file in the root directory of the project and add the following variables:

4. Start the development database server

```bash
docker-compose up
```

4. Start the development database server

```bash
npm run db:migrate
```

4. Start the development server by running

```bash
npm run dev
```
