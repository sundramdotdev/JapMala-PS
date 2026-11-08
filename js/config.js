/**
 * JapMala Public Showcase Website - Global Configuration
 * ------------------------------------------------------
 * Centralized configuration for download links, developer profile,
 * contact details, and site metadata.
 *
 * NOTE FOR PRODUCTION:
 * - When ready to release, set actual URLs in this file.
 * - Do not invent or point to unverified external links.
 * - When links are empty strings (""), the UI will automatically
 *   display a graceful "Coming Soon" badge and safe disabled state.
 */

const JAPMALA_CONFIG = {
  appName: "JapMala",
  hindiName: "जपमाला",
  tagline: "हर नाम में भक्ति।",
  englishTagline: "Every Chant, A Step Closer to Peace.",

  // Production Android release configuration
  android: {
    // Direct APK download link (e.g. "https://github.com/Sundramdotdev/JapMala/releases/download/v1.0.0/JapMala-v1.0.0.apk")
    // Keep empty "" if APK download is not yet published.
    apkUrl: "",

    // Verified APKPure application listing URL
    // Keep empty "" until verified listing is live on APKPure.
    apkPureUrl: "",

    // Application build metadata
    version: "v1.0.0",
    fileSize: "18.4 MB",
    minAndroid: "Android 8.0 (Oreo) and above",
    packageId: "dev.sundram.japmala"
  },

  // Developer profile configuration
  developer: {
    name: "Sundramdotdev",
    creditText: "Designed & Developed by Sundramdotdev",
    // LinkedIn profile URL (e.g. "https://www.linkedin.com/in/sundramdotdev")
    // Keep empty "" if not configured.
    linkedinUrl: "",
    githubUrl: ""
  },

  // Official support and privacy contact
  contact: {
    // Official support email address (e.g. "support@sundram.dev")
    // Keep empty "" if contact email is pending setup.
    email: ""
  },

  // Deployment domain & SEO canonical
  site: {
    canonicalUrl: "", // e.g. "https://japmala.sundram.dev" or GitHub Pages URL
    repoUrl: ""
  }
};

// Freeze configuration to prevent accidental modification at runtime
if (typeof Object.freeze === "function") {
  Object.freeze(JAPMALA_CONFIG);
  if (JAPMALA_CONFIG.android) Object.freeze(JAPMALA_CONFIG.android);
  if (JAPMALA_CONFIG.developer) Object.freeze(JAPMALA_CONFIG.developer);
  if (JAPMALA_CONFIG.contact) Object.freeze(JAPMALA_CONFIG.contact);
  if (JAPMALA_CONFIG.site) Object.freeze(JAPMALA_CONFIG.site);
}
