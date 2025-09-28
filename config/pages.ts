import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    featuredDescription?: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Aqdas Fiaz's portfolio website.",
    },
  },

  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Aqdas Fiaz.",
    },
  },

  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description: "Aqdas Fiaz's professional journey and experience timeline.",
    },
  },
  skills: {
    title: "",
    description: "",
    metadata: {
      title: "",
      description: ""
    },
    featuredDescription: undefined
  },
  projects: {
    title: "",
    description: "",
    metadata: {
      title: "",
      description: ""
    },
    featuredDescription: undefined
  },
  contributions: {
    title: "",
    description: "",
    metadata: {
      title: "",
      description: ""
    },
    featuredDescription: undefined
  },
  resume: {
    title: "",
    description: "",
    metadata: {
      title: "",
      description: ""
    },
    featuredDescription: undefined
  }
};
