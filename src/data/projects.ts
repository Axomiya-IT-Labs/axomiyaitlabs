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
    slug: 'whatafter12',
    name: { en: 'WhatAfter12 - Career Clarity Guidance', as: 'WhatAfter12 - কেৰিয়াৰ স্পষ্ট নিৰ্দেশিকা' },
    tagline: {
      en: 'Know all higher education paths, jobs & earning opportunities after 12 in the age of AI.',
      as: 'AI যুগত ১২ৰ পৰা উচ্চ শিক্ষা, চাকৰি আৰু উপাৰ্জনৰ সকলো পথ চিনি পাওক।',
    },
    purpose: {
      en: 'For students and parents who want clear guidance on what to study and where to build a career after high school.',
      as: 'শিক্ষাৰ্থী আৰু অভিভাৱকৰ বাবে যিসকলে উচ্চ বিদ্যালয়ৰ পৰা কেৰিয়াৰৰ বাবে স্পষ্ট নিৰ্দেশিকা চাব।',
    },
    features: {
      en: 'Career path explorer, college guide, job market insights, AI impact analysis, and earning roadmap.',
      as: 'কেৰিয়াৰ পথ অন্বেষণকাৰী, কলেজ গাইড, চাকৰি বজাৰ তথ্য, AI প্ৰভাৱ বিশ্লেষণ, আৰু উপাৰ্জন পথনিৰ্দেশ।',
    },
    future: {
    en: 'Add AI-powered career counseling chatbot, regional language support for Northeast India, and integration with government skill development programs.',
    as: 'AI-powered career counseling chatbot যোগ কৰক, Northeast Indiaৰ বাবে regional language support, আৰু government skill development programsৰ সৈতে integration।',
  },
    website: 'https://whatafter12.vercel.app/en',
    github: 'https://github.com/axomiyaindie/wa12',
    status: 'live',
    tags: ['Education', 'Career'],
    image: '/assets/projects/whatafter12.png',
  },
  {
    slug: 'gmw-finance',
    name: { en: 'GWM Finance - Know Basics of Money', as: 'GWM Finance - টাকাৰ মৌলিক জ্ঞান' },
    tagline: {
      en: 'Know everything you need to know about money — saving, investing, inflation, and more.',
      as: 'টাকাৰ বিষয়ে আপুনি যিবোৰ জানিব লাগে — সঞ্চয়, ৰহণ, মুদ্রাস্ফীতি, আৰু বেছি।',
    },
    purpose: {
      en: 'For beginners who want to understand personal finance without confusing jargon or complex charts.',
      as: 'আৰম্ভণিকাৰীৰ বাবে যিসকলে ব্যক্তিগত বিত্ত বুজিব বিচাৰে কঠিন শব্দ বা জটিল চাৰ্ট নকৰাকৈ।',
    },
    features: {
      en: 'Saving basics, investing 101, inflation explained, budgeting tips, and financial literacy quizzes.',
      as: 'সঞ্চয় মৌলিক, ৰহণ ১০১, মুদ্রাস্ফীতি ব্যাখ্যা, বাজেট টিপ, আৰু বিত্তাক্ষৰতা দক্ষতা কুইজ।',
    },
    future: {
    en: 'Add Assamese-language financial calculators, crypto basics section, and interactive budget planning tools.',
    as: 'Assamese-language financial calculators যোগ কৰক, crypto basics section, আৰু interactive budget planning tools।',
  },
    website: 'https://gmwfinance.netlify.app/en',
    github: 'https://github.com/axomiyaindie/gmw',
    status: 'live',
    tags: ['Finance', 'Education'],
    image: '/assets/projects/gmwfinance.png',
  },
  {
    slug: 'krittimat',
    name: { en: 'Krittimat - AI Tools & Prompts Hub', as: 'Krittimat - AI সঁজুলি আৰু Prompt Hub' },
    tagline: {
      en: 'Know all the most famous AI tools for everything from image generation to voice cloning to coding.',
      as: 'ছবি সৃষ্টিৰ পৰা ধ্বনি ক্লোনিং, কোডিং লৈকে সকলোৰ বাবে প্ৰয়োজনীয় AI সঁজুলি চিনি পাওক।',
    },
    purpose: {
      en: 'For creators, developers, and students who want to discover and compare the best AI tools in one place.',
      as: 'সৃষ্টিকৰ্তা, ডেভেলপাৰ, আৰু শিক্ষাৰ্থীৰ বাবে যিসকলে এক জাগাত শ্ৰেষ্ঠ AI সঁজুলি চিনি তুলনা কৰিব চাব।',
    },
    features: {
      en: 'Tool directory, prompt library, comparison engine, category filters, and community reviews.',
      as: 'সঁজুলি ডাইৰেক্টৰী, prompt লাইব্ৰেৰী, তুলনা এঞ্জিন, কোটেগৰী ফিল্টাৰ, আৰু সম্প্ৰদায় পৰ্যালোচনা।',
    },
    future: {
    en: 'Add user reviews and ratings, community prompt sharing, and a mobile app version.',
    as: 'User reviews আৰু ratings যোগ কৰক, community prompt sharing, আৰু mobile app version।',
  },
    website: 'https://krittimat.vercel.app/en',
    github: 'https://github.com/axomiyaindie/krittimat',
    status: 'live',
    tags: ['AI', 'Platform'],
    image: '/assets/projects/krittimat.png',
  },
  {
    slug: 'vibecheatcode',
    name: { en: 'VibeCheatCode - Code to Run Your Project', as: 'VibeCheatCode - আপোনাৰ প্ৰকল্প চলাবৰ কোড' },
    tagline: {
      en: 'Learn how to run your AI projects locally, debug them, and deploy to Vercel, AWS, Netlify, or Azure.',
      as: 'আপোনাৰ AI প্ৰকল্প স্থানীয়ভাৱে চলাব, ডিবাগ কৰিব, আৰু Vercel, AWS, Netlify, বা Azure ত ডেপ্লয় কৰিব শিকক।',
    },
    purpose: {
      en: 'For builders who have learned to prompt AI but need help running, debugging, and deploying their projects.',
      as: 'নিৰ্মাতাসকলে যিসকলে AI প্ৰম্প্ট শিকিলে কিন্তু প্ৰকল্প চলাব, ডিবাগ কৰিব, আৰু ডেপ্লয় কৰিবলৈ সহায় চাব।',
    },
    features: {
      en: 'Local setup guides, debugging tips, deployment walkthroughs for Vercel/AWS/Netlify/Azure, and CI/CD basics.',
      as: 'স্থানীয় সেটআপ গাইড, ডিবাগিং টিপ, Vercel/AWS/Netlify/Azureৰ বাবে ডেপ্লয় নিৰ্দেশিকা, আৰু CI/CD মৌলিক।',
    },
    future: {
    en: 'Add video tutorials, one-click deployment templates, and AI-powered debugging assistant.',
    as: 'Video tutorials যোগ কৰক, one-click deployment templates, আৰু AI-powered debugging assistant।',
  },
    website: 'https://vibecheatcode.netlify.app/',
    github: 'https://github.com/axomiyaindie/vcc',
    status: 'live',
    tags: ['Developer Tools', 'Education'],
    image: '/assets/projects/vibecheatcode.png',
  },
  {
    slug: 'buycryptowisely',
    name: { en: 'BuyCryptoWisely - Know Everything about Crypto & Memecoins', as: 'BuyCryptoWisely - Crypto আৰু Memecoinৰ বিষয়ে সকলো জানক' },
    tagline: {
      en: 'Know everything about Bitcoin, cryptocurrency, Solana, memecoins, and how to trade safely.',
      as: 'Bitcoin, cryptocurrency, Solana, memecoin, আৰু সুৰক্ষিত ট্ৰেডিংৰ বিষয়ে সকলো জানক।',
    },
    purpose: {
      en: 'For beginners curious about crypto who want honest, simple guidance before risking money.',
      as: 'আৰম্ভণিকাৰীৰ বাবে যিসকলে cryptoৰ বিষয়ে কৌতূহলী কিন্তু টাকা ৰিস্কু কৰাৰ আগত সৎ, সহজ নিৰ্দেশিকা চাব।',
    },
    features: {
      en: 'Crypto basics, exchange reviews, memecoin guide, safety checklist, and trading fundamentals.',
      as: 'Crypto মৌলিক, এক্সচেঞ্জ পৰ্যালোচনা, memecoin গাইড, সুৰক্ষা চেকলিস্ট, আৰু ট্ৰেডিং ফান্ডামেণ্টাল।',
    },
    future: {
    en: 'Add portfolio tracker, memecoin analysis tools, and interactive learning modules.',
    as: 'Portfolio tracker যোগ কৰক, memecoin analysis tools, আৰু interactive learning modules।',
  },
    website: 'https://buycryptowisely.vercel.app/',
    github: 'https://github.com/axomiyaindie/buycryptowisely',
    status: 'live',
    tags: ['Finance', 'Education'],
    image: '/assets/projects/buycryptowisely.png',
  },
  {
    slug: 'ai-for-21st-century-kids',
    name: { en: 'AI For 21st Century Kids - Everything about AI', as: 'AI For 21st Century Kids - AIৰ বিষয়ে সবুজি' },
    tagline: {
      en: 'Know everything about AI, what is coming next, and how to use AI to increase productivity.',
      as: 'AIৰ বিষয়ে সবুজি জানক, আগলৈ কি আহিব, আৰু productivity বঢ়াবলৈ AI কেনেকৈ ব্যৱহাৰ কৰিব।',
    },
    purpose: {
      en: 'For kids, parents, and teachers who want to understand AI in a fun, simple, and age-appropriate way.',
      as: 'শিশু, অভিভাৱক, আৰু শিক্ষকৰ বাবে যিসকলে এটা মজেদাৰ, সহজ, আৰু বয়োগত AI বুজিব চাব।',
    },
    features: {
      en: 'AI basics for kids, fun projects, safety guide, future trends, and productivity tips for students.',
      as: 'শিশুৰ বাবে AI মৌলিক, মজেদাৰ প্ৰকল্প, সুৰক্ষা গাইড, ভৱিষ্যত ট্ৰেণ্ড, আৰু শিক্ষাৰ্থীৰ বাবে productivity টিপ।',
    },
    future: {
    en: 'Add interactive coding games, AI experiment sandbox, and parent dashboard to track progress.',
    as: 'Interactive coding games যোগ কৰক, AI experiment sandbox, আৰু parent progress track কৰিবলৈ dashboard।',
  },
    website: 'https://aifor21stcenturykids.vercel.app/',
    github: 'https://github.com/axomiyaindie/a421stck',
    status: 'live',
    tags: ['AI', 'Education', 'Kids'],
    image: '/assets/projects/ai-for-21st-century-kids.png',
  },
  {
    slug: 'earn-while-learn',
    name: { en: 'EarnWhileLearn - Know All The Modern Earning Ways', as: 'EarnWhileLearn - আধুনিক উপাৰ্জনের সকলো পথ জানক' },
    tagline: {
      en: 'Discover modern ways to earn money while learning — side projects, freelancing, content creation, and more.',
      as: 'শিকাৰ সময়ত টাকা উপাৰ্জন কৰাৰ আধুনিক পথ প্ৰদৰ্শন — side project, freelancing, content creation, আৰু বেছি।',
    },
    purpose: {
      en: 'For students and professionals who want to build income streams alongside their studies or jobs.',
      as: 'শিক্ষাৰ্থী আৰু পেশাদাৰৰ বাবে যিসকলে নিজৰ পঠন বা চাকৰিৰ সৈতে income stream নিৰ্মাণ কৰিব চাব।',
    },
    features: {
      en: 'Earning methods directory, side project ideas, freelancing guide, content creation tips, and success stories.',
      as: 'উপাৰ্জন পদ্ধতি ডাইৰেক্টৰী, side project অভিকশন, freelancing গাইড, content creation টিপ, আৰু সফলতাৰ কাহিনী।',
    },
    future: {
    en: 'Add side project idea generator, freelancing marketplace integration, and success story submissions.',
    as: 'Side project idea generator যোগ কৰক, freelancing marketplace integration, আৰু success story submissions।',
  },
    website: '',
    github: '',
    status: 'coming-soon',
    tags: ['Finance', 'Education'],
    image: '/assets/projects/earn-while-learn.png',
  },
  {
    slug: 'futureready-kids-lab',
    name: { en: 'FutureReady Kids Lab - Make Your Kids Future Ready', as: 'FutureReady Kids Lab - আপোনাৰ শিশু ভৱিষ্যতৰ বাবে প্ৰস্তুত কৰক' },
    tagline: {
      en: 'Hands-on projects and activities to prepare kids for the AI-driven future.',
      as: 'AI-চালিত ভৱিষ্যতৰ বাবে শিশুসমূহ প্ৰস্তুত কৰিবলৈ হাত-মাধ্যম প্ৰকল্প আৰু প্ৰৱৃত্তি।',
    },
    purpose: {
      en: 'For parents and educators who want to give kids practical tech skills early — coding, AI, robotics, and critical thinking.',
      as: 'অভিভাৱক আৰু শিক্ষকৰ বাবে যিসকলে শিশুসমূহক তাড়তাড়ি প্ৰযুক্তি দক্ষতা দিব চাব — কোডিং, AI, ৰবটিক্স, আৰু সমালোচনামূলক চিন্তা।',
    },
    features: {
      en: 'Age-appropriate projects, coding games, AI experiments, robotics kits, and parent/teacher guides.',
      as: 'বয়ো অনুসাৰী প্ৰকল্প, কোডিং গেম, AI পৰীক্ষা, ৰবটিক্স কিট, আৰু অভিভাৱক/শিক্ষক গাইড।',
    },
    future: {
    en: 'Add robotics kit reviews, live online classes, and parent-teacher collaboration tools.',
    as: 'Robotics kit reviews যোগ কৰক, live online classes, আৰু parent-teacher collaboration tools।',
  },
    website: '',
    github: '',
    status: 'coming-soon',
    tags: ['Education', 'Kids', 'AI'],
    image: '/assets/projects/futureready-kids-lab.png',
  },
  {
    slug: 'curious-kids',
    name: { en: 'Curious Kids', as: 'Curious Kids' },
    tagline: {
      en: 'A safe space for kids to ask questions, explore ideas, and build cool things.',
      as: 'শিশুসমূহৰ বাবে প্ৰশ্ন সোধা, ধাৰণা অন্বেষণ কৰিব, আৰু নতুন বস্তু নিৰ্মাণ কৰিবলৈ এটা সুৰক্ষিত ঠাই।',
    },
    purpose: {
      en: 'For curious young minds who want to explore science, technology, and creativity in a supportive community.',
      as: 'কৌতূহলী যুৱ মনৰ বাবে যিসকলে সমৰ্থনকাৰী সম্প্ৰদায়ত বিজ্ঞান, প্ৰযুক্তি, আৰু সৃষ্টিশীলতা অন্ৱেষণ কৰিব চাব।',
    },
    features: {
      en: 'Q&A forum, project ideas, kid-friendly tutorials, mentorship, and safe content moderation.',
      as: 'Q&A ফোৰাম, প্ৰকল্প ধাৰণা, শিশু-অনুকূল টিউটৰিয়েল, মেণ্টৰশ্ৱিপ, আৰু সুৰক্ষিত content moderation।',
    },
    future: {
    en: 'Add moderated Q&A forums, project showcase gallery, and mentorship matching with industry experts.',
    as: 'Moderated Q&A forums যোগ কৰক, project showcase gallery, আৰু industry expertsৰ সৈতে mentorship matching।',
  },
    website: '',
    github: '',
    status: 'coming-soon',
    tags: ['Community', 'Education', 'Kids'],
    image: '/assets/projects/curious-kids.png',
  },
];
