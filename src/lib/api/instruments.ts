import { components } from "@/types/api";
import { apiClient } from "./client";

export type Instrument = components["schemas"]["Instrument"];
export type InstrumentRequest = components["schemas"]["InstrumentRequest"];

export async function listInstruments(updatedSince?: string) {
  const { data, error } = await apiClient.GET("/api/instruments", {
    params: { query: { updatedSince } }
  });

  if (error) throw error;

  return data ?? [];
}

export async function getInstrument(id: string) {
  const { data, error } = await apiClient.GET("/api/instruments/{id}", {
    params: { path: { id } }
  });

  if (error) throw error;

  return data;
}

export async function createInstrument(body: InstrumentRequest) {
  const { data, error } = await apiClient.POST("/api/instruments", {
    body
  });

  if (error) throw error;

  return data;
}

export async function updateInstrument(id: string, body: InstrumentRequest) {
  const { data, error } = await apiClient.PUT("/api/instruments/{id}", {
    params: { path: { id } },
    body
  });

  if (error) throw error;

  return data;
}

export async function deleteInstrument(id: string) {
  const { error } = await apiClient.DELETE("/api/instruments/{id}", {
    params: { path: { id } }
  });

  if (error) throw error;
}
