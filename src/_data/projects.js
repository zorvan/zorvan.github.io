// Curated public work. Ordered by weight — blockchain & confidential computing
// first, since that is where most of the strongest work has been. Edit freely;
// /work renders whatever is here, and the home page shows the first two groups.

const groups = [
    {
      id: "blockchain",
      title: "Blockchain & confidential computing",
      note: "Production trusted-execution and multi-chain systems — the through-line of most of my engineering.",
      items: [
        {
          name: "ternoa-enclaves",
          desc: "TEE enclave server (Intel SGX + Gramine) for Ternoa's Secret-NFT protocol — remote attestation, P2P real-time key sync, and secure key management bound to the chain.",
          lang: "Rust · SGX · Gramine",
          url: "https://github.com/capsule-corp-ternoa/ternoa-enclaves",
        },
        {
          name: "diewan / csv-adapter",
          desc: "A multi-chain client-side validation adapter — anchoring state transitions across blockchain layers so state can travel with its own proof. Archived reference.",
          lang: "Rust",
          url: "https://github.com/diewan/csv-adapter",
        },
        {
          name: "bitcoin-analytics",
          desc: "Exploration, analytics, and visualization over the Bitcoin ledger.",
          lang: "Jupyter",
          url: "https://github.com/zorvan/bitcoin-analytics",
        },
      ],
    },
    {
      id: "cryptography",
      title: "Cryptography & hardware security",
      note: "Secrets that can be shared without being surrendered; circuits that leak more than they mean to.",
      items: [
        {
          name: "vsss-wasm",
          desc: "Verifiable secret sharing — split a secret so any threshold of holders can prove a share is valid without revealing it.",
          lang: "Rust · WebAssembly",
          url: "https://github.com/zorvan/vsss-wasm",
        },
        {
          name: "side-channel-attack",
          desc: "Tooling for smart-card side-channel analysis — reading the whispers a chip makes while it computes.",
          lang: "MATLAB",
          url: "https://github.com/zorvan/side-channel-attack",
        },
      ],
    },
    {
      id: "topology",
      title: "Topology & tools for thought",
      note: "Reading structure — and shape — out of data and one's own notes.",
      items: [
        {
          name: "simplicial-complex",
          desc: "Knowledge discovery for Obsidian vaults via topological analysis — building a simplicial complex over notes to surface higher-order structure and hidden connections.",
          lang: "TypeScript",
          url: "https://github.com/zorvan/simplicial-complex",
        },
        {
          name: "N-Queens",
          desc: "A genetic-programming approach to the N-Queens problem. Where the notebook began, in 2015.",
          lang: "Clojure",
          url: "https://github.com/zorvan/N-Queens",
        },
      ],
    },
    {
      id: "coordination",
      title: "Coordination for collective life",
      note: "Systems that help small groups form, remember, and hold together — through perception, not prediction.",
      items: [
        {
          name: "Zwischen",
          desc: "A coordination system for small groups: forming events, tracking participation, surfacing state, and carrying memory forward — without modelling users or steering outcomes.",
          lang: "Python · Telegram · PostgreSQL",
          url: "https://github.com/zorvan/Zwischen",
        },
      ],
    },
];

// Home page highlights — the strongest work first (blockchain & topology),
// resolved from the groups above so descriptions never drift out of sync.
const byName = (name) => {
  for (const g of groups) {
    const it = g.items.find((i) => i.name === name);
    if (it) return it;
  }
  return null;
};

const featured = ["ternoa-enclaves", "simplicial-complex", "diewan / csv-adapter", "vsss-wasm"]
  .map(byName)
  .filter(Boolean);

export default { groups, featured };
