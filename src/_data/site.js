import { createHash } from "node:crypto";

const now = new Date();

export default {
  // --- Identity (persona-only) ----------------------------------------------
  handle: "zorvan",
  tagline: "diaries of a nomadic relationarch",
  role: "Principal cryptographer · confidential computing · relational critical engineering",
  location: "nomadic",
  description:
    "Notebook of zorvan — cryptography, verifiable systems, and relational critical engineering. Essays, work, and the Accountability Economy.",
  url: "https://zorvan.github.io",
  lang: "en",

  // --- Navigation ------------------------------------------------------------
  nav: [
    { title: "Index", url: "/" },
    { title: "Writing", url: "/writing/" },
    { title: "Work", url: "/work/" },
    { title: "Diewan", url: "/diewan/" },
    { title: "Zwischen", url: "/zwischen/" },
    { title: "Colophon", url: "/colophon/" },
  ],

  // --- Elsewhere -------------------------------------------------------------
  links: [
    { title: "Medium", handle: "@zorvan", url: "https://medium.com/@zorvan" },
    { title: "GitHub", handle: "zorvan", url: "https://github.com/zorvan" },
    { title: "Diewan", handle: "diewan", url: "https://github.com/diewan" },
    { title: "LinkedIn", handle: "in/xorvan", url: "https://www.linkedin.com/in/xorvan" },
    { title: "Instagram", handle: "@sarvesadi", url: "https://instagram.com/sarvesadi" },
  ],

  // --- Build fingerprint -----------------------------------------------------
  // Each deploy anchors a fresh short hash — a small proof that the state
  // transition happened. Authority stated, action proven.
  build: {
    date: now,
    hash: createHash("sha256")
      .update(now.toISOString())
      .digest("hex")
      .slice(0, 12),
  },
};
