import type { Entry } from "$lib/types/Entry";

let entries: Entry[] = []

export function register(entry: Entry) {
  entries.push(entry);
}

export function getEntries(): Entry[] {
  return entries;
}