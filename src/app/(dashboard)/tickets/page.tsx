import Link from "next/link";

const STATUS_LABELS: Record<string, { label: string; class: string }> = {
  OPEN: { label: "Offen", class: "bg-blue-100 text-blue-700" },
  IN_PROGRESS: { label: "In Bearbeitung", class: "bg-yellow-100 text-yellow-700" },
  WAITING: { label: "Wartet", class: "bg-orange-100 text-orange-700" },
  CLOSED: { label: "Geschlossen", class: "bg-green-100 text-green-700" },
};

const PRIORITY_LABELS: Record<string, { label: string; class: string }> = {
  LOW: { label: "Niedrig", class: "bg-gray-100 text-gray-600" },
  NORMAL: { label: "Normal", class: "bg-blue-100 text-blue-600" },
  HIGH: { label: "Hoch", class: "bg-orange-100 text-orange-600" },
  CRITICAL: { label: "Kritisch", class: "bg-red-100 text-red-700" },
};

export default function TicketsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tickets</h1>
          <p className="text-muted-foreground">Alle Support-Anfragen</p>
        </div>
        <Link
          href="/tickets/new"
          className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          + Neues Ticket
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-2 flex-wrap">
        {["Alle", "Offen", "In Bearbeitung", "Wartet", "Geschlossen"].map(
          (filter) => (
            <button
              key={filter}
              className="rounded-full border px-3 py-1 text-sm hover:bg-accent transition first:bg-primary first:text-primary-foreground first:border-primary"
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Ticket List */}
      <div className="rounded-lg border bg-card divide-y">
        <div className="p-8 text-center text-muted-foreground">
          <p>Noch keine Tickets vorhanden.</p>
          <Link
            href="/tickets/new"
            className="mt-2 inline-block text-sm underline hover:text-foreground"
          >
            Erstes Ticket erstellen
          </Link>
        </div>
      </div>
    </div>
  );
}
