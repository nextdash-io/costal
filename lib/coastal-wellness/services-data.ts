import type { LucideIcon } from "lucide-react";
import {
  Baby,
  User,
  HeartHandshake,
  Users,
  Shield,
  UsersRound,
  Waves,
  CloudRain,
  Flame,
  Compass,
  Brain,
  HeartCrack,
  Sparkles,
  Wine,
  Salad,
  Moon,
  RefreshCcw,
  Activity,
  School,
  Target,
  Layers,
  Puzzle,
  MessageCircle,
  Gamepad2,
  Network,
  Lightbulb,
  ShieldCheck,
  Wind,
  Building2,
  Video,
  UsersRound as GroupIcon,
  Clock,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceCategory = {
  id: string;
  label: string;
  heading: string;
  intro: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "who-we-help",
    label: "Who We Help",
    heading: "Support for every stage of life",
    intro:
      "From early childhood through adulthood, our clinicians work with individuals and families across a wide range of life stages and circumstances.",
    items: [
      {
        title: "Children & Adolescents",
        description: "Play-based and talk therapy for kids and tweens navigating big emotions, behavior, or school stress.",
        icon: Baby,
      },
      {
        title: "Teens",
        description: "A steady, non-judgmental space for teens facing anxiety, identity questions, and relationship pressure.",
        icon: User,
      },
      {
        title: "Adults",
        description: "Individual therapy for adults working through anxiety, depression, trauma, or life transitions.",
        icon: User,
      },
      {
        title: "Couples & Marriage",
        description: "Evidence-based couples counseling to rebuild communication, trust, and connection.",
        icon: HeartHandshake,
      },
      {
        title: "Families",
        description: "Family therapy that addresses conflict, transitions, and communication across generations.",
        icon: Users,
      },
      {
        title: "Veterans & First Responders",
        description: "Trauma-informed care from clinicians with direct experience in military and first-responder culture.",
        icon: Shield,
      },
      {
        title: "Group Therapy",
        description: "Small, facilitated groups for shared experiences like grief, parenting, or skills-building.",
        icon: UsersRound,
      },
    ],
  },
  {
    id: "concerns",
    label: "Areas We Treat",
    heading: "Specialties across the full spectrum of care",
    intro:
      "Our team includes clinicians with advanced training across a broad range of concerns — so you can find the right fit, not just the next available appointment.",
    items: [
      { title: "Anxiety", description: "Practical, proven tools to quiet a racing mind and reclaim your day.", icon: Wind },
      { title: "Depression", description: "Support for low mood, motivation, and finding your way back to yourself.", icon: CloudRain },
      { title: "Trauma & PTSD", description: "Specialized trauma treatment including EMDR and Brainspotting.", icon: Waves },
      { title: "Grief & Loss", description: "Compassionate support through loss of any kind, at any pace.", icon: HeartCrack },
      { title: "Life Transitions", description: "Guidance through career shifts, relocation, divorce, and new chapters.", icon: Compass },
      { title: "Anger Management", description: "Understanding and reshaping anger patterns before they cost you.", icon: Flame },
      { title: "ADHD & Focus", description: "Strategies for attention, organization, and executive functioning.", icon: Target },
      { title: "Relationship Issues", description: "Working through conflict, trust, and connection with partners or family.", icon: MessageCircle },
      { title: "Self-Esteem & Identity", description: "Building a steadier sense of self-worth and identity.", icon: Sparkles },
      { title: "Substance Use", description: "Non-judgmental support for substance use and recovery.", icon: Wine },
      { title: "Eating Concerns", description: "Support for disordered eating and body image, in coordination with your care team.", icon: Salad },
      { title: "Postpartum & Perinatal", description: "Specialized care for pregnancy, postpartum, and new-parent mental health.", icon: Baby },
      { title: "Sleep Issues", description: "Addressing the anxiety and habits behind chronic sleep struggles.", icon: Moon },
      { title: "OCD", description: "Exposure-based treatment for intrusive thoughts and compulsive patterns.", icon: RefreshCcw },
      { title: "Chronic Illness Adjustment", description: "Emotional support for living with chronic or new health diagnoses.", icon: Activity },
      { title: "School & Behavioral Concerns", description: "Support for school stress, behavior challenges, and family coordination.", icon: School },
    ],
  },
  {
    id: "approaches",
    label: "Treatment Approaches",
    heading: "Advanced, evidence-based modalities",
    intro:
      "Beyond traditional talk therapy, our clinicians are trained in specialized, research-backed approaches for faster, deeper progress.",
    items: [
      { title: "EMDR", description: "Eye Movement Desensitization and Reprocessing for trauma and distressing memories.", icon: Layers },
      { title: "Brainspotting", description: "A focused, body-based approach for processing trauma held outside of language.", icon: Brain },
      { title: "Cognitive Behavioral Therapy", description: "Structured, goal-oriented work to reshape unhelpful thought patterns.", icon: Puzzle },
      { title: "Dialectical Behavior Therapy", description: "Skills-based treatment for emotion regulation and distress tolerance.", icon: ShieldCheck },
      { title: "Play Therapy", description: "A developmentally attuned way for children to process and communicate.", icon: Gamepad2 },
      { title: "Family Systems Therapy", description: "Treating the family as a whole system to shift long-standing patterns.", icon: Network },
      { title: "Solution-Focused Therapy", description: "Short-term, goal-driven work focused on what's already working.", icon: Lightbulb },
      { title: "Gottman Method", description: "Research-based couples therapy for communication and conflict repair.", icon: HeartHandshake },
    ],
  },
  {
    id: "formats",
    label: "Ways to Connect",
    heading: "Care that fits your life",
    intro:
      "Meet with us in person at either location, or connect virtually from anywhere in Florida — the same quality of care, on your terms.",
    items: [
      { title: "In-Person Sessions", description: "Warm, private offices in both Melbourne and Rockledge.", icon: Building2 },
      { title: "Telehealth", description: "Secure video sessions available across Florida.", icon: Video },
      { title: "Group Therapy", description: "Facilitated small-group sessions on select topics each month.", icon: GroupIcon },
      { title: "Extended & Intensive Sessions", description: "Longer-format sessions available for EMDR and trauma-focused work.", icon: Clock },
    ],
  },
];
