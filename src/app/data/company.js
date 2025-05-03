const companies = [
  {
    name: "Google",
    salary: "$200,000",
    description: "A global technology leader specializing in internet-related services and products.",
    type: "Enterprise",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    elo: 9999,
    eloChange: 9999,
    location: "Mountain View, CA, USA",
    foundingDate: "1998",
    employeeSize: "182,502",
    tags: ["Search", "Advertising", "Cloud", "AI"],
    factors: [
      { name: "Brand Strength", value: "Very High" },
      { name: "Financial Health", value: "Excellent" },
      { name: "Employee Satisfaction", value: "4.7/5" },
      { name: "Innovation", value: "Top Tier" },
      { name: "Growth", value: "Strong" },
      { name: "Diversity", value: "A" }
    ]
  },
  {
    name: "Amazon",
    salary: "$190,000",
    description: "A multinational technology company focusing on e-commerce, cloud computing, and AI.",
    type: "Enterprise",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    elo: 9500,
    eloChange: 120,
    location: "Seattle, WA, USA",
    foundingDate: "1994",
    employeeSize: "1,525,000",
    tags: ["E-commerce", "Cloud", "Logistics", "AI"],
    factors: [
      { name: "Brand Strength", value: "Very High" },
      { name: "Financial Health", value: "Excellent" },
      { name: "Employee Satisfaction", value: "4.3/5" },
      { name: "Innovation", value: "High" },
      { name: "Growth", value: "Very Strong" },
      { name: "Diversity", value: "A-" }
    ]
  },
  {
    name: "Microsoft",
    salary: "$195,000",
    description: "A leading software company known for Windows, Office, and cloud services.",
    type: "Enterprise",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    elo: 9700,
    eloChange: 75,
    location: "Redmond, WA, USA",
    foundingDate: "1975",
    employeeSize: "221,000",
    tags: ["Software", "Cloud", "Productivity", "AI"],
    factors: [
      { name: "Brand Strength", value: "Very High" },
      { name: "Financial Health", value: "Excellent" },
      { name: "Employee Satisfaction", value: "4.6/5" },
      { name: "Innovation", value: "High" },
      { name: "Growth", value: "Strong" },
      { name: "Diversity", value: "A" }
    ]
  },
  {
    name: "Meta",
    salary: "$185,000",
    description: "A social technology company building products to connect people.",
    type: "Enterprise",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Meta_Platforms_Inc._logo.svg",
    elo: 9200,
    eloChange: -30,
    location: "Menlo Park, CA, USA",
    foundingDate: "2004",
    employeeSize: "67,317",
    tags: ["Social Media", "VR", "AI", "Advertising"],
    factors: [
      { name: "Brand Strength", value: "High" },
      { name: "Financial Health", value: "Very Good" },
      { name: "Employee Satisfaction", value: "4.2/5" },
      { name: "Innovation", value: "Very High" },
      { name: "Growth", value: "Moderate" },
      { name: "Diversity", value: "B+" }
    ]
  }
];

export default companies;
