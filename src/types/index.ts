export type TicketStatus = "OPEN" | "IN_PROGRESS" | "WAITING" | "CLOSED";
export type TicketPriority = "LOW" | "NORMAL" | "HIGH" | "CRITICAL";
export type UserRole = "ADMIN" | "AGENT" | "CUSTOMER";

export interface Ticket {
  id: string;
  title: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  contactEmail: string;
  organizationId: string;
}

export interface Message {
  id: string;
  ticketId: string;
  body: string;
  isInternal: boolean;
  authorId: string;
  createdAt: Date;
}
