const companies = [
  {
    name: "Google",
    salary: "$148,000",
    description:
      "A global technology leader specializing in internet-related services and products.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/www.google.com/",
    location: "Mountain View, CA, USA",
    foundingDate: "1998",
    employeeSize: "182,502",
    tags: ["Search", "Advertising", "Cloud", "AI"],
    linkedin: "https://www.linkedin.com/company/google/",
    website: "https://www.google.com/",
    revenue: "$307B (2023)",
  },
  {
    name: "Amazon",
    salary: "$137,000",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, and AI.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/www.amazon.com/",
    location: "Seattle, WA, USA",
    foundingDate: "1994",
    employeeSize: "1,525,000",
    tags: ["E-commerce", "Cloud", "Logistics", "AI"],
    linkedin: "https://www.linkedin.com/company/amazon/",
    website: "https://www.amazon.com/",
    revenue: "$574.8B (2023)",
  },
  {
    name: "Microsoft",
    salary: "$125,000",
    description:
      "A leading software company known for Windows, Office, and cloud services.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/www.microsoft.com/",
    location: "Redmond, WA, USA",
    foundingDate: "1975",
    employeeSize: "221,000",
    tags: ["Software", "Cloud", "Productivity", "AI"],
    linkedin: "https://www.linkedin.com/company/microsoft/",
    website: "https://www.microsoft.com/",
    revenue: "$211.9B (2023)",
  },
  {
    name: "Meta",
    salary: "$147,000",
    description:
      "A social technology company building products to connect people.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/about.meta.com/",
    location: "Menlo Park, CA, USA",
    foundingDate: "2004",
    employeeSize: "67,317",
    tags: ["Social Media", "VR", "AI", "Advertising"],
    linkedin: "https://www.linkedin.com/company/meta/",
    website: "https://about.meta.com/",
    revenue: "$134.9B (2023)",
  },
  {
    name: "Apple",
    salary: "$133,000",
    description:
      "A global leader in consumer electronics, software, and digital services.",
    type: "Enterprise",
    logo: "/companies/apple.png",
    location: "Cupertino, CA, USA",
    foundingDate: "1976",
    employeeSize: "161,000",
    tags: ["Consumer Electronics", "Software", "Retail", "AI"],
    linkedin: "https://www.linkedin.com/company/apple/",
    website: "https://www.apple.com/",
    revenue: "$383.3B (2023)",
  },
  {
    name: "NVIDIA",
    salary: "$146,000",
    description:
      "A leader in graphics processing, AI hardware, and accelerated computing.",
    type: "Enterprise",
    logo: "/companies/nvidia.png",
    location: "Santa Clara, CA, USA",
    foundingDate: "1993",
    employeeSize: "29,600",
    tags: ["Semiconductors", "AI", "Graphics", "Hardware"],
    linkedin: "https://www.linkedin.com/company/nvidia/",
    website: "https://www.nvidia.com/",
    revenue: "$60.9B (2023)",
  },
  {
    name: "Salesforce",
    salary: "$140,000",
    description:
      "A global cloud computing company specializing in CRM solutions.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/www.salesforce.com/",
    location: "San Francisco, CA, USA",
    foundingDate: "1999",
    employeeSize: "79,390",
    tags: ["Cloud", "CRM", "Software", "AI"],
    linkedin: "https://www.linkedin.com/company/salesforce/",
    website: "https://www.salesforce.com/",
    revenue: "$34.9B (2023)",
  },
  {
    name: "Netflix",
    salary: "$216,000",
    description:
      "Leading streaming service with a vast library of movies and TV shows.",
    type: "Entertainment",
    logo: "https://logo.clearbit.com/www.netflix.com/",
    location: "Los Gatos, CA, USA",
    foundingDate: "1997",
    employeeSize: "13,000",
    tags: ["Streaming", "Entertainment", "Media"],
    linkedin: "https://www.linkedin.com/company/netflix/",
    website: "https://www.netflix.com/",
    revenue: "$32B (2023)",
  },
  {
    name: "Intel",
    salary: "$104,000",
    description:
      "Global leader in semiconductor chip manufacturing and technology.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/www.intel.com/",
    location: "Santa Clara, CA, USA",
    foundingDate: "1968",
    employeeSize: "131,900",
    tags: ["Semiconductors", "Hardware", "Technology"],
    linkedin: "https://www.linkedin.com/company/intel/",
    website: "https://www.intel.com/",
    revenue: "$54.2B (2023)",
  },
  {
    name: "IBM",
    salary: "$115,000",
    description:
      "Multinational technology corporation with expertise in cloud, AI, and consulting.",
    type: "Enterprise",
    logo: "/companies/ibm.png",
    location: "Armonk, NY, USA",
    foundingDate: "1911",
    employeeSize: "303,100",
    tags: ["Consulting", "Software", "AI", "Cloud"],
    linkedin: "https://www.linkedin.com/company/ibm/",
    website: "https://www.ibm.com/",
    revenue: "$60.5B (2023)",
  },
  {
    name: "OpenAI",
    salary: "$163,000",
    description:
      "Research lab advancing safe and beneficial artificial general intelligence.",
    type: "Private",
    logo: "https://logo.clearbit.com/openai.com",
    location: "San Francisco, CA, USA",
    foundingDate: "December 8, 2015",
    employeeSize: "≈2,000",
    tags: ["AI", "ML", "NLP", "Research"],
    linkedin: "https://www.linkedin.com/company/openai/",
    website: "https://openai.com/",
    revenue: "$3.7 B (2024 est.)",
  },
  {
    name: "Anthropic",
    salary: "N/A",
    description: "Builds helpful and safe AI tools under the Claude AI family.",
    type: "Private",
    logo: "https://logo.clearbit.com/anthropic.com",
    location: "San Francisco, CA, USA",
    foundingDate: "2021",
    employeeSize: "≈500",
    tags: ["AI Safety", "NLP", "Research"],
    linkedin: "https://www.linkedin.com/company/anthropicai/",
    website: "https://www.anthropic.com/",
    revenue: "$850M (2024)",
  },
  {
    name: "Cohere",
    salary: "N/A",
    description:
      "Provides secure, scalable NLP and foundation models for enterprises.",
    type: "Private",
    logo: "https://logo.clearbit.com/cohere.ai",
    location: "Toronto, ON, Canada",
    foundingDate: "2019",
    employeeSize: "201–500",
    tags: ["NLP", "APIs", "ML"],
    linkedin: "https://www.linkedin.com/company/cohere-ai/",
    website: "https://cohere.ai/",
    revenue: "$100,000",
  },
  {
    name: "Hugging Face",
    salary: "$130,000",
    description:
      "Open-source AI community and platform for sharing models and datasets.",
    type: "Private",
    logo: "https://logo.clearbit.com/huggingface.co",
    location: "New York, NY, USA",
    foundingDate: "2016",
    employeeSize: "170 (2023)",
    tags: ["Open Source", "NLP", "Community"],
    linkedin: "https://www.linkedin.com/company/huggingface/",
    website: "https://huggingface.co/",
    revenue: "$15M (2022)",
  },
  {
    name: "Five Rings",
    salary: "$140,000", // average entry-level quant SWE :contentReference[oaicite:7]{index=7}
    description:
      "Five Rings is a quantitative trading firm specializing in systematic strategies and technology.", // from firm overview :contentReference[oaicite:8]{index=8}
    type: "Quant Firm",
    logo: "https://logo.clearbit.com/fiverings.com", // Clearbit :contentReference[oaicite:9]{index=9}
    location: "New York, NY, USA", // headquarters :contentReference[oaicite:10]{index=10}
    foundingDate: "2017", // company history :contentReference[oaicite:11]{index=11}
    employeeSize: "100–200", // LinkedIn :contentReference[oaicite:12]{index=12}
    tags: ["Trading", "Quantitative", "Technology"],
    linkedin: "https://www.linkedin.com/company/five-rings-capital/", // official
    website: "https://fiveringscap.com/",
    revenue: "N/A",
  },
  {
    name: "Figma",
    salary: "$135,000", // Glassdoor entry-level SWE :contentReference[oaicite:13]{index=13}
    description:
      "Figma is a browser-based design tool for UI/UX collaboration and prototyping.", // from About page :contentReference[oaicite:14]{index=14}
    type: "Unicorn",
    logo: "https://logo.clearbit.com/figma.com", // Clearbit :contentReference[oaicite:15]{index=15}
    location: "San Francisco, CA, USA", // HQ :contentReference[oaicite:16]{index=16}
    foundingDate: "2012", // company history :contentReference[oaicite:17]{index=17}
    employeeSize: "1,000–5,000", // LinkedIn :contentReference[oaicite:18]{index=18}
    tags: ["Design", "Collaboration", "UI/UX"],
    linkedin: "https://www.linkedin.com/company/figma/",
    website: "https://figma.com/",
    revenue: "$400M (2023)", // public estimate :contentReference[oaicite:19]{index=19}
  },
  {
    name: "Airbnb",
    salary: "$130,000", // Levels.fyi L3 SWE :contentReference[oaicite:20]{index=20}
    description:
      "Airbnb operates an online marketplace for lodging, tourism experiences, and residential rentals.", // corporate site :contentReference[oaicite:21]{index=21}
    type: "Unicorn",
    logo: "https://logo.clearbit.com/airbnb.com", // Clearbit :contentReference[oaicite:22]{index=22}
    location: "San Francisco, CA, USA", // HQ :contentReference[oaicite:23]{index=23}
    foundingDate: "2008", // about page :contentReference[oaicite:24]{index=24}
    employeeSize: "6,000–10,000", // LinkedIn :contentReference[oaicite:25]{index=25}
    tags: ["Marketplace", "Travel", "Hospitality"],
    linkedin: "https://www.linkedin.com/company/airbnb/",
    website: "https://airbnb.com/",
    revenue: "$8.4B (2023)", // latest filing :contentReference[oaicite:26]{index=26}
  },
  {
    name: "Jane Street",
    salary: "$120,000", // entry-level quant SWE :contentReference[oaicite:34]{index=34}
    description:
      "Jane Street is a global trading firm and liquidity provider operating in financial markets.", // firm overview :contentReference[oaicite:35]{index=35}
    type: "Quant Firm",
    logo: "https://logo.clearbit.com/janestreet.com", // Clearbit :contentReference[oaicite:36]{index=36}
    location: "New York, NY, USA", // HQ :contentReference[oaicite:37]{index=37}
    foundingDate: "2000", // history :contentReference[oaicite:38]{index=38}
    employeeSize: "1,000–5,000", // LinkedIn :contentReference[oaicite:39]{index=39}
    tags: ["Trading", "Quantitative", "Finance"],
    linkedin: "https://www.linkedin.com/company/jane-street-capital/",
    website: "https://janestreet.com/",
    revenue: "N/A",
  },
  {
    name: "Scale AI",
    salary: "$140,000", // Glassdoor entry-level SWE :contentReference[oaicite:40]{index=40}
    description:
      "Scale AI builds data labeling and management tools for AI development.", // company site :contentReference[oaicite:41]{index=41}
    type: "AI Startup",
    logo: "https://logo.clearbit.com/scale.com", // Clearbit :contentReference[oaicite:42]{index=42}
    location: "San Francisco, CA, USA", // HQ :contentReference[oaicite:43]{index=43}
    foundingDate: "2016", // about page :contentReference[oaicite:44]{index=44}
    employeeSize: "1,000–2,000", // LinkedIn :contentReference[oaicite:45]{index=45}
    tags: ["Data Labeling", "AI", "Automation"],
    linkedin: "https://www.linkedin.com/company/scale-ai/",
    website: "https://scale.com/",
    revenue: "$300M (2023)", // estimate :contentReference[oaicite:46]{index=46}
  },
  {
    name: "Stripe",
    salary: "$145,000", // Levels.fyi L3 SWE :contentReference[oaicite:47]{index=47}
    description:
      "Stripe provides payment processing infrastructure and financial tools for businesses.", // Stripe site :contentReference[oaicite:48]{index=48}
    type: "Unicorn",
    logo: "https://logo.clearbit.com/stripe.com", // Clearbit :contentReference[oaicite:49]{index=49}
    location: "San Francisco, CA, USA", // HQ :contentReference[oaicite:50]{index=50}
    foundingDate: "2010", // about :contentReference[oaicite:51]{index=51}
    employeeSize: "4,000–8,000", // LinkedIn :contentReference[oaicite:52]{index=52}
    tags: ["Payments", "Fintech", "API"],
    linkedin: "https://www.linkedin.com/company/stripe/",
    website: "https://stripe.com/",
    revenue: "$25B (2023)", // public estimate :contentReference[oaicite:53]{index=53}
  },
  {
    name: "Notion",
    salary: "$130,000", // Glassdoor entry-level SWE :contentReference[oaicite:54]{index=54}
    description:
      "Notion is an all-in-one workspace for note-taking, project management, and collaboration.", // from site :contentReference[oaicite:55]{index=55}
    type: "Unicorn",
    logo: "https://logo.clearbit.com/notion.so", // Clearbit :contentReference[oaicite:56]{index=56}
    location: "San Francisco, CA, USA", // HQ :contentReference[oaicite:57]{index=57}
    foundingDate: "2013", // history :contentReference[oaicite:58]{index=58}
    employeeSize: "500–1,000", // LinkedIn :contentReference[oaicite:59]{index=59}
    tags: ["Productivity", "Collaboration", "Workspace"],
    linkedin: "https://www.linkedin.com/company/notionhq/",
    website: "https://notion.so/",
    revenue: "$80M (2023)", // estimate :contentReference[oaicite:60]{index=60}
  },

  {
    name: "Slack",
    salary: "$176K", // Associate Software Engineer entry-level compensation :contentReference[oaicite:0]{index=0}
    description:
      "Slack is a cloud-based team communication platform developed by Slack Technologies, which has been owned by Salesforce since 2020.", // :contentReference[oaicite:1]{index=1}
    type: "Enterprise",
    logo: "https://logo.clearbit.com/slack.com",
    location: "Salesforce Tower, San Francisco, California, U.S.", // :contentReference[oaicite:2]{index=2}
    foundingDate: "2009", // :contentReference[oaicite:3]{index=3}
    employeeSize: "2,545 (January 2021)", // :contentReference[oaicite:4]{index=4}
    tags: ["Collaboration", "Messaging", "Productivity"],
    linkedin: "https://www.linkedin.com/company/slack/",
    website: "https://slack.com", // :contentReference[oaicite:5]{index=5}
    revenue: "US$903 million (2020)", // :contentReference[oaicite:6]{index=6}
  },
  {
    name: "Dropbox",
    salary: "$177K", // IC1 entry-level Software Engineer compensation :contentReference[oaicite:7]{index=7}
    description:
      "Dropbox is a file hosting service offering cloud storage, file synchronization, personal cloud, and client software.", // :contentReference[oaicite:8]{index=8}
    type: "Enterprise",
    logo: "https://logo.clearbit.com/dropbox.com",
    location: "San Francisco, California, U.S.", // :contentReference[oaicite:9]{index=9}
    foundingDate: "May 2007", // :contentReference[oaicite:10]{index=10}
    employeeSize: "2,204 (2024)", // :contentReference[oaicite:11]{index=11}
    tags: ["Cloud storage", "File hosting", "Client software"],
    linkedin: "https://www.linkedin.com/company/dropbox/",
    website: "https://www.dropbox.com", // :contentReference[oaicite:12]{index=12}
    revenue: "US$2.55 billion (2024)", // :contentReference[oaicite:13]{index=13}
  },
  {
    name: "Palantir Technologies",
    salary: "$145K", // entry-level Software Engineer compensation (minimum) :contentReference[oaicite:14]{index=14}
    description:
      "Palantir Technologies Inc. is an American publicly-traded company specializing in software platforms for big data analytics.", // :contentReference[oaicite:15]{index=15}
    type: "Enterprise",
    logo: "https://logo.clearbit.com/palantir.com",
    location: "Denver, Colorado, U.S.", // :contentReference[oaicite:16]{index=16}
    foundingDate: "2003", // :contentReference[oaicite:17]{index=17}
    employeeSize: "3,936 (2024)", // :contentReference[oaicite:18]{index=18}
    tags: ["Big Data", "Analytics", "Software"],
    linkedin: "https://www.linkedin.com/company/palantir-technologies/", // :contentReference[oaicite:19]{index=19}
    website: "https://www.palantir.com", // :contentReference[oaicite:20]{index=20}
    revenue: "US$2.87 billion (2024)", // :contentReference[oaicite:21]{index=21}
  },
  {
    name: "Robinhood",
    salary: "$427,438", // Software Engineer median total compensation :contentReference[oaicite:22]{index=22}
    description:
      "Robinhood Markets, Inc. is an American financial services company based in Menlo Park, California, providing an electronic trading platform for stocks, ETFs, options, futures, and cryptocurrency.", // :contentReference[oaicite:23]{index=23}
    type: "Enterprise",
    logo: "https://logo.clearbit.com/robinhood.com",
    location: "Menlo Park, California, U.S.", // :contentReference[oaicite:24]{index=24}
    foundingDate: "April 18, 2013", // :contentReference[oaicite:25]{index=25}
    employeeSize: "2,300 (2024)", // :contentReference[oaicite:26]{index=26}
    tags: ["Financial services", "Electronic trading", "Fintech"],
    linkedin: "https://www.linkedin.com/company/robinhood/", // :contentReference[oaicite:27]{index=27}
    website: "https://robinhood.com", // :contentReference[oaicite:28]{index=28}
    revenue: "US$2.95 billion (2024)", // :contentReference[oaicite:29]{index=29}
  },
  {
    name: "Adobe",
    salary: "$174K", // entry-level Software Engineer (P10) compensation :contentReference[oaicite:30]{index=30}
    description:
      "Adobe Inc. is an American computer software company based in San Jose, California, known for products like Photoshop, Acrobat, Illustrator, and Creative Cloud.", // :contentReference[oaicite:31]{index=31}
    type: "Enterprise",
    logo: "https://logo.clearbit.com/adobe.com",
    location: "San Jose, California, U.S.", // :contentReference[oaicite:32]{index=32}
    foundingDate: "December 1982", // :contentReference[oaicite:33]{index=33}
    employeeSize: "30,709 (2024)", // :contentReference[oaicite:34]{index=34}
    tags: ["Creative software", "Digital media", "SaaS"],
    linkedin: "https://www.linkedin.com/company/adobe/", // :contentReference[oaicite:35]{index=35}
    website: "https://www.adobe.com", // :contentReference[oaicite:36]{index=36}
    revenue: "US$21.51 billion (2024)", // :contentReference[oaicite:37]{index=37}
  },
  {
    name: "Discord",
    salary: "$154,000",
    description:
      "Leading communication platform offering voice, video, and text chat for communities, gamers, and businesses worldwide.",
    type: "Private",
    logo: "https://logo.clearbit.com/www.discord.com/",
    location: "San Francisco, CA, USA",
    foundingDate: "2015",
    employeeSize: "600",
    tags: ["Communication", "Software", "Social", "VoIP", "Community"],
    linkedin: "https://www.linkedin.com/company/discord/",
    website: "https://discord.com/",
    revenue: "$575M (2023)",
  },
  {
    name: "Citadel",
    salary: "$355,840", // L1 total comp at Citadel :contentReference[oaicite:0]{index=0}
    description:
      "Citadel LLC is a global hedge fund and financial services firm founded in 1990 by Kenneth Griffin, managing over $65 billion in assets.", // Wikipedia :contentReference[oaicite:1]{index=1}
    type: "Quant Firm",
    logo: "https://logo.clearbit.com/citadel.com",
    location: "Miami, FL, USA", // HQ moved 2022 :contentReference[oaicite:2]{index=2}
    foundingDate: "1990", // :contentReference[oaicite:3]{index=3}
    employeeSize: "2,932 (2023)", // :contentReference[oaicite:4]{index=4}
    tags: ["Asset Management", "Market Making", "Finance", "Technology"],
    linkedin: "https://www.linkedin.com/company/citadelllc/",
    website: "https://www.citadel.com/",
    revenue: "$9.1B",
  },
  {
    name: "Hudson River Trading",
    salary: "$420,153", // L1 total comp at HRT :contentReference[oaicite:5]{index=5}
    description:
      "Hudson River Trading (HRT) is a quantitative trading firm founded in 2002 that builds automated algorithms and advanced computing environments for global markets.", // Wikipedia :contentReference[oaicite:6]{index=6}
    type: "Quant Firm",
    logo: "https://logo.clearbit.com/hudsonrivertrading.com",
    location: "New York, NY, USA", // :contentReference[oaicite:7]{index=7}
    foundingDate: "2002", // :contentReference[oaicite:8]{index=8}
    employeeSize: "800+", // :contentReference[oaicite:9]{index=9}
    tags: ["Algorithmic Trading", "Quantitative Research", "Technology"],
    linkedin: "https://www.linkedin.com/company/hudson-river-trading/", // :contentReference[oaicite:10]{index=10}
    website: "https://hudsonrivertrading.com/",
    revenue: "$8B",
  },
  {
    name: "IMC Trading",
    salary: "$324,570", // Median total comp at IMC :contentReference[oaicite:11]{index=11}
    description:
      "IMC Trading is a proprietary trading and market-making firm founded in 1989 that leverages technology and quantitative research to provide liquidity worldwide.", // Wikipedia :contentReference[oaicite:12]{index=12}
    type: "Quant Firm",
    logo: "https://logo.clearbit.com/imc.com",
    location: "Amsterdam, Netherlands", // :contentReference[oaicite:13]{index=13}
    foundingDate: "1989", // :contentReference[oaicite:14]{index=14}
    employeeSize: "1,300+", // :contentReference[oaicite:15]{index=15}
    tags: ["Proprietary Trading", "Market Making", "Quantitative Research"],
    linkedin: "https://www.linkedin.com/company/imc-trading/", // :contentReference[oaicite:16]{index=16}
    website: "https://www.imc.com/",
    revenue: "2.2B",
  },
  {
    name: "Optiver",
    salary: "$191,000", // Median total comp at Optiver :contentReference[oaicite:17]{index=17}
    description:
      "Optiver is a proprietary trading and market-making firm founded in 1986 that trades derivatives, equities, ETFs, bonds, and FX across global exchanges.", // Wikipedia :contentReference[oaicite:18]{index=18}
    type: "Quant Firm",
    logo: "https://logo.clearbit.com/optiver.com",
    location: "Amsterdam, Netherlands", // :contentReference[oaicite:19]{index=19}
    foundingDate: "1986", // :contentReference[oaicite:20]{index=20}
    employeeSize: "1,709 (2022)", // :contentReference[oaicite:21]{index=21}
    tags: ["Market Making", "Proprietary Trading", "Financial Services"],
    linkedin: "https://www.linkedin.com/company/optiver/", // :contentReference[oaicite:22]{index=22}
    website: "https://optiver.com/",
    revenue: "$2.8B",
  },
  {
    name: "Perplexity AI",
    salary: "$450,000",
    description:
      "Perplexity AI, or simply Perplexity, is an American web search engine that uses a large language model to process queries and synthesize responses based on web search results.",
    type: "Private",
    logo: "/companies/perplexity.png",
    location: "San Francisco, California, USA",
    foundingDate: "2022",
    employeeSize: "100",
    tags: ["AI", "Search", "LLM"],
    linkedin: "https://www.linkedin.com/company/perplexity-ai/",
    website: "https://perplexity.ai",
    revenue: "$1M–$10M (estimated)",
  },
  {
    name: "MongoDB",
    salary: "$151,000",
    description:
      "MongoDB is a source-available, cross-platform, document-oriented database program, classified as a NoSQL database product that uses JSON-like documents with optional schemas.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/mongodb.com",
    location: "New York, NY, USA",
    foundingDate: "2007",
    employeeSize: "5,558 (2025)",
    tags: ["Database", "NoSQL", "Cloud"],
    linkedin: "https://www.linkedin.com/company/mongodbinc/",
    website: "https://www.mongodb.com/",
    revenue: "$1.284B (2023)",
  },
  {
    name: "Anduril Industries",
    salary: "$240,000",
    description:
      "Anduril Industries, Inc. is an American defense technology company that specializes in autonomous systems.",
    type: "Private",
    logo: "https://logo.clearbit.com/anduril.com",
    location: "Costa Mesa, California, USA",
    foundingDate: "2017",
    employeeSize: "3,500 (2024)",
    tags: ["Defense", "Autonomous Systems", "AI"],
    linkedin: "https://www.linkedin.com/company/andurilindustries/",
    website: "https://www.anduril.com/",
    revenue: "$1B (2024)",
  },
  {
    name: "Oracle",
    salary: "$138,000",
    description:
      "Oracle Corporation is an American multinational computer technology corporation that sells database software and technology, cloud engineered systems, and enterprise software products-particularly its own brands of database management systems.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/oracle.com",
    location: "Austin, Texas, USA",
    foundingDate: "June 16, 1977",
    employeeSize: "159,000 (2024)",
    tags: ["Database", "Cloud", "Enterprise Software"],
    linkedin: "https://www.linkedin.com/company/oracle/",
    website: "https://www.oracle.com/",
    revenue: "$52.96B (2024)",
  },
  {
    name: "Datadog",
    salary: "$324,623",
    description:
      "Datadog, Inc. is an American company that provides an observability service for cloud-scale applications, offering monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform.",
    type: "Enterprise",
    logo: "https://logo.clearbit.com/datadoghq.com",
    location: "New York City, NY, USA",
    foundingDate: "2010",
    employeeSize: "6,500 (2024)",
    tags: ["Observability", "SaaS", "Monitoring"],
    linkedin: "https://www.linkedin.com/company/datadog/",
    website: "https://www.datadoghq.com/",
    revenue: "$2.68B (2024)",
  },
  {
    name: "Databricks",
    salary: "$232,225",
    description:
      "Databricks, Inc. is an American software company that provides a cloud-based unified data analytics platform, founded by the original creators of Apache Spark.",
    type: "Private",
    logo: "https://logo.clearbit.com/databricks.com",
    location: "San Francisco, California, USA",
    foundingDate: "2013",
    employeeSize: "8,000 (2025)",
    tags: ["Data Analytics", "AI", "Cloud"],
    linkedin: "https://mx.linkedin.com/company/databricks",
    website: "https://databricks.com/",
    revenue: "$1.6B (2023)",
  },
  {
    name: "Snowflake",
    salary: "$217,488",
    description:
      "Snowflake Inc. is an American cloud-based data-warehousing company that operates a platform for data analysis and simultaneous access of data sets with minimal latency.",
    type: "Public",
    logo: "https://logo.clearbit.com/snowflake.com",
    location: "Bozeman, Montana, USA",
    foundingDate: "July 23, 2012",
    employeeSize: "7,834 (2025)",
    tags: ["Cloud", "Data Warehouse", "Analytics"],
    linkedin: "https://www.linkedin.com/company/snowflakeinc/",
    website: "https://www.snowflake.com/",
    revenue: "$3.63B (2025)",
  },
  {
    name: "DoorDash",
    salary: "$184,000",
    description:
      "DoorDash, Inc. is an American on-demand prepared food delivery service.",
    type: "Public",
    logo: "https://logo.clearbit.com/doordash.com",
    location: "San Francisco, California, USA",
    foundingDate: "2012",
    employeeSize: "23,700 (2024)",
    tags: ["Food Delivery", "Logistics", "E-commerce"],
    linkedin: "https://www.linkedin.com/company/doordash/",
    website: "https://doordash.com",
    revenue: "$10.72B (2024)",
  },
  {
    name: "GitHub",
    salary: "$136,000",
    description:
      "GitHub is a web-based platform for version control and collaboration, built on Git.",
    type: "Private Subsidiary of Microsoft",
    logo: "https://logo.clearbit.com/github.com",
    location: "San Francisco, CA, USA",
    foundingDate: "2008",
    employeeSize: "2,500+",
    tags: ["DevOps", "Version Control", "Collaboration"],
    linkedin: "https://www.linkedin.com/company/github/",
    website: "https://github.com",
    revenue: "$2B run rate",
  },
  {
    name: "Cloudflare",
    salary: "$145,000",
    description:
      "Cloudflare provides a global network for performance, security, and reliability of applications.",
    type: "Public",
    logo: "https://logo.clearbit.com/cloudflare.com",
    location: "San Francisco, CA, USA",
    foundingDate: "2009",
    employeeSize: "3,200+",
    tags: ["CDN", "Security", "Edge Computing"],
    linkedin: "https://www.linkedin.com/company/cloudflare/",
    website: "https://cloudflare.com",
    revenue: "$1.297B (FY 2023)",
  },
  {
    name: "Ramp",
    salary: "$240,000",
    description:
      "Ramp is a fintech startup offering corporate cards and expense automation for businesses.",
    type: "Private",
    logo: "https://logo.clearbit.com/ramp.com",
    location: "New York, NY, USA",
    foundingDate: "2019",
    employeeSize: "500+",
    tags: ["Fintech", "Expense Management", "Corporate Cards"],
    linkedin: "https://www.linkedin.com/company/ramp/",
    website: "https://ramp.com",
    revenue: "$700M annualized",
  },
  {
    name: "Snapchat",
    salary: "$197,000",
    description:
      "Snap Inc. develops the Snapchat app and camera hardware for social communication.",
    type: "Public",
    logo: "https://logo.clearbit.com/snapchat.com",
    location: "Santa Monica, CA, USA",
    foundingDate: "2011",
    employeeSize: "5,500+",
    tags: ["Social Media", "Messaging", "AR"],
    linkedin: "https://www.linkedin.com/company/snap-inc-/",
    website: "https://snap.com",
    revenue: "$4.606B (2023)",
  },
  {
    name: "Chime",
    salary: "$200,000",
    description:
      "Chime is a neobank offering fee-free mobile banking services in the U.S.",
    type: "Private",
    logo: "https://logo.clearbit.com/chime.com",
    location: "San Francisco, CA, USA",
    foundingDate: "2013",
    employeeSize: "1,500+",
    tags: ["Fintech", "Mobile Banking", "Neobank"],
    linkedin: "https://www.linkedin.com/company/chimebank/",
    website: "https://chime.com",
    revenue: "$1.3B (2023)",
  },
  {
    name: "Plaid",
    salary: "$223,000",
    description:
      "Plaid provides APIs that enable apps to connect with users’ bank accounts.",
    type: "Private",
    logo: "https://logo.clearbit.com/plaid.com",
    location: "San Francisco, CA, USA",
    foundingDate: "2013",
    employeeSize: "800+",
    tags: ["Fintech", "APIs", "Open Banking"],
    linkedin: "https://www.linkedin.com/company/plaid-inc/",
    website: "https://plaid.com",
    revenue: "N/A (private)",
  },
  {
    name: "Susquehanna International Group",
    salary: "$179,000",
    description:
      "SIG is a quantitative trading firm focused on research and technology.",
    type: "Private",
    logo: "https://logo.clearbit.com/sig.com",
    location: "Philadelphia, PA, USA",
    foundingDate: "1987",
    employeeSize: "2,000+",
    tags: ["Quantitative Trading", "Market Making", "Technology"],
    linkedin:
      "https://www.linkedin.com/company/susquehanna-international-group/",
    website: "https://sig.com",
    revenue: "N/A (private)",
  },
  {
    name: "Two Sigma",
    salary: "$364,000",
    description:
      "Two Sigma applies data science and technology to financial markets.",
    type: "Private",
    logo: "https://logo.clearbit.com/twosigma.com",
    location: "New York, NY, USA",
    foundingDate: "2001",
    employeeSize: "1,500+",
    tags: ["Quantitative Research", "Asset Management", "Technology"],
    linkedin: "https://www.linkedin.com/company/two-sigma/",
    website: "https://twosigma.com",
    revenue: "N/A (private)",
  },
  {
    name: "Capital One",
    salary: "$133,000",
    description:
      "Capital One is a diversified bank offering credit cards, banking, and loans.",
    type: "Public",
    logo: "https://logo.clearbit.com/capitalone.com",
    location: "McLean, VA, USA",
    foundingDate: "1988",
    employeeSize: "50,000+",
    tags: ["Banking", "Credit Cards", "Fintech"],
    linkedin: "https://www.linkedin.com/company/capital-one/",
    website: "https://capitalone.com",
    revenue: "$39.1B (TTM 2024)",
  },
  {
    name: "Walmart",
    salary: "$104,000",
    description:
      "Walmart is the world’s largest retailer operating discount stores and supermarkets.",
    type: "Public",
    logo: "/companies/walmart.png",
    location: "Bentonville, AR, USA",
    foundingDate: "1962",
    employeeSize: "2.3M+",
    tags: ["Retail", "E-commerce", "Logistics"],
    linkedin: "https://www.linkedin.com/company/walmart/",
    website: "https://walmart.com",
    revenue: "$680.99B (FY 2025)",
  },
];

export default companies;
