// Curated, content-verified Unsplash photos for the design concept.
// Real client photography will replace these during WordPress handoff.

export function unsplash(id: string, params = "w=800&q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const HERO_PHOTO = "1543269865-cbf427effbad"; // group of friends laughing, indoor cafe
export const OFFICE_PHOTO = "1524758631624-e2822e304c36"; // warm lounge/office interior
export const CONTACT_PHOTO = "1573497491208-6b1acb260507"; // two people talking at a window

/**
 * A staff headshot from the practice's current site. `file` is the image's
 * filename on their Hibu CDN; the `-1920w` variants are the largest served.
 */
export function staffPhoto(file: string) {
  return `https://le-cdn.hibuwebsites.com/1dc9819a0a6c46f2b4472aefbc1233c3/dms3rep/multi/opt/${file}`;
}
