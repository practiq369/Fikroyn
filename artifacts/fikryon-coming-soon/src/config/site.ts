/**
 * FIKRYON — central site configuration.
 * Replace every *_HERE placeholder with the official value once confirmed.
 * Placeholders are detected automatically and rendered as "unavailable" (no navigation).
 */

// Launch moment (Riyadh time, UTC+3). Change this single line to move the launch.
export const LAUNCH_DATE = "2026-11-03T00:00:00+03:00";

// Official contact / social values — NOT found in project files. Do not invent.
export const CONTACT_EMAIL = "CONTACT_EMAIL_HERE";
export const LINKEDIN_URL = "LINKEDIN_URL_HERE";
export const TWITTER_URL = "TWITTER_URL_HERE";

// Official logo asset — none exists in the project yet.
// When available, place it in /public and set e.g. "/fikryon-logo.svg".
export const LOGO_SRC = "LOGO_SRC_HERE";

export const isPlaceholder = (v: string) => !v || v.endsWith("_HERE");
