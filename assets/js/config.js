// ============================================
// THEME CONFIGURATION & PAYMENT METHODS
// Central config file - easy to edit
// ============================================

// Theme definitions with all 5 color palettes
const THEME_CONFIG = {
  themes: [
    {
      id: "tech-modern",
      name: "Tech Modern",
      description: "Professional & Modern",
      colors: {
        primary: "#0F766E",
        secondary: "#7B4AED",
        accent: "#FDB022",
        darkBg: "#0F172A",
        lightText: "#F1F5F9",
        lightBg: "#1E293B",
        border: "#334155"
      }
    },
    {
      id: "green-growth",
      name: "Green Growth",
      description: "Sustainable & Community",
      colors: {
        primary: "#10B981",
        secondary: "#3B82F6",
        accent: "#F59E0B",
        darkBg: "#1F2937",
        lightText: "#F3F4F6",
        lightBg: "#111827",
        border: "#374151"
      }
    },
    {
      id: "sunset-pakistan",
      name: "Sunset Pakistan",
      description: "Cultural Identity",
      colors: {
        primary: "#DC2626",
        secondary: "#1E40AF",
        accent: "#FBBF24",
        darkBg: "#1F2937",
        lightText: "#F9FAFB",
        lightBg: "#111827",
        border: "#4B5563"
      }
    },
    {
      id: "minimalist",
      name: "Minimalist",
      description: "Elegant & Timeless",
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#EC4899",
        darkBg: "#1F2937",
        lightText: "#F3F4F6",
        lightBg: "#111827",
        border: "#4B5563"
      }
    },
    {
      id: "cyberpunk",
      name: "Cyberpunk",
      description: "Bold & Eye-Catching",
      colors: {
        primary: "#00D9FF",
        secondary: "#FF006E",
        accent: "#FFBE0B",
        darkBg: "#0A0E27",
        lightText: "#FFFFFF",
        lightBg: "#1A1F3A",
        border: "#00D9FF"
      }
    }
  ],
  default: "minimalist",
  storageKey: "azad-theme"
};

// Payment methods configuration
const PAYMENTS_CONFIG = {
  pakistan: [
    {
      icon: "💳",
      name: "Easypaisa",
      description: "Mobile account transfer",
      qrCode: "easypaisa-qr.png",
      details: {
        "Account Holder": "Ayaz Ahmed",
        "Account #": "0313-756 3344",
        "IBAN": "PK51TMFB0000000040676854"
      }
    },
    {
      icon: "📱",
      name: "JazzCash",
      description: "Quick payment service",
      qrCode: "jazzcash-qr.png",
      details: {
        "Account Holder": "Ayyaz Ahmad",
        "Account #": "0313-756 3344",
        "IBAN": "PK80JCMA1301923137563344"
      }
    },
    {
      icon: "🔐",
      name: "RAST (Instant Transfer)",
      description: "Real-time bank transfer",
      details: {
        "RAST ID": "03217563344",
        "Method": "National payment system"
      }
    },
    {
      icon: "🏦",
      name: "UBL Bank",
      description: "United Bank Limited",
      details: {
        "Account Title": "Ayyaz Ahmad",
        "Account #": "010-3471-1",
        "Branch": "Ichhra-559",
        "SWIFT": "UNILPKKA",
        "IBAN": "PK09UNIL0112055901034711"
      }
    },
    {
      icon: "💰",
      name: "Standard Chartered",
      description: "International bank transfer",
      details: {
        "Account Title": "Ayyaz Ahmad",
        "Account #": "01-7025981-01",
        "Branch": "Shadman Lahore - 082",
        "SWIFT": "SCBLPKKXLHR",
        "IBAN": "PK42SCBL0000001702598101"
      }
    }
  ],

  international: [
    {
      icon: "💸",
      name: "Wise",
      description: "Fast international transfers",
      link: "https://wise.com/pay/recipient/your-wise-id",
      details: {
        "Method": "Bank transfer from any country",
        "Fees": "Low international rates"
      }
    },
    {
      icon: "❤️",
      name: "Patreon",
      description: "Monthly recurring support",
      link: "https://patreon.com/AyyazAhmad",
      details: {
        "Type": "Membership support",
        "Benefits": "Exclusive content & updates"
      }
    },
    {
      icon: "☕",
      name: "Ko-fi",
      description: "One-time or recurring donations",
      link: "https://ko-fi.com/ayyazahmad",
      details: {
        "Method": "Card payments worldwide",
        "Fee": "No platform fee option"
      }
    }
  ],

  crypto: [
    {
      icon: "₿",
      name: "Bitcoin (BTC)",
      description: "Decentralized peer-to-peer",
      details: {
        "Address": "bc1qxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "Network": "Bitcoin",
        "Min Amount": "Any amount"
      },
      qrCode: "binance-qr.png",
      instructions: [
        "Open your wallet or exchange",
        "Create new transaction",
        "Copy BTC address or scan QR",
        "Enter amount and confirm",
        "Transaction complete"
      ]
    },
    {
      icon: "Ξ",
      name: "Ethereum / USDC",
      description: "Fast & flexible payments",
      details: {
        "Address": "0xxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "Chain": "Ethereum (ETH)",
        "Also Accepts": "USDC, USDT"
      },
      instructions: [
        "Open MetaMask or exchange",
        "Send to Ethereum address",
        "Use any stablecoin (USDC/USDT)",
        "Transaction complete instantly"
      ]
    },
    {
      icon: "₿",
      name: "Binance Pay",
      description: "USDT without fees",
      details: {
        "Pay ID": "1047913156",
        "Username": "AyyazBTC",
        "Crypto": "USDT (stable)",
        "Fees": "Zero Fee"
      },
      qrCode: "binance-qr.png",
      instructions: [
        "Open Binance App",
        "Tap Wallets → Funding",
        "Tap Pay → Send",
        "Enter Pay ID: 1047913156 or Email",
        "Select USDT currency",
        "Enter amount & Confirm"
      ]
    }
  ]
};

