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

  // Update all elements with data-company attributes
  document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with data-company attribute and populate them
    document.querySelectorAll('[data-company]').forEach(function(element) {
      const key = element.getAttribute('data-company');
      const keys = key.split('.');
      let value = COMPANY_INFO;

      // Navigate nested object properties
      for (let i = 0; i < keys.length; i++) {
        value = value[keys[i]];
        if (value === undefined) break;
      }

      // Update element based on type
      if (value !== undefined) {
        if (element.hasAttribute('data-company-html')) {
          element.innerHTML = value;
        } else if (element.tagName === 'A' && element.hasAttribute('href')) {
          // For links, update href
          if (key === 'contact.email') {
            element.href = 'mailto:' + value;
          }
        } else {
          element.textContent = value;
        }
      }
    });

    // Handle special cases like footer with combined text
    const footerCopyright = document.querySelector('[data-company="footer.copyright"]');
    if (footerCopyright) {
      footerCopyright.textContent = `© ${COMPANY_INFO.copyright.year} ${COMPANY_INFO.name} ${COMPANY_INFO.copyright.text}`;
    }

    const footerDetails = document.querySelector('[data-company="footer.details"]');
    if (footerDetails) {
      footerDetails.textContent = `${COMPANY_INFO.location} / ${COMPANY_INFO.industry} / ${COMPANY_INFO.businessType}`;
    }
  });
})();
