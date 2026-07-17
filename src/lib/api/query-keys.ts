export const queryKeys = {
  instruments: {
    all: ["instruments"] as const,
    list: (updatedSince?: string) =>
      ["instruments", "list", updatedSince ?? null] as const,
    detail: (id: string) => ["instruments", "detail", id] as const
  },
  sessions: {
    all: ["sessions"] as const,
    list: (instrumentId?: string) =>
      ["sessions", "list", instrumentId ?? null] as const,
    detail: (id: string) => ["sessions", "detail", id] as const
  }
};