// Social links - Work vs Personal
const SOCIAL_LINKS = {
  work: {
    github: "https://github.com/ayyazahmad",
    twitter: "https://twitter.com/ayyazahmad",
    website: "https://ayyazahmad.com",
    email: "ayyaz@azad.co",
    linkedin: "https://linkedin.com/in/ayyazahmad"
  },
  personal: {
    instagram: "https://instagram.com/ayyazahmad",
    facebook: "https://facebook.com/ayyazahmad",
    twitter_personal: "https://twitter.com/ayyaz_personal"
  }
};

// Project information
const PROJECTS_DATA = [
  {
    id: "browserkit",
    name: "AzAd BrowserKit",
    category: "browser",
    icon: "🔧",
    description: "Complete suite of developer tools for Chrome/Edge browsers",
    features: ["Color Picker", "Font Inspector", "Link Collector", "Email Extractor", "Table Extractor", "Hover Zoom"],
    links: {
      github: "https://github.com/ayyazahmad/AzAd-BrowserKit",
      store: "https://chromewebstore.google.com/detail/azad-browserkit/fpoeafhnjjhpicifmdpcfbnlofpompcf"
    }
  },
  {
    id: "downloader",
    name: "Smart Downloader",
    category: "wordpress",
    icon: "📥",
    description: "WordPress plugin for fast batch downloads and file management",
    features: ["Batch Download", "Auto Backup", "File Manager", "Progress Tracking", "Resume Support"],
    links: {
      github: "https://github.com/ayyazahmad/AzAd-Smart-Downloader",
      store: "https://chromewebstore.google.com/detail/azad-smart-downloader/kmhffijpjfhleppnokojhcecipegeajl",
      wordpress: "https://wordpress.org/plugins/"
    }
  },
  {
    id: "admin-security",
    name: "Admin Security Suite",
    category: "wordpress",
    icon: "🔒",
    description: "WordPress security hardening plugin for admin panel",
    features: ["Login Protection", "Admin Security", "Audit Logs", "Two-Factor Auth", "IP Whitelist"],
    links: {
      github: "https://github.com/ayyazahmad",
      wordpress: "https://wordpress.org/plugins/"
    }
  }
];

// FAQ data
const FAQ_DATA = [
  {
    question: "How do I support AzAd projects?",
    answer: "You can support through multiple methods: Pakistan bank transfers, international transfers (Wise, Patreon), cryptocurrency (Bitcoin, Ethereum, USDT), or one-time donations through Ko-fi."
  },
  {
    question: "What payment methods work in Pakistan?",
    answer: "In Pakistan, you can use Easypaisa, JazzCash, RAST ID, UBL Bank, or Standard Chartered bank transfers directly. QR codes are provided for mobile payments."
  },
  {
    question: "Are there recurring donation options?",
    answer: "Yes! Patreon and Ko-fi both offer monthly subscription options. You can also make regular manual transfers via Wise or bank transfer."
  },
  {
    question: "Is cryptocurrency supported?",
    answer: "Yes, we accept Bitcoin (BTC), Ethereum (ETH), and stablecoins (USDC/USDT) including Binance Pay with zero fees."
  },
  {
    question: "How will my donation be used?",
    answer: "Your donation helps us develop new features, fix bugs, improve documentation, and dedicate more time to open source development."
  },
  {
    question: "Can I get an invoice or receipt?",
    answer: "Yes, most payment methods provide automatic receipts. For bank transfers, your bank statement serves as proof."
  }
];

// Export configs
window.THEME_CONFIG = THEME_CONFIG;
window.PAYMENTS_CONFIG = PAYMENTS_CONFIG;
window.SOCIAL_LINKS = SOCIAL_LINKS;
window.PROJECTS_DATA = PROJECTS_DATA;
window.FAQ_DATA = FAQ_DATA;
