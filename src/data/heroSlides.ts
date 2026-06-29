export type HeroSlideCta = {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  ctas: HeroSlideCta;
  image: {
    src: string;
    alt: string;
  };
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'cooperative-intro',
    eyebrow: 'Serving Antiqueños Since 1963',
    headline:
      'Empowering Communities Through Trusted Financial Services Since 1963',
    description:
      'SJMPC is committed to promoting savings, providing accessible credit, and delivering quality services for a better future for Antiqueños.',
    ctas: {
      primary: { label: 'Apply for Loan Online', href: '/online-application' },
      secondary: { label: 'Become a Member', href: '/registration' },
    },
    image: {
      // Main-office + members concept (closest available asset)
      src: '/images/5b1e1675-ac45-4e24-a35a-626860b03fe3.jpg',
      alt: 'SJMPC main office building with cooperative members in a warm and trustworthy atmosphere.',
    },
  },
  {
    id: 'savings-products',
    eyebrow: 'Serving Antiqueños Since 1963',
    headline: 'Build a Stronger Tomorrow Through Smart Savings',
    description:
      'Choose from our range of savings products designed to help individuals and families achieve their financial goals.',
    ctas: {
      primary: { label: 'Explore Savings Products', href: '/savings-product' },
      secondary: { label: 'Open an Account', href: '/registration' },
    },
    image: {
      // Fallback to an existing savings-related photo asset
      src: '/images/597403592_1403798674673184_7189129226940101753_n.jpg',
      alt: 'Savings products imagery representing careful planning and hopeful progress.',
    },
  },
  {
    id: 'loan-services',
    eyebrow: 'Serving Antiqueños Since 1963',
    headline: 'Affordable Financial Solutions When You Need Them',
    description:
      'Our flexible loan packages help members invest in education, businesses, agriculture, and personal development.',
    ctas: {
      primary: { label: 'Apply for a Loan', href: '/loan-application' },
      secondary: { label: 'View Loan Packages', href: '/loan-packages' },
    },
    image: {
      src: '/images/433653723_8032419583452138_6238720083292977796_n.jpg',
      alt: 'SJMPC staff assisting a member in a professional and welcoming environment.',
    },
  },
  {
    id: 'membership',
    eyebrow: 'Serving Antiqueños Since 1963',
    headline: 'Join a Cooperative That Grows With You',
    description:
      'Become part of a trusted community committed to empowering members and creating opportunities for a brighter future.',
    ctas: {
      primary: { label: 'Become a Member', href: '/registration' },
      secondary: { label: 'Learn More', href: '/about' },
    },
    image: {
      src: '/images/584711177_10236308089939119_4315614434674993906_n.jpg',
      alt: 'Diverse cooperative members and community activities in a friendly atmosphere.',
    },
  },
];

