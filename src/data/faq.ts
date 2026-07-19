export interface FaqItem {
  question: { en: string; as: string };
  answer: { en: string; as: string };
}

export interface ProjectFaq {
  slug: string;
  items: FaqItem[];
}

export const generalFaq: FaqItem[] = [
  {
    question: {
      en: `What is Axomiya IT Labs?`,
      as: `Axomiya IT Labs কি?`,
    },
    answer: {
      en: `Axomiya IT Labs is an open-source initiative that builds free AI tools, education platforms, and software in Assamese and English. Our mission is to make technology accessible to everyone in Assam, regardless of language or technical background.`,
      as: `Axomiya IT Labs হৈছে এটা মুক্ত-উৎস প্ৰচেষ্টা যিয়ে অসমীয়া আৰু ইংৰাজী ভাষাত বিনামূলীয়া AI সঁজুলি, শিক্ষা প্লেটফৰ্ম আৰু ছফ্টৱেৰ নিৰ্মাণ কৰে। আমাৰ লক্ষ্য হৈছে ভাষা বা কাৰিকৰী জ্ঞানৰ বাধা নোহোৱাকৈ অসমৰ প্ৰতিগৰাকী ব্যক্তিৰ বাবে প্ৰযুক্তি উপলব্ধ কৰোৱা।`,
    },
  },
  {
    question: {
      en: `Are all projects free to use?`,
      as: `সকলো প্ৰকল্প ব্যৱহাৰ কৰিবলৈ বিনামূলীয়া নেকি?`,
    },
    answer: {
      en: `Yes. Every project we build is open source and free to use. You can view the source code, contribute, or deploy your own instance without paying anything.`,
      as: `হয়। আমি নিৰ্মাণ কৰা প্ৰতিটো প্ৰকল্প মুক্ত-উৎস আৰু ব্যৱহাৰৰ বাবে সম্পূৰ্ণ বিনামূলীয়া। আপুনি কোনো ধন ব্যয় নকৰাকৈ ইয়াৰ source code চাব পাৰিব, অৱদান আগবঢ়াব পাৰিব অথবা নিজাকৈ deploy কৰিব পাৰিব।`,
    },
  },
  {
    question: {
      en: `How can I contribute?`,
      as: `মই কেনেকৈ অৱদান আগবঢ়াব পাৰোঁ?`,
    },
    answer: {
      en: `You can contribute by writing code, fixing bugs, improving documentation, translating content, or writing blog posts. Visit our Contribute page or join our Telegram community to get started.`,
      as: `আপুনি code লিখি, bug সমাধান কৰি, documentation উন্নত কৰি, সমল অনুবাদ কৰি বা ব্লগ পোষ্ট লিখি অৱদান আগবঢ়াব পাৰে। আৰম্ভ কৰিবলৈ আমাৰ Contribute পৃষ্ঠালৈ যাওক বা আমাৰ Telegram গোটত যোগদান কৰক।`,
    },
  },
  {
    question: {
      en: `Do I need to know English to use your tools?`,
      as: `আপোনালোকৰ সঁজুলিসমূহ ব্যৱহাৰ কৰিবলৈ মই ইংৰাজী জনাটো প্ৰয়োজনীয় নেকি?`,
    },
    answer: {
      en: `No. We build all our tools and content in both Assamese and English. You can use everything in Assamese if you prefer.`,
      as: `নহয়। আমি আমাৰ সকলো সঁজুলি আৰু সমল অসমীয়া আৰু ইংৰাজী দুয়োটা ভাষাতে নিৰ্মাণ কৰোঁ। আপুনি বিচাৰিলে সকলোবোৰ অসমীয়াতে ব্যৱহাৰ কৰিব পাৰে।`,
    },
  },
  {
    question: {
      en: `Where can I report bugs or request features?`,
      as: `মই bug ৰিপোৰ্ট বা নতুন feature-ৰ বাবে ক'ত অনুৰোধ কৰিব পাৰোঁ?`,
    },
    answer: {
      en: `You can open an issue on the project's GitHub repository. We review all issues regularly and appreciate community feedback.`,
      as: `আপুনি প্ৰকল্পটোৰ GitHub repository-ত এটা issue খুলিব পাৰে। আমি সকলো issue নিয়মীয়াকৈ পৰীক্ষা কৰোঁ আৰু ৰাইজৰ মতামতক আদৰণি জনাওঁ।`,
    },
  },
];

