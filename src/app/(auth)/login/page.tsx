export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm space-y-6 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Anmelden</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Willkommen zurück bei TicketDesk
          </p>
        </div>
        <form className="space-y-4" action="/api/auth/login" method="POST">
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
            <label htmlFor="password" className="text-sm font-medium">
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Anmelden
          </button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Noch kein Konto?{" "}
          <a href="/register" className="underline hover:text-foreground">
            Kostenlos registrieren
          </a>
        </p>
      </div>
    </main>
  );
}
