# Cloudflare Workers React Template

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/patrickallan07/atticus-integrity-group-corporate-web-presence)

A production-ready full-stack starter template for building modern web applications with Cloudflare Workers. Features a React frontend with shadcn/ui, Tailwind CSS, and a robust backend using Hono, Durable Objects for persistent storage, and type-safe APIs shared between client and server.

## Key Features

- **Full-Stack TypeScript**: End-to-end type safety with shared types between frontend and backend.
- **Durable Objects Storage**: Efficient, multi-tenant storage for entities like users and chats using a single Global Durable Object.
- **React + Vite**: Fast development with HMR, TanStack Query for data fetching, React Router, and shadcn/ui components.
- **Responsive UI**: Tailwind CSS with dark mode, sidebar layout, and animations.
- **API-First Backend**: Hono routing with CORS, logging, and error handling. Pre-built CRUD for users, chats, and messages.
- **Cloudflare Native**: Deploy to Workers, Pages, and Durable Objects with one command.
- **Bun-Powered**: Fast installs and dev server using Bun.
- **Demo Entities**: Users, ChatBoards (with embedded messages) – fully functional CRUD APIs with pagination and seeding.

## Technology Stack

- **Backend**: Cloudflare Workers, Hono, Durable Objects
- **Frontend**: React 18, Vite, TypeScript, shadcn/ui, Tailwind CSS, TanStack React Query, React Router, Framer Motion, Sonner (toasts)
- **State & Data**: Zustand, Immer, IndexedEntity pattern for list/pagination
- **UI Components**: Radix UI, Lucide icons, Tailwind Animate
- **Dev Tools**: Bun, Wrangler, ESLint, TypeScript
- **Other**: Date-fns, Recharts, React Hook Form, Zod

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed
- [Cloudflare CLI (Wrangler)](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated (`wrangler login`)
- Cloudflare account with Workers enabled

### Installation

```bash
bun install
```

### Development

Start the dev server (frontend + backend proxy):

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000). The app runs entirely locally with hot reload.

### Build for Production

```bash
bun build
```

Output in `dist/` – ready for static hosting.

## Usage Examples

### API Endpoints

All APIs under `/api/*`. Pre-seeded with mock data (users, chats, messages).

- **Users**:
  ```bash
  GET /api/users?limit=10&cursor=abc → { items: User[], next: string|null }
  POST /api/users { "name": "John" } → User
  DELETE /api/users/:id
  POST /api/users/deleteMany { "ids": ["id1", "id2"] }
  ```

- **Chats**:
  ```bash
  GET /api/chats?limit=5 → { items: Chat[], next: string|null }
  POST /api/chats { "title": "My Chat" } → { id: string, title: string }
  DELETE /api/chats/:id
  POST /api/chats/deleteMany { "ids": ["id1"] }
  ```

- **Messages** (per chat):
  ```bash
  GET /api/chats/:chatId/messages → ChatMessage[]
  POST /api/chats/:chatId/messages { "userId": "u1", "text": "Hello" } → ChatMessage
  ```

Test with `curl` or the app's HomePage (demo data visible via APIs).

### Customizing

- **Add Routes**: Edit `worker/user-routes.ts` and export `userRoutes(app)`.
- **New Entities**: Extend `IndexedEntity` in `worker/entities.ts`.
- **Frontend**: Replace `src/pages/HomePage.tsx`. Use `api()` helper in `src/lib/api-client.ts`.
- **UI**: shadcn components in `src/components/ui/*`. Add via `bunx shadcn@latest add <component>`.
- **Shared Types**: `shared/types.ts` – auto-imported everywhere.

## Deployment

Deploy to Cloudflare Workers (includes frontend assets + backend):

```bash
bun deploy
```

This runs `bun build && wrangler deploy`. Your app gets a `*.workers.dev` URL.

For custom domain:
1. Run `wrangler deploy`
2. In Cloudflare Dashboard > Workers > Your Worker > Triggers > Add Custom Domain

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/patrickallan07/atticus-integrity-group-corporate-web-presence)

**Type Generation**: After deploy, run `bun cf-typegen` to update `worker/env.d.ts`.

## Project Structure

```
├── shared/          # Shared types & mock data
├── src/             # React frontend (pages, components, hooks)
├── worker/          # Hono backend + Durable Objects
├── public/          # Static assets
├── tailwind.config.js # UI theming
└── wrangler.jsonc   # Cloudflare config
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server |
| `bun build` | Build for production |
| `bun lint` | Lint code |
| `bun preview` | Preview production build |
| `bun deploy` | Build + deploy to Cloudflare |
| `wrangler types` | Generate Worker types (`bun cf-typegen`) |

## Contributing

1. Fork & clone
2. `bun install`
3. `bun dev`
4. Submit PR

## License

MIT – see [LICENSE](LICENSE) (add your own).