export const projectFaqs: Record<string, FaqItem[]> = {
  whatafter12: [
    {
      question: {
        en: `Is WhatAfter12 free for students?`,
        as: `WhatAfter12 ছাত্ৰ-ছাত্ৰীৰ বাবে বিনামূলীয়া নেকি?`,
      },
      answer: {
        en: `Yes, WhatAfter12 is completely free. There are no hidden charges or premium tiers. All career guidance, college information, and job market insights are available to everyone.`,
        as: `হয়, WhatAfter12 সম্পূৰ্ণ বিনামূলীয়া। ইয়াত কোনো ধৰণৰ লুকাই থকা মাচুল বা premium ব্যৱস্থা নাই। কেৰিয়াৰৰ নিৰ্দেশনা, মহাবিদ্যালয়ৰ তথ্য আৰু চাকৰিৰ বজাৰৰ বিশ্লেষণ সকলোৰে বাবে উপলব্ধ।`,
      },
    },
    {
      question: {
        en: `Does it cover careers in Assam specifically?`,
        as: `ইয়াত বিশেষভাৱে অসমৰ চাকৰিৰ বিষয়ে তথ্য আছেনে?`,
      },
      answer: {
        en: `Yes. While we cover national and global career paths, we have dedicated sections for Assam-specific opportunities, local colleges, and regional job markets.`,
        as: `হয়। আমি ৰাষ্ট্ৰীয় আৰু গোলকীয় কেৰিয়াৰৰ লগতে অসমৰ স্থানীয় সুযোগ-সুবিধা, মহাবিদ্যালয়সমূহ আৰু আঞ্চলিক চাকৰিৰ বজাৰৰ বাবে বিশেষ শিতান ৰাখিছোঁ।`,
      },
    },
    {
      question: {
        en: `Can I use WhatAfter12 for career counseling sessions?`,
        as: `মই কেৰিয়াৰ কাউন্সেলিং ছেছনৰ বাবে WhatAfter12 ব্যৱহাৰ কৰিব পাৰোঁনে?`,
      },
      answer: {
        en: `Absolutely. WhatAfter12 is designed to be used by both students and counselors. The platform provides structured information that can support counseling sessions.`,
        as: `নিশ্চয়। WhatAfter12 ছাত্ৰ-ছাত্ৰী আৰু কাউন্সেলৰ দুয়োপক্ষই ব্যৱহাৰ কৰিব পৰাকৈ সজাই তোলা হৈছে। এই প্লেটফৰ্মত থকা সুসংগঠিত তথ্যই কাউন্সেলিং ছেছনত যথেষ্ট সহায় কৰিব।`,
      },
    },
    {
      question: {
        en: `Is the data on job markets updated regularly?`,
        as: `চাকৰিৰ বজাৰৰ তথ্যসমূহ নিয়মীয়াকৈ আপডেট কৰা হয়নে?`,
      },
      answer: {
        en: `Yes, we update job market data quarterly. We also add new career paths and emerging technologies as they become relevant.`,
        as: `হয়, আমি প্ৰতি তিনিমাহৰ মূৰে মূৰে চাকৰিৰ বজাৰৰ তথ্য আপডেট কৰোঁ। ইয়াৰ উপৰিও সময়ৰ লগে লগে নতুন কেৰিয়াৰ আৰু শেহতীয়া প্ৰযুক্তিৰ তথ্য ইয়াত সংযোগ কৰা হয়।`,
      },
    },
  ],
  gmwfinance: [
    {
      question: {
        en: `Is GWM Finance suitable for complete beginners?`,
        as: `GWM Finance একেবাৰে নতুন শিকাৰুৰ বাবে উপযুক্ত নেকি?`,
      },
      answer: {
        en: `Absolutely. GMW Finance is designed for people who have never studied finance before. We explain everything in simple language with real examples relevant to Assamese families.`,
        as: `নিশ্চয়। যিসকলে আগতে কেতিয়াও বিত্তীয় বিষয় অধ্যয়ন কৰা নাই, তেওঁলোকৰ বাবেই GWM Finance প্ৰস্তুত কৰা হৈছে। আমি অসমীয়া পৰিয়ালৰ লগত মিলি যোৱা বাস্তৱিক উদাহৰণৰ সৈতে সহজ ভাষাত সকলো কথা বুজাই দিওঁ।`,
      },
    },
    {
      question: {
        en: `Does it provide investment advice?`,
        as: `ইয়াত বিনিয়োগৰ পৰামৰ্শ দিয়া হয়নে?`,
      },
      answer: {
        en: `We provide educational content about investing, not personalized financial advice. We help you understand the basics so you can make informed decisions on your own.`,
        as: `আমি বিনিয়োগৰ বিষয়ে কেৱল শিক্ষামূলক সমলহে প্ৰদান কৰোঁ, কোনো ব্যক্তিগত বিত্তীয় পৰামৰ্শ নিদিওঁ। আমি আপোনাক প্ৰাথমিক কথাবোৰ বুজিবলৈ সহায় কৰোঁ যাতে আপুনি নিজেই সঠিক সিদ্ধান্ত ল'ব পাৰে।`,
      },
    },
    {
      question: {
        en: `Does GWM Finance cover crypto and digital payments?`,
        as: `GWM Finance-ত ক্ৰিপ্টো (crypto) আৰু ডিজিটেল পেমেণ্টৰ বিষয়ে আছেনে?`,
      },
      answer: {
        en: `Yes, we have dedicated sections for cryptocurrency basics, digital payment methods, and security best practices. We aim to provide comprehensive financial literacy for the digital age.`,
        as: `হয়, ক্ৰিপ্ট'কাৰেন্সীৰ প্ৰাথমিক জ্ঞান, ডিজিটেল পেমেণ্টৰ পদ্ধতি আৰু সুৰক্ষাৰ নিয়মসমূহৰ বাবে আমাৰ সুকীয়া শিতান আছে। ডিজিটেল যুগৰ বাবে এক সামগ্ৰিক বিত্তীয় সাক্ষৰতা প্ৰদান কৰাই আমাৰ লক্ষ্য।`,
      },
    },
  ],
  krittimat: [
    {
      question: {
        en: `Is Krittimat free to use?`,
        as: `Krittimat ব্যৱহাৰ কৰিবলৈ বিনামূলীয়া নেকি?`,
      },
      answer: {
        en: `Yes. The tool directory and prompt library are free for everyone. We may add premium features in the future, but core access will always remain free.`,
        as: `হয়। সঁজুলিৰ ডাইৰেক্টৰী আৰু prompt লাইব্ৰেৰী সকলোৰে বাবে বিনামূলীয়া। আমি ভৱিষ্যতে premium সুবিধা সংযোগ কৰিব পাৰোঁ, কিন্তু মূল সুবিধাসমূহ সদায় বিনামূলীয়া হৈ থাকিব।`,
      },
    },
    {
      question: {
        en: `Are the AI tools reviewed by the team?`,
        as: `AI সঁজুলিসমূহ আপোনালোকৰ দলৰ দ্বাৰা পৰীক্ষা কৰা হয়নে?`,
      },
      answer: {
        en: `Yes. Every tool listed on Krittimat is tested and reviewed by our team. We verify pricing, features, and actual usability before adding any tool to the directory.`,
        as: `হয়। Krittimat-ত তালিকাভুক্ত প্ৰতিটো সঁজুলি আমাৰ দলে পৰীক্ষা কৰে। ডাইৰেক্টৰীত কোনো সঁজুলি যোগ কৰাৰ আগতে আমি ইয়াৰ মূল্য, সুবিধাসমূহ আৰু ব্যৱহাৰযোগ্যতা ভালদৰে পৰীক্ষা কৰোঁ।`,
      },
    },
    {
      question: {
        en: `Can I submit a new AI tool to Krittimat?`,
        as: `মই Krittimat-লৈ নতুন AI সঁজুলি জমা দিব পাৰোঁনে?`,
      },
      answer: {
        en: `Yes! We welcome community submissions. You can suggest a tool by opening an issue on our GitHub repository with the tool name, description, and category.`,
        as: `হয়! ৰাইজৰ ফালৰ পৰা অহা প্ৰস্তাৱক আমি আদৰণি জনাওঁ। আপুনি আমাৰ GitHub repository-ত সঁজুলিটোৰ নাম, বিৱৰণ আৰু শ্ৰেণী উল্লেখ কৰি এটা issue খোলাৰ জৰিয়তে প্ৰস্তাৱ আগবঢ়াব পাৰে।`,
      },
    },
    {
      question: {
        en: `Does Krittimat support regional languages?`,
        as: `Krittimat-এ আঞ্চলিক ভাষাসমূহ সমৰ্থন কৰেনে?`,
      },
      answer: {
        en: `Currently, Krittimat is available in English and Assamese. We plan to add more regional languages based on community demand.`,
        as: `বৰ্তমান Krittimat ইংৰাজী আৰু অসমীয়া ভাষাত উপলব্ধ। ৰাইজৰ অনুৰোধৰ ভিত্তিত আমি ভৱিষ্যতে আন আঞ্চলিক ভাষাসমূহো সংযোগ কৰাৰ পৰিকল্পনা কৰিছোঁ।`,
      },
    },
  ],
  vibecheatcode: [
    {
      question: {
        en: `What technologies does VibeCheatCode cover?`,
        as: `VibeCheatCode-ত কি কি প্ৰযুক্তি সামৰি লোৱা হৈছে?`,
      },
      answer: {
        en: `VibeCheatCode covers modern deployment platforms including Vercel, AWS, Netlify, and Azure. We also cover local development setups, debugging tools, and CI/CD pipelines.`,
        as: `VibeCheatCode-ত Vercel, AWS, Netlify আৰু Azure-ৰ দৰে আধুনিক deployment প্লেটফৰ্মসমূহ সামৰি লোৱা হৈছে। ইয়াৰ উপৰিও আমি local development, debugging আৰু CI/CD pipeline-ৰ বিষয়েও আলোচনা কৰোঁ।`,
      },
    },
    {
      question: {
        en: `Is it only for AI projects?`,
        as: `এইটো কেৱল AI প্ৰকল্পৰ বাবে নেকি?`,
      },
      answer: {
        en: `While the name says VibeCheatCode, the guides apply to any web project. The deployment and debugging principles are the same whether you are building an AI app or a traditional website.`,
        as: `যদিও নামটো VibeCheatCode, ইয়াৰ নিৰ্দেশনাসমূহ যিকোনো ৱেব প্ৰকল্পতে প্ৰযোজ্য। আপুনি AI এপ্লিকেচন বনাওক বা সাধাৰণ ৱেবছাইট বনাওক, deployment আৰু debugging-ৰ মূল নীতিসমূহ একেই থাকে।`,
      },
    },
    {
      question: {
        en: `Does VibeCheatCode provide code templates?`,
        as: `VibeCheatCode-এ code টেমপ্লেট প্ৰদান কৰেনে?`,
      },
      answer: {
        en: `Yes, we provide ready-to-use code templates for common deployment scenarios. These templates are fully commented and can be customized for your specific project needs.`,
        as: `হয়, সাধাৰণ deployment-ৰ বাবে আমি ব্যৱহাৰোপযোগী code টেমপ্লেট প্ৰদান কৰোঁ। এই টেমপ্লেটসমূহত প্ৰয়োজনীয় মন্তব্য (comments) দিয়া থাকে আৰু আপুনি নিজৰ প্ৰকল্পৰ প্ৰয়োজন অনুসৰি সলনি কৰি ল'ব পাৰে।`,
      },
    },
    {
      question: {
        en: `Can beginners follow VibeCheatCode guides?`,
        as: `নতুন শিকাৰুৱে VibeCheatCode-ৰ নিৰ্দেশনাসমূহ অনুকৰণ কৰিব পাৰিবনে?`,
      },
      answer: {
        en: `Yes. Our guides start from the basics and gradually move to advanced topics. We assume no prior deployment experience and explain every step in detail.`,
        as: `হয়। আমাৰ নিৰ্দেশনাসমূহ একেবাৰে প্ৰাথমিক পৰ্যায়ৰ পৰা আৰম্ভ হৈ লাহে লাহে উচ্চ পৰ্যায়লৈ আগবাঢ়ে। আমি ধৰি লওঁ যে আপোনাৰ deployment-ৰ কোনো পূৰ্ব অভিজ্ঞতা নাই আৰু প্ৰতিটো পদক্ষেপ বিতংভাৱে বুজাই দিওঁ।`,
      },
    },
  ],
  buycryptowisely: [
    {
      question: {
        en: `Is BuyCryptoWisely suitable for complete beginners?`,
        as: `BuyCryptoWisely একেবাৰে নতুন শিকাৰুৰ বাবে উপযুক্ত নেকি?`,
      },
      answer: {
        en: `Yes. BuyCryptoWisely is designed for people who have never traded crypto before. We explain everything from scratch — from what Bitcoin is to how to read trading charts.`,
        as: `হয়। যিসকলে আগতে কেতিয়াও ক্ৰিপ্ট'ত (crypto) ট্ৰেডিং কৰা নাই, তেওঁলোকৰ বাবেই BuyCryptoWisely প্ৰস্তুত কৰা হৈছে। বিটকয়েন (Bitcoin) কিহৰ পৰা আৰম্ভ কৰি ট্ৰেডিং চাৰ্ট কেনেকৈ পঢ়িব লাগে, সেই সকলোবোৰ আমি সহজভাৱে বুজাই দিওঁ।`,
      },
    },
    {
      question: {
        en: `Does it provide financial advice?`,
        as: `ইয়াত বিত্তীয় পৰামৰ্শ দিয়া হয়নে?`,
      },
      answer: {
        en: `No. BuyCryptoWisely provides educational content only. We do not offer personalized investment advice. Always do your own research before investing.`,
        as: `নহয়। BuyCryptoWisely-এ কেৱল শিক্ষামূলক সমলহে প্ৰদান কৰে। আমি ব্যক্তিগতভাৱে বিনিয়োগৰ পৰামৰ্শ নিদিওঁ। বিনিয়োগ কৰাৰ আগতে সদায় নিজাববীয়াকৈ গৱেষণা কৰি ল'ব।`,
      },
    },
    {
      question: {
        en: `Are memecoins covered in detail?`,
        as: `ইয়াত মিমকয়েনৰ (memecoins) বিষয়ে বিতংভাৱে আলোচনা কৰা হৈছেনে?`,
      },
      answer: {
        en: `Yes, we have a dedicated section on memecoins that explains what they are, the risks involved, and how to evaluate them. We emphasize caution and research over speculation.`,
        as: `হয়, মিমকয়েনসমূহৰ বাবে আমাৰ এটা সুকীয়া শিতান আছে য'ত এইবোৰ কি, ইয়াত কি কি আশংকা (risks) আছে আৰু এইবোৰ কেনেকৈ মূল্যায়ন কৰিব লাগে সেয়া বুজোৱা হৈছে। আমি অনুমানৰ ওপৰত নিৰ্ভৰ কৰাতকৈ সাৱধানতা আৰু গৱেষণাত অধিক গুৰুত্ব দিওঁ।`,
      },
    },
  ],
  'ai-for-21st-century-kids': [
    {
      question: {
        en: `Is AI For 21st Century Kids safe for children?`,
        as: `AI For 21st Century Kids ল'ৰা-ছোৱালীৰ বাবে সুৰক্ষিত নেকি?`,
      },
      answer: {
        en: `Yes, safety is our top priority. All content is age-appropriate, moderated, and designed to teach kids about AI in a safe, supervised environment. We never collect personal information from children.`,
        as: `হয়, সুৰক্ষাই আমাৰ মূল অগ্ৰাধিকাৰ। সকলো সমল বয়সৰ উপযোগী, নিৰীক্ষণ কৰা আৰু ল'ৰা-ছোৱালীক এটা সুৰক্ষিত পৰিৱেশত AI-ৰ বিষয়ে শিকাবলৈ প্ৰস্তুত কৰা হৈছে। আমি কেতিয়াও শিশুৰ পৰা ব্যক্তিগত তথ্য সংগ্ৰহ নকৰোঁ।`,
      },
    },
    {
      question: {
        en: `What age group is this platform designed for?`,
        as: `এই প্লেটফৰ্ম কোনটো বয়সৰ গোটৰ বাবে প্ৰস্তুত কৰা হৈছে?`,
      },
      answer: {
        en: `The platform is designed for kids aged 8-16, with content tailored to different age groups. Parents and teachers can also use it as a teaching resource.`,
        as: `এই প্লেটফৰ্ম ৮-ৰ পৰা ১৬ বছৰ বয়সৰ ল'ৰা-ছোৱালীৰ বাবে প্ৰস্তুত কৰা হৈছে, য'ত বেলেগ বেলেগ বয়সৰ গোটৰ বাবে উপযুক্ত সমল আছে। পিতৃ-মাতৃ আৰু শিক্ষকসকলেও ইয়াক শিক্ষণৰ এক আহিলা হিচাপে ব্যৱহাৰ কৰিব পাৰে।`,
      },
    },
    {
      question: {
        en: `Does it cover AI safety and ethics?`,
        as: `ইয়াত AI-ৰ সুৰক্ষা আৰু নৈতিকতাৰ বিষয়ে সামৰি লোৱা হৈছেনে?`,
      },
      answer: {
        en: `Yes, we have dedicated modules on AI safety, digital citizenship, and ethical AI use. We believe it is important for kids to understand both the benefits and responsibilities of using AI.`,
        as: `হয়, AI-ৰ সুৰক্ষা, ডিজিটেল নাগৰিকত্ব আৰু AI-ৰ নৈতিক ব্যৱহাৰৰ ওপৰত আমাৰ সুকীয়া মডিউল আছে। আমি বিশ্বাস কৰোঁ যে ল'ৰা-ছোৱালীয়ে AI ব্যৱহাৰৰ সুবিধা আৰু দায়িত্ব দুয়োটা বুজি পোৱাটো অতি প্ৰয়োজনীয়।`,
      },
    },
  ],
  'earn-while-learn': [
    {
      question: {
        en: `Is EarnWhileLearn completely free?`,
        as: `EarnWhileLearn সম্পূৰ্ণ বিনামূলীয়া নেকি?`,
      },
      answer: {
        en: `Yes. EarnWhileLearn is 100% free. We believe financial education should be accessible to everyone, regardless of their economic background.`,
        as: `হয়। EarnWhileLearn ১০০% বিনামূলীয়া। আমি বিশ্বাস কৰোঁ যে অৰ্থনৈতিক অৱস্থা যিয়েই নহওক কিয়, বিত্তীয় শিক্ষা সকলোৰে বাবে উপলব্ধ হোৱা উচিত।`,
      },
    },
    {
      question: {
        en: `What kind of earning methods are covered?`,
        as: `ইয়াত কেনে ধৰণৰ উপাৰ্জনৰ পদ্ধতি সামৰি লোৱা হৈছে?`,
      },
      answer: {
        en: `We cover a wide range of methods including freelancing, content creation, online tutoring, selling digital products, affiliate marketing, and passive income streams.`,
        as: `আমি ফ্ৰীলেন্সিং (freelancing), কণ্টেণ্ট ক্ৰিয়েচন (content creation), অনলাইন টিউচন, ডিজিটেল প্ৰডাক্ট বিক্ৰী, এফিলিয়েট মাৰ্কেটিং (affiliate marketing) আৰু পেছিভ ইনকামৰ (passive income) দৰে বিভিন্ন পদ্ধতি সামৰি লৈছোঁ।`,
      },
    },
    {
      question: {
        en: `Is the income potential guaranteed?`,
        as: `ইয়াত উপাৰ্জনৰ কোনো নিশ্চয়তা আছেনে?`,
      },
      answer: {
        en: `No. We provide information and guidance on various earning methods, but actual income depends on individual effort, skills, and market conditions. We never guarantee specific earnings.`,
        as: `নাই। আমি উপাৰ্জনৰ বিভিন্ন পদ্ধতিৰ বিষয়ে তথ্য আৰু নিৰ্দেশনাহে প্ৰদান কৰোঁ, কিন্তু প্ৰকৃত উপাৰ্জন আপোনাৰ নিজা প্ৰচেষ্টা, দক্ষতা আৰু বজাৰৰ অৱস্থাৰ ওপৰত নিৰ্ভৰ কৰে। আমি কেতিয়াও কোনো নিৰ্দিষ্ট উপাৰ্জনৰ নিশ্চয়তা নিদিওঁ।`,
      },
    },
  ],
  'futureready-kids-lab': [
    {
      question: {
        en: `What age group is FutureReady Kids Lab for?`,
        as: `FutureReady Kids Lab কোনটো বয়সৰ গোটৰ বাবে?`,
      },
      answer: {
        en: `FutureReady Kids Lab is designed for children aged 6-14. We have different modules and activities tailored to each age group to ensure age-appropriate learning.`,
        as: `FutureReady Kids Lab ৬-ৰ পৰা ১৪ বছৰ বয়সৰ শিশুৰ বাবে প্ৰস্তুত কৰা হৈছে। বয়স অনুযায়ী সঠিক শিক্ষা নিশ্চিত কৰিবলৈ আমাৰ প্ৰতিটো বয়সৰ গোটৰ বাবে বেলেগ বেলেগ মডিউল আৰু কাৰ্যসূচী আছে।`,
      },
    },
    {
      question: {
        en: `Do parents need to be involved?`,
        as: `ইয়াত পিতৃ-মাতৃ জড়িত থকাটো প্ৰয়োজনীয় নেকি?`,
      },
      answer: {
        en: `While kids can explore independently, we encourage parent involvement. We provide parent guides to help adults understand what their kids are learning and how to support them.`,
        as: `যদিও ল'ৰা-ছোৱালীয়ে ইয়াক স্বাধীনভাৱে ব্যৱহাৰ কৰিব পাৰে, আমি পিতৃ-মাতৃৰ অংশগ্ৰহণক উৎসাহিত কৰোঁ। সন্তানক কেনেকৈ সহায় কৰিব পাৰে আৰু তেওঁলোকে কি শিকিছে সেইয়া বুজিবলৈ আমি অভিভাৱকৰ বাবে নিৰ্দেশনা প্ৰদান কৰোঁ।`,
      },
    },
    {
      question: {
        en: `What materials or kits are required?`,
        as: `ইয়াত কি কি সামগ্ৰী বা কিটৰ (kits) প্ৰয়োজন?`,
      },
      answer: {
        en: `Most activities use everyday household items. For specialized activities like robotics, we provide a list of affordable kits that can be purchased online or at local electronics stores.`,
        as: `বেছিভাগ কাৰ্যসূচীতে ঘৰুৱা ব্যৱহাৰ্য সামগ্ৰী ব্যৱহাৰ কৰা হয়। ৰবটিক্সৰ (robotics) দৰে বিশেষ কাৰ্যসূচীৰ বাবে, আমি কিছুমান সুলভ মূল্যৰ কিটৰ তালিকা প্ৰদান কৰোঁ যিবোৰ অনলাইন বা স্থানীয় ইলেক্ট্ৰনিক্স দোকানত কিনিবলৈ পোৱা যায়।`,
      },
    },
  ],
  'curious-kids': [
    {
      question: {
        en: `Is Curious Kids moderated for safety?`,
        as: `Curious Kids-ত সুৰক্ষাৰ বাবে নিৰীক্ষণ কৰা হয়নে?`,
      },
      answer: {
        en: `Yes, all content and interactions on Curious Kids are moderated by our team. We use a combination of automated filters and human review to ensure a safe environment.`,
        as: `হয়, Curious Kids-ৰ সকলো সমল আৰু বাৰ্তালাপ আমাৰ দলৰ দ্বাৰা নিৰীক্ষণ কৰা হয়। এক সুৰক্ষিত পৰিৱেশ নিশ্চিত কৰিবলৈ আমি স্বয়ংক্ৰিয় ফিল্টাৰ (automated filters) আৰু মানৱ পৰ্যালোচনা দুয়োটাই ব্যৱহাৰ কৰোঁ।`,
      },
    },
    {
      question: {
        en: `Can my child ask any question?`,
        as: `মোৰ সন্তানে যিকোনো প্ৰশ্ন সুধিব পাৰিবনে?`,
      },
      answer: {
        en: `Yes, kids can ask any question in the Q&A forum. Our team and community mentors provide age-appropriate answers. We also encourage kids to explore and find answers together.`,
        as: `হয়, ল'ৰা-ছোৱালীয়ে Q&A ফ'ৰামত যিকোনো প্ৰশ্ন সুধিব পাৰে। আমাৰ দল আৰু সম্প্ৰদায়ৰ মেণ্টৰসকলে বয়সৰ লগত খাপ খোৱা উত্তৰ প্ৰদান কৰে। আমি শিশুসকলক একেলগে মিলি উত্তৰ বিচাৰিবলৈও উৎসাহিত কৰোঁ।`,
      },
    },
    {
      question: {
        en: `Is there a cost to join Curious Kids?`,
        as: `Curious Kids-ত যোগদান কৰিবলৈ কোনো মাচুল আছেনে?`,
      },
      answer: {
        en: `No, Curious Kids is completely free. We believe every curious child deserves access to quality learning resources, regardless of their family's financial situation.`,
        as: `নাই, Curious Kids সম্পূৰ্ণ বিনামূলীয়া। আমি বিশ্বাস কৰোঁ যে পৰিয়ালৰ আৰ্থিক অৱস্থা যিয়েই নহওক কিয়, প্ৰতিগৰাকী অনুসন্ধিৎসু শিশুৱে উন্নত মানৰ শিক্ষণ সমল লাভ কৰা উচিত।`,
      },
    },
    {
      question: {
        en: `How are mentors selected?`,
        as: `মেণ্টৰসকলক (mentors) কেনেকৈ বাছনি কৰা হয়?`,
      },
      answer: {
        en: `Mentors are selected based on their expertise, experience working with children, and commitment to creating a positive learning environment. All mentors undergo background checks.`,
        as: `মেণ্টৰসকলক তেওঁলোকৰ দক্ষতা, শিশুৰ সৈতে কাম কৰাৰ অভিজ্ঞতা আৰু এক ইতিবাচক শিক্ষণ পৰিৱেশ সৃষ্টি কৰাৰ প্ৰতি থকা দায়বদ্ধতাৰ ভিত্তিত বাছনি কৰা হয়। সকলো মেণ্টৰৰে পৃষ্ঠভূমি (background) পৰীক্ষা কৰা হয়।`,
      },
    },
  ],
};
