// Company Information Configuration
const COMPANY_INFO = {
  // Basic Information
  name: "DYNOVIA",
  tagline: "INFORMATION TECHNOLOGY COMPANY",

  // Location & Description
  location: "Tokyo",
  industry: "Information Technology",
  businessType: "System Integration",

  // Hero Section
  hero: {
    eyebrow: "Next Generation IT Partner",
    title: "先端技術で、<br>ビジネスの未来を<br>支える。",
    description: "高品質・高効率・柔軟な開発体制で、ERP、クラウド、アプリ、インフラまで一貫して支援します。企業の成長を、確かな技術力で加速させます。"
  },

  // Contact Information
  contact: {
    email: "info@example.com"
  },

  // Copyright
  copyright: {
    year: "2026",
    text: "All Rights Reserved."
  }
};

// Initialize company information immediately (for static HTML)
(function() {
  // Update page title
  document.title = COMPANY_INFO.name;

  // Update all elements with data-company attribute
  document.addEventListener('DOMContentLoaded', function() {
    // Update logo
    const logoMain = document.querySelector('.logo-main');
    if (logoMain) logoMain.textContent = COMPANY_INFO.name;

    const logoSub = document.querySelector('.logo-sub');
    if (logoSub) logoSub.textContent = COMPANY_INFO.tagline;

    // Update hero section
    const eyebrow = document.querySelector('.eyebrow');
    if (eyebrow) eyebrow.textContent = COMPANY_INFO.hero.eyebrow;

    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.innerHTML = COMPANY_INFO.hero.title;

    const heroDescription = document.querySelector('.hero p');
    if (heroDescription) heroDescription.textContent = COMPANY_INFO.hero.description;

    // Update contact email
    const contactEmail = document.querySelector('a[href^="mailto:"]');
    if (contactEmail) {
      contactEmail.href = `mailto:${COMPANY_INFO.contact.email}`;
    }

    // Update footer
    const footerText = document.querySelector('.footer-inner div:first-child');
    if (footerText) {
      footerText.textContent = `© ${COMPANY_INFO.copyright.year} ${COMPANY_INFO.name} ${COMPANY_INFO.copyright.text}`;
    }

    const footerDetails = document.querySelector('.footer-inner div:last-child');
    if (footerDetails) {
      footerDetails.textContent = `${COMPANY_INFO.location} / ${COMPANY_INFO.industry} / ${COMPANY_INFO.businessType}`;
    }
  });
})();
