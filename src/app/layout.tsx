import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TicketDesk – Helpdesk für kleine Unternehmen",
  description: "Einfaches, modernes Helpdesk-System. Setup in unter 5 Minuten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
