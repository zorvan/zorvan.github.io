// Keywords that describe the actual work and draw people who think similarly.
// Honest signal, not decoration — keep it true.

export default {
  // A compact set surfaced on the home page.
  highlights: [
    "zero-knowledge proofs",
    "confidential computing",
    "MPC · FHE",
    "Rust",
    "coordination without surveillance",
    "relational philosophy",
    "critical theory",
  ],

  // Grouped, fuller set for the profile page.
  groups: [
    {
      label: "Cryptography & security",
      items: ["zero-knowledge (SNARKs/STARKs)", "MPC · SMPC", "FHE", "threshold signatures", "VSS · DKG", "confidential computing (SGX/TDX)", "side-channel & hardware security"],
    },
    {
      label: "Systems",
      items: ["Rust", "distributed systems", "blockchain L1/L2", "client-side validation", "P2P"],
    },
    {
      label: "Coordination & collective life",
      items: ["coordination without surveillance", "accountability", "mechanism design", "shared memory"],
    },
    {
      label: "Thought",
      items: ["relational philosophy", "critical theory", "non-axiomatic systems", "theory of writing"],
    },
    {
      label: "Art",
      items: ["calligraphy", "3D typography", "narrative & generative art"],
    },
  ],
};
