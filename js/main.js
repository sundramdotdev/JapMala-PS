/**
 * JapMala (जपमाला) - Main JavaScript
 * Designed & Developed by Sundramdotdev
 * ----------------------------------------------------
 * High performance, zero-dependency vanilla JavaScript.
 */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  initYear();
  initConfigBindings();
  initNavbar();
  initMobileMenu();
  initInteractivePhone();
  initScrollReveal();
  initBackToTop();
  initToast();
}

/**
 * 1. Automatic Copyright Year
 */
function initYear() {
  const yearElements = document.querySelectorAll("[data-current-year]");
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });
}

/**
 * 2. Configuration & Download Link Handling
 */
function initConfigBindings() {
  if (typeof JAPMALA_CONFIG === "undefined") {
    console.warn("JAPMALA_CONFIG not detected. Using default fallback configuration.");
    return;
  }

  // Populate build metadata
  const versionEls = document.querySelectorAll("[data-config-version]");
  versionEls.forEach((el) => {
    el.textContent = JAPMALA_CONFIG.android.version || "v1.0.0";
  });

  const sizeEls = document.querySelectorAll("[data-config-filesize]");
  sizeEls.forEach((el) => {
    el.textContent = JAPMALA_CONFIG.android.fileSize || "18.4 MB";
  });

  const minAndroidEls = document.querySelectorAll("[data-config-min-android]");
  minAndroidEls.forEach((el) => {
    el.textContent = JAPMALA_CONFIG.android.minAndroid || "Android 8.0+";
  });

  // Direct APK download button handling
  const apkButtons = document.querySelectorAll(".btn-download-apk");
  apkButtons.forEach((btn) => {
    const apkUrl = JAPMALA_CONFIG.android.apkUrl;
    if (apkUrl && apkUrl.trim() !== "") {
      btn.href = apkUrl;
      btn.setAttribute("download", "");
      btn.removeAttribute("aria-disabled");
    } else {
      btn.href = "#download";
      btn.setAttribute("aria-disabled", "true");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Official JapMala APK release is coming soon for Android devotees! Please check back shortly.");
      });
      const badge = btn.querySelector(".btn-card-badge");
      if (badge) badge.textContent = "Coming Soon";
    }
  });

  // APKPure download button handling
  const apkPureButtons = document.querySelectorAll(".btn-download-apkpure");
  apkPureButtons.forEach((btn) => {
    const pureUrl = JAPMALA_CONFIG.android.apkPureUrl;
    if (pureUrl && pureUrl.trim() !== "") {
      btn.href = pureUrl;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      btn.removeAttribute("aria-disabled");
    } else {
      btn.href = "#download";
      btn.setAttribute("aria-disabled", "true");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("JapMala listing on APKPure will be available upon verified publication.");
      });
      const badge = btn.querySelector(".btn-card-badge");
      if (badge) badge.textContent = "Coming Soon";
    }
  });

  // Developer LinkedIn link handling
  const linkedinLinks = document.querySelectorAll(".dev-linkedin-link");
  linkedinLinks.forEach((link) => {
    const lkUrl = JAPMALA_CONFIG.developer.linkedinUrl;
    if (lkUrl && lkUrl.trim() !== "") {
      link.href = lkUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "javascript:void(0);";
      link.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Developer profile link is being configured by Sundramdotdev.");
      });
    }
  });

  // Contact email handling
  const emailLinks = document.querySelectorAll(".contact-email-link");
  emailLinks.forEach((link) => {
    const email = JAPMALA_CONFIG.contact.email;
    if (email && email.trim() !== "") {
      link.href = `mailto:${email}`;
      link.textContent = email;
    } else {
      link.href = "javascript:void(0);";
      link.textContent = "support@sundram.dev (Coming Soon)";
      link.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Official support email will be active upon release.");
      });
    }
  });
}

/**
 * 3. Sticky Navbar & Navigation
 */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * 4. Accessible Mobile Navigation Menu
 */
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link, .mobile-nav-close");

  if (!hamburger || !mobileNav) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileNav.classList.contains("is-open");
    hamburger.classList.toggle("is-active", isOpen);
    mobileNav.classList.toggle("is-open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  hamburger.addEventListener("click", () => toggleMenu());

  mobileNav.addEventListener("click", (e) => {
    if (e.target === mobileNav) {
      toggleMenu(false);
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu(false);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
      toggleMenu(false);
    }
  });
}

