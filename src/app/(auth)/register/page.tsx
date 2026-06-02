export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm space-y-6 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Konto erstellen</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Starte kostenlos mit TicketDesk
          </p>
        </div>
        <form className="space-y-4" action="/api/auth/register" method="POST">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Max Mustermann"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="du@unternehmen.de"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="organization" className="text-sm font-medium">
              Unternehmen
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Meine GmbH"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Mindestens 8 Zeichen"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Konto erstellen
          </button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Bereits registriert?{" "}
          <a href="/login" className="underline hover:text-foreground">
            Anmelden
          </a>
        </p>
      </div>
    </main>
  );
}
