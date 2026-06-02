# TicketDesk

Einfaches Helpdesk-System für kleine Unternehmen. Self-hosted via Coolify.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Datenbank**: PostgreSQL + Prisma
- **Auth**: NextAuth.js (eigene Credentials)
- **Styling**: Tailwind CSS
- **Deployment**: Docker + Coolify

## Lokale Entwicklung

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Env konfigurieren
cp .env.example .env.local
# → DATABASE_URL etc. ausfüllen

# 3. Datenbank starten (Docker)
docker compose up db -d

# 4. Migrationen ausführen
npm run db:migrate

# 5. Dev-Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Coolify Deployment

1. Neues Projekt in Coolify anlegen
2. **PostgreSQL** als Datenbank-Service hinzufügen
3. **Next.js App** als Service hinzufügen:
   - Source: GitHub Repo
   - Build Pack: Dockerfile
4. Environment-Variablen aus `.env.example` befüllen
5. Deploy klicken — Migrationen laufen automatisch beim Start

## Projektstruktur

```
src/
  app/
    (auth)/         # Login, Register
    (dashboard)/    # Agenten-Dashboard, Tickets
    api/            # API Routes
  components/       # Wiederverwendbare Komponenten
  lib/              # DB-Client, Utilities
  types/            # TypeScript-Typen
prisma/
  schema.prisma     # Datenbankschema
```

## Roadmap

Siehe [PROJEKTPLAN.md](./PROJEKTPLAN.md)
