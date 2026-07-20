# Axomiya IT Labs 🚀

> **Empowering Assam through AI, Open-Source Technology, and Inclusive Technical Education.**

Axomiya IT Labs is an open-source initiative dedicated to bridging the digital divide in Northeast India. We build free AI tools, bilingual learning platforms, and open-source software in both **Assamese** and **English** so language never acts as a barrier to tech innovation.

🌐 **Live Website:** [axomiyaitlabs.vercel.app](https://axomiyaitlabs.vercel.app)  
💻 **GitHub Organization:** [github.com/Axomiya-IT-Labs](https://github.com/Axomiya-IT-Labs)  
💬 **Telegram Community:** [t.me/AxomiyaITLabs](https://t.me/AxomiyaITLabs)  
📘 **Facebook Group:** [Axomiya IT Labs Community](https://www.facebook.com/groups/1556385872564016/)

---

## 🌟 Anyone Can Contribute — No Coding Required!

You do **NOT** need to be a software developer to contribute to Axomiya IT Labs. We welcome:
- ✍️ **Translators & Writers:** Translate documentation or write beginner AI guides.
- 🎨 **Designers & Artists:** Create UI mockups, icons, and blog cover illustrations.
- 🧪 **Testers & QA:** Test apps on mobile devices and report bugs or translation typos.
- 👨‍💻 **Developers:** Build open-source tools, optimize code, or add new features.

---

## ⚡ Quick Start (For Developers)

Get the development environment up and running locally in under two minutes:

```bash
# 1. Clone the repository
git clone https://github.com/Axomiya-IT-Labs/axomiya-it-labs.git

# 2. Navigate to the project directory
cd axomiya-it-labs

# 3. Install project dependencies
npm install

# 4. Start the local development server
npm run dev

# 5. Build for production preview
npm run build
```

The application runs locally at `http://localhost:4321`.

---

## 📂 Project Architecture

```
axomiya-it-labs/
├── public/
│   ├── assets/
│   │   ├── blog/           # Blog cover graphics (1200x630 PNG or WebP)
│   │   ├── build/          # Build category media (Strict separation)
│   │   │   ├── main/       # Overview thumbnails used on homepage & /what-we-build
│   │   │   └── sub/        # Detail cover images for /what-we-build/[slug]
│   │   ├── icons/          # SVGs and UI iconography
│   │   ├── images/         # Static page header banners and site branding
│   │   └── projects/       # Screenshots and project assets
│   ├── robots.txt          # Search engine crawler instructions
│   └── sitemap.xml         # XML Sitemap
├── src/
│   ├── components/         # Modular Astro UI components (Header, Footer, etc.)
│   ├── content/            # Bilingual Markdown Content Collections
│   │   ├── config.ts       # Astro Content Collection schema definitions
│   │   └── blog/
│   │       ├── as/         # Pure Assamese blog articles (.md)
│   │       └── en/         # English blog articles (.md)
│   ├── data/               # Structured TS data (builds.ts, projects.ts, faq.ts)
│   ├── layouts/            # BaseLayout.astro with dynamic SEO & schema metadata
│   ├── pages/              # Static & dynamic routes (Astro file-based routing)
│   │   ├── blog/           # Blog index & [slug].astro renderer
│   │   ├── projects/       # Projects index & [slug].astro dynamic coming-soon pages
│   │   ├── what-we-build/  # Build index & [slug].astro category detail pages
│   │   └── sitemap.xml.ts  # Dynamic XML sitemap generator endpoint
│   └── styles/             # Global CSS design system and variables
├── blog.md                 # Step-by-step authoring guide for bilingual blog posts
├── contribute.md           # Community onboarding, GitHub web editor guide & guidelines
└── README.md               # Repository documentation & architecture guide
```

---

## ✍️ How to Publish a Bilingual Blog Article

Our blog uses Astro Content Collections with parallel language structures (`en/` and `as/`).

### Step 1: Upload the Article Banner
Save a 1200×630 image (WebP or PNG) to:
```
public/assets/blog/your-article-slug.webp
```

### Step 2: Create the English Edition
Add `src/content/blog/en/your-article-slug.md`:
```markdown
---
lang: "en"
title: "Unlocking AI for Everyone in Assam"
excerpt: "A plain-language guide on how artificial intelligence is transforming daily life."
date: "2026-07-20"
cat: "guide"
catLabel: "Guide"
readTime: "5 min read"
image: "/assets/blog/your-article-slug.webp"
---

Write your article in clear, accessible English markdown...
```

*Supported category (`cat`) tags:* `guide` | `tutorial` | `story` | `news`

### Step 3: Create the Assamese Edition
Add `src/content/blog/as/your-article-slug.md` *(Note: Filename MUST match the English slug exactly)*:
```markdown
---
lang: "as"
title: "অসমৰ সকলোৰে বাবে AI ৰ ব্যৱহাৰ"
excerpt: "দৈনন্দিন জীৱনত কৃত্ৰিম বুদ্ধিমত্তাই কেনেকৈ পৰিৱৰ্তন আনিছে তাৰ এক সৰল নিৰ্দেশিকা।"
date: "2026-07-20"
cat: "guide"
catLabel: "নিৰ্দেশিকা"
readTime: "৫ মিনিটৰ পঠন"
image: "/assets/blog/your-article-slug.webp"
---

প্ৰবন্ধটো সম্পূৰ্ণ অসমীয়াত লিখক...
```

*Assamese Category Mapping (`catLabel`):*
- `guide` ➔ `নিৰ্দেশিকা`
- `tutorial` ➔ `টিউটৰিয়েল`
- `story` ➔ `কাহিনী`
- `news` ➔ `ঘোষণা`

### Step 4: Local Preview & Pull Request Submission
```bash
# Verify rendering at http://localhost:4321/blog/your-article-slug
npm run dev

# Commit and push your changes
git add src/content/blog/en/your-article-slug.md \
        src/content/blog/as/your-article-slug.md \
        public/assets/blog/your-article-slug.webp
git commit -m "feat(blog): add bilingual post - your-article-slug"
git push origin feature/your-branch-name
```

---

## 🛠️ Adding a Project to the Directory

1. Add high-resolution screenshots/logos to `public/assets/projects/`.
2. Update `src/data/projects.ts` with your bilingual entry:
   ```typescript
   {
     slug: 'project-name',
     name: { en: 'Project Name', as: 'প্ৰকল্পৰ নাম' },
     tagline: {
       en: 'Concise English tagline',
       as: 'চুটি অসমীয়া টেগলাইন',
     },
     purpose: {
       en: 'Clear statement of purpose and target audience.',
       as: 'উদ্দশ্য আৰু লক্ষ্য সামগ্ৰীৰ স্পষ্ট বিৱৰণ।',
     },
     features: {
       en: 'Summary of core features and technological highlights.',
       as: 'মুখ্য বৈশিষ্ট্য আৰু প্ৰযুক্তিগত বিশেষত্বসমূহ।',
     },
     website: 'https://project-demo.vercel.app',
     github: 'https://github.com/Axomiya-IT-Labs/project-repo',
     status: 'live', // 'live' | 'coming-soon'
     tags: ['AI', 'Open Source', 'Education'],
   }
   ```
3. The project will automatically populate on `/projects` and generate a dedicated page at `/projects/project-name`.

---

## 🖼️ Media Asset Guidelines

To preserve visual consistency, observe strict asset placement:

* **Page Banners (`public/assets/images/`):** 1200×400 WebP/PNG (`about-header.png`, `build-header.png`, `contribute-header.png`, `projects-header.png`)
* **Build Category Images:**
  * Landing & Main listing (`/what-we-build`): `public/assets/build/main/`
  * Subcategory Detail pages (`/what-we-build/[slug]`): `public/assets/build/sub/`

---

## 🤝 Community & Contribution

We welcome code contributions, technical writing, design, translation, and bug reports from everyone.

- Read our detailed [Contribution Guidelines](contribute.md).
- Learn how to publish articles in our [Blog Guide](blog.md).
- Non-coders can contribute directly via the **GitHub Browser Editor** (pencil icon ✏️).

---

## 📄 License

This project is open source and released under the [MIT License](LICENSE).

---

<p align="center">
Made with ❤️ in Assam 🇮🇳 by the <b>Axomiya IT Labs</b> community.<br/>
<i>Empowering creators through AI and open tech. No one left behind.</i>
</p>