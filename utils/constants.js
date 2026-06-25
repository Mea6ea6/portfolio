const initialTools = [
  {
    name: "CSS",
    title: "Learn more about CSS",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS",
    icon: "css3",
    color: "1572B6",
  },
  {
    name: "HTML",
    title: "Learn more about HTML",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
    icon: "html5",
    color: "E34F26",
  },
  {
    name: "JS",
    title: "Learn more about JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    icon: "javascript",
    color: "F7DF1E",
  },
  {
    name: "React",
    title: "Learn more about React",
    link: "https://legacy.reactjs.org/",
    icon: "react",
    color: "61DAFB",
  },
  {
    name: "VS Code",
    title: "Learn more about VS Code",
    link: "https://code.visualstudio.com/docs/editor/whyvscode",
    icon: "visualstudiocode",
    color: "007ACC",
  },
  {
    name: "GitHub",
    title: "Learn more about GitHub",
    link: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git",
    icon: "github",
    color: "181717",
  },
  {
    name: "Git",
    title: "Learn more about Git",
    link: "https://www.git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F",
    icon: "git",
    color: "F05032",
  },
  {
    name: "Figma",
    title: "Learn more about Figma",
    link: "https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma",
    icon: "figma",
    color: "F24E1E",
  },
];

const initialTimeline = [
  {
    date: "2021 – 2023",
    title: "College of Computer Science and Programming",
    desc: "Financial University under the Government of the Russian Federation.",
  },
  {
    date: "2021 – 2023",
    title: "Freelance Frontend Developer",
    desc: "Built landing pages for crypto and NFT projects while studying — first real client work.",
  },
  {
    date: "2023 – 2024",
    title: "Yandex Practicum",
    desc: "Web development course — HTML, CSS, JS, React, Node.js, MongoDB.",
  },
  {
    date: "2024 – 2025",
    title: "Surge — Co-founder & Frontend Lead",
    desc: "Led frontend development for the team's first major project — a full-scale jewelry pawnshop platform. The team disbanded after internal conflicts.",
  },
  {
    date: "2023 – present",
    title: "Russian-Armenian University",
    desc: "Studying psychology. Prep group in 2023–2024, now a full student.",
  },
  {
    date: "2024 – present",
    title: "Freelance",
    desc: "Ongoing — landing pages, small client projects, occasional collaborations.",
  },
];

const initialProjects = [
  {
    title: "BeastBot",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-beastbot",
    preview: "https://mea6ea6.github.io/crypto-beastbot/",
  },
  {
    title: "SHIB",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-shib",
    preview: "https://mea6ea6.github.io/crypto-shib/",
  },
  {
    title: "Aptos",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-aptos",
    preview: "https://mea6ea6.github.io/crypto-aptos/",
  },
  {
    title: "Phantom",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-phantom",
    preview: "https://mea6ea6.github.io/crypto-phantom/",
  },
  {
    title: "Serum",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-serum",
    preview: "https://mea6ea6.github.io/crypto-serum/",
  },
  {
    title: "Solscan (vol. 1)",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-solscan-1",
    preview: "https://mea6ea6.github.io/crypto-solscan-1/",
  },
  {
    title: "Solscan (vol. 2)",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-solscan-2",
    preview: "https://mea6ea6.github.io/crypto-solscan-2/",
  },
  {
    title: "Terium",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-terium",
    preview: "https://mea6ea6.github.io/crypto-terium/",
  },
  {
    title: "Simple Swap",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-simple-swap",
    preview: "https://mea6ea6.github.io/crypto-simple-swap/",
  },
  {
    title: "MagicEden",
    tag: "landing",
    github: "https://github.com/Mea6ea6/crypto-magic-eden",
    preview: "https://mea6ea6.github.io/crypto-magic-eden/",
  },
  {
    title: "AppleSoldOut",
    tag: "landing",
    github: "https://github.com/Mea6ea6/apple-sold-out",
    preview: "https://mea6ea6.github.io/apple-sold-out/",
  },
  {
    title: "How to learn",
    tag: "course",
    github: "https://github.com/Mea6ea6/how-to-learn",
    preview: "https://mea6ea6.github.io/how-to-learn/",
  },
  {
    title: "Russian travel",
    tag: "course",
    github: "https://github.com/Mea6ea6/russian-travel",
    preview: "https://mea6ea6.github.io/russian-travel/",
  },
  {
    title: "Mesto",
    tag: "course",
    github: "https://github.com/Mea6ea6/mesto",
    preview: "https://mea6ea6.github.io/mesto/",
  },
  {
    title: "EXPI",
    tag: "multi-page",
    github: "https://github.com/Mea6ea6/expi",
    preview: "https://mea6ea6.github.io/expi/",
  },
  {
    title: "VIPAWN Mockup",
    tag: "multi-page",
    github: "https://github.com/Mea6ea6/vipawn-mockup",
    preview: "https://mea6ea6.github.io/vipawn-mockup/",
  },
  {
    title: "VIPAWN Draft",
    tag: "multi-page",
    github: "https://github.com/Mea6ea6/vipawn",
    preview: "https://mea6ea6.github.io/vipawn/",
  },
];
