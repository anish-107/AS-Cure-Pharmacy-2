/** details.ts
 * @authors Dibyasmita Arpan
 * @date 18-1-2026
 * @description This file contains the text contents that is displayed on the page.
 *              All UI components should import content from here instead of hardcoding text.
 * @returns Content to render
 */


// Imports
import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Gauge,
  Heart,
  FlaskConical,
  Handshake,
  Sparkles,
} from "lucide-react";


// About Us Section

// Type Definitions
export type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export type SectionContent = {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  points: string[];
  image: {
    src: string;
    alt: string;
  };
};


// About Us Content
export const aboutUsContent: SectionContent = {
  badge: "Our Mission",
  title: "Delivering Trusted",
  highlightedTitle: "Healing & Care",
  description:
    "We believe that medicine is more than just a product—it is a promise of recovery. A S Cure Pharma is dedicated to enhancing lives by providing safe, reliable, and high-quality pharmaceutical treatments. By combining advanced manufacturing practices with a human-centric approach, we ensure that every formulation we craft meets the highest standards of scientific integrity and therapeutic value.",

  points: [
    "Crafting safe and effective medicines with scientific precision",
    "Guaranteed quality validation at every stage of production",
    "Built on a foundation of expert research and modern ethics",
    "Empowering communities through reliable healthcare access",
    "A legacy of trust, healing, and improved patient outcomes",
  ],

  image: {
    src: "assets/hero-1.png",
    alt: "A S Cure Pharma - Trusted Healthcare",
  },
};


// Hero / Slider Section

// Type Definitions
export type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
  accent: string;
};

// Content
export const heroSlides: HeroSlide[] = [
  {
    image: "assets/hero-1.png",
    title: "A S CURE PHARMA",
    subtitle: "You Deserve The Best In Quality With Care",
    accent: "Quality Healthcare Solutions",
  },
  {
    image: "assets/hero-2.jpg",
    title: "TRUSTED MEDICINES",
    subtitle: "Committed to Quality & Care",
    accent: "GMP Certified Products",
  },
  {
    image: "assets/hero-3.png",
    title: "ASSURED HEALTHCARE",
    subtitle: "Because Your Health Matters",
    accent: "Patient-First Approach",
  },
];


// Products Section

export type Medicine = {
  name: string;
  composition: string[];
  description: string;
  uses: string[];
  cautions: string[];
  possibleSideEffects: string[];
  image: string;
  featured?: boolean;
};

