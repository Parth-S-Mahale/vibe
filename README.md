# Vibe

Vibe is an AI-powered coding workspace built with **Next.js**, **TypeScript**, **Inngest Agent Kit**, **Prisma**, and **E2B sandboxes**.  
It lets users chat with an AI coding agent that can generate code, edit files inside a sandboxed environment, run terminal commands, and return working project fragments with a live sandbox URL.

---

## What this project does

Vibe acts like an **AI coding copilot + sandboxed app builder**:

- accepts a user prompt for a coding task
- runs an **AI agent workflow** using Inngest
- gives the agent access to tools such as:
  - terminal command execution
  - file creation / updates
  - file reading inside the sandbox
- stores conversation history and generated results
- saves generated fragments and their sandbox URLs
- provides a web UI for interacting with the agent and viewing outputs

---

## Core workflow

1. A user sends a coding request from the frontend.
2. The request triggers an **Inngest function**.
3. A sandbox environment is created using **E2B Code Interpreter**.
4. Previous project messages are fetched from the database.
5. An AI coding agent runs with access to sandbox tools:
   - terminal
   - read files
   - create/update files
6. The agent iterates on the task until it produces a summary + generated files.
7. A response generator creates the final user-facing explanation.
8. The generated files and sandbox URL are saved in the database.
9. The client shows the result back to the user.

---

## Tech stack

### Frontend
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **TanStack Query**
- **tRPC**
- **Radix / Base UI style component ecosystem**
- **React Hook Form**

### Backend / AI orchestration
- **Inngest**
- **@inngest/agent-kit**
- **E2B Code Interpreter**

### Database / auth
- **Prisma**
- **PostgreSQL** (expected with Prisma adapter setup)
- **Clerk** for authentication

### Validation / utilities
- **Zod**
- **SuperJSON**
- **date-fns**
- **rate-limiter-flexible**

---

## Main capabilities

- **AI coding agent orchestration**
  - structured agent execution using Inngest + Agent Kit
- **Sandboxed code execution**
  - safely run commands and modify files in an isolated environment
- **Persistent project chat history**
  - stores user/assistant messages per project
- **Generated code fragments**
  - saves output files and sandbox preview links
- **Tool-driven agent workflow**
  - terminal, file read, file write/update tools
- **Async background execution**
  - long-running coding tasks can be handled through event-driven workflows

---

## Likely project structure

```txt
.
├─ src/                    # App source code
├─ prisma/                 # Prisma schema and DB configuration
├─ public/                 # Static assets
├─ sandbox-templates/      # Templates used for E2B sandboxes
├─ .inngest/               # Inngest local/runtime artifacts
├─ package.json            # Project dependencies and scripts
└─ README.md
```

---

## Example use cases

- “Build me a landing page with a hero section and pricing cards”
- “Create a Next.js component and wire it into the app”
- “Fix a TypeScript error in the current project”
- “Generate a small full-stack feature and show me the sandbox URL”
- “Create or modify project files from a natural-language prompt”

---

## Environment variables

You’ll likely need environment variables for:

- **database connection**
- **Clerk authentication**
- **Inngest**
- **E2B sandbox access**
- **AI model provider keys** (OpenAI / Gemini / other supported provider)

Example categories:

```env
DATABASE_URL=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
E2B_API_KEY=
OPENAI_API_KEY=
GOOGLE_API_KEY=
```

> Use the exact variable names required by your actual implementation and provider setup.

---

## Development setup

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Prisma client generation is already configured via `postinstall`, but if needed:

```bash
npx prisma generate
```

If your project uses database migrations:

```bash
npx prisma migrate dev
```

---

## Why this project is useful

This project is a strong foundation for building:
- AI code generation platforms
- autonomous coding agents
- app prototyping tools
- sandboxed dev assistants
- “v0 / lovable / bolt”-style internal clones or experiments

It combines:
- **modern frontend architecture**
- **agent-based AI workflows**
- **sandboxed execution**
- **database-backed project state**
- **extensible tool-based orchestration**

---

## Future improvements

- streaming agent responses to the UI
- better retry / failure handling for model APIs
- model provider switching (Gemini / OpenAI / Anthropic / Groq)
- diff-based file updates
- richer project previews
- collaborative workspaces
- evaluation / telemetry for agent runs
- usage quotas and billing support

---

## Summary

Vibe is an **AI coding workspace** that lets users turn natural-language prompts into code using an agent powered by Inngest, sandbox execution via E2B, and a modern Next.js + Prisma stack. It is designed around the idea of **interactive AI-assisted software building**, where the model can reason, run commands, edit files, and return a usable coded result.
