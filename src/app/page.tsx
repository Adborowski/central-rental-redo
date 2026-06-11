// The proxy (src/proxy.ts) rewrites / → [locale=pl] before this page is reached.
// This is an unreachable fallback required by Next.js App Router.
export default function RootPage() {
  return null;
}
