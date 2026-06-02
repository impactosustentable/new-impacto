/* =========================================================
   IMPACTO SUSTENTABLE — script.js
   ========================================================= */

/* 🔧 NÚMERO DE WHATSAPP — cámbialo aquí en un solo lugar.
   Formato internacional sin "+", sin espacios.
   57 = Colombia.  */
const WHATSAPP = "573158714839";
const PHONE_DISPLAY = "+57 315 871 4839";

const waBase = "https://wa.me/" + WHATSAPP;
const waLink = (msg) => waBase + "?text=" + encodeURIComponent(msg || "Hola Impacto Sustentable, quiero más información sobre sus servicios.");

document.addEventListener("DOMContentLoaded", () => {
  // Año
  document.getElementById("yr").textContent = new Date().getFullYear();

  // Mostrar teléfono configurado
  const pt = document.getElementById("phoneText");
  if (pt) pt.textContent = PHONE_DISPLAY;

  // Enlaces base de WhatsApp
  ["waFloat", "waFoot", "waTop"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waLink();
  });

  // Enlaces con mensaje personalizado (data-msg)
  document.querySelectorAll(".wa-link, [data-msg]").forEach(el => {
    const msg = el.getAttribute("data-msg");
    if (msg) {
      el.setAttribute("href", waLink(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  // Header scrolled
  const hdr = document.getElementById("hdr");
  const onScroll = () => {
    hdr.classList.toggle("scrolled", window.scrollY > 40);
    document.getElementById("toTop").classList.toggle("show", window.scrollY > 600);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menú móvil
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    burger.classList.toggle("on");
    document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.classList.remove("on");
    document.body.style.overflow = "";
  }));

  // Scroll arriba
  document.getElementById("toTop").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }));

  // Reveal + stagger
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        if (e.target.classList.contains("stagger")) {
          [...e.target.children].forEach((c, i) => c.style.transitionDelay = (i * 80) + "ms");
        }
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal, .stagger").forEach(el => io.observe(el));

  // Contador hero
  const counters = document.querySelectorAll("[data-count]");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "";
        let n = 0; const step = Math.max(1, Math.round(end / 30));
        const t = setInterval(() => {
          n += step; if (n >= end) { n = end; clearInterval(t); }
          el.textContent = (suf.includes("+") ? "+" : "") + n;
        }, 35);
        cio.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));

  // Hojas flotantes en el hero (ligero)
  const leaves = document.getElementById("leaves");
  if (leaves && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const n = window.innerWidth < 620 ? 5 : 9;
    for (let i = 0; i < n; i++) {
      const s = document.createElement("div");
      s.className = "leaf-float";
      const size = 14 + Math.random() * 26;
      s.style.left = Math.random() * 100 + "%";
      s.style.bottom = "-40px";
      s.style.animationDuration = (10 + Math.random() * 12) + "s";
      s.style.animationDelay = (Math.random() * 8) + "s";
      s.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#34D399"><path d="M12 2C7 6 5 12 12 22 19 12 17 6 12 2Z"/></svg>`;
      leaves.appendChild(s);
    }
  }

  // Formulario → WhatsApp
  const send = document.getElementById("sendForm");
  if (send) {
    send.addEventListener("click", () => {
      const n = (document.getElementById("n").value || "").trim();
      const serv = document.getElementById("serv").value;
      const tel = (document.getElementById("tel").value || "").trim();
      const msg = (document.getElementById("msg").value || "").trim();
      let t = "Hola Impacto Sustentable 👋";
      if (n) t += "\nSoy " + n + ".";
      t += "\nServicio de interés: " + serv + ".";
      if (tel) t += "\nMi teléfono: " + tel + ".";
      if (msg) t += "\n" + msg;
      window.open(waLink(t), "_blank");
    });
  }
});
