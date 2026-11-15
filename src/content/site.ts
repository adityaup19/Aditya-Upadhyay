/**
 * All public copy lives here. Replace text, links, and image URLs
 * when the final details are ready. A project `image` replaces the artwork.
 */

export type PressItem = {
  date: string;
  publication: string;
  title: string;
  summary: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  overview: string[];
  tags: string[];
  year: string;
  href?: string;
  mark: string;
  gradient: string;
  image?: string;
};

export const site = {
  name: "Aditya Upadhyay",
  mark: "Aditya Upadhyay",
  email: "upadhyayaditya19@gmail.com",
  phone: "",
  cv: "",
  hero:
    "I'm an Economics graduate with experience in finance and technology. I founded Oasis Orbital and built Call a Satellite, a live voice conversation with spacecraft powered by real orbital data.",
  statement:
    "Call a Satellite lets anyone talk to the International Space Station and other spacecraft. The answers come from live orbital data, not a script. It started in a Stony Brook classroom and now runs on a science museum floor.",
  disciplines: ["Product", "Voice", "Orbit"],
  ticker: ["Oasis Orbital", "Call a Satellite", "Visa Risk", "MarketMind", "SHU"],
  words: ["Finance", "Software"],
  workNote: "Showcasing work from the last few years ©2024—2026",
  aboutLede: "Founder of Oasis Orbital. Builder of Call a Satellite.",
  about: [
    "I'm a Stony Brook University graduate (Class of 2025), where I studied Quantitative Economics. My background spans finance, technology, and building things that bring ideas to life.",
    "I founded Oasis Orbital and created Call a Satellite, a platform that lets people have real-time voice conversations with spacecraft using live orbital data. What started as an idea grew into a classroom demonstration at Stony Brook and later an interactive exhibit at Sacred Heart University’s Discovery Science Center and Planetarium, where visitors interacted with it over 900 times.",
    "I'm interested in the intersection of technology, business, and space, and I'm always looking for opportunities to learn, build, and collaborate.",
  ],
  services: ["Voice interfaces", "Live orbital data", "Museum exhibits", "Education"],
  industries: ["Space", "Museums", "Education", "Science"],
  experience: [
    { role: "Founder, Oasis Orbital", time: "2025—Present" },
    { role: "Call a Satellite at SHU Discovery", time: "2026" },
    { role: "Classroom debut, Stony Brook", time: "2025" },
    { role: "Quantitative Economics, Stony Brook", time: "2025" },
  ],
  pressLede: "Coverage of Aditya Upadhyay and Oasis Orbital.",
  pressEmpty: "Mentions and features will be listed here.",
  press: [
    {
      date: "Sep 24, 2026",
      publication: "Stony Brook Matters",
      title: "From Stony Brook to the Stars: Aditya Upadhyay ’25 Launches Call a Satellite",
      summary: "A Q&A on founding Oasis Orbital and launching Call a Satellite after Stony Brook.",
      href: "https://sbmatters.stonybrook.edu/from-stony-brook-to-the-stars-aditya-upadhyay-25-launches-call-a-satellite/",
    },
    {
      date: "Jul 20, 2026",
      publication: "Innovate Long Island",
      title: "You have (space) questions … Oasis Orbital has answers",
      summary: "How the platform lets students and museum visitors ask satellites questions.",
      href: "https://www.innovateli.com/you-have-space-questions-oasis-orbital-has-answers/",
    },
    {
      date: "Jun 22, 2026",
      publication: "News 12",
      title: "A new exhibit gives visitors the chance to learn about the ISS",
      summary: "The Discovery Science Center exhibit that lets visitors learn about the space station.",
      href: "https://newyork.news12.com/new-exhibit-gives-people-the-unique-chance-to-learn-about-international-space-station",
    },
    {
      date: "Jun 22, 2026",
      publication: "Connecticut Post",
      title: "Call a Satellite exhibit featured in Connecticut Post",
      summary: "Print coverage of the Call a Satellite exhibit.",
      href: "https://www.pressreader.com/usa/connecticut-post/20260622/281565182473094",
    },
    {
      date: "Jun 17, 2026",
      publication: "CT Insider",
      title: "New museum exhibit lets visitors learn about the International Space Station",
      summary: "Sacred Heart’s exhibit for learning about the International Space Station.",
      href: "https://www.ctinsider.com/entertainment/article/sacred-heart-international-space-station-exhibit-22309498.php",
    },
    {
      date: "Jun 17, 2026",
      publication: "Westfair Business Journal",
      title: "SHU Discovery Science Center & Planetarium launches ISS pilot",
      summary: "The planetarium’s pilot that puts visitors in conversation with the ISS.",
      href: "https://westfaironline.com/outer-space/shu-discovery-science-center-planetarium-to-launch-iss-pilot/",
    },
    {
      date: "Jun 17, 2026",
      publication: "SHU Discovery",
      title: "Interactive exhibit lets visitors talk to the ISS",
      summary: "The science center’s own note on the Call a Satellite exhibit.",
      href: "https://www.shudiscovery.org/news/call-a-satellite",
    },
    {
      date: "Jun 2026",
      publication: "MSN",
      title: "New museum exhibit lets visitors learn about the ISS",
      summary: "Coverage of the museum exhibit on the International Space Station.",
      href: "https://www.msn.com/en-us/news/technology/new-museum-exhibit-lets-visitors-learn-about-the-international-space-station/vi-AA25TwkI",
    },
    {
      date: "Jun 2026",
      publication: "The News-Times",
      title: "Discovery Science Center hosts an interactive space experience",
      summary: "The planetarium’s interactive space experience with Call a Satellite.",
      href: "https://www.facebook.com/newstimes/posts/discovery-science-center-planetarium-will-host-an-interactive-space-experience-w/1414844237331532/",
    },
    {
      date: "Jun 2026",
      publication: "Record-Journal",
      title: "Call a Satellite featured by Record-Journal",
      summary: "A note on the Call a Satellite exhibit.",
      href: "https://x.com/Record_Journal/status/2067295551863885982",
    },
  ] as PressItem[],
  contactLede: "Have an idea, want to work together, or just say hello? I’d love to hear from you!",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adityaau/" },
    { label: "GitHub", href: "https://github.com/adityaup19" },
    { label: "X", href: "https://x.com/adityau199" },
  ],
  projects: [
    {
      slug: "call-a-satellite",
      title: "Call a Satellite",
      tagline: "Talk to the International Space Station through a live voice conversation powered by real orbital data.",
      overview: [
        "Call a Satellite is the first product from Oasis Orbital. Anyone can ask a spacecraft a question and hear a spoken answer backed by live orbital data: where it is, how fast it is moving, and what it sees below.",
        "It tracks spacecraft with fresh orbital elements and SGP4, then turns that telemetry into a voice conversation. The ISS, Hubble, Tiangong, Landsat 9, Terra, and NOAA-20 each answer from their own mission. It debuted in a Stony Brook classroom and ran as an exhibit at Sacred Heart University’s Discovery Science Center and Planetarium.",
      ],
      tags: ["Voice", "Space"],
      year: "2026",
      href: "https://www.callasatellite.dev/",
      mark: "CS",
      gradient: "linear-gradient(160deg, #070b14 0%, #16325c 48%, #d7e4f2 130%)",
    },
    {
      slug: "devproof",
      title: "DevProof",
      tagline: "Verified student contributions to real software products. Discontinued after one year.",
      overview: [
        "DevProof verified that a student had contributed to a real software product. A small group of people used it.",
        "It was a narrow SaaS, built to do one job clearly. It lasted one year and is now discontinued.",
      ],
      tags: ["Discontinued", "SaaS"],
      year: "1 year",
      href: "https://www.devproof.tech/",
      mark: "DP",
      gradient: "linear-gradient(155deg, #0d1c16 0%, #1b4a36 48%, #cbb892 130%)",
    },
    {
      slug: "visarisk",
      title: "VisaRisk",
      tagline: "Visa risk simulation from public cases and documented patterns.",
      overview: [
        "VisaRisk simulates visa risk using public cases and documented patterns. It is a working tool, not a concept deck.",
        "The interface is built to make a dense, high-stakes question readable, so someone can see the pattern instead of guessing at it.",
      ],
      tags: ["Simulation", "Product"],
      year: "2026",
      href: "https://visarisk.vercel.app/",
      mark: "VR",
      gradient: "linear-gradient(160deg, #101820 0%, #1a4578 52%, #e4cbb4 128%)",
    },
    {
      slug: "mirror",
      title: "Mirror",
      tagline: "A choice-based pattern engine that reveals behavioral trends over time.",
      overview: [
        "Mirror is a choice-based pattern engine. Each choice adds to a picture of how someone behaves over time.",
        "It is in beta. The product is the experiment: small decisions, collected carefully, turned into something a person can actually see.",
      ],
      tags: ["Experiment", "Product"],
      year: "2026",
      href: "https://mirror-umber-one.vercel.app/",
      mark: "MR",
      gradient: "linear-gradient(165deg, #1a120c 0%, #6b4528 46%, #f0e6d4 120%)",
    },
    {
      slug: "market-mind",
      title: "Market Mind",
      tagline: "A live dashboard of market regimes, from risk-on to risk-off, using the S&P 500, volatility, and breadth.",
      overview: [
        "Market Mind is a Streamlit dashboard that reads the market’s mood. It combines momentum, volatility, and the relationship between the S&P 500 and the VIX into a single score: risk-on, neutral, or risk-off.",
        "The app pulls live market data, shows a sector-rotation view, and includes a small backtest. The code is on GitHub.",
      ],
      tags: ["Finance", "Data"],
      year: "2025",
      href: "https://github.com/adityaup19/Market-mind",
      mark: "MM",
      gradient: "linear-gradient(155deg, #14110c 0%, #3d4a28 50%, #e6d7a8 125%)",
    },
    {
      slug: "novacore",
      title: "NovaCore",
      tagline: "A simulator for the life-support loops of an orbital habitat.",
      overview: [
        "NovaCore models a closed-loop life-support system for a small orbital habitat. It tracks carbon dioxide scrubbing, oxygen regeneration, temperature, and humidity as the inputs change.",
        "Built in Python and Streamlit, with controls for metabolic rate, scrubber efficiency, and heat. Telemetry can be exported. The code is on GitHub.",
      ],
      tags: ["Space", "Simulation"],
      year: "2025",
      href: "https://github.com/adityaup19/NovaCore",
      mark: "NC",
      gradient: "linear-gradient(160deg, #0c1214 0%, #1d4a4a 48%, #d5ebe4 128%)",
    },
    {
      slug: "fed-vix",
      title: "Fed Rates and the VIX",
      tagline: "How Federal Reserve rate decisions moved stock-market volatility from 2020 to 2024.",
      overview: [
        "This paper looks at the short-term effect of U.S. Federal Reserve interest-rate decisions on stock-market volatility, using the VIX as the measure.",
        "It covers 25 FOMC announcements from 2020 to 2024 and compares how the VIX moved around hikes, cuts, and holds. The research and code are on GitHub.",
      ],
      tags: ["Research", "Economics"],
      year: "2025",
      href: "https://github.com/adityaup19/Econ-fed-snp500-analysis",
      mark: "FX",
      gradient: "linear-gradient(150deg, #121014 0%, #3a2748 46%, #e4d4ea 130%)",
    },
    {
      slug: "agent",
      title: "AI Automation Agent",
      tagline: "A focused agent, kept private until it is reliable.",
      overview: [
        "This one stays private until it works. A focused automation agent, not a pitch.",
        "It ships when it is reliable. Until then it lives here as work in progress.",
      ],
      tags: ["AI", "Engineering"],
      year: "2026",
      mark: "AI",
      gradient: "linear-gradient(150deg, #121212 0%, #3c3c3c 42%, #9a9a9a 100%)",
    },
  ] as Project[],
};

export function projectBySlug(slug: string) {
  return site.projects.find((project) => project.slug === slug);
}
