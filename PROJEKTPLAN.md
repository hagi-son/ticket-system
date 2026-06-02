# Helpdesk Ticket System — Projektplan

## Überblick

Ein SaaS-fähiges Helpdesk-System für kleine Unternehmen (1–50 Mitarbeiter).
Positionierung: einfacher als Zendesk, moderner als Freshdesk, fairer im Preis.

---

## Tech Stack (Empfehlung)

| Bereich | Technologie | Begründung |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | Fullstack in einem Repo, SSR, einfaches Deployment |
| Datenbank | **PostgreSQL** (via Supabase) | Relational, skalierbar, kostenloser Einstieg |
| ORM | **Prisma** | Typsicher, gute DX, einfache Migrationen |
| Auth | **Clerk** | Multi-Tenant ready, out-of-the-box |
| Styling | **Tailwind CSS + shadcn/ui** | Schnell, konsistent, professionell |
| E-Mail | **Resend + Inbound-Parsing** | Tickets per E-Mail empfangen & beantworten |
| Payments | **Stripe** | Standard für SaaS-Abrechnungen |
| Hosting | **Vercel** | Zero-Config, skaliert automatisch |
| Realtime | **Supabase Realtime** | Live-Updates ohne Polling |

---

## Business Model (Empfehlung)

**Freemium → SaaS-Abo** — ideal für kleine Unternehmen:

| Plan | Preis | Limits |
|---|---|---|
| Free | 0 €/Monat | 1 Postfach, 2 Agenten, 100 Tickets/Monat |
| Starter | 29 €/Monat | 3 Postfächer, 5 Agenten, unbegrenzte Tickets |
| Pro | 79 €/Monat | Unbegrenzt, Berichte, API-Zugang, Integrationen |

---

## MVP Features (Phase 1)

### Kern-Funktionalität
- [ ] Ticket erstellen, zuweisen, schließen
- [ ] Ticket-Status: Offen / In Bearbeitung / Wartet auf Antwort / Geschlossen
- [ ] Prioritäten: Niedrig / Normal / Hoch / Kritisch
- [ ] Agenten-Dashboard (alle Tickets, Filter, Suche)
- [ ] Kunden-Portal (Ticket einreichen & Status verfolgen)
- [ ] Interne Notizen (für Agenten, nicht für Kunden sichtbar)

### Kommunikation
- [ ] E-Mail-Integration: Ticket per E-Mail erstellen
- [ ] E-Mail-Integration: Antwort per E-Mail direkt in Ticket
- [ ] Benachrichtigungen (E-Mail) bei Status-Änderungen

### Verwaltung
- [ ] Multi-User: Admin, Agent, Kunde
- [ ] Basis-Reporting: Tickets offen/geschlossen, Antwortzeit
- [ ] Einfaches Onboarding (< 5 Minuten bis erstes Ticket)

---

## Phase 2 — Wachstum

- [ ] Live-Chat Widget (einbettbar auf Kundenseite)
- [ ] Wissensdatenbank / FAQ
- [ ] Automatisierungen (z.B. "Auto-Assign wenn Betreff 'Rechnung' enthält")
- [ ] Slack / Teams Integration
- [ ] SLA-Tracking
- [ ] Erweiterte Berichte & Export
- [ ] White-Label (für Agenturen)
- [ ] API + Webhooks

---

## Phase 3 — Skalierung / Verkauf

- [ ] Mehrsprachigkeit (DE, EN, FR, ES)
- [ ] Custom Domains für Kunden-Portal
- [ ] DSGVO-Compliance (Datenlöschung, Export, EU-Hosting)
- [ ] Reseller / Affiliate-Programm
- [ ] AppSumo / Product Hunt Launch
- [ ] Stripe Marketplace / App-Verzeichnisse

---

## Datenmodell (Kern)

```
Organization
  ├── Users (Agenten, Admins)
  ├── Mailboxes (support@, billing@, ...)
  └── Tickets
        ├── Messages (Kundenantworten + Agenten-Antworten)
        ├── InternalNotes
        ├── Tags
        └── Attachments

Contacts (Kunden)
  └── Tickets
```

---

## Projektphasen & Zeitplan

### Phase 1 — MVP (8–12 Wochen)

| Woche | Ziel |
|---|---|
| 1–2 | Setup: Repo, Auth, DB-Schema, CI/CD |
| 3–4 | Ticket CRUD, Agenten-Dashboard |
| 5–6 | Kunden-Portal, E-Mail-Integration |
| 7–8 | Stripe-Integration, Rollen/Rechte |
| 9–10 | Testing, Bug-Fixing, Onboarding-Flow |
| 11–12 | Beta-Launch, erste 10 Tester |

### Phase 2 — Produktreife (8–12 Wochen)
- Live-Chat, Automations, Integrationen

### Phase 3 — Go-to-Market (laufend)
- Marketing, SEO, Listings, Sales

---

## Wettbewerb & Positionierung

| Produkt | Schwäche | Unser Vorteil |
|---|---|---|
| Zendesk | Zu teuer, zu komplex | Einfacher, fairer Preis |
| Freshdesk | Veraltetes UI, langsam | Modernes Design, schnelle UX |
| Crisp | Mehr Chat-Tool | Fokus auf Tickets & E-Mail |
| HelpScout | Nur EN, teuer | Deutsch-first, günstiger |

**Alleinstellungsmerkmal (USP):** Setup in unter 5 Minuten, faire Preise, DSGVO-konform, Deutsch-first.

---

## Nächste Schritte (sofort)

1. GitHub Repo anlegen & Next.js initialisieren
2. Supabase Projekt erstellen & Prisma-Schema definieren
3. Clerk einrichten (Auth + Multi-Tenant)
4. Basis-UI mit Tailwind + shadcn/ui aufbauen
5. Erstes Ticket-CRUD implementieren

---

*Erstellt: Juni 2026*
