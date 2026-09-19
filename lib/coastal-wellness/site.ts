// Real business content, taken from coastalwellness.net.

export const site = {
  name: "Coastal Wellness & Life Coaching Center",
  shortName: "Coastal Wellness",
  tagline: "Helping You Heal. Empowering You to Thrive.",
  subhead: "Professional Counseling & Life Coaching",
  description:
    "Coastal Wellness & Life Coaching Center provides counseling and therapy services to Melbourne, FL.",
  phone: "(321) 757-4015",
  phoneHref: "tel:+13217574015",
  text: "(321) 286-7033",
  textHref: "sms:+13212867033",
  email: "contact@coastalwellness.net",
  hours: "By Appointment Only",
  portal: "https://www.coastalwellnesssportal.net/",
  giftCard: "https://squareup.com/gift/CT5XYZBVNA3DQ/order",
  careCredit: "https://go.carecredit.com/consumer/home?sitecode=CCCABDS5X",
  psychologyToday:
    "https://www.psychologytoday.com/us/therapists/neeley-r-hughey-melbourne-fl/406717",
  facebook: "https://www.facebook.com/174893266563316",
  instagram: "https://www.instagram.com/coastalwellnessllc",
  rating: { value: "4.9", count: 56 },
};

export const locations = [
  {
    name: "Suntree Office",
    address1: "3270 Suntree Blvd",
    address2: "Suite 103 A",
    city: "Melbourne, FL 32940",
    directions:
      "https://www.google.com/maps?daddr=3270+Suntree+Blvd+Suite+103+A+Melbourne+FL+32940+US",
    note: null as string | null,
  },
  {
    name: "Guava Avenue Office",
    address1: "1401 Guava Ave",
    address2: "(1st Floor)",
    city: "Melbourne, FL 32935",
    directions: "https://maps.app.goo.gl/cuXNs9SJagdCN74UA",
    note: 'Located inside "Ways For Life"',
  },
];

export const awards = [
  "Best of Florida 2026",
  "Best of Florida 2025 Regional Winner",
  "2026 Brevard Community's Choice Awards",
  "Verified by Psychology Today",
  "All Are Welcome Here",
  "CareCredit Financing Available",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Meet Our Team" },
  { href: "/services", label: "Types of Therapy" },
  { href: "/#supervision", label: "Supervision" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#locations", label: "Locations" },
];

export type TherapyCard = {
  slug: string;
  title: string;
  kicker: string;
  body: string;
  photo: string;
};

// The practice's core treatment approaches.
export const therapyCards: TherapyCard[] = [
  {
    slug: "emdr",
    title: "EMDR Therapy",
    kicker: "Trauma & PTSD",
    body: "Eye Movement Desensitization and Reprocessing helps the brain reprocess distressing memories. Available as weekly sessions or as focused EMDR Intensives.",
    photo: "1573497620053-ea5300f94f21",
  },
  {
    slug: "child-therapy",
    title: "Child Therapy",
    kicker: "Children & Teens",
    body: "A developmentally attuned space where children can work through big feelings, behavior and anxiety — with parents supported alongside them.",
    photo: "1503454537195-1dcabb73ffb9",
  },
  {
    slug: "art-therapy",
    title: "ART & Music Therapy",
    kicker: "Expressive Therapies",
    body: "Accelerated Resolution Therapy, art and music therapy give you a way through when talking alone isn't reaching what needs to move.",
    photo: "1513364776144-60967b0f800f",
  },
  {
    slug: "vibroacoustic-therapy",
    title: "Vibroacoustic Therapy",
    kicker: "Alternative Therapies",
    body: "Low-frequency sound vibration used alongside therapy to calm the nervous system, ease tension and support deeper relaxation.",
    photo: "1511671782779-c97d3d27a1d4",
  },
  {
    slug: "virtual-reality-exposure-therapy",
    title: "Virtual Reality Exposure",
    kicker: "Alternative Therapies",
    body: "Guided, controlled VR exposure for phobias and anxiety — facing what's hard at your pace, with your therapist beside you.",
    photo: "1592478411213-6153e4ebc07d",
  },
];

export const treats = [
  "Anxiety",
  "Depression",
  "Trauma",
  "PTSD",
  "Grief & Loss",
  "Life Transitions",
  "Relationship Issues",
  "Self-Esteem",
];

export const quickLinks = [
  { label: "Meet Our Team", href: "/team" },
  { label: "Pricing and Policies", href: "/#pricing" },
  { label: "What Is EMDR?", href: "/services#emdr" },
  { label: "Vibroacoustic Therapy", href: "/services#vibroacoustic-therapy" },
  { label: "Supervision & Consultation", href: "/#supervision" },
  { label: "Contact Us", href: "/#contact" },
];
