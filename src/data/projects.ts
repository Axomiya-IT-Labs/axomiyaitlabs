export interface Project {
  slug: string;
  name: { en: string; as: string };
  tagline: { en: string; as: string };
  purpose: { en: string; as: string };
  features: { en: string; as: string };
  future: { en: string; as: string };
  website?: string;
  github: string;
  status: 'live' | 'coming-soon';
  tags: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'axomiya-it-labs',
    name: { en: `Axomiya IT Labs Community Website`, as: `Axomiya IT Labs সম্প্ৰদায় ৱেবছাইট` },
    tagline: {
      en: `The official open-source home for Axomiya IT Labs, built for community learning, projects, blogs, and contribution pathways.`,
      as: `Axomiya IT Labs ৰ আনুষ্ঠানিক মুক্ত-উৎস ঘৰ, সম্প্ৰদায়ৰ শিক্ষা, প্ৰকল্প, ব্লগ আৰু অৱদানৰ পথৰ বাবে নিৰ্মিত।`,
    },
    purpose: {
      en: `For learners, contributors, and community members to discover Axomiya IT Labs, explore projects, and start contributing.`,
      as: `শিক্ষাৰ্থী, অৱদানকাৰী আৰু সম্প্ৰদায়ৰ সদস্যসকলৰ বাবে Axomiya IT Labs চিনা, প্ৰকল্পসমূহ অন্বেষণ কৰা আৰু অৱদান আৰম্ভ কৰাৰ স্থান।`,
    },
    features: {
      en: `Bilingual pages, project directory, contribution guide, blog content, community links, and open-source documentation.`,
      as: `দ্বিভাষিক পৃষ্ঠা, প্ৰকল্প ডাইৰেক্টৰী, অৱদান নিৰ্দেশিকা, ব্লগ সমল, সম্প্ৰদায়ৰ লিংক আৰু মুক্ত-উৎস নথিপত্ৰ।`,
    },
    future: {
      en: `Continue improving accessibility, Assamese content, contributor onboarding, and community-driven project showcases.`,
      as: `সহজলভ্যতা, অসমীয়া সমল, অৱদানকাৰী আৰম্ভণি আৰু সম্প্ৰদায়-চালিত প্ৰকল্প প্ৰদৰ্শন উন্নত কৰি যোৱা।`,
    },
    website: 'https://axomiya-it-labs.github.io',
    github: 'https://github.com/Axomiya-IT-Labs/axomiyaitlabs',
    status: 'live',
    tags: ['Community', 'Open Source'],
    image: '/assets/projects/axomiya-it-labs.webp',
  },
  {
    slug: 'whatafter12',
    name: { en: `WhatAfter12 - Career Clarity Guidance`, as: `WhatAfter12 - কেৰিয়াৰ স্পষ্ট নিৰ্দেশিকা` },
    tagline: {
      en: `Know all higher education paths, jobs & earning opportunities after 12th in the age of AI.`,
      as: `AI যুগত দ্বাদশ শ্ৰেণীৰ পিছত উচ্চ শিক্ষা, চাকৰি আৰু উপাৰ্জনৰ সকলো পথ চিনি পাওক।`,
    },
    purpose: {
      en: `For students and parents who want clear, actionable guidance on what to study and where to build a future career.`,
      as: `উচ্চ মাধ্যমিক উত্তীৰ্ণ শিক্ষাৰ্থী আৰু অভিভাৱকসকলৰ বাবে কেৰিয়াৰ বাছনিৰ এক স্পষ্ট আৰু নিৰ্ভৰযোগ্য নিৰ্দেশিকা।`,
    },
    features: {
      en: `Career path explorer, college finder guide, job market insights, AI impact analysis, and skill roadmaps.`,
      as: `কেৰিয়াৰ পথ অন্বেষণকাৰী, মহাবিদ্যালয় নিৰ্বাচন গাইড, চাকৰি বজাৰৰ বিশ্লেষণ, AI প্ৰভাৱ আৰু উপাৰ্জনৰ পথনিৰ্দেশ।`,
    },
    future: {
      en: `Add AI-powered career counseling chatbot, regional language support for Northeast India, and skill development integration.`,
      as: `AI-চালিত কেৰিয়াৰ পৰামৰ্শদাতা চেটবট, উত্তৰ-পূৰ্বাঞ্চলৰ ভাষাসমূহৰ সমৰ্থন আৰু চৰকাৰী দক্ষতা বিকাশ আঁচনিৰ সংযোগ।`,
    },
    website: 'https://whatafter12.vercel.app/en',
    github: 'https://github.com/axomiyaindie/wa12',
    status: 'live',
    tags: ['Education', 'Career'],
    image: '/assets/projects/whatafter12.webp',
  },
  {
    slug: 'gmw-finance',
    name: { en: `GWM Finance - Financial Literacy Hub`, as: `GWM Finance - টকা-পইচাৰ মৌলিক জ্ঞান` },
    tagline: {
      en: `Master money basics — saving, smart investing, inflation management, and wealth building.`,
      as: `টকা-পইচাৰ ধনাত্মক ব্যৱহাৰ — সঞ্চয়, বুদ্ধিয়ক বিনিয়োগ, মুদ্ৰাস্ফীতি আৰু বিত্তীয় সুৰক্ষা।`,
    },
    purpose: {
      en: `For beginners who want to understand personal finance without confusing jargon or complex math.`,
      as: `জটিল বিত্তীয় শব্দ বা কঠিন চাৰ্ট নোহোৱাকৈ ব্যক্তিগত বিত্তীয় ব্যৱস্থাপনা সৰলকৈ বুজিব বিচৰাসকলৰ বাবে।`,
    },
    features: {
      en: `Saving principles, investing 101, inflation breakdown, budgeting toolkits, and financial literacy quizzes.`,
      as: `সঞ্চয়ৰ মৌলিক নিয়ম, বিনিয়োগ ১০১, মুদ্ৰাস্ফীতিৰ ব্যাখ্যা, বাজেট গাইড আৰু বিত্তীয় জ্ঞানৰ কুইজ।`,
    },
    future: {
      en: `Add Assamese-language financial calculators, crypto fundamentals, and interactive budget planning tools.`,
      as: `অসমীয়া ভাষাত বিত্তীয় কেলকুলেটৰ, ক্ৰিপ্ট' মৌলিক শিক্ষা আৰু ইন্টাৰেক্টিভ বাজেট পৰিকল্পনা সঁজুলি।`,
    },
    website: 'https://gmwfinance.netlify.app/en',
    github: 'https://github.com/axomiyaindie/gmw',
    status: 'live',
    tags: ['Finance', 'Education'],
    image: '/assets/projects/gmwfinance.webp',
  },
  {
    slug: 'krittimat',
    name: { en: `Krittimat - AI Tools & Prompts Hub`, as: `Krittimat - AI সঁজুলি আৰু প্ৰম্প্ট হাব` },
    tagline: {
      en: `Discover and compare premier AI tools for image generation, coding, writing, and voice synthesis.`,
      as: `ছবি নিৰ্মাণৰ পৰা কোডিং, লেখা আৰু ধ্বনি ক্লোনিংকৈ প্ৰয়োজনীয় শ্ৰেষ্ঠ AI সঁজুলিসমূহ চিনি পাওক।`,
    },
    purpose: {
      en: `For creators, developers, and learners to discover, compare, and master top AI platforms in one place.`,
      as: `সৃষ্টিকৰ্তা, ডেভেলপাৰ আৰু শিকাৰুসকলৰ বাবে এক স্থানতে শ্ৰেষ্ঠ AI সঁজুলিসমূহ বিচাৰি তুলনা কৰাৰ মঞ্চ।`,
    },
    features: {
      en: `Curated tool directory, verified prompt library, tool comparison engine, and user reviews.`,
      as: `সঁজুলি ডাইৰেক্টৰী, পৰীক্ষিত প্ৰম্প্ট লাইব্ৰেৰী, সঁজুলি তুলনা এঞ্জিন আৰু সম্প্ৰদায়ৰ পৰ্যালোচনা।`,
    },
    future: {
      en: `Add community ratings, prompt sharing marketplace, and native mobile application.`,
      as: `ব্যৱহাৰকাৰীৰ ৰেটিং, প্ৰম্প্ট শ্বেয়াৰিং মঞ্চ আৰু মোবাইল এপ্লিকেচন সংস্কৰণ।`,
    },
    website: 'https://krittimat.vercel.app/en',
    github: 'https://github.com/axomiyaindie/krittimat',
    status: 'live',
    tags: ['AI', 'Platform'],
    image: '/assets/projects/krittimat.webp',
  },
  {
    slug: 'vibecheatcode',
    name: { en: `VibeCheatCode - Developer Deployment Guide`, as: `VibeCheatCode - প্ৰকল্প চলোৱা আৰু ডেপ্লয়মেণ্ট গাইড` },
    tagline: {
      en: `Learn local AI environment setup, debugging techniques, and cloud deployment to Vercel, AWS, & Netlify.`,
      as: `AI প্ৰকল্প স্থানীয়ভাৱে চলাব আৰু Vercel, AWS, Netlify বা Azure ত ডেপ্লয় কৰিবলৈ শিকক।`,
    },
    purpose: {
      en: `For builders who can prompt AI but need step-by-step guidance on running, debugging, and launching projects live.`,
      as: `যিসকলে AI প্ৰম্প্ট লিখিব জানে কিন্তু ক'ড চলাবলৈ, ডিবাগ কৰিবলৈ আৰু ডেপ্লয় কৰিবলৈ সহায় বিচাৰে।`,
    },
    features: {
      en: `Local setup tutorials, step-by-step deployment guides for Vercel/AWS/Netlify, and CI/CD basics.`,
      as: `স্থানীয় ছেটআপ নিৰ্দেশিকা, Vercel/AWS/Netlify ৰ বাবে ডেপ্লয়মেণ্ট গাইড আৰু CI/CD ৰ মৌলিক বিষয়।`,
    },
    future: {
      en: `Add video walkthroughs, one-click deployment templates, and automated debugging assistants.`,
      as: `ভিডিঅ' টিউটৰিয়েল, ওৱান-ক্লিক ডেপ্লয়মেণ্ট টেমপ্লেট আৰু স্বয়ংক্ৰিয় ডিবাগিং সহায়ক।`,
    },
    website: 'https://vibecheatcode.netlify.app/',
    github: 'https://github.com/axomiyaindie/vcc',
    status: 'live',
    tags: ['Developer Tools', 'Education'],
    image: '/assets/projects/vibecheatcode.webp',
  },
  {
    slug: 'buycryptowisely',
    name: { en: `BuyCryptoWisely - Responsible Crypto Literacy`, as: `BuyCryptoWisely - সুৰক্ষিত ক্ৰিপ্ট' শিক্ষণ` },
    tagline: {
      en: `Understand Web3 fundamentals, Bitcoin, Solana, market risks, and safe trading practices.`,
      as: `Bitcoin, Web3, Solana, বজাৰৰ বিপদাশংকা আৰু সুৰক্ষিত ট্ৰেডিং পদ্ধতিৰ সম্যক জ্ঞান।`,
    },
    purpose: {
      en: `For beginners seeking honest, safety-first education before engaging with digital assets.`,
      as: `ক্ৰিপ্ট' সম্পৰ্কে কৌতূহলী নতুন শিকাৰুসকলৰ বাবে সজাগতা আৰু সুৰক্ষামূলক বিত্তীয় জ্ঞান।`,
    },
    features: {
      en: `Crypto fundamentals, security checklists, risk evaluation guides, and scam prevention tips.`,
      as: `ক্ৰিপ্ট' মৌলিক শিক্ষা, সুৰক্ষা চেকলিষ্ট, বিপদাশংকা মূল্যায়ণ আৰু প্ৰৱঞ্চনা প্ৰতিৰোধ টিপছ।`,
    },
    future: {
      en: `Add risk scoring calculators, live exchange reviews, and interactive safety simulations.`,
      as: `বিপদাশংকা গণনা কেলকুলেটৰ, এক্সচেঞ্জ পৰ্যালোচনা আৰু সুৰক্ষা পৰীক্ষণ মডিউল।`,
    },
    website: 'https://buycryptowisely.vercel.app/',
    github: 'https://github.com/axomiyaindie/buycryptowisely',
    status: 'live',
    tags: ['Finance', 'Education'],
    image: '/assets/projects/buycryptowisely.webp',
  },
  {
    slug: 'ai-for-21st-century-kids',
    name: { en: `AI For 21st Century Kids - Young Tech Minds`, as: `AI For 21st Century Kids - শিশুসকলৰ বাবে AI শিক্ষা` },
    tagline: {
      en: `Empowering children to understand AI, safety, ethics, and digital creativity.`,
      as: `কোমলমতী শিশুসকলক AI, ডিজিটেল সুৰক্ষা আৰু সৃষ্টিশীল প্ৰযুক্তিৰ সৈতে চিনাকি কৰাই দিয়া।`,
    },
    purpose: {
      en: `For kids, parents, and teachers to explore AI principles in an engaging, age-appropriate environment.`,
      as: `শিশু, অভিভাৱক আৰু শিক্ষকসকলৰ বাবে আনন্দদায়ক আৰু বয়স-উপযোগী পৰিৱেশত AI শিকাৰ মঞ্চ।`,
    },
    features: {
      en: `Kid-friendly AI projects, digital safety modules, ethical guidelines, and interactive learning cards.`,
      as: `শিশু-অনুকূল AI প্ৰকল্প, অনলাইন সুৰক্ষা পাঠ, নৈতিক ব্যৱহাৰ আৰু আকৰ্ষণীয় শিকাৰ কাৰ্ড।`,
    },
    future: {
      en: `Add interactive visual coding sandboxes, parent progress dashboards, and gamified challenges.`,
      as: `ভিজুৱেল কোডিং গেম, অভিভাৱকৰ বাবে ড্যাশব’ৰ্ড আৰু পুৰস্কাৰভিত্তিক কুইজ।`,
    },
    website: 'https://aifor21stcenturykids.vercel.app/',
    github: 'https://github.com/axomiyaindie/a421stck',
    status: 'live',
    tags: ['AI', 'Education', 'Kids'],
    image: '/assets/projects/ai-for-21st-century-kids.webp',
  },
  {
    slug: 'earn-while-learn',
    name: { en: `EarnWhileLearn - Modern Digital Careers`, as: `EarnWhileLearn - পঢ়াৰ সৈতে উপাৰ্জনৰ পথ` },
    tagline: {
      en: `Explore ethical side-projects, freelancing, content creation, and remote micro-tasks.`,
      as: `পঢ়াৰ সমান্তৰালভাৱে ফ্ৰীলান্সিং, কন্টেন্ট ক্ৰিয়েশ্যন আৰু ডিজিটেল উপাৰ্জনৰ সঠিক পথ।`,
    },
    purpose: {
      en: `For students and young professionals seeking flexible, skill-building income opportunities.`,
      as: `ছাত্ৰ-ছাত্ৰী আৰু নতুন শিকাৰুসকলৰ বাবে পঢ়াৰ ক্ষতি নকৰাকৈ আত্মনিৰ্ভৰশীল হোৱাৰ পথনিৰ্দেশ।`,
    },
    features: {
      en: `Earning path directory, portfolio project templates, freelancing guides, and success stories.`,
      as: `উপাৰ্জন পদ্ধতি ডাইৰেক্টৰী, ফ্ৰীলান্সিং গাইড, প্ৰকল্প টেমপ্লেট আৰু প্ৰেৰণাদায়ক কাহিনী।`,
    },
    future: {
      en: `Add side-project idea generators, freelancing client guides, and peer review networks.`,
      as: `চাইড-প্ৰজেক্ট আইডিয়া জেনেৰেটৰ, ক্ৰিয়েন্ট ডিলিং গাইড আৰু গোট আলোচনা।`,
    },
    website: '',
    github: '',
    status: 'coming-soon',
    tags: ['Finance', 'Education'],
    image: '/assets/projects/earn-while-learn.webp',
  },
  {
    slug: 'futureready-kids-lab',
    name: { en: `FutureReady Kids Lab - Future Tech Skills`, as: `FutureReady Kids Lab - ভৱিষ্যতৰ প্ৰযুক্তি প্ৰয়োগশালা` },
    tagline: {
      en: `Hands-on STEM projects, robotics basics, and logical thinking for young innovators.`,
      as: `কোডিং, ৰবটিক্স আৰু নতুন চিন্তাৰে শিশুসকলক ভৱিষ্যতৰ প্ৰযুক্তিৰ বাবে প্ৰস্তুত কৰা।`,
    },
    purpose: {
      en: `For parents and schools to foster early STEM skills, problem solving, and technological curiosity.`,
      as: `অভিভাৱক আৰু শিক্ষকসকলৰ বাবে সৰু অৱস্থাতে শিশুসকলৰ বিজ্ঞান আৰু প্ৰযুক্তিৰ দক্ষতা বৃদ্ধিৰ সঁজুলি।`,
    },
    features: {
      en: `Age-customized STEM activities, robotics project guides, and logic-building puzzles.`,
      as: `বয়স অনুসৰি STEM ক্ৰিয়াকলাপ, ৰবটিক্স গাইড আৰু তৰ্কমূলক চিন্তাৰ খেল।`,
    },
    future: {
      en: `Add starter kit guides, live online workshops, and parent-teacher collaboration toolkits.`,
      as: `ষ্টাৰ্টাৰ কিট পৰ্যালোচনা, অনলাইন কৰ্মশালা আৰু শিক্ষক-অভিভাৱকৰ সংযোগ মঞ্চ।`,
    },
    website: '',
    github: '',
    status: 'coming-soon',
    tags: ['Education', 'Kids', 'AI'],
    image: '/assets/projects/futureready-kids-lab.webp',
  },
  {
    slug: 'curious-kids',
    name: { en: `Curious Kids - Questions & Innovation`, as: `Curious Kids - কৌতূহলী শিশুৰ প্ৰশ্ন মঞ্চ` },
    tagline: {
      en: `A safe, moderated forum for children to ask big questions and explore science & tech.`,
      as: `বিজ্ঞান আৰু প্ৰযুক্তিৰ ডাঙৰ প্ৰশ্নসমূহ সুধি নতুন বস্তু অন্বেষণ কৰাৰ এক সুৰক্ষিত ঠাই।`,
    },
    purpose: {
      en: `For young inquiring minds to ask questions, showcase small projects, and learn together safely.`,
      as: `কৌতূহলী শিশুসকলৰ বাবে প্ৰশ্ন সুধিবলৈ আৰু একেলগে নতুন ধাৰণা শিকাৰ বাবে এক সুৰক্ষিত সম্প্ৰদায়।`,
    },
    features: {
      en: `Moderated Q&A forum, fun science experiments, mentor support, and kid-safe interactions.`,
      as: `নিয়ন্ত্ৰিত Q&A ফোৰাম, সৰল বিজ্ঞান পৰীক্ষা, মেণ্টৰ সমৰ্থন আৰু সুৰক্ষিত পৰিৱেশ।`,
    },
    future: {
      en: `Add interactive Q&A sessions with real scientists, project galleries, and achievement badges.`,
      as: `বিজ্ঞানীসকলৰ সৈতে প্ৰত্যক্ষ প্ৰশ্নোত্তৰ অনুষ্ঠান, প্ৰকল্প প্ৰদৰ্শনী আৰু পুৰস্কাৰ বেজ।`,
    },
    website: '',
    github: '',
    status: 'coming-soon',
    tags: ['Community', 'Education', 'Kids'],
    image: '/assets/projects/curious-kids.webp',
  },
];
