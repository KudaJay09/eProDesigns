// Centralized content so the page reads coherently and is easy to edit later.

export const site = {
  brand: "ePro Designz",
  brandTag: "ePro",
  tagline: "Independent graphic designer & art director",
  city: "Harare — working worldwide",
  email: "eddiejay778@gmail.com",
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/epro_designer26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/ePro-Dezign/61575854130697/?rdid=2yiKK9VeYjR3We1h&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GPJGFzUej%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio",
    },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
} as const;

export const nav = [
  { label: "Index", href: "#index" },
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    no: "01",
    title: "Aevum",
    subtitle: "Identity, Editorial",
    year: "2025",
    blurb:
      "A visual identity for a slow-fashion house rooted in archival craft.",
    palette: ["#0c0a09", "#b5462c", "#f4f1ea"],
    span: "wide" as const, // wide | tall
  },
  {
    no: "02",
    title: "Folio & Form",
    subtitle: "Art Direction",
    year: "2025",
    blurb: "Editorial system and art direction for an independent quarterly.",
    palette: ["#3d4a3a", "#f4f1ea", "#b5462c"],
    span: "tall" as const,
  },
  {
    no: "03",
    title: "North Standard",
    subtitle: "Brand Identity",
    year: "2024",
    blurb: "A monoline mark and wayfinding language for a Helsinki roastery.",
    palette: ["#1c1917", "#e8e2d5", "#0c0a09"],
    span: "wide" as const,
  },
  {
    no: "04",
    title: "Salt & Atlas",
    subtitle: "Book Design",
    year: "2024",
    blurb: "A 240-page travelogue printed in two colors on uncoated stock.",
    palette: ["#b5462c", "#f4f1ea", "#3d4a3a"],
    span: "tall" as const,
  },
  {
    no: "05",
    title: "Quiet Hours",
    subtitle: "Packaging",
    year: "2024",
    blurb: "Naming, identity, and packaging for a small-batch tea studio.",
    palette: ["#0c0a09", "#d97757", "#f4f1ea"],
    span: "wide" as const,
  },
  {
    no: "06",
    title: "Marginalia",
    subtitle: "Type Design",
    year: "2023",
    blurb: "A bespoke display serif drawn for a poetry press in Porto.",
    palette: ["#3d4a3a", "#f4f1ea", "#0c0a09"],
    span: "tall" as const,
  },
] as const;

export const services = [
  {
    no: "01",
    name: "Flyer Design",
    detail:
      "Our flyer designs are tailored to grab attention and communicate your message effectively. We combine creativity with strategic design principles to produce flyers that leave a lasting impact on your audience.",
  },
  {
    no: "02",
    name: "Brand Packaging",
    detail:
      "We specialize in creating visually captivating packaging designs that not only protect your products but also tell your brand's story. Our designs are crafted to stand out on the shelves and resonate with your target audience.",
  },
  {
    no: "03",
    name: "Logo Design",
    detail:
      "We create unique and memorable logos that represent your brand's identity. Our logo designs are crafted to be versatile, timeless, and instantly recognizable, helping your brand make a strong impression.",
  },
  {
    no: "04",
    name: "Banner Design",
    detail:
      "Our banner designs are visually striking and designed to capture attention in both digital and physical spaces. We focus on creating banners that effectively convey your message and enhance your brand's visibility.",
  },
] as const;

export const process = [
  {
    no: "01",
    name: "Listen",
    body: "A 60-minute call to understand the work, the people, and the constraints.",
  },
  {
    no: "02",
    name: "Frame",
    body: "A short written brief and moodboard. We agree on direction before drawing.",
  },
  {
    no: "03",
    name: "Draw",
    body: "Two or three directions, presented in the round. Tight, focused, printable.",
  },
  {
    no: "04",
    name: "Build",
    body: "Refinement, guidelines, and handoff — or production, if you'd like.",
  },
] as const;

export const press = [
  { source: "It's Nice That", line: "“A rare restraint in the work.”" },
  {
    source: "Eye Magazine",
    line: "“Editorial discipline, applied with care.”",
  },
  {
    source: "Type Directors Club",
    line: "Certificate of Typographic Excellence, 2024.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Eddie translated a decade of work into a single mark. The system that followed is the most considered I've shipped in twenty years.",
    name: "Ines Cabral",
    role: "Founder, Aevum",
  },
  {
    quote:
      "She edits as well as she designs. The book is quieter, sharper, and more confident than we imagined possible.",
    name: "Tomás Almeida",
    role: "Editor, Salt & Atlas",
  },
  {
    quote:
      "Working with Eddie is the closest thing to a creative partnership I've found in a freelancer.",
    name: "Sofia Lindgren",
    role: "Creative Director, North Standard",
  },
] as const;
