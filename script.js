document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
  id: {
    title: "Erza Al-Isyrafy — Kreator Digital",
    description: "Portofolio Muhammad Erza Al-Isyrafy: web development, video editing, dan 3D modelling.",
    skipToContent: "Lewati ke konten",
    languageLabel: "Pilih bahasa",
    menuButton: "Buka menu",
    navLabel: "Navigasi utama",
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navWork: "Karya",
    navContact: "Hubungi saya",
    heroEyebrow: "KREATOR DIGITAL · SURAKARTA, INDONESIA",
    heroName: "Saya Erza.",
    heroPhrase: "Mengolah ide.",
    heroAccent: "Mencipta karya.",
    heroLead: "Mahasiswa Informatika, web developer, video editor, dan 3D artist. Saya suka menggabungkan teknologi dan visual untuk membuat karya yang terasa hidup.",
    heroWork: "Jelajahi karya",
    heroContact: "Mari berkolaborasi",
    artNote: "IDEA TO IMPACT",
    scrollCue: "GULIR UNTUK MENGENAL SAYA",
    aboutKicker: "KENALAN DULU",
    aboutLineOne: "Satu orang,",
    aboutAccent: "banyak cara",
    aboutLineThree: "berkarya.",
    aboutParagraphOne: "Saya Muhammad Erza Al-Isyrafy, mahasiswa Informatika di Tiga Serangkai University, Surakarta. Saya tertarik pada titik temu antara teknologi, desain, dan cerita yang dekat dengan kehidupan sehari-hari.",
    aboutParagraphTwo: "Dari membangun website dan aplikasi, mengedit video, sampai membuat model 3D, saya menikmati proses mengubah ide menjadi sesuatu yang bisa dilihat, digunakan, dan dirasakan orang lain.",
    aboutParagraphThree: "Saya terbuka untuk kolaborasi, magang, dan proyek freelance. Kalau kamu punya ide menarik, saya ingin mendengarnya.",
    aboutContact: "Kenali saya lebih lanjut",
    proofClients: "klien video editing yang pernah ditangani",
    proofAwardTitle: "Honorary Artwork",
    proofAwardBody: "Penghargaan karya 3D dari ESDA",
    proofStudyTitle: "Informatika",
    proofStudyBody: "Tiga Serangkai University",
    skillsKicker: "YANG BISA SAYA KERJAKAN",
    skillsLineOne: "Keahlian, dari",
    skillsAccent: "kode",
    skillsLineTwo: "hingga kreasi.",
    skillsLead: "Ruang kerja saya ada di antara logika dan imajinasi. Ini beberapa hal yang saya tekuni.",
    skillWebTitle: "Web & Programming",
    skillWebBody: "Membangun pengalaman web dan aplikasi dengan fondasi yang fungsional.",
    skillVideoTitle: "Video Editing",
    skillVideoBody: "Merangkai visual dan ritme untuk menyampaikan pesan dengan lebih kuat.",
    skillStorytelling: "Storytelling",
    skillClientWork: "Client work",
    skill3dTitle: "3D Modelling",
    skill3dBody: "Mengeksplorasi bentuk, ruang, dan detail untuk menghadirkan ide visual.",
    skillModelling: "Modelling",
    skillVisualArt: "Visual art",
    workKicker: "PILIHAN KARYA",
    workLineOne: "Hal-hal yang",
    workAccent: "saya bangun.",
    workLead: "Karya dan pengalaman yang mewakili cara saya belajar, bereksperimen, dan menyelesaikan masalah.",
    workCategoryProduct: "PRODUK DIGITAL",
    smartwalletDescription: "Aplikasi pengelolaan keuangan pribadi yang saya kembangkan sebagai ruang untuk menerapkan kemampuan programming dan desain dalam satu produk.",
    downloadProject: "Lihat aplikasi",
    workCategoryVideo: "VIDEO & STORYTELLING",
    videoWorkTitle: "Cerita dalam gerak",
    videoWorkDescription: "Pengalaman menangani lebih dari 100 klien video editing, menyesuaikan gaya dengan kebutuhan dan menerima revisi dengan terbuka.",
    videoPortfolioLabel: "Lihat portofolio video editing",
    discussWork: "Diskusikan proyek",
    workCategory3d: "3D & VISUAL ART",
    threeDWorkTitle: "Eksplorasi bentuk",
    threeDWorkDescription: "Eksperimen 3D modelling yang meraih penghargaan Honorary Artwork di ESDA.",
    threeDPortfolioLabel: "Lihat portofolio 3D",
    viewPortfolio: "Lihat portofolio",
    portfolioNote: "Portofolio ini akan terus bertambah seiring karya baru dibuat.",
    contactKicker: "PUNYA IDE?",
    contactLineOne: "Mari buat sesuatu",
    contactAccent: "yang berarti.",
    contactLead: "Punya proyek, peluang, atau sekadar ingin menyapa? Saya selalu senang mendengar ide baru.",
    nameLabel: "Nama",
    emailLabel: "Email",
    messageLabel: "Ceritakan idemu",
    sendButton: "Kirim pesan",
    footerMade: "Dirancang dan dibuat dengan rasa ingin tahu.",
    invalidForm: "Isi nama, email, dan pesan dulu, lalu klik kirim.",
    invalidEmail: "Masukkan email yang valid.",
    sending: "Mengirim pesan...",
    successMessage: "Pesan berhasil dikirim.",
    openingEmail: "Membuka aplikasi email kamu...",
    emailSubject: "Pesan dari "
  },
  en: {
    title: "Erza Al-Isyrafy — Digital Creator",
    description: "The portfolio of Muhammad Erza Al-Isyrafy: web development, video editing, and 3D modelling.",
    skipToContent: "Skip to content",
    languageLabel: "Choose language",
    menuButton: "Open menu",
    navLabel: "Main navigation",
    navAbout: "About",
    navSkills: "Skills",
    navWork: "Work",
    navContact: "Get in touch",
    heroEyebrow: "DIGITAL CREATOR · SURAKARTA, INDONESIA",
    heroName: "I'm Erza.",
    heroPhrase: "Shaping ideas.",
    heroAccent: "Making things.",
    heroLead: "Informatics student, web developer, video editor, and 3D artist. I love combining technology and visuals to create work that feels alive.",
    heroWork: "Explore my work",
    heroContact: "Let's collaborate",
    artNote: "IDEA TO IMPACT",
    scrollCue: "SCROLL TO GET TO KNOW ME",
    aboutKicker: "A LITTLE ABOUT ME",
    aboutLineOne: "One person,",
    aboutAccent: "many ways",
    aboutLineThree: "to create.",
    aboutParagraphOne: "I'm Muhammad Erza Al-Isyrafy, an Informatics student at Tiga Serangkai University in Surakarta. I'm drawn to the intersection of technology, design, and stories connected to everyday life.",
    aboutParagraphTwo: "From building websites and applications to editing videos and creating 3D models, I enjoy turning ideas into things people can see, use, and feel.",
    aboutParagraphThree: "I'm open to collaborations, internships, and freelance projects. If you have an interesting idea, I'd love to hear about it.",
    aboutContact: "Get to know me better",
    proofClients: "video editing clients served",
    proofAwardTitle: "Honorary Artwork",
    proofAwardBody: "3D artwork recognition from ESDA",
    proofStudyTitle: "Informatics",
    proofStudyBody: "Tiga Serangkai University",
    skillsKicker: "WHAT I CAN DO",
    skillsLineOne: "Skills, from",
    skillsAccent: "code",
    skillsLineTwo: "to creativity.",
    skillsLead: "My work lives somewhere between logic and imagination. Here are a few areas I focus on.",
    skillWebTitle: "Web & Programming",
    skillWebBody: "Building useful web and app experiences with a functional foundation.",
    skillVideoTitle: "Video Editing",
    skillVideoBody: "Combining visuals and rhythm to communicate ideas with greater impact.",
    skillStorytelling: "Storytelling",
    skillClientWork: "Client work",
    skill3dTitle: "3D Modelling",
    skill3dBody: "Exploring form, space, and detail to bring visual ideas to life.",
    skillModelling: "Modelling",
    skillVisualArt: "Visual art",
    workKicker: "SELECTED WORK",
    workLineOne: "Things",
    workAccent: "I've built.",
    workLead: "Projects and experience that show how I learn, experiment, and solve problems.",
    workCategoryProduct: "DIGITAL PRODUCT",
    smartwalletDescription: "A personal finance application I developed to bring my programming and design skills together in one product.",
    downloadProject: "View the app",
    workCategoryVideo: "VIDEO & STORYTELLING",
    videoWorkTitle: "Stories in motion",
    videoWorkDescription: "I've worked with more than 100 video editing clients, adapting my style to their needs and welcoming feedback and revisions.",
    videoPortfolioLabel: "View the video editing portfolio",
    discussWork: "Discuss a project",
    workCategory3d: "3D & VISUAL ART",
    threeDWorkTitle: "Exploring form",
    threeDWorkDescription: "A 3D modelling experiment recognised with the Honorary Artwork award at ESDA.",
    threeDPortfolioLabel: "View the 3D portfolio",
    viewPortfolio: "View portfolio",
    portfolioNote: "This portfolio will keep growing as I create new work.",
    contactKicker: "HAVE AN IDEA?",
    contactLineOne: "Let's make something",
    contactAccent: "that matters.",
    contactLead: "Have a project, an opportunity, or just want to say hello? I'm always happy to hear a new idea.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Tell me about your idea",
    sendButton: "Send a message",
    footerMade: "Designed and made with curiosity.",
    invalidForm: "Please enter your name, email, and message before sending.",
    invalidEmail: "Please enter a valid email address.",
    sending: "Sending your message...",
    successMessage: "Your message was sent.",
    openingEmail: "Opening your email app...",
    emailSubject: "Message from "
  }
};

