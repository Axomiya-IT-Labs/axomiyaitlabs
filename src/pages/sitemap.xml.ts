import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { projects } from '../data/projects';
import { builds } from '../data/builds';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://axomiyaitlabs.vercel.app';
  
  const staticPages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/what-we-build', changefreq: 'monthly', priority: 0.8 },
    { url: '/projects', changefreq: 'weekly', priority: 0.9 },
    { url: '/blog', changefreq: 'weekly', priority: 0.9 },
    { url: '/faq', changefreq: 'monthly', priority: 0.7 },
    { url: '/contribute', changefreq: 'monthly', priority: 0.7 },
    { url: '/code-of-conduct', changefreq: 'monthly', priority: 0.5 },
  ];

  // Dynamically fetch all unique blog post slugs from Content Collections
  const blogPosts = await getCollection('blog');
  const blogBySlug = new Map();
  for (const post of blogPosts) {
    const slug = post.slug.replace(/^(en|as)\//, '');
    if (!blogBySlug.has(slug)) {
      blogBySlug.set(slug, post);
    }
  }

  // Import dynamic project pages from src/data/projects.ts
  const projectPages = projects.map((p) => ({
    url: `/projects/${p.slug}`,
    changefreq: p.status === 'live' ? 'weekly' : 'monthly',
    priority: p.status === 'live' ? 0.9 : 0.7,
  }));

  // Import dynamic build subcategory pages from src/data/builds.ts
  const buildPages = builds.map((b) => ({
    url: `/what-we-build/${b.slug}`,
    changefreq: 'monthly',
    priority: 0.8,
  }));

  const urls = [
    ...staticPages.map(p => `<url><loc>${baseUrl}${p.url}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`),
    ...Array.from(blogBySlug.entries()).map(([slug, post]) => 
      `<url><loc>${baseUrl}/blog/${slug}</loc><lastmod>${post.data.date}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    ),
    ...projectPages.map(p => `<url><loc>${baseUrl}${p.url}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`),
    ...buildPages.map(p => `<url><loc>${baseUrl}${p.url}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
