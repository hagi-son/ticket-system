import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-5xl font-bold tracking-tight mb-4">TicketDesk</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Einfaches Helpdesk-System für kleine Unternehmen.
          <br />
          Setup in unter 5 Minuten.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Anmelden
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 font-medium hover:bg-accent transition"
          >
            Kostenlos starten
          </Link>
        </div>
      </div>
    </main>
  );
}
