// navlink
type Teams = {
  key: number;
  label: string;
  text: string;
  contactUsText: string;
  url: string;
};

// Build & Manage and also About Q&A
export const TEAMS: Teams[] = [
  {
    key: 1,
    label: "Experienced Individuals",
    text: "Our network is made up of highly experienced professionals who are passionate about what they do.",
    contactUsText: "The quality of our talent network",
    url: "/icon-person.svg",
  },
  {
    key: 2,
    label: "Easy to Implement",
    text: "Our processes have been refined over years of implementation meaning our teams always deliver.",
    contactUsText: "Usage & implementation of our software",
    url: "/icon-cog.svg",
  },
  {
    key: 3,
    label: "Enhanced Productivity",
    text: "Our customized platform with in-built analytics helps you manage your distributed teams.",
    contactUsText: "How we help drive innovation",
    url: "/icon-chart.svg",
  },
];

// Delivering result section
type Ceo = {
  key: number;
  name: string;
  job: string;
  text: string;
  url: string;
};

export const CEO: Ceo[] = [
  {
    key: 1,
    name: "Kady Baker",
    job: "Product Manager at Bookmark",
    text: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    url: "/avatar-kady.jpg",
  },
  {
    key: 2,
    name: "Aiysha Reese",
    job: "Founder of Manage",
    text: "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    url: "/avatar-aiysha.jpg",
  },
  {
    key: 3,
    name: "Arthur Clarke",
    job: "Co-founder of MyPhysio",
    text: "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    url: "/avatar-arthur.jpg",
  },
];

// Directors
type Director = {
  key: number;
  name: string;
  job?: string;
  url?: string;
  quotes?: string;
  socialIcon?: {
    twitter: string;
    linkdln: string;
  };
};
export const DIRECTORS: Director[] = [
  {
    key: 1,
    name: "Nikita Marks",
    job: "Founder & CEO",
    url: "/avatar-nikita.jpg",
  },
  {
    key: 2,
    name: "Cristian Duncan",
    job: "Co-founder & COO",
    url: "/avatar-christian.jpg",
  },
  {
    key: 3,
    name: "Cruz Hamer",
    job: "Co-founder & CTO",
    url: "/avatar-cruz.jpg",
  },
  {
    key: 4,
    name: "Drake Haeton",
    job: "Business Development Lead",
    url: "/avatar-drake.jpg",
  },
  {
    key: 5,
    name: "Griffin Wise",
    job: "Lead Marketing",
    url: "/avatar-griffin.jpg",
  },
  {
    key: 5,
    name: "Aden Allan",
    quotes:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    socialIcon: {
      twitter: "/icon-twitter.svg",
      linkdln: "/icon-linkedin.svg",
    },
  },
];

// Client section
type Icons = {
  key: number;
  label: string;
  url: string;
};

export const CLIENT: Icons[] = [
  {
    key: 1,
    label: "The Verge",
    url: "/logo-the-verge.png",
  },
  {
    key: 2,
    label: "The Jakarta Post",
    url: "/logo-jakarta-post.png",
  },
  {
    key: 3,
    label: "The Guardian",
    url: "/logo-the-guardian.png",
  },
  {
    key: 4,
    label: "Tech Radar",
    url: "/logo-tech-radar.png",
  },
  {
    key: 5,
    label: "Gadgets Now",
    url: "/logo-gadgets-now.png",
  },
];

// Social Icons
export const SOCIAL_ICONS: Icons[] = [
  {
    key: 1,
    label: "Facebook",
    url: "/icon-facebook.svg",
  },
  {
    key: 2,
    label: "Pinterest",
    url: "/icon-pinterest.svg",
  },
  {
    key: 3,
    label: "Twitter",
    url: "/icon-twitter.svg",
  },
];

// Address section
export const ADDRESS: { key: number; label: string }[] = [
  { key: 1, label: "987 Hillcrest Lane" },
  { key: 2, label: "Irvine, CA" },
  { key: 3, label: "California 92714" },
  { key: 4, label: "Call Us : 949-833-7432" },
];