const languageSelect = document.getElementById("languageSelect");
const supportedLanguages = ["id", "en-GB", "en-US"];
const defaultLanguage = "id";
let formStatusKey = "";
const status = document.getElementById("status");
const description = document.querySelector('meta[name="description"]');

function getMessages(language) {
  return translations[language === "id" ? "id" : "en"];
}

function setLanguage(language) {
  const selectedLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;
  const messages = getMessages(selectedLanguage);

  document.documentElement.lang = selectedLanguage;
  languageSelect.value = selectedLanguage;
  document.title = messages.title;
  description.content = messages.description;
  document.querySelector('meta[property="og:title"]').content = messages.title;
  document.querySelector('meta[property="og:description"]').content = messages.description;
  document.querySelector('meta[name="twitter:title"]').content = messages.title;
  document.querySelector('meta[name="twitter:description"]').content = messages.description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.hasOwn(messages, key)) element.textContent = messages[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (Object.hasOwn(messages, key)) element.setAttribute("aria-label", messages[key]);
  });
  status.textContent = formStatusKey ? messages[formStatusKey] : "";

  localStorage.setItem("erza-portfolio-language", selectedLanguage);
}

setLanguage(localStorage.getItem("erza-portfolio-language") || defaultLanguage);
languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.focus();
  }
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main > .section, main > .contact-section");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      const currentLink = nav.querySelector(`a[href="#${entry.target.id}"]`);
      nav.querySelectorAll("a[aria-current]").forEach((link) => link.removeAttribute("aria-current"));
      currentLink?.setAttribute("aria-current", "location");
    }
  });
}, { rootMargin: "-20% 0px -55% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

const footerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
});
footerObserver.observe(document.querySelector(".site-footer"));

