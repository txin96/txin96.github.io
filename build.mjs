// Keep local source HTML links usable; generate extensionless links for Netlify.
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const out = 'dist';
rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const name of ['assets', 'styles.css', 'site.js', 'favicon.ico', 'robots.txt', 'sitemap.xml', '_redirects']) {
  cpSync(name, join(out, name), { recursive: true });
}
for (const dir of ['', 'en', 'zh']) {
  const dest = join(out, dir);
  mkdirSync(dest, { recursive: true });
  for (const name of readdirSync(dir || '.').filter(n => n.endsWith('.html'))) {
    const html = readFileSync(join(dir, name), 'utf8');
    // Only anchor destinations are changed; forms, metadata, CSS and scripts stay intact.
    const updated = html.replace(/<a\b[^>]*>/gi, tag => tag.replace(/(\bhref=["'])([^"'#?]+)\.html(?=([?#][^"']*)?["'])/gi,
      (match, start, path) => {
        if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return match;
        const clean = path.replace(/(^|\/)index$/i, '$1');
        return start + (clean || './');
      }));
    writeFileSync(join(dest, name), updated);
  }
}
