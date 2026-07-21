import EleventyFetch from "@11ty/eleventy-fetch";

const FEED = "https://zorvan.medium.com/feed";

// --- Tiny, dependency-free helpers -----------------------------------------

const stripCdata = (s = "") =>
  s.replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();

const decodeEntities = (s = "") =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8230;/g, "…")
    .replace(/&#8212;/g, "—")
    .replace(/&#8211;/g, "–")
    .replace(/&nbsp;/g, " ");

const tag = (block, name) => {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? decodeEntities(stripCdata(m[1])) : "";
};

const stripHtml = (html = "") =>
  decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

// Medium convention: the first emphasized line of a story is its subtitle.
const subtitleFrom = (contentHtml = "") => {
  const em = contentHtml.match(/<em>([\s\S]*?)<\/em>/i);
  if (em) {
    const t = stripHtml(em[1]);
    if (t.length > 12) return t;
  }
  return "";
};

const excerptFrom = (contentHtml = "", subtitle = "") => {
  let text = stripHtml(contentHtml);
  if (subtitle && text.startsWith(subtitle)) text = text.slice(subtitle.length).trim();
  const cut = text.slice(0, 220);
  return cut.length < text.length ? cut.replace(/\s+\S*$/, "") + "…" : cut;
};

// --- Build-time fetch ------------------------------------------------------

export default async function () {
  let xml = "";
  try {
    xml = await EleventyFetch(FEED, {
      duration: "1h",
      type: "text",
      fetchOptions: { headers: { "User-Agent": "zorvan.github.io build" } },
    });
  } catch (err) {
    console.warn(`[writing] Medium feed unavailable, rendering without it: ${err.message}`);
    return [];
  }

  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => {
    const block = m[1];
    const content = tag(block, "content:encoded");
    const subtitle = subtitleFrom(content);
    const cats = [...block.matchAll(/<category>([\s\S]*?)<\/category>/g)]
      .map((c) => decodeEntities(stripCdata(c[1])))
      .filter(Boolean);

    return {
      title: tag(block, "title"),
      url: tag(block, "link").split("?")[0],
      date: new Date(tag(block, "pubDate")),
      subtitle,
      excerpt: excerptFrom(content, subtitle),
      tags: cats.slice(0, 4),
    };
  });

  items.sort((a, b) => b.date - a.date);
  return items;
}
