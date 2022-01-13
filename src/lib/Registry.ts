import type { Entry } from "$lib/types/Entry";

let entries: Entry[] = []

let paths = new Set();

export function register(entry: Entry) {
  if(!paths.has(entry.path)) {
    paths.add(entry.path);
    entries.push(entry);
  }
  
}

export function getEntries(): Entry[] {
  return entries;
}