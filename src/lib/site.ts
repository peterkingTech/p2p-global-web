// Resolves the site's public URL without guessing a domain that may not
// exist. Vercel sets VERCEL_URL automatically on every deployment; set
// NEXT_PUBLIC_SITE_URL to override once a real custom domain is live.
const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || "http://localhost:3000";