export const medicines: Medicine[] = [
  {
    name: "Rabtorin DSR",
    composition: [
      "Rabeprazole (20mg)",
      "Domperidone (30mg)"
    ],
    description:
      "Rabtorin DSR is a powerful dual-action therapy designed to provide effective and long-lasting relief from acid-related disorders. It combines Rabeprazole, a proton pump inhibitor that suppresses excess stomach acid production, with Domperidone, a prokinetic agent that enhances stomach motility and prevents nausea and bloating. This synergistic combination helps relieve symptoms of GERD, acid reflux, heartburn, and functional dyspepsia, while promoting healing of the esophageal and gastric lining and improving overall digestive function.",
    uses: [
      "GERD (Gastroesophageal Reflux Disease)",
      "Acid reflux",
      "Heartburn",
      "Functional dyspepsia"
    ],
    cautions: [
      "Use only under the supervision of a registered medical practitioner.",
      "Not recommended during pregnancy or breastfeeding unless advised by a doctor.",
      "Avoid alcohol and smoking as they can worsen symptoms.",
      "Consult your physician if you have liver, kidney, or heart-related issues."
    ],
    possibleSideEffects: [
      "Headache",
      "Dizziness",
      "Dry mouth",
      "Abdominal pain or diarrhoea",
      "Mild nausea"
    ],
    image: "products/rabtorin-dsr.jpg",
    featured: true,
  },

  {
    name: "Flemirex SP",
    composition: [
      "Aceclofenac (100mg)",
      "Paracetamol (325mg)",
      "Serratiopeptidase (15mg)"
    ],
    description:
      "Flemirex SP is a trusted combination therapy formulated to provide fast and effective relief from pain and inflammation. It contains Aceclofenac, an NSAID that reduces pain and swelling; Paracetamol, an analgesic and antipyretic for pain and fever relief; and Serratiopeptidase, an enzyme that helps reduce tissue swelling and inflammation.",
    uses: [
      "Musculoskeletal pain",
      "Arthritis",
      "Back pain",
      "Dental pain",
      "Post-surgical inflammation"
    ],
    cautions: [
      "Take only under medical supervision and as prescribed.",
      "Avoid if you have a history of allergy to NSAIDs or paracetamol.",
      "Do not use with other paracetamol-containing medicines.",
      "Inform your doctor about any kidney, liver, or heart problems before use.",
      "Not recommended in pregnancy or breastfeeding unless advised by your doctor.",
      "Avoid alcohol; it can worsen side effects and impact liver health."
    ],
    possibleSideEffects: [
      "Nausea or vomiting",
      "Stomach pain or indigestion",
      "Dizziness or headache",
      "Skin rash or allergic reactions",
      "Drowsiness",
      "In rare cases, abnormal bleeding or liver enzyme changes"
    ],
    image: "products/flemirex-sp.jpg",
    featured: true,
  },

  {
    name: "Montelzo LC",
    composition: [
      "Levocetirizine (5mg)",
      "Montelukast (10mg)"
    ],
    description:
      "Montelzo LC is a highly effective antiallergic formulation designed to provide long-lasting relief from respiratory and seasonal allergies. It combines Levocetirizine, an antihistamine that blocks allergic symptoms, with Montelukast, a leukotriene receptor antagonist that helps prevent airway inflammation and bronchial constriction.",
    uses: [
      "Allergic rhinitis",
      "Asthma",
      "Bronchial allergies",
      "Respiratory conditions triggered by allergens"
    ],
    cautions: [
      "Take only under physician supervision and as prescribed.",
      "Not for use in those allergic to levocetirizine, cetirizine, or montelukast.",
      "Do not use if you have severe kidney issues or are undergoing dialysis.",
      "Avoid use in pregnancy or breastfeeding unless advised by a doctor.",
      "Inform your doctor if you have liver problems or are taking other allergy medications."
    ],
    possibleSideEffects: [
      "Drowsiness or fatigue",
      "Headache",
      "Abdominal pain or dry mouth",
      "Skin rash",
      "Mood changes (rare)"
    ],
    image: "products/montelzoLC.png",
    featured: false,
  },

  {
    name: "Clavunix 625",
    composition: [
      "Amoxycillin (500mg)",
      "Clavulanic Acid (125mg)"
    ],
    description:
      "Clavunix 625 is a broad-spectrum antibiotic formulation that combines Amoxicillin, a penicillin-class antibiotic that inhibits bacterial growth, with Clavulanic Acid, a beta-lactamase inhibitor that enhances the effectiveness of Amoxicillin against resistant bacteria.",
    uses: [
      "Respiratory tract infections",
      "Ear, nose, and throat infections",
      "Urinary tract infections",
      "Skin and soft tissue infections",
      "Bone and joint infections"
    ],
    cautions: [
      "Take only as prescribed by a healthcare professional.",
      "Not suitable for those allergic to penicillins or cephalosporins.",
      "Use with caution in patients with kidney or liver impairment.",
      "Complete the entire prescribed course to avoid antibiotic resistance.",
      "Not effective against viral infections such as the common cold."
    ],
    possibleSideEffects: [
      "Nausea or vomiting",
      "Diarrhea",
      "Skin rashes",
      "Headache",
      "In rare cases, allergic reactions such as swelling or difficulty breathing",
      "Possible changes in liver enzymes (rare)"
    ],
    image: "products/clavunix_625.png",
    featured: false,
  },

  {
    name: "Gabinoxin 300 NT",
    composition: [
      "Gabapentin (300mg)",
      "Nortriptyline (10mg)"
    ],
    description:
      "Gabinoxin 300 NT is a specialised combination therapy formulated to provide effective relief from neuropathic pain. It contains Gabapentin, which calms nerve activity to reduce pain signals, and Nortriptyline, which enhances pain relief by balancing neurotransmitters in the brain.",
    uses: [
      "Diabetic neuropathy",
      "Postherpetic neuralgia",
      "Other neuropathic disorders"
    ],
    cautions: [
      "Use only as directed by a healthcare professional.",
      "Not for use by those allergic to gabapentin, nortriptyline, or similar drugs.",
      "Caution in patients with liver or kidney impairment.",
      "Inform your doctor if you are taking antidepressants, antacids, or other pain medications.",
      "May cause drowsiness—avoid driving or machinery until you know its effects."
    ],
    possibleSideEffects: [
      "Drowsiness or dizziness",
      "Dry mouth",
      "Weight gain",
      "Constipation",
      "Blurred vision",
      "Mood changes (rare or with high doses)"
    ],
    image: "products/gabinoxin-300-nt.jpg",
    featured: false,
  },

  {
    name: "Gabinoxin 100 NT",
    composition: [
      "Gabapentin (100mg)",
      "Nortriptyline (10mg)"
    ],
    description:
      "Gabinoxin 100 NT is an advanced combination therapy designed for effective relief from chronic nerve pain and neuropathy. It contains Gabapentin, which calms overactive nerves to reduce pain signals, and Nortriptyline, which increases vital brain chemicals to block pain transmission.",
    uses: [
      "Chronic nerve pain",
      "Neuropathy",
      "Diabetic neuropathy",
      "Postherpetic neuralgia",
      "Other nerve-related pain conditions"
    ],
    cautions: [
      "Use only under medical supervision and as prescribed.",
      "Avoid if allergic to gabapentin, nortriptyline, or related drugs.",
      "Inform your doctor if you have liver or kidney disorders.",
      "May interact with other medications—disclose all medicines to your healthcare provider.",
      "May cause drowsiness; avoid driving or operating heavy machinery until you know its effects."
    ],
    possibleSideEffects: [
      "Drowsiness or dizziness",
      "Dry mouth",
      "Constipation",
      "Weight gain",
      "Blurred vision",
      "Mood changes (rare)"
    ],
    image: "products/gabinoxin-100-nt.jpg",
    featured: false,
  }
];

