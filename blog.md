# Blog Authoring Guide ✍️

Thank you for sharing your knowledge with the **Axomiya IT Labs** community! This guide walks you through publishing high-quality, bilingual articles in **English** and **Assamese**.

---

## 📌 Core Standards

1. **Originality:** All published articles must be original work.
2. **Bilingual Requirement:** Every article must exist in both English (`en/`) and Assamese (`as/`).
3. **Equal Experience:** Both language versions must convey the same depth of technical information and clarity.
4. **Linguistic Purity:**
   - English posts must be written in clear, standard English.
   - Assamese posts must be written in **pure Assamese script (অসমীয়া)**. Do not mix English sentences into Assamese text. Standard technical terms without direct Assamese translations (e.g., *Git*, *AI*, *GitHub*, *API*, *Vercel*) can remain in English within Assamese text.
5. **No Garbled Text:** Always verify Assamese text rendering before committing to avoid encoding errors or accidental script mixing.
6. **AI Tools Encouraged:** Feel free to use AI assistants (ChatGPT, Gemini, Copilot) to help outline, translate, or refine your draft! Just make sure to review the final Assamese text to ensure it reads naturally.

---

## 📂 Content Organization

Blog posts are managed using Astro Content Collections located in `src/content/blog/`.

```
src/content/blog/
├── en/
│   └── your-article-slug.md      <-- English edition
└── as/
    └── your-article-slug.md      <-- Assamese edition (Matching filename)
```

> ⚠️ **Important:** The filename (`your-article-slug`) serves as the URL identifier and **must match exactly** across both `en/` and `as/` directories.

---

## 🖼️ Step 1: Article Header Image

1. Create a 1200×630 cover image in **WebP** or **PNG** format.
2. Save it to `public/assets/blog/your-article-slug.webp` (or `.png`).
3. Keep file size under 500 KB for optimal page load speed.

---

## ✍️ Step 2: Write the English Edition

Create `src/content/blog/en/your-article-slug.md`:

```markdown
---
lang: "en"
title: "Understanding Large Language Models: A Beginner's Guide"
excerpt: "Demystifying AI language models with clear explanations and real-world examples."
date: "2026-07-20"
cat: "guide"
catLabel: "Guide"
readTime: "6 min read"
image: "/assets/blog/your-article-slug.webp"
---

Artificial Intelligence is transforming how we learn, code, and solve problems...

## How Language Models Work

Instead of memorizing sentences, models learn patterns from text data...
```

---

## ✍️ Step 3: Write the Assamese Edition

Create `src/content/blog/as/your-article-slug.md`:

```markdown
---
lang: "as"
title: "লাৰ্জ লেংগুৱেজ মডেলৰ বিষয়ে সহজ ভাষাত"
excerpt: "সহজ বৰ্ণনা আৰু বাস্তৱ উদাহৰণেৰে AI ভাষা মডেলসমূহ বুজি উঠোঁ আহক।"
date: "2026-07-20"
cat: "guide"
catLabel: "নিৰ্দেশিকা"
readTime: "৬ মিনিটৰ পঠন"
image: "/assets/blog/your-article-slug.webp"
---

কৃত্ৰিম বুদ্ধিমত্তাই আমাৰ শিকা, ক'ডিং কৰা আৰু সমস্যা সমাধানৰ ধৰণ সলনি কৰিছে...

## ভাষা মডেলসমূহে কেনেকৈ কাম কৰে

বাক্যসমূহ মুখস্থ কৰাৰ পৰিৱৰ্তে, এই মডেলসমূহে পাঠৰ পৰা বিশেষ পেটাৰ্ণ শিকে...
```

---

## 📋 Frontmatter Schema Reference

| Field | Description | English Format | Assamese Format |
|---|---|---|---|
| `lang` | Language code | `"en"` | `"as"` |
| `title` | Article title | Standard English Title | অসমীয়া শীৰ্ষক |
| `excerpt` | 1-2 sentence card summary | English summary | অসমীয়া চুটি সাৰাংশ |
| `date` | Publication date | `"YYYY-MM-DD"` | `"YYYY-MM-DD"` |
| `cat` | Category identifier | `guide` / `tutorial` / `story` / `news` | `guide` / `tutorial` / `story` / `news` |
| `catLabel` | UI category badge | `Guide` / `Tutorial` / `Story` / `Announcement` | `নিৰ্দেশিকা` / `টিউটৰিয়েল` / `কাহিনী` / `ঘোষণা` |
| `readTime` | Read time badge | `"5 min read"` | `"৫ মিনিটৰ পঠন"` |
| `image` | Relative asset path | `/assets/blog/slug.webp` | `/assets/blog/slug.webp` |

---

## 💡 How to Submit (Two Easy Ways)

### Method A: Direct on GitHub (No Terminal Required!)
1. Go to `https://github.com/Axomiya-IT-Labs/axomiya-it-labs`
2. Navigate to `src/content/blog/en/` and click **Add file ➔ Create new file**.
3. Name it `your-article-slug.md`, paste your content, and click **Commit changes**.
4. Repeat for `src/content/blog/as/your-article-slug.md`.
5. Open a Pull Request! Our maintainers will gladly help review and merge it.

### Method B: Git Command Line
```bash
# 1. Run local dev server to test
npm run dev

# 2. Add, commit, and push
git add src/content/blog/en/your-article-slug.md \
        src/content/blog/as/your-article-slug.md \
        public/assets/blog/your-article-slug.webp
git commit -m "docs(blog): publish your-article-slug"
git push origin feature/blog-article
```

---

Need help or want to bounce article ideas off our team?  
Join our community on [Telegram](https://t.me/AxomiyaITLabs)!
