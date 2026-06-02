export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Übersicht aller Tickets</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Offen", value: "0", color: "text-blue-600" },
          { label: "In Bearbeitung", value: "0", color: "text-yellow-600" },
          { label: "Wartet", value: "0", color: "text-orange-600" },
          { label: "Geschlossen", value: "0", color: "text-green-600" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border bg-card p-4 space-y-1"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent tickets placeholder */}
      <div className="rounded-lg border bg-card">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Neueste Tickets</h2>
        </div>
        <div className="p-8 text-center text-muted-foreground">
          <p>Noch keine Tickets vorhanden.</p>
          <a
            href="/tickets/new"
            className="mt-2 inline-block text-sm underline hover:text-foreground"
          >
            Erstes Ticket erstellen
          </a>
        </div>
      </div>
    </div>
  );
}