/**
 * 5. Interactive Devotional Smartphone Simulator
 */
function initInteractivePhone() {
  const malaTapArea = document.querySelector(".interactive-mala-area");
  const countNumEl = document.querySelector(".app-ui-count-num");
  const malasCompletedEl = document.querySelector(".app-ui-mala-badge");
  const activeMantraEl = document.querySelector(".app-ui-mantra-hindi");

  if (!malaTapArea || !countNumEl) return;

  let currentCount = 7;
  const targetCount = 108;
  let malasDone = 2;

  const mantras = [
    "ॐ नमः शिवाय",
    "हरे कृष्ण हरे राम",
    "श्री राम जय राम जय जय राम",
    "ॐ नमो भगवते वासुदेवाय",
    "ॐ गं गणपतये नमः",
    "ॐ दुं दुर्गायै नमः"
  ];
  let mantraIndex = 0;

  // Render Rudraksha Beads in SVG or circular ring
  const beadRing = document.querySelector(".mala-bead-ring");
  if (beadRing && beadRing.children.length === 0) {
    const totalDisplayBeads = 27; // Visually balanced ring
    const radius = 95; // px from center
    const centerX = 105;
    const centerY = 105;

    for (let i = 0; i < totalDisplayBeads; i++) {
      const angle = (i / totalDisplayBeads) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const bead = document.createElement("div");
      bead.className = "bead";
      if (i === 0) {
        bead.classList.add("bead-meru"); // Meru / Guru bead
      }
      bead.style.left = `${x}px`;
      bead.style.top = `${y}px`;
      bead.dataset.index = i;
      beadRing.appendChild(bead);
    }
  }

  const handleChantTap = (e) => {
    currentCount++;
    if (currentCount >= targetCount) {
      currentCount = 0;
      malasDone++;
      if (malasCompletedEl) {
        malasCompletedEl.textContent = `${malasDone} Malas Completed (${malasDone * targetCount} Total)`;
      }
      showToast(`Har Har Mahadev! Mala #${malasDone} completed!`);
    }

    countNumEl.textContent = String(currentCount).padStart(3, "0");

    // Spawn floating mantra particle
    spawnFloatingMantra(malaTapArea, mantras[mantraIndex]);

    // Haptic feedback if supported on mobile
    if (navigator.vibrate) {
      navigator.vibrate(25);
    }
  };

  malaTapArea.addEventListener("click", handleChantTap);

  // Allow switching mantra by tapping the mantra card
  const mantraCard = document.querySelector(".app-ui-mantra-card");
  if (mantraCard) {
    mantraCard.style.cursor = "pointer";
    mantraCard.setAttribute("title", "Tap to cycle mantra");
    mantraCard.addEventListener("click", (e) => {
      e.stopPropagation();
      mantraIndex = (mantraIndex + 1) % mantras.length;
      if (activeMantraEl) {
        activeMantraEl.textContent = mantras[mantraIndex];
      }
      showToast(`Selected Mantra: ${mantras[mantraIndex]}`);
    });
  }
}

function spawnFloatingMantra(container, text) {
  const particle = document.createElement("div");
  particle.className = "floating-mantra-text";
  particle.textContent = text;

  // Randomize horizontal offset slightly
  const randomX = Math.floor(Math.random() * 60) - 30;
  particle.style.left = `calc(50% + ${randomX}px)`;
  particle.style.top = "40%";

  container.appendChild(particle);

  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 1200);
}

/**
 * 6. Scroll Reveal Animations with IntersectionObserver
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * 7. Back-to-Top Button
 */
function initBackToTop() {
  const bttBtn = document.querySelector(".back-to-top");
  if (!bttBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 400) {
        bttBtn.classList.add("visible");
      } else {
        bttBtn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  bttBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * 8. Notification Toast System
 */
let toastTimeout;
function showToast(message) {
  let toast = document.querySelector(".site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "site-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97724" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 4200);
}
function initToast() {
  // Toast container is lazily created on first showToast call
}
