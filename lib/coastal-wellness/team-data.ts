// Illustrative placeholder roster for the design concept — the real 17 clinician
// photos, bios and credentials will replace these during WordPress handoff.
// `photo` is an Unsplash photo id, resolved via the `unsplash()` helper.

export type Population =
  | "Children"
  | "Teens"
  | "Adults"
  | "Couples"
  | "Families"
  | "Veterans & First Responders";

export type Clinician = {
  id: string;
  name: string;
  credentials: string;
  title: string;
  location: "Melbourne" | "Rockledge" | "Melbourne & Telehealth" | "Rockledge & Telehealth" | "Telehealth Only";
  populations: Population[];
  specialties: string[];
  bio: string;
  photo: string;
};

export const clinicians: Clinician[] = [
  {
    id: "avery-lindholm",
    name: "Avery Lindholm",
    credentials: "LMHC, EMDR Certified",
    title: "Clinical Director & Licensed Mental Health Counselor",
    location: "Melbourne",
    populations: ["Adults", "Veterans & First Responders"],
    specialties: ["Trauma & PTSD", "Anxiety", "Grief & Loss"],
    bio: "Avery leads our clinical team and specializes in trauma recovery for veterans and first responders, blending EMDR with a grounded, no-nonsense style.",
    photo: "1560250097-0b93528c311a",
  },
  {
    id: "priya-nazari",
    name: "Priya Nazari",
    credentials: "LCSW",
    title: "Licensed Clinical Social Worker",
    location: "Rockledge",
    populations: ["Adults", "Couples"],
    specialties: ["Relationship Issues", "Anxiety", "Life Transitions"],
    bio: "Priya helps individuals and couples navigate life transitions with warmth and practical tools drawn from attachment-based therapy.",
    photo: "1573497019940-1c28c88b4f3e",
  },
  {
    id: "marcus-oyelaran",
    name: "Marcus Oyelaran",
    credentials: "LMFT",
    title: "Licensed Marriage & Family Therapist",
    location: "Melbourne",
    populations: ["Couples", "Families"],
    specialties: ["Relationship Issues", "Family Conflict", "Communication"],
    bio: "Marcus works with couples and families untangling communication patterns, using Gottman-informed methods to rebuild trust and connection.",
    photo: "1522529599102-193c0d76b5b6",
  },
  {
    id: "hannah-brightwell",
    name: "Hannah Brightwell",
    credentials: "RPT, LMHC",
    title: "Registered Play Therapist",
    location: "Rockledge",
    populations: ["Children", "Families"],
    specialties: ["Play Therapy", "Anxiety", "Behavioral Concerns"],
    bio: "Hannah uses play therapy to help children process big feelings, partnering closely with parents on strategies that carry over at home.",
    photo: "1489424731084-a5d8b219a5bb",
  },
  {
    id: "diego-fontanez",
    name: "Diego Fontanez",
    credentials: "LCSW, Brainspotting Certified",
    title: "Licensed Clinical Social Worker",
    location: "Melbourne & Telehealth",
    populations: ["Adults", "Veterans & First Responders"],
    specialties: ["Trauma & PTSD", "Substance Use", "Anger Management"],
    bio: "A former first responder himself, Diego brings lived experience and Brainspotting expertise to trauma work with veterans and first responders.",
    photo: "1500648767791-00dcc994a43e",
  },
  {
    id: "camille-desrosiers",
    name: "Camille Desrosiers",
    credentials: "LMHC",
    title: "Licensed Mental Health Counselor",
    location: "Rockledge",
    populations: ["Teens", "Adults"],
    specialties: ["Anxiety", "Depression", "Self-Esteem"],
    bio: "Camille works with teens and young adults on anxiety and self-esteem using CBT and a genuinely collaborative, low-pressure approach.",
    photo: "1573496359142-b8d87734a5a2",
  },
  {
    id: "jordan-abernathy",
    name: "Jordan Abernathy",
    credentials: "LMHC, CST",
    title: "Licensed Mental Health Counselor",
    location: "Melbourne",
    populations: ["Adults", "Couples"],
    specialties: ["Intimacy & Connection", "Anxiety", "Life Transitions"],
    bio: "Jordan creates a candid, judgment-free space for adults and couples working through intimacy, connection, and identity questions.",
    photo: "1552374196-c4e7ffc6e126",
  },
  {
    id: "renata-castellanos",
    name: "Renata Castellanos",
    credentials: "LCSW, PMH-C",
    title: "Perinatal Mental Health Certified Clinician",
    location: "Rockledge & Telehealth",
    populations: ["Adults", "Families"],
    specialties: ["Postpartum & Perinatal", "Anxiety", "Grief & Loss"],
    bio: "Renata supports new and expecting parents through postpartum anxiety and depression with a compassionate, evidence-based approach.",
    photo: "1531123897727-8f129e1688ce",
  },
  {
    id: "theo-vandermeer",
    name: "Theo Vandermeer",
    credentials: "LMHC",
    title: "Licensed Mental Health Counselor",
    location: "Melbourne",
    populations: ["Teens", "Families"],
    specialties: ["ADHD", "Behavioral Concerns", "Family Conflict"],
    bio: "Theo works with teens and families navigating ADHD and behavioral challenges, focusing on practical routines that actually stick.",
    photo: "1519085360753-af0119f7cbe7",
  },
  {
    id: "simone-achterberg",
    name: "Simone Achterberg",
    credentials: "LCSW, DBT-Certified",
    title: "Licensed Clinical Social Worker",
    location: "Melbourne & Telehealth",
    populations: ["Teens", "Adults"],
    specialties: ["DBT", "Self-Harm & Crisis", "Emotion Regulation"],
    bio: "Simone runs our DBT skills track, helping teens and adults build emotion-regulation tools that hold up under real-life pressure.",
    photo: "1544717305-2782549b5136",
  },
  {
    id: "elias-whitcombe",
    name: "Elias Whitcombe",
    credentials: "LMHC",
    title: "Licensed Mental Health Counselor",
    location: "Rockledge",
    populations: ["Adults", "Veterans & First Responders"],
    specialties: ["Trauma & PTSD", "Sleep Issues", "Anger Management"],
    bio: "Elias, a Navy veteran, focuses on trauma and sleep disruption in fellow veterans, pairing clinical rigor with military cultural fluency.",
    photo: "1595152772835-219674b2a8a6",
  },
  {
    id: "nadia-okonkwo",
    name: "Nadia Okonkwo",
    credentials: "LMFT, RPT",
    title: "Licensed Marriage & Family Therapist",
    location: "Melbourne",
    populations: ["Children", "Families"],
    specialties: ["Play Therapy", "Family Conflict", "Grief & Loss"],
    bio: "Nadia works with families through major transitions — divorce, loss, and blended-family growing pains — centering the kids in the room.",
    photo: "1517841905240-472988babdf9",
  },
  {
    id: "wesley-thackeray",
    name: "Wesley Thackeray",
    credentials: "LCSW",
    title: "Licensed Clinical Social Worker",
    location: "Rockledge & Telehealth",
    populations: ["Adults"],
    specialties: ["Depression", "Chronic Illness Adjustment", "Life Transitions"],
    bio: "Wesley supports adults adjusting to chronic illness or major life changes, with a steady, practical style clients describe as easy to talk to.",
    photo: "1543610892-0b1f7e6d8ac1",
  },
  {
    id: "ines-carvalho",
    name: "Inês Carvalho",
    credentials: "LMHC",
    title: "Licensed Mental Health Counselor",
    location: "Melbourne",
    populations: ["Teens", "Adults"],
    specialties: ["Eating Concerns", "Anxiety", "Self-Esteem"],
    bio: "Inês specializes in eating concerns and body image, helping teens and adults rebuild a workable relationship with food and self.",
    photo: "1544725176-7c40e5a71c5e",
  },
  {
    id: "grayson-holt",
    name: "Grayson Holt",
    credentials: "LMHC, EMDR Trained",
    title: "Licensed Mental Health Counselor",
    location: "Melbourne",
    populations: ["Adults", "Couples"],
    specialties: ["Trauma & PTSD", "Relationship Issues", "Anxiety"],
    bio: "Grayson combines EMDR and couples work for clients whose relationship struggles are tangled up with earlier trauma.",
    photo: "1492562080023-ab3db95bfbce",
  },
  {
    id: "bianca-ferreira",
    name: "Bianca Ferreira",
    credentials: "LCSW",
    title: "Licensed Clinical Social Worker",
    location: "Rockledge",
    populations: ["Children", "Teens"],
    specialties: ["Anxiety", "OCD", "School Concerns"],
    bio: "Bianca works with anxious and perfectionistic kids and teens, using exposure-based CBT to shrink OCD and anxiety back down to size.",
    photo: "1580489944761-15a19d654956",
  },
  {
    id: "samuel-akintola",
    name: "Samuel Akintola",
    credentials: "LMHC",
    title: "Licensed Mental Health Counselor",
    location: "Telehealth Only",
    populations: ["Adults", "Veterans & First Responders"],
    specialties: ["Substance Use", "Anger Management", "Trauma & PTSD"],
    bio: "Samuel offers statewide telehealth for adults working through substance use and anger patterns rooted in unresolved trauma.",
    photo: "1463453091185-61582044d556",
  },
];