// Why Choose Us Section

// Type Definitions
export type WhyChooseItem = {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
};

// Content
export const whyChooseContent = {
  badge: "Our Advantages",
  title: "Why Choose",
  highlightedTitle: "A S Cure Pharma",
};

export const whyChooseList: WhyChooseItem[] = [
  {
    icon: ShieldCheck,
    title: "Tested Trust, Delivered",
    description:
      "At A S Cure Pharma, every medicine is backed by transparent laboratory testing reports to ensure purity, potency, and reliable performance. Our science-based assurance builds trust where it matters most.",
  },
  {
    icon: Gauge,
    title: "Stringent Quality Standards",
    description:
      "Our manufacturing and quality control processes strictly follow GLP (Good Laboratory Practice) and GMP (Good Manufacturing Practice) guidelines from raw material sourcing to final packaging.",
  },
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description:
      "Our formulations are designed for real patients, focusing on ease of administration, minimized side effects through optimized dosages, and improved recovery outcomes with higher bioavailability.",
  },
  {
    icon: FlaskConical,
    title: "Certified Lab Testing for Every Batch",
    description:
      "Each product undergoes rigorous analytical testing using validated scientific methods to ensure content uniformity, long-term stability, microbial safety, and chemical purity.",
  },
  {
    icon: Handshake,
    title: "Ethical & Transparent Practices",
    description:
      "We maintain complete transparency with healthcare professionals, pharmacists, and patients while upholding strong ethical standards that foster long-term trust with every stakeholder.",
  },
  {
    icon: Sparkles,
    title: "Innovation-Driven Excellence",
    description:
      "We continuously explore advanced formulation technologies, taste masking solutions, and patient-compliance innovations to make our medicines more effective and patient-friendly.",
  },
];
