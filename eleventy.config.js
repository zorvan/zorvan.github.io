import { createHash } from "node:crypto";

export default function (eleventyConfig) {
  // --- Passthrough static assets --------------------------------------------
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  eleventyConfig.setServerOptions({ port: 8080 });

  // --- Filters ---------------------------------------------------------------

  // Human date, e.g. "8 November 2024"
  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  });

  // ISO date (for <time datetime> and sitemap)
  eleventyConfig.addFilter("isoDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return Number.isNaN(d.getTime()) ? "" : d.toISOString();
  });

  eleventyConfig.addFilter("year", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return Number.isNaN(d.getTime()) ? "" : d.getUTCFullYear();
  });

  // A short, deterministic hex "fingerprint" for any string — a small nod to
  // the cryptographic theme, used for folio marks and anchors.
  eleventyConfig.addFilter("fingerprint", (value, len = 8) =>
    createHash("sha256").update(String(value ?? "")).digest("hex").slice(0, len)
  );

  // Zero-padded ordinal, e.g. 3 -> "03"
  eleventyConfig.addFilter("folio", (n) => String(n).padStart(2, "0"));

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
