// Centralized data store for non-technical editors
// Edit this file to update site navigation, pricing, FAQs, and footer links.

const siteData = {
  company: {
    name: "Ledger Loop",
    address: "100 Finance Way, Suite 300, San Francisco, CA 94105",
    supportEmail: "support@ledgerloop.com",
    supportHours: "9am - 6pm EST, M-F",
    responseTime: "Response within 2 business hours"
  },

  navigation: [
    { label: "Home", href: "/index.html" },
    { label: "Product", href: "/product.html" },
    { label: "Pricing", href: "/pricing.html" },
    { label: "Contact", href: "/contact.html" }
  ],

  footer: {
    credit: {
      text: "Built for Digital Heroes Training Task",
      url: "https://digitalheroesco.com"
    },
    sections: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/product.html" },
          { label: "Integrations", href: "/product.html#integrations" },
          { label: "Pricing", href: "/pricing.html" }
        ]
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "#" },
          { label: "Help Center", href: "#" },
          { label: "Contact Us", href: "/contact.html" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]
      }
    ]
  },

  pricing: {
    monthlyDiscount: 0.20, // 20% off for annual
    plans: [
      {
        id: "solo",
        name: "Solo",
        monthlyPrice: 49,
        target: "For independent consultants",
        popular: false,
        features: [
          "1 User",
          "13-Week Cash Flow Forecast",
          "1 Accounting Integration",
          "Basic Email Support"
        ]
      },
      {
        id: "team",
        name: "Team",
        monthlyPrice: 99,
        target: "For growing agencies",
        popular: true,
        features: [
          "Up to 5 Users",
          "Scenario Modeling",
          "3 Accounting Integrations",
          "Early-Warning Alerts",
          "Priority Support"
        ]
      },
      {
        id: "agency",
        name: "Agency",
        monthlyPrice: 199,
        target: "For established firms",
        popular: false,
        features: [
          "Unlimited Users",
          "Advanced Scenario Engine",
          "All Integrations (Stripe, Gusto)",
          "Custom API Access",
          "Dedicated Account Manager"
        ]
      }
    ]
  },

  faqs: [
    {
      question: "How long does setup take?",
      answer: "Less than 5 minutes. Ledger Loop connects to QuickBooks, Xero, or FreshBooks with a single click and automatically builds your initial 13-week forecast based on historical data."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level 256-bit encryption and only request read-access to your accounting tools. We never touch your actual money."
    },
    {
      question: "Can I test scenarios without affecting my accounting software?",
      answer: "Yes! All scenario modeling (like testing a late payment or new hire) happens in Ledger Loop's sandbox. It never pushes dummy data back to your accounting tool."
    }
  ],

  testimonials: [
    {
      quote: "Ledger Loop finally got us out of spreadsheet hell. We saw a cash crunch coming 6 weeks out and delayed a hire to stay safe.",
      author: "Sarah J.",
      role: "Founder, Design Agency",
      company: "Acme Design"
    }
  ]
};

// Export for browser usage if modules aren't used, or attach to window
window.siteData = siteData;
