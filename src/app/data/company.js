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
    salary: "$184,000",
    description: "A multinational technology company focusing on e-commerce, cloud computing, and AI.",
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
    salary: "$240,000",
    description: "Research lab advancing safe and beneficial artificial general intelligence.",
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
    salary: "$350,000",
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
    salary: "$168,000",
    description: "Provides secure, scalable NLP and foundation models for enterprises.",
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
    salary: "$381,000", // average entry-level quant SWE :contentReference[oaicite:7]{index=7}
    description: "Five Rings is a quantitative trading firm specializing in systematic strategies and technology.", // from firm overview :contentReference[oaicite:8]{index=8}
    type: "Quant Firm",
    logo: "https://logo.clearbit.com/fiverings.com", // Clearbit :contentReference[oaicite:9]{index=9}
    location: "New York, NY, USA", // headquarters :contentReference[oaicite:10]{index=10}
    foundingDate: "2017", // company history :contentReference[oaicite:11]{index=11}
    employeeSize: "100–200", // LinkedIn :contentReference[oaicite:12]{index=12}
    tags: ["Trading", "Quantitative", "Technology"],
    linkedin: "https://www.linkedin.com/company/five-rings-capital/", // official
    website: "https://fiveringscap.com/",
    revenue: "$1B"
  },
  {
    name: "Figma",
    salary: "$221,000", // Glassdoor entry-level SWE :contentReference[oaicite:13]{index=13}
    description: "Figma is a browser-based design tool for UI/UX collaboration and prototyping.", // from About page :contentReference[oaicite:14]{index=14}
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
    salary: "$182,000", // Levels.fyi L3 SWE :contentReference[oaicite:20]{index=20}
    description: "Airbnb operates an online marketplace for lodging, tourism experiences, and residential rentals.", // corporate site :contentReference[oaicite:21]{index=21}
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
    salary: "$391,000", // entry-level quant SWE :contentReference[oaicite:34]{index=34}
    description: "Jane Street is a global trading firm and liquidity provider operating in financial markets.", // firm overview :contentReference[oaicite:35]{index=35}
    type: "Quant Firm",
    logo: "https://logo.clearbit.com/janestreet.com", // Clearbit :contentReference[oaicite:36]{index=36}
    location: "New York, NY, USA", // HQ :contentReference[oaicite:37]{index=37}
    foundingDate: "2000", // history :contentReference[oaicite:38]{index=38}
    employeeSize: "1,000–5,000", // LinkedIn :contentReference[oaicite:39]{index=39}
    tags: ["Trading", "Quantitative", "Finance"],
    linkedin: "https://www.linkedin.com/company/jane-street-capital/",
    website: "https://janestreet.com/",
    revenue: "$20.5B"
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
    salary: "$193,000", // Levels.fyi L3 SWE :contentReference[oaicite:47]{index=47}
    description: "Stripe provides payment processing infrastructure and financial tools for businesses.", // Stripe site :contentReference[oaicite:48]{index=48}
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
    salary: "$248,000", // Glassdoor entry-level SWE :contentReference[oaicite:54]{index=54}
    description: "Notion is an all-in-one workspace for note-taking, project management, and collaboration.", // from site :contentReference[oaicite:55]{index=55}
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
    name: "Slac,000",
    salary: "$176,000", // Associate Software Engineer entry-level compensation :contentReference[oaicite:0]{index=0}
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
    salary: "$177,000", // IC1 entry-level Software Engineer compensation :contentReference[oaicite:7]{index=7}
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
    salary: "$145,000", // entry-level Software Engineer compensation (minimum) :contentReference[oaicite:14]{index=14}
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
    salary: "$174,000", // entry-level Software Engineer (P10) compensation :contentReference[oaicite:30]{index=30}
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
      name: "Slac,000",
      salary: "$176,000", // Associate Software Engineer entry-level compensation :contentReference[oaicite:0]{index=0}
      description: "Slack is a cloud-based team communication platform developed by Slack Technologies, which has been owned by Salesforce since 2020.", // :contentReference[oaicite:1]{index=1}
      type: "Enterprise",
      logo: "https://logo.clearbit.com/slack.com",
      location: "Salesforce Tower, San Francisco, California, U.S.", // :contentReference[oaicite:2]{index=2}
      foundingDate: "2009", // :contentReference[oaicite:3]{index=3}
      employeeSize: "2,545 (January 2021)", // :contentReference[oaicite:4]{index=4}
      tags: ["Collaboration", "Messaging", "Productivity"],
      linkedin: "https://www.linkedin.com/company/slack/",
      website: "https://slack.com", // :contentReference[oaicite:5]{index=5}
      revenue: "US$903 million (2020)" // :contentReference[oaicite:6]{index=6}
    },
    {
      name: "Dropbox",
      salary: "$177,000", // IC1 entry-level Software Engineer compensation :contentReference[oaicite:7]{index=7}
      description: "Dropbox is a file hosting service offering cloud storage, file synchronization, personal cloud, and client software.", // :contentReference[oaicite:8]{index=8}
      type: "Enterprise",
      logo: "https://logo.clearbit.com/dropbox.com",
      location: "San Francisco, California, U.S.", // :contentReference[oaicite:9]{index=9}
      foundingDate: "May 2007", // :contentReference[oaicite:10]{index=10}
      employeeSize: "2,204 (2024)", // :contentReference[oaicite:11]{index=11}
      tags: ["Cloud storage", "File hosting", "Client software"],
      linkedin: "https://www.linkedin.com/company/dropbox/",
      website: "https://www.dropbox.com", // :contentReference[oaicite:12]{index=12}
      revenue: "US$2.55 billion (2024)" // :contentReference[oaicite:13]{index=13}
    },
    {
      name: "Palantir Technologies",
      salary: "$145,000", // entry-level Software Engineer compensation (minimum) :contentReference[oaicite:14]{index=14}
      description: "Palantir Technologies Inc. is an American publicly-traded company specializing in software platforms for big data analytics.", // :contentReference[oaicite:15]{index=15}
      type: "Enterprise",
      logo: "https://logo.clearbit.com/palantir.com",
      location: "Denver, Colorado, U.S.", // :contentReference[oaicite:16]{index=16}
      foundingDate: "2003", // :contentReference[oaicite:17]{index=17}
      employeeSize: "3,936 (2024)", // :contentReference[oaicite:18]{index=18}
      tags: ["Big Data", "Analytics", "Software"],
      linkedin: "https://www.linkedin.com/company/palantir-technologies/", // :contentReference[oaicite:19]{index=19}
      website: "https://www.palantir.com", // :contentReference[oaicite:20]{index=20}
      revenue: "US$2.87 billion (2024)" // :contentReference[oaicite:21]{index=21}
    },
    {
      name: "Robinhood",
      salary: "$201,438", // Software Engineer median total compensation :contentReference[oaicite:22]{index=22}
      description: "Robinhood Markets, Inc. is an American financial services company based in Menlo Park, California, providing an electronic trading platform for stocks, ETFs, options, futures, and cryptocurrency.", // :contentReference[oaicite:23]{index=23}
      type: "Enterprise",
      logo: "https://logo.clearbit.com/robinhood.com",
      location: "Menlo Park, California, U.S.", // :contentReference[oaicite:24]{index=24}
      foundingDate: "April 18, 2013", // :contentReference[oaicite:25]{index=25}
      employeeSize: "2,300 (2024)", // :contentReference[oaicite:26]{index=26}
      tags: ["Financial services", "Electronic trading", "Fintech"],
      linkedin: "https://www.linkedin.com/company/robinhood/", // :contentReference[oaicite:27]{index=27}
      website: "https://robinhood.com", // :contentReference[oaicite:28]{index=28}
      revenue: "US$2.95 billion (2024)" // :contentReference[oaicite:29]{index=29}
    },
    {
      name: "Adobe",
      salary: "$174,000", // entry-level Software Engineer (P10) compensation :contentReference[oaicite:30]{index=30}
      description: "Adobe Inc. is an American computer software company based in San Jose, California, known for products like Photoshop, Acrobat, Illustrator, and Creative Cloud.", // :contentReference[oaicite:31]{index=31}
      type: "Enterprise",
      logo: "https://logo.clearbit.com/adobe.com",
      location: "San Jose, California, U.S.", // :contentReference[oaicite:32]{index=32}
      foundingDate: "December 1982", // :contentReference[oaicite:33]{index=33}
      employeeSize: "30,709 (2024)", // :contentReference[oaicite:34]{index=34}
      tags: ["Creative software", "Digital media", "SaaS"],
      linkedin: "https://www.linkedin.com/company/adobe/", 
      website: "https://www.adobe.com", 
      revenue: "US$21.51 billion (2024)"
    },
    {
      name: "Discord",
      salary: "$154,000",
      description: "Leading communication platform offering voice, video, and text chat for communities, gamers, and businesses worldwide.",
      type: "Private",
      logo: "https://logo.clearbit.com/www.discord.com/",
      location: "San Francisco, CA, USA",
      foundingDate: "2015",
      employeeSize: "600",
      tags: ["Communication", "Software", "Social", "VoIP", "Community"],
      linkedin: "https://www.linkedin.com/company/discord/",
      website: "https://discord.com/",
      revenue: "$575M (2023)"
      },
      {
        name: "Citadel",
        salary: "$355,840",
        description: "Citadel LLC is a global hedge fund and financial services firm founded in 1990 by Kenneth Griffin, managing over $65 billion in assets.",
        type: "Quant Firm",
        logo: "https://logo.clearbit.com/citadel.com",
        location: "Miami, FL, USA",
        foundingDate: "1990",
        employeeSize: "2,932 (2023)",
        tags: ["Asset Management", "Market Making", "Finance", "Technology"],
        linkedin: "https://www.linkedin.com/company/citadelllc/",
        website: "https://www.citadel.com/",
        revenue: "$9.1B"
      },
      {
        name: "Hudson River Trading",
        salary: "$420,153",
        description: "Hudson River Trading (HRT) is a quantitative trading firm founded in 2002 that builds automated algorithms and advanced computing environments for global markets.", 
        type: "Quant Firm",
        logo: "https://logo.clearbit.com/hudsonrivertrading.com",
        location: "New York, NY, USA",
        foundingDate: "2002",
        employeeSize: "800+",
        tags: ["Algorithmic Trading", "Quantitative Research", "Technology"],
        linkedin: "https://www.linkedin.com/company/hudson-river-trading/", // :contentReference[oaicite:10]{index=10}
        website: "https://hudsonrivertrading.com/",
        revenue: "$8B"
      },
      {
        name: "IMC Trading",
        salary: "$303,570",                          // Median total comp at IMC :contentReference[oaicite:11]{index=11}
        description: "IMC Trading is a proprietary trading and market-making firm founded in 1989 that leverages technology and quantitative research to provide liquidity worldwide.", // Wikipedia :contentReference[oaicite:12]{index=12}
        type: "Quant Firm",
        logo: "https://logo.clearbit.com/imc.com",
        location: "Amsterdam, Netherlands",           // :contentReference[oaicite:13]{index=13}
        foundingDate: "1989",                        // :contentReference[oaicite:14]{index=14}
        employeeSize: "1,300+",                      // :contentReference[oaicite:15]{index=15}
        tags: ["Proprietary Trading", "Market Making", "Quantitative Research"],
        linkedin: "https://www.linkedin.com/company/imc-trading/", // :contentReference[oaicite:16]{index=16}
        website: "https://www.imc.com/",
        revenue: "2.2B"
      },
      {
        name: "Optiver",
        salary: "$202,000",                          // Median total comp at Optiver :contentReference[oaicite:17]{index=17}
        description: "Optiver is a proprietary trading and market-making firm founded in 1986 that trades derivatives, equities, ETFs, bonds, and FX across global exchanges.", // Wikipedia :contentReference[oaicite:18]{index=18}
        type: "Quant Firm",
        logo: "https://logo.clearbit.com/optiver.com",
        location: "Amsterdam, Netherlands",           // :contentReference[oaicite:19]{index=19}
        foundingDate: "1986",                        // :contentReference[oaicite:20]{index=20}
        employeeSize: "1,709 (2022)",                // :contentReference[oaicite:21]{index=21}
        tags: ["Market Making", "Proprietary Trading", "Financial Services"],
        linkedin: "https://www.linkedin.com/company/optiver/", // :contentReference[oaicite:22]{index=22}
        website: "https://optiver.com/",
        revenue: "$2.8B"
      },
      {
        name: "Perplexity AI",
        salary: "$450,000",
        description: "Perplexity AI, or simply Perplexity, is an American web search engine that uses a large language model to process queries and synthesize responses based on web search results.",
        type: "Private",
        logo: "https://logo.clearbit.com/perplexity.ai",
        location: "San Francisco, California, USA",
        foundingDate: "2022",
        employeeSize: "100",
        tags: ["AI", "Search", "LLM"],
        linkedin: "https://www.linkedin.com/company/perplexity-ai/",
        website: "https://perplexity.ai",
        revenue: "$1M–$10M (estimated)"
      },
      {
        name: "MongoDB",
        salary: "$151,000",
        description: "MongoDB is a source-available, cross-platform, document-oriented database program, classified as a NoSQL database product that uses JSON-like documents with optional schemas.",
        type: "Enterprise",
        logo: "https://logo.clearbit.com/mongodb.com",
        location: "New York, NY, USA",
        foundingDate: "2007",
        employeeSize: "5,558 (2025)",
        tags: ["Database", "NoSQL", "Cloud"],
        linkedin: "https://www.linkedin.com/company/mongodbinc/",
        website: "https://www.mongodb.com/",
        revenue: "$1.284B (2023)"
      },
      {
        name: "Anduril Industries",
        salary: "$240,000",
        description: "Anduril Industries, Inc. is an American defense technology company that specializes in autonomous systems.",
        type: "Private",
        logo: "https://logo.clearbit.com/anduril.com",
        location: "Costa Mesa, California, USA",
        foundingDate: "2017",
        employeeSize: "3,500 (2024)",
        tags: ["Defense", "Autonomous Systems", "AI"],
        linkedin: "https://www.linkedin.com/company/andurilindustries/",
        website: "https://www.anduril.com/",
        revenue: "$1B (2024)"
      },
      {
        name: "Oracle",
        salary: "$138,000",
        description: "Oracle Corporation is an American multinational computer technology corporation that sells database software and technology, cloud engineered systems, and enterprise software products-particularly its own brands of database management systems.",
        type: "Enterprise",
        logo: "https://logo.clearbit.com/oracle.com",
        location: "Austin, Texas, USA",
        foundingDate: "June 16, 1977",
        employeeSize: "159,000 (2024)",
        tags: ["Database", "Cloud", "Enterprise Software"],
        linkedin: "https://www.linkedin.com/company/oracle/",
        website: "https://www.oracle.com/",
        revenue: "$52.96B (2024)"
      },
      {
        name: "Datadog",
        salary: "$324,623",
        description: "Datadog, Inc. is an American company that provides an observability service for cloud-scale applications, offering monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform.",
        type: "Enterprise",
        logo: "https://logo.clearbit.com/datadoghq.com",
        location: "New York City, NY, USA",
        foundingDate: "2010",
        employeeSize: "6,500 (2024)",
        tags: ["Observability", "SaaS", "Monitoring"],
        linkedin: "https://www.linkedin.com/company/datadog/",
        website: "https://www.datadoghq.com/",
        revenue: "$2.68B (2024)"
      },
      {
        name: "Databricks",
        salary: "$232,225",
        description: "Databricks, Inc. is an American software company that provides a cloud-based unified data analytics platform, founded by the original creators of Apache Spark.",
        type: "Private",
        logo: "https://logo.clearbit.com/databricks.com",
        location: "San Francisco, California, USA",
        foundingDate: "2013",
        employeeSize: "8,000 (2025)",
        tags: ["Data Analytics", "AI", "Cloud"],
        linkedin: "https://mx.linkedin.com/company/databricks",
        website: "https://databricks.com/",
        revenue: "$1.6B (2023)"
      },
      {
        name: "Snowflake",
        salary: "$217,488",
        description: "Snowflake Inc. is an American cloud-based data-warehousing company that operates a platform for data analysis and simultaneous access of data sets with minimal latency.",
        type: "Public",
        logo: "https://logo.clearbit.com/snowflake.com",
        location: "Bozeman, Montana, USA",
        foundingDate: "July 23, 2012",
        employeeSize: "7,834 (2025)",
        tags: ["Cloud", "Data Warehouse", "Analytics"],
        linkedin: "https://www.linkedin.com/company/snowflakeinc/",
        website: "https://www.snowflake.com/",
        revenue: "$3.63B (2025)"
      },
      {
        name: "DoorDash",
        salary: "$184,000",
        description: "DoorDash, Inc. is an American on-demand prepared food delivery service.",
        type: "Public",
        logo: "https://logo.clearbit.com/doordash.com",
        location: "San Francisco, California, USA",
        foundingDate: "2012",
        employeeSize: "23,700 (2024)",
        tags: ["Food Delivery", "Logistics", "E-commerce"],
        linkedin: "https://www.linkedin.com/company/doordash/",
        website: "https://doordash.com",
        revenue: "$10.72B (2024)"
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
    tags: ["Fintech", "Mobile Banking", "Neoban,000"],
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
    revenue: "$250M",  
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
    revenue: "$1.1B",  
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
    revenue: "$1B",  
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
    revenue: "$680.99B (FY 2025)",                       // FY 2025 revenue :contentReference[oaicite:26]{index=26}  
  },
    {
      name: "Oracle",
      salary: "$138,000",
      description: "Oracle Corporation is an American multinational computer technology company.",
      type: "Public",
      logo: "https://logo.clearbit.com/oracle.com",
      location: "Austin, Texas, USA",
      foundingDate: "June 16, 1977",
      employeeSize: "159,000",
      tags: ["Enterprise Software", "Cloud Computing", "Database", "Consulting"],
      linkedin: "https://www.linkedin.com/company/oracle/",
      website: "https://oracle.com",
      revenue: "$52.96B (2024)"
    },
    {
      name: "Jump Trading",
      salary: "$390,000",
      description: "Jump Trading LLC is a proprietary trading firm specializing in algorithmic and high-frequency strategies.",
      type: "Private",
      logo: "https://logo.clearbit.com/jumptrading.com",
      location: "Chicago, Illinois, USA",
      foundingDate: "1999",
      employeeSize: "700+",
      tags: ["Proprietary Trading", "Algorithmic Trading", "High-Frequency Trading"],
      linkedin: "https://www.linkedin.com/company/jump-trading/",
      website: "https://www.jumptrading.com",
      revenue: "" // Not publicly disclosed
    },
    {
      name: "Glean",
      salary: "$217,415",
      description: "Glean Technologies, Inc. is an American company specializing in AI-powered enterprise search.",
      type: "Private",
      logo: "https://logo.clearbit.com/glean.com",
      location: "Palo Alto, California, USA",
      foundingDate: "2019",
      employeeSize: "500+",
      tags: ["Artificial Intelligence", "Enterprise Search"],
      linkedin: "https://www.linkedin.com/company/glean/",
      website: "https://glean.com",
      revenue: "" // Not publicly disclosed
    },
    {
      name: "LinkedIn",
      salary: "$164,000",
      description: "LinkedIn is an American business and employment-oriented social network.",
      type: "Subsidiary",
      logo: "https://logo.clearbit.com/linkedin.com",
      location: "Sunnyvale, California, USA",
      foundingDate: "May 5, 2003",
      employeeSize: "18,500",
      tags: ["Professional Networ,000", "Social Media", "Recruiting"],
      linkedin: "https://www.linkedin.com/company/linkedin/",
      website: "https://linkedin.com",
      revenue: "$15.15B (2023)"
    },
    {
      name: "Tesla",
      salary: "$128,000",
      description: "Tesla, Inc. is an American multinational automotive and clean energy company.",
      type: "Public",
      logo: "https://logo.clearbit.com/tesla.com",
      location: "Austin, Texas, USA",
      foundingDate: "July 1, 2003",
      employeeSize: "125,665",
      tags: ["Electric Vehicles", "Clean Energy", "Automotive"],
      linkedin: "https://www.linkedin.com/company/tesla-motors/",
      website: "https://tesla.com",
      revenue: "$97.7B (2024)"
    },
    {
      name: "Spotify",
      salary: "$148,000",
      description: "Spotify Technology S.A. is a Swedish audio streaming and media service provider.",
      type: "Public",
      logo: "https://logo.clearbit.com/spotify.com",
      location: "Stockholm, Sweden (operational) / Luxembourg, Luxembourg (registered)",
      foundingDate: "April 23, 2006",
      employeeSize: "7,258",
      tags: ["Audio Streaming", "Music", "Podcasts"],
      linkedin: "https://www.linkedin.com/company/spotify/",
      website: "https://open.spotify.com",
      revenue: "€15.67B (2024)"
    },
    {
      name: "Cisco",
      salary: "$125,968",
      description: "Cisco Systems, Inc. is an American multinational digital communications technology conglomerate.",
      type: "Public",
      logo: "https://logo.clearbit.com/cisco.com",
      location: "San Jose, California, USA",
      foundingDate: "December 10, 1984",
      employeeSize: "90,400",
      tags: ["Networking Hardware", "Telecommunications", "Security", "Software"],
      linkedin: "https://www.linkedin.com/company/cisco/",
      website: "https://cisco.com",
      revenue: "$53.80B (2024)"
    },
    {
      name: "Shopify",
      salary: "$131,000",
      description: "Shopify Inc. is a Canadian multinational e-commerce company.",
      type: "Public",
      logo: "https://logo.clearbit.com/shopify.com",
      location: "Ottawa, Ontario, Canada",
      foundingDate: "2006",
      employeeSize: "8,100",
      tags: ["E-commerce", "Online Retail", "SaaS"],
      linkedin: "https://www.linkedin.com/company/shopify/",
      website: "https://shopify.com",
      revenue: "$7.1B (2023)"
    },
    {
      name: "SpaceX",
      salary: "$176,000",
      description: "Space Exploration Technologies Corp. (SpaceX) is an American aerospace manufacturer and space transport services company.",
      type: "Private",
      logo: "https://logo.clearbit.com/spacex.com",
      location: "Starbase (Brownsville), Texas, USA",
      foundingDate: "2002",
      employeeSize: "13,000+",
      tags: ["Aerospace", "Launch Vehicles", "Space Transport", "Reusability"],
      linkedin: "https://www.linkedin.com/company/spacex/",
      website: "https://spacex.com",
      revenue: "$4.6B (2022)"
    },
      {
        // Riot Games entry-level base salary from Levels.fyi :contentReference[oaicite:0]{index=0}
        name: "Riot Games",
        salary: "$136,000",
        // Description, HQ, founding, and employees from Wikipedia :contentReference[oaicite:1]{index=1}
        description: "Riot Games, Inc. is an American video game developer, publisher, and esports tournament organizer based in Los Angeles.",
        type: "Subsidiary",
        logo: "https://logo.clearbit.com/riotgames.com",
        location: "Los Angeles, CA, USA",
        foundingDate: "September 2006",
        employeeSize: "4,200+",
        tags: ["Video Games", "Esports", "Publishing"],
        linkedin: "https://www.linkedin.com/company/riotgames/",
        website: "https://www.riotgames.com/",
        // Revenue from 2023 annual report via LEVVVEL :contentReference[oaicite:2]{index=2}
        revenue: "$1.5B (2023)"
      },
      {
        // Roblox entry-level base salary from Levels.fyi :contentReference[oaicite:3]{index=3}
        name: "Roblox",
        salary: "$151,000",
        // Description and founding from Wikipedia :contentReference[oaicite:4]{index=4}
        description: "Roblox is an online game platform and game creation system developed by Roblox Corporation.",
        type: "Public",
        logo: "https://logo.clearbit.com/roblox.com",
        location: "San Mateo, CA, USA",
        foundingDate: "2004",
        employeeSize: "5,400+",
        tags: ["Gaming", "Platform", "Social"],
        linkedin: "https://www.linkedin.com/company/roblox/",
        website: "https://www.roblox.com/",
        // Public company revenue as of 2023 from Roblox annual report :contentReference[oaicite:5]{index=5}
        revenue: "$2.2B (2023)"
      },
      {
        // Epic Systems entry-level base salary from Levels.fyi :contentReference[oaicite:6]{index=6}
        name: "Epic Systems",
        salary: "$127,000",
        // Description, revenue, and employees from Wikipedia :contentReference[oaicite:7]{index=7}
        description: "Epic Systems Corporation is an American privately held healthcare software company based in Verona, Wisconsin.",
        type: "Private",
        logo: "https://logo.clearbit.com/epic.com",
        location: "Verona, WI, USA",
        foundingDate: "1979",
        employeeSize: "13,000",
        tags: ["Healthcare", "Software", "EHR"],
        linkedin: "https://www.linkedin.com/company/epic-systems-corporation/",
        website: "https://www.epic.com/",
        revenue: "$4.6B (2022)"
      },
      {
        // HubSpot entry-level total comp from Levels.fyi :contentReference[oaicite:8]{index=8}
        name: "HubSpot",
        salary: "$171,000",
        // Description and founding from Wikipedia :contentReference[oaicite:9]{index=9}
        description: "HubSpot, Inc. is a US-based developer and marketer of software products for inbound marketing, sales, and customer service.",
        type: "Public",
        logo: "https://logo.clearbit.com/hubspot.com",
        location: "Cambridge, MA, USA",
        foundingDate: "2006",
        employeeSize: "7,000+",
        tags: ["CRM", "Marketing", "Sales", "SaaS"],
        linkedin: "https://www.linkedin.com/company/hubspot/",
        website: "https://www.hubspot.com/",
        revenue: "$1.7B (2023)"
      },
      {
        // Veeva Systems entry-level base salary from Levels.fyi :contentReference[oaicite:10]{index=10}
        name: "Veeva Systems",
        salary: "$110,000",
        // Description and founding from Wikipedia :contentReference[oaicite:11]{index=11}
        description: "Veeva Systems Inc. is an American cloud-computing company focused on applications for the pharmaceutical and life sciences industries.",
        type: "Public",
        logo: "https://logo.clearbit.com/veeva.com",
        location: "Pleasanton, CA, USA",
        foundingDate: "2007",
        employeeSize: "5,000+",
        tags: ["Cloud", "Life Sciences", "SaaS"],
        linkedin: "https://www.linkedin.com/company/veeva-systems/",
        website: "https://www.veeva.com/",
        revenue: "$2.3B (2023)"
      },
      {
        // Coinbase entry-level entry-level total comp from Levels.fyi :contentReference[oaicite:12]{index=12}
        name: "Coinbase",
        salary: "$206,000",
        // Description and founding from Wikipedia :contentReference[oaicite:13]{index=13}
        description: "Coinbase Global, Inc. is an American technology company operating a cryptocurrency exchange and digital asset platform.",
        type: "Public",
        logo: "https://logo.clearbit.com/coinbase.com",
        location: "San Francisco, CA, USA",
        foundingDate: "2012",
        employeeSize: "6,000+",
        tags: ["Cryptocurrency", "Exchange", "Fintech"],
        linkedin: "https://www.linkedin.com/company/coinbase/",
        website: "https://www.coinbase.com/",
        revenue: "$3.1B (2023)"
      },
      {
        // Atlassian entry-level base salary from Levels.fyi :contentReference[oaicite:14]{index=14}
        name: "Atlassian",
        salary: "$127,000",
        // Description from Wikipedia :contentReference[oaicite:15]{index=15}
        description: "Atlassian Corporation is an Australian-American proprietary software company specializing in collaboration tools for software development and project management.",
        type: "Public",
        logo: "https://logo.clearbit.com/atlassian.com",
        location: "Sydney, Australia",
        foundingDate: "2002",
        employeeSize: "8,500+",
        tags: ["Collaboration", "DevOps", "SaaS"],
        linkedin: "https://www.linkedin.com/company/atlassian/",
        website: "https://www.atlassian.com/",
        revenue: "$3.8B (2023)"
      },
      {
        // PayPal entry-level base salary from Levels.fyi :contentReference[oaicite:16]{index=16}
        name: "PayPal",
        salary: "$116,000",
        // Description from Wikipedia :contentReference[oaicite:17]{index=17}
        description: "PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system.",
        type: "Public",
        logo: "https://logo.clearbit.com/paypal.com",
        location: "San Jose, CA, USA",
        foundingDate: "1998",
        employeeSize: "31,000+",
        tags: ["Fintech", "Payments", "E-commerce"],
        linkedin: "https://www.linkedin.com/company/paypal/",
        website: "https://www.paypal.com/",
        revenue: "$25.4B (2023)"
      },
      {
        // Workday entry-level base salary from Levels.fyi :contentReference[oaicite:18]{index=18}
        name: "Workday",
        salary: "$146,000",
        // Description, HQ, financials from Wikipedia :contentReference[oaicite:19]{index=19}
        description: "Workday, Inc. is an American on-demand cloud-based financial management, human capital management, and student information system software vendor.",
        type: "Public",
        logo: "https://logo.clearbit.com/workday.com",
        location: "Pleasanton, CA, USA",
        foundingDate: "March 2005",
        employeeSize: "18,800",
        tags: ["Cloud Computing", "Enterprise Software", "HCM"],
        linkedin: "https://www.linkedin.com/company/workday/",
        website: "https://www.workday.com/",
        revenue: "$7.26B (2024)"
      },
      {
        // HP Inc. entry-level base salary from Levels.fyi :contentReference[oaicite:20]{index=20}
        name: "HP",
        salary: "$115,000",
        // Description and financials from Wikipedia :contentReference[oaicite:21]{index=21}
        description: "HP Inc. is an American multinational information technology company that develops personal computers, printers, and related supplies.",
        type: "Public",
        logo: "https://logo.clearbit.com/hp.com",
        location: "Palo Alto, CA, USA",
        foundingDate: "November 1, 2015",
        employeeSize: "58,000",
        tags: ["Personal Computers", "Printers", "3D Printing", "IT"],
        linkedin: "https://www.linkedin.com/company/hp/",
        website: "https://hp.com",
        revenue: "$53.56B (2024)"
      },
      {
        // Dell Technologies entry-level total comp from Levels.fyi :contentReference[oaicite:22]{index=22}
        name: "Dell Technologies",
        salary: "$111,870",
        // Description and financials from Wikipedia :contentReference[oaicite:23]{index=23}
        description: "Dell Technologies Inc. is an American multinational technology company headquartered in Round Rock, Texas, formed by the 2016 merger of Dell and EMC Corporation.",
        type: "Public",
        logo: "https://logo.clearbit.com/dell.com",
        location: "Round Rock, TX, USA",
        foundingDate: "September 7, 2016",
        employeeSize: "108,000",
        tags: ["IT", "Computers", "Servers", "Networking"],
        linkedin: "https://www.linkedin.com/company/dell-technologies/",
        website: "https://www.dell.com/",
        revenue: "$88.4B (2024)"
      },
        {
          name: "Uber",
          salary: "$191,841", // Median total compensation for Software Engineer II at Uber :contentReference[oaicite:0]{index=0}
          description: "Uber Technologies, Inc. is an American multinational transportation company that provides ride-hailing services, courier services, food delivery, and freight transport.", // :contentReference[oaicite:1]{index=1}
          type: "Public",
          logo: "https://logo.clearbit.com/uber.com",
          location: "San Francisco, California, USA", // :contentReference[oaicite:2]{index=2}
          foundingDate: "2009", // :contentReference[oaicite:3]{index=3}
          employeeSize: "31,100 (2024)", // :contentReference[oaicite:4]{index=4}
          tags: ["Transportation", "Mobility", "Food Delivery", "Freight"],
          linkedin: "https://www.linkedin.com/company/uber-com/",
          website: "https://uber.com",
          revenue: "$37.28B (2023)" // TTM revenue as of December 2023 :contentReference[oaicite:5]{index=5}
        },
        {
          name: "CrowdStrike",
          salary: "$141,000", // Entry-level Software Engineer I at CrowdStrike :contentReference[oaicite:6]{index=6}
          description: "CrowdStrike Holdings, Inc. is an American cybersecurity technology company based in Austin, Texas.", // :contentReference[oaicite:7]{index=7}
          type: "Public",
          logo: "https://logo.clearbit.com/crowdstrike.com",
          location: "Austin, Texas, USA", // :contentReference[oaicite:8]{index=8}
          foundingDate: "2011", // :contentReference[oaicite:9]{index=9}
          employeeSize: "10,118 (FY 2025)", // :contentReference[oaicite:10]{index=10}
          tags: ["Cybersecurity", "Endpoint Security", "Threat Intelligence"],
          linkedin: "https://www.linkedin.com/company/crowdstrike/",
          website: "https://crowdstrike.com",
          revenue: "$3.95B (FY 2025)" // Trailing-twelve-months revenue as of FY 2025 :contentReference[oaicite:11]{index=11}
        },
        {
          name: "Rippling",
          salary: "$217,000", // Median total compensation at Rippling :contentReference[oaicite:12]{index=12}
          description: "Rippling is a workforce management platform that unifies HR, IT, finance, and more.", // :contentReference[oaicite:13]{index=13}
          type: "Private",
          logo: "https://logo.clearbit.com/rippling.com",
          location: "San Francisco, California, USA",
          foundingDate: "April 2016", // Co-founded April 2016 :contentReference[oaicite:14]{index=14}
          employeeSize: "5,200 (April 2025)", // :contentReference[oaicite:15]{index=15}
          tags: ["HR Tech", "SaaS", "Payroll", "IT Management"],
          linkedin: "https://www.linkedin.com/company/rippling/",
          website: "https://rippling.com",
          revenue: "$350 M ARR (2023)" // Annual recurring revenue as of end-2023 :contentReference[oaicite:16]{index=16}
        },
        {
          name: "Twitch",
          salary: "$194,955", // Median total compensation for L5 at Twitch :contentReference[oaicite:17]{index=17}
          description: "Twitch is an American video live-streaming service popular in video games, including broadcasts of esports competitions.", // :contentReference[oaicite:18]{index=18}
          type: "Subsidiary",
          logo: "https://logo.clearbit.com/twitch.tv",
          location: "San Francisco, California, USA", // :contentReference[oaicite:19]{index=19}
          foundingDate: "June 6, 2011", // :contentReference[oaicite:20]{index=20}
          employeeSize: "1,001–5,000", // :contentReference[oaicite:21]{index=21}
          tags: ["Live Streaming", "Gaming", "Esports", "Entertainment"],
          linkedin: "https://www.linkedin.com/company/twitch-tv/",
          website: "https://www.twitch.tv",
          revenue: "$2.0B (2023)" // Ad revenue for 2023 :contentReference[oaicite:22]{index=22}
        },
        {
          name: "Brex",
          salary: "$285,597", // Median total compensation for Software Engineer II at Brex :contentReference[oaicite:23]{index=23}
          description: "Brex Inc. is an American financial service and technology company that offers business credit cards and cash management accounts to technology companies.", // :contentReference[oaicite:24]{index=24}
          type: "Private", // :contentReference[oaicite:25]{index=25}
          logo: "https://logo.clearbit.com/brex.com",
          location: "San Francisco, California, USA", // :contentReference[oaicite:26]{index=26}
          foundingDate: "January 3, 2017", // :contentReference[oaicite:27]{index=27}
          employeeSize: "1,200 (2024)", // :contentReference[oaicite:28]{index=28}
          tags: ["Fintech", "Payments", "Expense Management"],
          linkedin: "https://www.linkedin.com/company/brex/",
          website: "https://brex.com",
          revenue: ""  // Private company; revenue not publicly disclosed
        },
        {
          name: "Gusto",
          salary: "$244,000", // Median total compensation at Gusto :contentReference[oaicite:29]{index=29}
          description: "Gusto, Inc. is a company that provides payroll, benefits, and human resource management software for businesses in the United States.", // :contentReference[oaicite:30]{index=30}
          type: "Private", // :contentReference[oaicite:31]{index=31}
          logo: "https://logo.clearbit.com/gusto.com",
          location: "San Francisco, California, USA", // :contentReference[oaicite:32]{index=32}
          foundingDate: "2011", // :contentReference[oaicite:33]{index=33}
          employeeSize: "1,001–5,000", // :contentReference[oaicite:34]{index=34}
          tags: ["Payroll", "HR", "Benefits", "Fintech"],
          linkedin: "https://www.linkedin.com/company/gustohq/",
          website: "https://gusto.com",
          revenue: ""  // Private; revenue not publicly disclosed
        },
        {
          name: "X",
          salary: "$174,000", // Median total compensation for Software Engineer II at Twitter :contentReference[oaicite:35]{index=35}
          description: "Twitter is an American microblogging and social networking service on which users post and interact with messages known as 'tweets'.", // :contentReference[oaicite:36]{index=36}
          type: "Public", // :contentReference[oaicite:37]{index=37}
          logo: "https://logo.clearbit.com/twitter.com",
          location: "San Francisco, California, USA", // :contentReference[oaicite:38]{index=38}
          foundingDate: "March 21, 2006", // :contentReference[oaicite:39]{index=39}
          employeeSize: "",  // Data not available
          tags: ["Social Networking", "Microblogging", "Social Media"],
          linkedin: "https://www.linkedin.com/company/twitter/",
          website: "https://x.com",
          revenue: ""  // Public filings not currently reflecting rebranded entity
        },
        {
          name: "NASA",
          salary: "$109,000",
          description: "The United States government agency responsible for the civilian space program and aeronautics research.",
          type: "Government Agency",
          logo: "https://logo.clearbit.com/nasa.gov",
          location: "Washington, D.C., USA",
          foundingDate: "1958-07-29",
          employeeSize: "17,219",
          tags: ["Space Exploration", "Aeronautics", "Research"],
          linkedin: "https://www.linkedin.com/company/nasa/",
          website: "https://www.nasa.gov/",
          revenue: "$35.11B"
        },
        {
          name: "MathWorks",
          salary: "$135,032",
          description: "The MathWorks, Inc. is an American privately held corporation that specializes in mathematical computing software.",
          type: "Private",
          logo: "https://logo.clearbit.com/mathworks.com",
          location: "Natick, MA, USA",
          foundingDate: "1984-12-07",
          employeeSize: "6,000",
          tags: ["Mathematical Computing", "Simulation", "Software"],
          linkedin: "https://www.linkedin.com/company/mathworks/",
          website: "https://www.mathworks.com/",
          revenue: "$1.25B (2022)"
        },
        {
          name: "CME Group",
          salary: "$94,881",
          description: "CME Group Inc. is an American financial services company operating global derivatives exchanges and market data platforms.",
          type: "Public",
          logo: "https://logo.clearbit.com/cmegroup.com",
          location: "Chicago, IL, USA",
          foundingDate: "2007",
          employeeSize: "3,760",
          tags: ["Derivatives", "Financial Services", "Trading", "Market Data"],
          linkedin: "https://www.linkedin.com/company/cme-group/",
          website: "https://www.cmegroup.com/",
          revenue: "$6.13B (2024)"
        },
        {
          name: "AMD",
          salary: "$142,000",
          description: "Advanced Micro Devices, Inc. (AMD) is an American multinational corporation that designs CPUs, GPUs, and AI accelerators.",
          type: "Public",
          logo: "https://logo.clearbit.com/amd.com",
          location: "Santa Clara, CA, USA",
          foundingDate: "1969-05-01",
          employeeSize: "26,000",
          tags: ["Semiconductors", "Hardware", "AI", "Computing"],
          linkedin: "https://www.linkedin.com/company/amd/",
          website: "https://www.amd.com/",
          revenue: "$22.68B (2023)"
        },
        {
          name: "Rivian",
          salary: "$126,000",
          description: "Rivian Automotive, Inc. is an American electric vehicle manufacturer and automotive technology company founded in 2009.",
          type: "Public",
          logo: "https://logo.clearbit.com/rivian.com",
          location: "Irvine, CA, USA",
          foundingDate: "2009",
          employeeSize: "11,500",
          tags: ["Electric Vehicles", "Automotive", "Technology", "Outdoor Recreation"],
          linkedin: "https://www.linkedin.com/company/rivian/",
          website: "https://rivian.com/",
          revenue: "$4.43B (2023)"
        },
        {
          name: "Lucid",
          salary: "$158,000",
          description: "Lucid Group, Inc. is an American automotive and technology company that manufactures electric vehicles and advanced EV powertrains.",
          type: "Public",
          logo: "https://logo.clearbit.com/lucidmotors.com",
          location: "Newark, CA, USA",
          foundingDate: "2007",
          employeeSize: "6,800",
          tags: ["Electric Vehicles", "Automotive", "Technology", "Clean Energy"],
          linkedin: "https://www.linkedin.com/company/lucidmotors/",
          website: "https://lucidmotors.com/",
          revenue: "$595M (2023)"
        },
        {
          name: "Samsung Electronics",
          salary: "$165,000",
          description: "Samsung Electronics is a South Korean multinational major appliance and consumer electronics corporation.",
          type: "Public",
          logo: "https://logo.clearbit.com/samsung.com",
          location: "Yeongtong District, Suwon, South Korea",
          foundingDate: "January 13, 1969",
          employeeSize: "270,000 (2022)",
          tags: ["Semiconductors", "Consumer Electronics", "Mobile", "Home Appliances"],
          linkedin: "https://www.linkedin.com/company/samsung-electronics/",
          website: "https://samsung.com",
          revenue: "$188.98B (2023)"
        },
        {
          name: "ServiceNow",
          salary: "₹2.15M",
          description: "ServiceNow, Inc. supplies a cloud computing platform to create and manage automated business workflows.",
          type: "Public",
          logo: "https://logo.clearbit.com/servicenow.com",
          location: "Santa Clara, California, USA",
          foundingDate: "2003",
          employeeSize: "26,293 (2024)",
          tags: ["Cloud Computing", "IT Service Management", "Workflow Automation"],
          linkedin: "https://www.linkedin.com/company/servicenow/",
          website: "https://servicenow.com",
          revenue: "$10.98B (2024)"
        },
        {
          name: "Qualcomm",
          salary: "$125,000",
          description: "Qualcomm Inc. designs and markets wireless telecommunications products and services.",
          type: "Public",
          logo: "https://logo.clearbit.com/qualcomm.com",
          location: "San Diego, California, USA",
          foundingDate: "July 1985",
          employeeSize: "49,000 (2024)",
          tags: ["Semiconductors", "Telecommunications", "Wireless"],
          linkedin: "https://www.linkedin.com/company/qualcomm-inc/",
          website: "https://qualcomm.com",
          revenue: "$38.96B (2024)"
        },
        {
          name: "SAP",
          salary: "$112,000",
          description: "SAP SE is a German multinational software corporation that makes enterprise software to manage business operations and customer relations.",
          type: "Public",
          logo: "https://logo.clearbit.com/sap.com",
          location: "Walldorf, Baden-Württemberg, Germany",
          foundingDate: "1972",
          employeeSize: "109,973 (2024)",
          tags: ["ERP", "Cloud", "Analytics"],
          linkedin: "https://www.linkedin.com/company/sap/",
          website: "https://sap.com",
          revenue: "€34.18B (2024)"
        },
        {
          name: "TikTo,000",
          salary: "$218,000",
          description: "TikTok Pte. Ltd. is a video-focused social media platform developed by ByteDance.",
          type: "Subsidiary",
          logo: "https://logo.clearbit.com/tiktok.com",
          location: "Los Angeles, USA & Singapore",
          foundingDate: "September 2016",
          employeeSize: "38,578 (2023)",
          tags: ["Social Media", "Video", "Mobile"],
          linkedin: "https://www.linkedin.com/company/tiktok/",
          website: "https://tiktok.com",
          revenue: "$14.15B (2023)"
        },
        {
          name: "Canva",
          salary: "$138,000",
          description: "Canva is an Australian proprietary software company providing a graphic design platform.",
          type: "Private",
          logo: "https://logo.clearbit.com/canva.com",
          location: "Sydney, Australia",
          foundingDate: "January 1, 2013",
          employeeSize: "5,500 (2024)",
          tags: ["Graphic Design", "Software", "Cloud"],
          linkedin: "https://www.linkedin.com/company/canva/",
          website: "https://canva.com",
          revenue: "US$2B (2023)"
        },
        {
          name: "Grammarly",
          salary: "$142,000",
          description: "Grammarly is a software company offering a cloud-based typing assistant for grammar and style.",
          type: "Private",
          logo: "https://logo.clearbit.com/grammarly.com",
          location: "San Francisco, California, USA",
          foundingDate: "2009",
          employeeSize: "340 (2024)",
          tags: ["Writing Assistance", "AI", "Grammar", "Spell Checking"],
          linkedin: "https://www.linkedin.com/company/grammarly/",
          website: "https://grammarly.com",
          revenue: "$178.9M (2023)"
        },
        {
          name: "eBay Inc",
          salary: "$138,000",
          description: "eBay Inc. is an American multinational e-commerce corporation that facilitates online consumer-to-consumer and business-to-consumer sales.",
          type: "Public",
          logo: "https://logo.clearbit.com/ebay.com",
          location: "San Jose, California, USA",
          foundingDate: "September 3, 1995",
          employeeSize: "11,500 (2024)",
          tags: ["E-commerce", "Marketplace", "Auctions"],
          linkedin: "https://www.linkedin.com/company/ebay/",
          website: "https://ebay.com",
          revenue: "$10.3B (2024)"
        },
          {
            name: "Discover Financial Services",
            salary: "$126,000",
            description: "Discover Financial Services is an American financial services company that offers credit cards, banking, loans, and payment services.",
            type: "Public",
            logo: "https://logo.clearbit.com/discover.com",
            location: "Riverwoods, IL, USA",
            foundingDate: "1985",
            employeeSize: "21,100",
            tags: ["Financial Services", "Credit Cards", "Banking"],
            linkedin: "https://www.linkedin.com/company/discover-financial/",
            website: "https://www.discover.com/",
            revenue: "$20.61B (2023)"
          },
          {
            name: "Palo Alto Networks",
            salary: "$167,214",
            description: "Palo Alto Networks is an American multinational cybersecurity company that provides network security, cloud security, and endpoint protection.",
            type: "Public",
            logo: "https://logo.clearbit.com/paloaltonetworks.com",
            location: "Santa Clara, CA, USA",
            foundingDate: "2005",
            employeeSize: "15,289",
            tags: ["Network Security", "Cybersecurity", "Cloud"],
            linkedin: "https://www.linkedin.com/company/paloaltonetworks/",
            website: "https://www.paloaltonetworks.com/",
            revenue: "$8.03B (2024)"
          },
          {
            name: "Juniper Networks",
            salary: "$130,000",
            description: "Juniper Networks is an American multinational corporation that develops and markets networking products, including routers, switches, and security devices.",
            type: "Public",
            logo: "https://logo.clearbit.com/juniper.net",
            location: "Sunnyvale, CA, USA",
            foundingDate: "February 6, 1996",
            employeeSize: "11,271",
            tags: ["Networking Hardware", "Network Management", "Security"],
            linkedin: "https://www.linkedin.com/company/juniper-networks/",
            website: "https://www.juniper.net/",
            revenue: "$5.07B (2024)"
          },
          {
            name: "Splun,000",
            salary: "$181,000",
            description: "Splunk Inc. is an American software company that produces software for searching, monitoring, and analyzing machine-generated data via a web-style interface.",
            type: "Subsidiary",
            logo: "https://logo.clearbit.com/splunk.com",
            location: "San Francisco, CA, USA",
            foundingDate: "October 2003",
            employeeSize: "8,000",
            tags: ["Data Analytics", "Security", "Cloud"],
            linkedin: "https://www.linkedin.com/company/splunk-inc/",
            website: "https://www.splunk.com/",
            revenue: "$3.65B (2023)"
          },
          {
            name: "Lockheed Martin",
            salary: "$109,000",
            description: "Lockheed Martin Corporation is an American aerospace, defense, security, and advanced technologies company formed by the merger of Lockheed and Martin Marietta.",
            type: "Public",
            logo: "https://logo.clearbit.com/lockheedmartin.com",
            location: "Bethesda, MD, USA",
            foundingDate: "March 15, 1995",
            employeeSize: "121,000",
            tags: ["Aerospace", "Defense", "Security", "Technology"],
            linkedin: "https://www.linkedin.com/company/lockheed-martin/",
            website: "https://www.lockheedmartin.com/",
            revenue: "$71.04B (2024)"
          },
          {
            name: "Cockroach Labs",
            salary: "$185,000",
            description: "Cockroach Labs is a private software company that develops CockroachDB, a distributed SQL database management system.",
            type: "Private",
            logo: "https://logo.clearbit.com/cockroachlabs.com",
            location: "New York, NY, USA",
            foundingDate: "2015",
            employeeSize: "670",
            tags: ["Distributed SQL", "RDBMS", "Cloud Database", "Open Source"],
            linkedin: "https://www.linkedin.com/company/cockroach-labs/",
            website: "https://www.cockroachlabs.com/",
            revenue: "$119.9M (est.)"
          },
          {
            name: "Visa",
            salary: "$110,130",
            description: "Visa Inc. is an American multinational financial services corporation that facilitates electronic funds transfers worldwide through Visa-branded credit and debit cards.",
            type: "Public",
            logo: "https://logo.clearbit.com/visa.com",
            location: "San Francisco, CA, USA",
            foundingDate: "September 18, 1958",
            employeeSize: "31,600",
            tags: ["Payment Card Services", "Financial Services", "Digital Payments"],
            linkedin: "https://www.linkedin.com/company/visa/",
            website: "https://www.visa.com/",
            revenue: "$35.93B (2024)"
          },
          {
            name: "Nextdoor",
            salary: "$160,000",
            description: "Nextdoor Holdings, Inc. is a public company operating a hyperlocal social networking service for neighborhoods.",
            type: "Public",
            logo: "https://logo.clearbit.com/nextdoor.com",
            location: "San Francisco, CA, USA",
            foundingDate: "2008",
            employeeSize: "594",
            tags: ["Social Networking", "Hyperlocal", "Community", "Marketplace"],
            linkedin: "https://www.linkedin.com/company/nextdoor/",
            website: "https://nextdoor.com/",
            revenue: "$218M (2023)"
          },
          {
            name: "Asana",
            salary: "$173,000",
            description: "Asana, Inc. is a public software company that provides a web and mobile work management platform to help teams organize and track their work.",
            type: "Public",
            logo: "https://logo.clearbit.com/asana.com",
            location: "San Francisco, CA, USA",
            foundingDate: "December 16, 2008",
            employeeSize: "1,819",
            tags: ["Work Management", "Productivity Software", "Collaboration", "Project Management"],
            linkedin: "https://www.linkedin.com/company/asana/",
            website: "https://asana.com/",
            revenue: "$724M (2025)"
          },
            {
              name: "DRW",
              salary: "$250,000",
              description: "DRW Trading Group is a proprietary trading firm based in Chicago, Illinois.",
              type: "Private",
              logo: "https://logo.clearbit.com/drw.com",
              location: "Chicago, IL, USA",
              foundingDate: "1992",
              employeeSize: "2,290",
              tags: ["Proprietary Trading", "Algorithmic Trading", "High-Frequency Trading"],
              linkedin: "https://www.linkedin.com/company/drw-trading/",
              website: "https://drw.com/",
              revenue: "$416.8M (estimated)"
            },
            {
              name: "Tower Research Capital",
              salary: "$225,030",
              description: "Tower Research Capital is an American high-frequency trading and financial services firm.",
              type: "Private LLC",
              logo: "https://logo.clearbit.com/tower-research.com",
              location: "New York, NY, USA",
              foundingDate: "February 1998",
              employeeSize: "1,000+",
              tags: ["High-Frequency Trading", "Algorithmic Trading", "Financial Services"],
              linkedin: "https://www.linkedin.com/company/tower-research-capital/",
              website: "https://tower-research.com/",
              revenue: "$750M (estimated)"
            },
            {
              name: "Bloomberg L.P.",
              salary: "$260,348",
              description: "Bloomberg L.P. provides financial information, analytics, and news services globally.",
              type: "Private Partnership",
              logo: "https://logo.clearbit.com/bloomberg.com",
              location: "New York, NY, USA",
              foundingDate: "1981",
              employeeSize: "21,000",
              tags: ["Financial Information", "Media", "Data Analytics"],
              linkedin: "https://www.linkedin.com/company/bloomberg-lp/",
              website: "https://www.bloomberg.com/",
              revenue: "$12.5B (2023)"
            },
            {
              name: "BlackRoc,000",
              salary: "$131,890",
              description: "BlackRock, Inc. is the world’s largest asset manager, offering investment management and risk analytics.",
              type: "Public",
              logo: "https://logo.clearbit.com/blackrock.com",
              location: "New York, NY, USA",
              foundingDate: "1988",
              employeeSize: "21,100",
              tags: ["Asset Management", "Financial Services", "Investments"],
              linkedin: "https://www.linkedin.com/company/blackrock/",
              website: "https://www.blackrock.com/",
              revenue: "$17.859B (2023)"
            },
            {
              name: "Goldman Sachs",
              salary: "$123,000",
              description: "Goldman Sachs is a leading global investment banking, securities, and asset management firm.",
              type: "Public",
              logo: "https://logo.clearbit.com/goldmansachs.com",
              location: "New York, NY, USA",
              foundingDate: "1869",
              employeeSize: "48,500",
              tags: ["Investment Banking", "Securities", "Asset Management"],
              linkedin: "https://www.linkedin.com/company/goldman-sachs/",
              website: "https://www.goldmansachs.com/",
              revenue: "$46.25B (2023)"
            },
            {
              name: "Radix Trading",
              salary: "243,000",
              description: "Radix Trading is a proprietary trading firm headquartered in Chicago, with offices in New York and Amsterdam.",
              type: "Private",
              logo: "/companies/RadixTrading.png",
              location: "Chicago, IL, USA",
              foundingDate: "2012",
              employeeSize: "178",
              tags: ["Proprietary Trading", "Algorithmic Trading", "High-Frequency Trading"],
              linkedin: "https://www.linkedin.com/company/radix-trading/",
              website: "https://radixtrading.com/",
              revenue: "$41.1M (estimated)"
            },
            {
              name: "Ernst and Young",
              salary: "$109,000", // median SWE total comp :contentReference[oaicite:0]{index=0}
              description: "Ernst & Young (EY) is a multinational professional services network headquartered in London, England, and one of the Big Four accounting firms.", // :contentReference[oaicite:1]{index=1}
              type: "Professional Services", // :contentReference[oaicite:2]{index=2}
              logo: "https://logo.clearbit.com/ey.com",
              location: "London, England, U,000", // :contentReference[oaicite:3]{index=3}
              foundingDate: "1989", // through merger :contentReference[oaicite:4]{index=4}
              employeeSize: "395,442 (2023)", // :contentReference[oaicite:5]{index=5}
              tags: ["Accounting", "Audit", "Consulting", "Tax"],
              linkedin: "https://www.linkedin.com/company/ernstandyoung/",
              website: "https://www.ey.com/",
              revenue: "$51.2B (FY24)" // :contentReference[oaicite:6]{index=6}
            },
            {
              name: "PwC",
              salary: "$109,670", // median SWE total comp :contentReference[oaicite:7]{index=7}
              description: "PricewaterhouseCoopers (PwC) is a multinational professional services network headquartered in London, England, and one of the Big Four accounting firms.", // :contentReference[oaicite:8]{index=8}
              type: "Professional Services", // :contentReference[oaicite:9]{index=9}
              logo: "https://logo.clearbit.com/pwc.com",
              location: "London, England, U,000", // :contentReference[oaicite:10]{index=10}
              foundingDate: "1998", // merger year :contentReference[oaicite:11]{index=11}
              employeeSize: "370,000 (2024)", // :contentReference[oaicite:12]{index=12}
              tags: ["Accounting", "Audit", "Consulting", "Tax"],
              linkedin: "https://www.linkedin.com/company/pwc/",
              website: "https://www.pwc.com/",
              revenue: "$53.1B (FY23)" // :contentReference[oaicite:13]{index=13}
            },
            {
              name: "KPMG",
              salary: "$120,000", // median SWE total comp in US :contentReference[oaicite:14]{index=14}
              description: "KPMG is a multinational professional services network headquartered in London, England, and one of the Big Four accounting firms.", // :contentReference[oaicite:15]{index=15}
              type: "Professional Services", // :contentReference[oaicite:16]{index=16}
              logo: "https://logo.clearbit.com/kpmg.com",
              location: "London, England, U,000", // :contentReference[oaicite:17]{index=17}
              foundingDate: "1987", // through merger :contentReference[oaicite:18]{index=18}
              employeeSize: "275,288 (2024)", // :contentReference[oaicite:19]{index=19}
              tags: ["Accounting", "Audit", "Advisory", "Tax"],
              linkedin: "https://www.linkedin.com/company/kpmg/",
              website: "https://www.kpmg.com/",
              revenue: "$36B (FY23)" // :contentReference[oaicite:20]{index=20}
            },
            {
              name: "Deloitte",
              salary: "$116,000", // median SWE total comp :contentReference[oaicite:21]{index=21}
              description: "Deloitte is a multinational professional services network headquartered in London, England, and the largest of the Big Four accounting firms.", // :contentReference[oaicite:22]{index=22}
              type: "Professional Services", // :contentReference[oaicite:23]{index=23}
              logo: "https://logo.clearbit.com/deloitte.com",
              location: "London, England, U,000", // :contentReference[oaicite:24]{index=24}
              foundingDate: "1845", // :contentReference[oaicite:25]{index=25}
              employeeSize: "460,000 (2024)", // :contentReference[oaicite:26]{index=26}
              tags: ["Consulting", "Audit", "Tax", "Advisory"],
              linkedin: "https://www.linkedin.com/company/deloitte/",
              website: "https://www.deloitte.com/",
              revenue: "$67.2B (FY24)" // :contentReference[oaicite:27]{index=27}
            },
            {
              name: "DE Shaw",
              salary: "$300,000", // median SWE total comp in US :contentReference[oaicite:28]{index=28}
              description: "D. E. Shaw & Co. is a global investment and technology development firm founded in 1988 and headquartered in New York City.", // :contentReference[oaicite:29]{index=29}
              type: "Hedge Fund", // :contentReference[oaicite:30]{index=30}
              logo: "https://logo.clearbit.com/deshaw.com",
              location: "New York, NY, USA", // :contentReference[oaicite:31]{index=31}
              foundingDate: "1988", // :contentReference[oaicite:32]{index=32}
              employeeSize: "2,500 (2022)", // :contentReference[oaicite:33]{index=33}
              tags: ["Quantitative Trading", "Hedge Fund", "Technology", "Investment Management"],
              linkedin: "https://www.linkedin.com/company/d-e-shaw-group/",
              website: "https://www.deshaw.com/",
              revenue: "$11.1B"
            },
            {
              name: "Accenture",
              salary: "$94,835", // median Software Engineer Analyst total comp in US :contentReference[oaicite:34]{index=34}
              description: "Accenture plc is a global professional services company specializing in IT services and management consulting, headquartered in Dublin, Ireland.", // :contentReference[oaicite:35]{index=35}
              type: "Public", // :contentReference[oaicite:36]{index=36}
              logo: "https://logo.clearbit.com/accenture.com",
              location: "Dublin, Ireland", // :contentReference[oaicite:37]{index=37}
              foundingDate: "1989", // :contentReference[oaicite:38]{index=38}
              employeeSize: "774,000 (2024)", // :contentReference[oaicite:39]{index=39}
              tags: ["Consulting", "IT Services", "Management Consulting", "Technology"],
              linkedin: "https://www.linkedin.com/company/accenture/",
              website: "https://www.accenture.com/",
              revenue: "$64.9B (2024)" // :contentReference[oaicite:40]{index=40}
            },
  {
    name: "Duolingo",
    salary: "$190,000",
    description: "Duolingo is an American educational technology company offering a language-learning platform and mobile app.", 
    type: "Public",
    logo: "https://logo.clearbit.com/duolingo.com",
    location: "Pittsburgh, PA, USA",
    foundingDate: "2011",
    employeeSize: "≈800",
    tags: ["Language Learning", "Education", "EdTech"],
    linkedin: "https://www.linkedin.com/company/duolingo/",
    website: "https://duolingo.com/",
    revenue: "$531M (2023)"
  },
  {
    name: "Expedia Group",
    salary: "$132,478",
    description: "Expedia Group, Inc. is an American travel technology company that owns and operates travel fare aggregators and metasearch engines.",
    type: "Public",
    logo: "https://logo.clearbit.com/expediagroup.com",
    location: "Seattle, WA, USA",
    foundingDate: "October 22, 1996",
    employeeSize: "16,500 (2024)",
    tags: ["Travel Technology", "E-commerce", "Metasearch", "Hospitality"],
    linkedin: "https://www.linkedin.com/company/expedia-group/",
    website: "https://expediagroup.com/",
    revenue: "US$13.69B (2024)"
  },
  {
    name: "DigitalOcean",
    salary: "$148,000",
    description: "DigitalOcean Holdings, Inc. is an American cloud infrastructure provider serving developers, startups, and SMBs.",
    type: "Public",
    logo: "https://logo.clearbit.com/digitalocean.com",
    location: "New York City, NY, USA",
    foundingDate: "2011-06-24",
    employeeSize: "1,204 (2022)",
    tags: ["Cloud Infrastructure", "PaaS", "Hosting", "Developer Tools"],
    linkedin: "https://www.linkedin.com/company/digitalocean/",
    website: "https://digitalocean.com/",
    revenue: "US$200M (2023 est.)"
  },
  {
    name: "Samsara",
    salary: "$185,606",
    description: "Samsara Inc. is an American IoT company providing hardware and software solutions for physical operations.",
    type: "Public",
    logo: "https://logo.clearbit.com/samsara.com",
    location: "San Francisco, CA, USA",
    foundingDate: "2015",
    employeeSize: "2,895 (2024)",
    tags: ["IoT", "Cloud", "Fleet Management", "Industrial"],
    linkedin: "https://www.linkedin.com/company/samsara/",
    website: "https://samsara.com/",
    revenue: "US$937M (2024)"
  },
  {
    name: "Khan Academy",
    salary: "$126,000",
    description: "Khan Academy is an American 501(c)(3) nonprofit educational organization created to provide free, world-class education for anyone, anywhere.",
    type: "Non-profit",
    logo: "https://logo.clearbit.com/khanacademy.org",
    location: "Mountain View, CA, USA",
    foundingDate: "2008",
    employeeSize: "≈197",
    tags: ["Education", "E-Learning", "Tutoring", "Non-profit"],
    linkedin: "https://www.linkedin.com/company/khan-academy/",
    website: "https://khanacademy.org/",
    revenue: "$98.3M (2023)"
  },
  {
    name: "KLA Corporation",
    salary: "$128,000",
    description: "KLA Corporation is an American semiconductor equipment company specializing in process control and yield management systems.",
    type: "Public",
    logo: "https://logo.clearbit.com/kla.com",
    location: "Milpitas, CA, USA",
    foundingDate: "1997",
    employeeSize: "11,944 (2024)",
    tags: ["Semiconductors", "Equipment", "Process Control", "Yield Management"],
    linkedin: "https://www.linkedin.com/company/kla-corporation/",
    website: "https://kla.com/",
    revenue: "US$10.847B (2024)"
  },
  {
    name: "Circle",
    salary: "$215,000", // Median SWE total comp (US) :contentReference[oaicite:0]{index=0}
    description: "Circle Internet Group, Inc. is a fintech company that manages the USDC stablecoin and provides blockchain-based payment infrastructure.", // :contentReference[oaicite:1]{index=1}
    type: "Private",
    logo: "https://logo.clearbit.com/circle.com",
    location: "New York City, NY, USA", // :contentReference[oaicite:2]{index=2}
    foundingDate: "2013", // Launched October 2013 :contentReference[oaicite:3]{index=3}
    employeeSize: "1,000–5,000", // Approximate company size range
    tags: ["Fintech", "Blockchain", "Payments", "Cryptocurrency"],
    linkedin: "https://www.linkedin.com/company/circle/",
    website: "https://circle.com", // :contentReference[oaicite:4]{index=4}
    revenue: "$1.66B (2023)" // IPO filing reports $1.66B revenue :contentReference[oaicite:5]{index=5}
  },
  {
    name: "Radian Group",
    salary: "$106,712", // Median SWE total comp at Radian :contentReference[oaicite:6]{index=6}
    description: "Radian Group Inc. is a U.S. mortgage insurance and real estate finance company offering private mortgage insurance, title and valuation services.", // :contentReference[oaicite:7]{index=7}
    type: "Public", // :contentReference[oaicite:8]{index=8}
    logo: "https://logo.clearbit.com/radian.com",
    location: "Wayne, PA, USA", // Headquarters address :contentReference[oaicite:9]{index=9}
    foundingDate: "1977", // Established as CMAC in 1977 :contentReference[oaicite:10]{index=10}
    employeeSize: "1,001–5,000", // LinkedIn company size :contentReference[oaicite:11]{index=11}
    tags: ["Mortgage Insurance", "Risk Management", "Title Services", "Real Estate"], // From company overview :contentReference[oaicite:12]{index=12}
    linkedin: "https://www.linkedin.com/company/radian/",
    website: "https://www.radian.com", // :contentReference[oaicite:13]{index=13}
    revenue: "N/A"
  },
  {
    name: "Twilio",
    salary: "$161,000", // Entry-level IC1 total comp (US) :contentReference[oaicite:14]{index=14}
    description: "Twilio Inc. is a cloud communications platform providing APIs to send/receive calls, texts, and other programmable communications.", // :contentReference[oaicite:15]{index=15}
    type: "Public", // :contentReference[oaicite:16]{index=16}
    logo: "https://logo.clearbit.com/twilio.com",
    location: "San Francisco, CA, USA", // :contentReference[oaicite:17]{index=17}
    foundingDate: "2008", // :contentReference[oaicite:18]{index=18}
    employeeSize: "5,535 (2024)", // :contentReference[oaicite:19]{index=19}
    tags: ["Communications", "API", "Cloud"], 
    linkedin: "https://www.linkedin.com/company/twilio/",
    website: "https://twilio.com", // :contentReference[oaicite:20]{index=20}
    revenue: "$4.46B (2024)" // :contentReference[oaicite:21]{index=21}
  },
  {
    name: "Verizon",
    salary: "$98.5,000", // Median SWE salary (US) :contentReference[oaicite:22]{index=22}
    description: "Verizon Communications Inc. is an American telecommunications company providing wireless, broadband and enterprise services.", // :contentReference[oaicite:23]{index=23}
    type: "Public", // :contentReference[oaicite:24]{index=24}
    logo: "https://logo.clearbit.com/verizon.com",
    location: "New York City, NY, USA", // :contentReference[oaicite:25]{index=25}
    foundingDate: "1983", // October 7, 1983 :contentReference[oaicite:26]{index=26}
    employeeSize: "99,600 (2024)", // :contentReference[oaicite:27]{index=27}
    tags: ["Telecommunications", "Mobile", "Broadband", "IoT"],
    linkedin: "https://www.linkedin.com/company/verizon/",
    website: "https://www.verizon.com/", // :contentReference[oaicite:28]{index=28}
    revenue: "$134.79B (2024)" // :contentReference[oaicite:29]{index=29}
  },
  {
    name: "Glassdoor",
    salary: "N/A",
    description: "Glassdoor, Inc. is an American website for anonymous reviews and salary data on employers.", // :contentReference[oaicite:30]{index=30}
    type: "Subsidiary", 
    logo: "https://logo.clearbit.com/glassdoor.com",
    location: "Mill Valley, CA, USA", // :contentReference[oaicite:31]{index=31}
    foundingDate: "2007", // Founded 2007 :contentReference[oaicite:32]{index=32}
    employeeSize: "800 (2022)", // Estimated employees :contentReference[oaicite:33]{index=33}
    tags: ["Job Search", "Employee Reviews", "Salary Data"],
    linkedin: "https://www.linkedin.com/company/glassdoor/",
    website: "https://www.glassdoor.com",
    revenue: "$342.5M (2024 est.)" // Growjo estimate :contentReference[oaicite:34]{index=34}
  },
  {
    name: "Waymo",
    salary: "$236,000", // Median SWE total comp (US) :contentReference[oaicite:35]{index=35}
    description: "Waymo LLC is an autonomous driving technology company and subsidiary of Alphabet Inc., headquartered in Mountain View, CA.", // :contentReference[oaicite:36]{index=36}
    type: "Subsidiary", 
    logo: "https://logo.clearbit.com/waymo.com",
    location: "Mountain View, CA, USA", // :contentReference[oaicite:37]{index=37}
    foundingDate: "2016", // Became independent in 2016 :contentReference[oaicite:38]{index=38}
    employeeSize: "3,056 (2024 est.)", // :contentReference[oaicite:39]{index=39}
    tags: ["Autonomous Vehicles", "Machine Learning", "Robotics"],
    linkedin: "https://www.linkedin.com/company/waymo/",
    website: "https://waymo.com", // :contentReference[oaicite:40]{index=40}
    revenue: "$1.4B (2024 est.)" // Growjo estimate :contentReference[oaicite:41]{index=41}
  },
  {
    name: "Huawei",
    salary: "$117,000", // Median US SWE total comp :contentReference[oaicite:42]{index=42}
    description: "Huawei Technologies Co., Ltd. is a Chinese multinational ICT provider and consumer electronics maker headquartered in Shenzhen.", // :contentReference[oaicite:43]{index=43}
    type: "Private",
    logo: "https://logo.clearbit.com/huawei.com",
    location: "Shenzhen, Guangdong, China", // :contentReference[oaicite:44]{index=44}
    foundingDate: "1987", // :contentReference[oaicite:45]{index=45}
    employeeSize: "207,000 (2023)", // :contentReference[oaicite:46]{index=46}
    tags: ["Telecommunications", "Consumer Electronics", "ICT"],
    linkedin: "https://www.linkedin.com/company/huawei/",
    website: "https://www.huawei.com/", // :contentReference[oaicite:47]{index=47}
    revenue: "$99.5B (2023)" // :contentReference[oaicite:48]{index=48}
  },
  {
    name: "Zoox",
    salary: "$146,000", // Entry-level L1 SWE total comp :contentReference[oaicite:49]{index=49}
    description: "Zoox, Inc. is an Amazon-owned autonomous vehicle company developing purpose-built, self-driving taxis headquartered in Foster City, CA.", // :contentReference[oaicite:50]{index=50}
    type: "Subsidiary",
    logo: "https://logo.clearbit.com/zoox.com",
    location: "Foster City, CA, USA", // :contentReference[oaicite:51]{index=51}
    foundingDate: "2014", // :contentReference[oaicite:52]{index=52}
    employeeSize: "2,200 (2023)", // Reuters headcount estimate :contentReference[oaicite:53]{index=53}
    tags: ["Autonomous Vehicles", "Robotics", "AI", "Mobility"],
    linkedin: "https://www.linkedin.com/company/zoox-inc/",
    website: "https://zoox.com", // :contentReference[oaicite:54]{index=54}
    revenue: "$1.3B (2024 est.)" // Growjo estimate :contentReference[oaicite:55]{index=55}
  },
  {
    name: "Fitbit",
    salary: "$182,000", // Median total comp for entry-level Software Engineer in the U.S. citeturn7search0
    description: "Fitbit, Inc. is an American consumer electronics and fitness company headquartered in San Francisco, California.", // citeturn7search1
    type: "Subsidiary", // Acquired by Google in 2021 citeturn0search1
    logo: "https://logo.clearbit.com/fitbit.com",
    location: "San Francisco, CA, USA", // citeturn0search1
    foundingDate: "May 1, 2007", // citeturn0search15
    employeeSize: "≈1,660 (2021)", // Estimated pre-acquisition headcount citeturn7search1
    tags: ["Wearables", "Fitness", "Health Tech", "IoT"],
    linkedin: "https://www.linkedin.com/company/fitbit/",
    website: "https://www.fitbit.com/",
    revenue: "$238.8M (2019)" // Latest standalone revenue citeturn1search7
  },
  {
    name: "Intuit",
    salary: "$158,000", // Median total comp for entry-level Software Engineer in the U.S. citeturn0search2
    description: "Intuit Inc. is an American business and financial software company that develops and sells financial, accounting, and tax preparation software and related services.", // citeturn0search3
    type: "Public", // Traded on NASDAQ: INTU citeturn0search3
    logo: "https://logo.clearbit.com/intuit.com",
    location: "Mountain View, CA, USA", // citeturn0search3
    foundingDate: "1983", // citeturn2search1
    employeeSize: "14,200 (2024)", // Approximate headcount citeturn0search3
    tags: ["Software", "Financial Software", "Tax", "CRM", "Cloud"],
    linkedin: "https://www.linkedin.com/company/intuit/",
    website: "https://www.intuit.com/",
    revenue: "$14.20B (2023)" // Latest fiscal year revenue citeturn2search1
  },
  {
    name: "Instacart",
    salary: "$222,000", // Median total comp for entry-level Software Engineer in the U.S. citeturn3search1
    description: "Maplebear Inc., doing business as Instacart, is an American delivery company that operates a grocery delivery and pickup service in the United States and Canada.", // citeturn4search0
    type: "Public", // Traded on NASDAQ: CART citeturn4search0
    logo: "https://logo.clearbit.com/instacart.com",
    location: "San Francisco, CA, USA", // citeturn4search0
    foundingDate: "2012", // citeturn4search0
    employeeSize: "3,265 (2024)", // citeturn4search0
    tags: ["Grocery Delivery", "E-commerce", "Logistics"],
    linkedin: "https://www.linkedin.com/company/instacart/", // citeturn4search1
    website: "https://instacart.com/",
    revenue: "$3.3M"
  },
  {
    name: "Yelp",
    salary: "$117,703", // Median total comp for entry-level (IC1) Software Engineer in the U.S. citeturn6search1
    description: "Yelp Inc. is an American company that publishes crowd-sourced reviews about local businesses and operates a business directory service.", // citeturn8search0
    type: "Public", // Traded on NYSE: YELP citeturn8search0
    logo: "https://logo.clearbit.com/yelp.com",
    location: "San Francisco, CA, USA", // citeturn8search0
    foundingDate: "2004", // citeturn8search0
    employeeSize: "5,876 (2024)", // citeturn4search0
    tags: ["Reviews", "Local Business", "Consumer Services", "Advertising"],
    linkedin: "https://www.linkedin.com/company/yelp/",
    website: "https://www.yelp.com/",
    revenue: "$362M (Q4 2024 net revenue)" // citeturn8search2
  },
  {
    name: "Yahoo",
    salary: "$129,000", // Median total comp for Software Engineer in the U.S. citeturn0search8
    description: "Yahoo is an American web portal and online services provider offering search, email, news, and finance platforms.", // citeturn9search0
    type: "Subsidiary", // Owned by Apollo Global Management (90%) and Verizon (10%) citeturn9search0
    logo: "https://logo.clearbit.com/yahoo.com",
    location: "Sunnyvale, CA, USA", //
    foundingDate: "January 1994", // citeturn9search0
    employeeSize: "8,600 (2017)", // citeturn9search0
    tags: ["Web Portal", "Search", "Email", "News"],
    linkedin: "https://www.linkedin.com/company/yahoo/",
    website: "https://www.yahoo.com/",
    revenue: "$7.4B (2020)" // citeturn9search0
  },
  {
    name: "Square",
    salary: "$207,000", // Approx. median from Glassdoor range ($203K–$297K) citeturn11search8
    description: "Square is a point-of-sale system product launched by Block in 2009 that enables merchants to accept card payments and manage operations.", // citeturn12search1
    type: "Product", // Flagship product of Block, Inc. citeturn12search1
    logo: "https://logo.clearbit.com/squareup.com",
    location: "San Francisco, CA, USA", // Global operations
    foundingDate: "December 2009", // citeturn12search1
    employeeSize: "N/A", // Product-level headcount not separately reported
    tags: ["Fintech", "POS", "Payments"],
    linkedin: "https://www.linkedin.com/company/square-inc/",
    website: "https://squareup.com/",
    revenue: "N/A (reported under Block, Inc.)"
  },
  {
    name: "Humana",
    salary: "$118,242",
    description: "Humana Inc. is an American for-profit health insurance company based in Louisville, Kentucky.",
    type: "Public",
    logo: "https://logo.clearbit.com/humana.com",
    location: "Louisville, Kentucky, USA",
    foundingDate: "August 18, 1961",
    employeeSize: "65,680 (2024)",
    tags: ["Health Insurance", "Healthcare Services", "Pharmacy Benefit Manager"],
    linkedin: "https://www.linkedin.com/company/humana/",
    website: "https://humana.com/",
    revenue: "$118B (2024)"
  },

  // Honeywell
  {
    name: "Honeywell International",
    salary: "$91,349",
    description: "Honeywell International Inc. is an American publicly traded multinational conglomerate headquartered in Charlotte, North Carolina.",
    type: "Public",
    logo: "https://logo.clearbit.com/honeywell.com",
    location: "Charlotte, North Carolina, USA",
    foundingDate: "1906",
    employeeSize: "102,000 (2024)",
    tags: ["Conglomerate", "Aerospace", "Industrial Automation", "Building Automation"],
    linkedin: "https://www.linkedin.com/company/honeywell/",
    website: "https://honeywell.com/",
    revenue: "$38.5B (2024)"
  },

  // John Deere
  {
    name: "John Deere",
    salary: "$99,000",
    description: "Deere & Company, doing business as John Deere, is an American corporation that manufactures agricultural and heavy equipment, diesel engines and drivetrains.",
    type: "Public",
    logo: "https://logo.clearbit.com/deere.com",
    location: "Moline, Illinois, USA",
    foundingDate: "February 13, 1837",
    employeeSize: "82,900 (2023)",
    tags: ["Manufacturing", "Agricultural Machinery", "Heavy Equipment"],
    linkedin: "https://www.linkedin.com/company/john-deere/",
    website: "https://www.deere.com/",
    revenue: "$52.6B (2024)"
  },

  // General Mills
  {
    name: "General Mills",
    salary: "$145,000",
    description: "General Mills, Inc. is an American multinational manufacturer and marketer of branded processed consumer foods.",
    type: "Public",
    logo: "https://logo.clearbit.com/generalmills.com",
    location: "Golden Valley, Minnesota, USA",
    foundingDate: "June 20, 1928",
    employeeSize: "34,000 (May 2024)",
    tags: ["Food Processing", "Consumer Foods", "Snacks", "Cereals"],
    linkedin: "https://www.linkedin.com/company/general-mills/",
    website: "https://generalmills.com/",
    revenue: "$19.86B (2024)"
  },

  // Costco
  {
    name: "Costco Wholesale",
    salary: "$130,498",
    description: "Costco Wholesale Corporation is an American multinational corporation operating a chain of membership-only warehouse club retail stores.",
    type: "Public",
    logo: "https://logo.clearbit.com/costco.com",
    location: "Issaquah, Washington, USA",
    foundingDate: "September 15, 1983",
    employeeSize: "333,000 (2024)",
    tags: ["Retail", "Warehouse Club", "Membership"],
    linkedin: "https://www.linkedin.com/company/costco-wholesale/",
    website: "https://costco.com/",
    revenue: "$254.5B (2024)"
  },

  // McDonald's
  {
    name: "McDonald's",
    salary: "$133,000",
    description: "McDonald’s Corporation is an American fast food restaurant corporation.",
    type: "Public",
    logo: "https://logo.clearbit.com/mcdonalds.com",
    location: "Chicago, Illinois, USA",
    foundingDate: "May 15, 1940",
    employeeSize: "150,000 (2023)",
    tags: ["Fast Food", "Restaurants", "Real Estate"],
    linkedin: "https://www.linkedin.com/company/mcdonalds/",
    website: "https://www.mcdonalds.com/",
    revenue: "$25.49B (2023)"
  },

  // American Airlines
  {
    name: "American Airlines",
    salary: "$105,000",
    description: "American Airlines, Inc. is a major U.S. airline headquartered in Fort Worth, Texas, and is the world’s largest airline by passengers carried.",
    type: "Public",
    logo: "https://logo.clearbit.com/aa.com",
    location: "Fort Worth, Texas, USA",
    foundingDate: "1930",
    employeeSize: "103,440 (2024)",
    tags: ["Airline", "Transportation", "Aviation"],
    linkedin: "https://www.linkedin.com/company/american-airlines/",
    website: "https://aa.com/",
    revenue: "$49.6B (2024)"
  },

  // Boeing
  {
    name: "Boeing",
    salary: "$94,800",
    description: "The Boeing Company is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, and missiles worldwide.",
    type: "Public",
    logo: "https://logo.clearbit.com/boeing.com",
    location: "Crystal City, Virginia, USA",
    foundingDate: "July 15, 1916",
    employeeSize: "172,000 (2024)",
    tags: ["Aerospace", "Defense"],
    linkedin: "https://www.linkedin.com/company/boeing/",
    website: "https://boeing.com/",
    revenue: "$66.5B (2024)"
  },

  // Garmin
  {
    name: "Garmin",
    salary: "$88,580",
    description: "Garmin Ltd. is an American multinational technology company that designs and manufactures GPS-enabled products and wearables.",
    type: "Public",
    logo: "https://logo.clearbit.com/garmin.com",
    location: "Olathe, Kansas, USA",
    foundingDate: "October 1989",
    employeeSize: "21,800 (2024)",
    tags: ["GPS", "Hardware", "Wearables"],
    linkedin: "https://www.linkedin.com/company/garmin/",
    website: "https://garmin.com/",
    revenue: "$6.29B (2024)"
  },

  // PepsiCo
  {
    name: "PepsiCo",
    salary: "$199,314",
    description: "PepsiCo, Inc. is an American multinational food, snack, and beverage corporation headquartered in Harrison, New York.",
    type: "Public",
    logo: "https://logo.clearbit.com/pepsico.com",
    location: "Harrison, New York, USA",
    foundingDate: "June 8, 1965",
    employeeSize: "318,000 (2024)",
    tags: ["Food & Beverage", "Snacks", "Beverages"],
    linkedin: "https://www.linkedin.com/company/pepsico/",
    website: "https://pepsico.com/",
    revenue: "$91.85B (2024)"
  },

  // Toast
  {
    name: "Toast",
    salary: "€124,000",
    description: "Toast, Inc. is an American cloud-based restaurant management software company based in Boston, Massachusetts, offering a point of sale system for restaurants and bars.",
    type: "Public",
    logo: "https://logo.clearbit.com/toasttab.com",
    location: "Boston, Massachusetts, USA",
    foundingDate: "2012",
    employeeSize: "5,700 (2024)",
    tags: ["Point of Sale", "Restaurant Software", "SaaS"],
    linkedin: "https://www.linkedin.com/company/toast-inc",
    website: "https://www.toasttab.com",
    revenue: "$3.9B (2023)"
  },

  // Nokia
  {
    name: "Nokia",
    salary: "$115,000",
    description: "Nokia Corporation is a Finnish multinational telecommunications, IT, and consumer electronics company originally founded as a pulp mill in 1865.",
    type: "Public",
    logo: "https://logo.clearbit.com/nokia.com",
    location: "Espoo, Finland",
    foundingDate: "May 12, 1865",
    employeeSize: "78,434 (2024)",
    tags: ["Telecommunications", "Consumer Electronics", "Networking"],
    linkedin: "https://www.linkedin.com/company/nokia/",
    website: "https://nokia.com/",
    revenue: "€19.22B (2024)"
  }
  
];

export default companies;