const EMAIL_TUJUAN = "muhammaderza09@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${EMAIL_TUJUAN}`;
const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const messages = getMessages(languageSelect.value);

  if (!name || !email || !message) {
    formStatusKey = "invalidForm";
    status.textContent = messages[formStatusKey];
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formStatusKey = "invalidEmail";
    status.textContent = messages[formStatusKey];
    return;
  }

  const payload = {
    name,
    email,
    message,
    _subject: `${messages.emailSubject}${name}`,
    _replyto: email,
    _captcha: "false"
  };

  formStatusKey = "sending";
  status.textContent = messages[formStatusKey];
  sendBtn.disabled = true;

  try {
    const response = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!response.ok || result.success === false || result.success === "false") {
      throw new Error(result.message || "Gagal mengirim pesan");
    }

    contactForm.reset();
    formStatusKey = "successMessage";
    status.textContent = getMessages(languageSelect.value)[formStatusKey];
  } catch {
    const subject = encodeURIComponent(`${messages.emailSubject}${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    window.location.href = `mailto:${EMAIL_TUJUAN}?subject=${subject}&body=${body}`;
    formStatusKey = "openingEmail";
    status.textContent = getMessages(languageSelect.value)[formStatusKey];
  } finally {
    sendBtn.disabled = false;
  }
});

/* ============================================================
   ENHANCEMENT PACK — oleh Budi
   1. Header .is-scrolled (Fix 2) + scroll progress bar
   2. Pause animasi infinite saat hero off-screen (Fix 3)
   3. Count-up angka proof saat terlihat
   4. Parallax mouse hero-art (desktop, pointer halus)
   5. Tilt 3D halus pada skill-card (desktop, pointer halus)
   ============================================================ */
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isDesktop = window.matchMedia('(min-width: 761px)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  /* 1. Header solid setelah scroll + progress bar (rAF-throttled, passive) */
  var header = document.querySelector('.site-header');
  var progress = document.querySelector('.scroll-progress');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || 0;
      if (header) header.classList.toggle('is-scrolled', y > 24);
      if (progress && isDesktop) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 2. Pause animasi infinite hero saat off-screen — hemat baterai/GPU */
  var heroArt = document.querySelector('.hero-art');
  if (heroArt && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        heroArt.classList.toggle('anims-paused', !entry.isIntersecting);
      });
    }).observe(heroArt);
  }

  /* 3. Count-up angka proof (mis. 100+) saat kartu terlihat */
  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    if (prefersReduced) { el.textContent = target; return; }
    var dur = 1200, t0 = performance.now();
    function tick(now) {
      var p = Math.min((now - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { runCounter(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cObs.observe(c); });
  }

  /* 4. Parallax mouse pada hero art — desktop + pointer halus saja */
  if (isDesktop && finePointer && !prefersReduced && heroArt) {
    var hero = document.querySelector('.hero');
    var pTick = false;
    hero.addEventListener('mousemove', function (e) {
      if (pTick) return;
      pTick = true;
      requestAnimationFrame(function () {
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        heroArt.style.setProperty('--px', x.toFixed(3));
        heroArt.style.setProperty('--py', y.toFixed(3));
        pTick = false;
      });
    });
    hero.addEventListener('mouseleave', function () {
      heroArt.style.setProperty('--px', '0');
      heroArt.style.setProperty('--py', '0');
    });
  }

  /* 5. Tilt 3D halus pada skill card — desktop + pointer halus saja */
  if (isDesktop && finePointer && !prefersReduced) {
    document.querySelectorAll('.skill-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -7;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 7;
        card.style.transform =
          'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }
})();
