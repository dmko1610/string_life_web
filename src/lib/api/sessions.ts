import { apiClient } from "@/lib/api/client";
import type { components } from "@/types/api";

export type Session = components["schemas"]["Session"];
export type SessionRequest = components["schemas"]["SessionRequest"];
export type SessionUpdateRequest =
  components["schemas"]["SessionUpdateRequest"];

export async function listSessions(instrumentId?: string) {
  const { data, error } = await apiClient.GET("/api/sessions", {
    params: { query: { instrumentId } }
  });

  if (error) throw error;
  return data ?? [];
}

export async function getSession(id: string) {
  const { data, error } = await apiClient.GET("/api/sessions/{id}", {
    params: { path: { id } }
  });

  if (error) throw error;
  return data;
}

export async function createSession(body: SessionRequest) {
  const { data, error } = await apiClient.POST("/api/sessions", {
    body
  });

  if (error) throw error;
  return data;
}

export async function updateSession(id: string, body: SessionUpdateRequest) {
  const { data, error } = await apiClient.PUT("/api/sessions/{id}", {
    params: { path: { id } },
    body
  });

  if (error) throw error;
  return data;
}

export async function deleteSession(id: string) {
  const { error } = await apiClient.DELETE("/api/sessions/{id}", {
    params: { path: { id } }
  });

  if (error) throw error;
}
