// ===== Config =====
const PHONE_INTL = "971524174000"; // no + for WhatsApp
const PHONE_DISPLAY = "+971 52 417 4000";
const EMAIL = "businessssmnt@gmail.com";
const ADDRESS = "Industrial Area 11, Sharjah, UAE";

// Products (4 only)
const PRODUCTS = [
  {
    id: "pink",
    name: "Pink Wheelbarrow",
    desc: "Heavy-duty pink wheelbarrow built for construction and gardening tasks.",
    brand: "CHF Gold",
    img: "" // add later: assets/products/pink.jpg
  },
  {
    id: "blue-france",
    name: "Blue Wheelbarrow (France Model)",
    desc: "French-style blue wheelbarrow with reinforced tray and strong frame.",
    brand: "CHF Gold",
    img: "" // add later
  },
  {
    id: "green-welding",
    name: "Green Welding Wheelbarrow",
    desc: "Welded steel construction wheelbarrow for heavy material handling.",
    brand: "CHF Gold",
    img: "" // add later
  },
  {
    id: "tabuk-trolley",
    name: "Big Wheel Tabuk Trolley",
    desc: "Large-wheel trolley designed for rough terrain and bulk material transport.",
    brand: "CHF Gold",
    img: "" // add later
  }
];

// ===== Helpers =====
function telLink() {
  return `tel:+${PHONE_INTL}`;
}

function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${PHONE_INTL}?text=${text}`;
}

function setHref(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}

function clampCardDesc(text) {
  return text; // CSS clamps to 1 line; keep full text in modal
}

// ===== Header mobile nav =====
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  const hidden = mobileNav.hasAttribute("hidden");
  if (hidden) mobileNav.removeAttribute("hidden");
  else mobileNav.setAttribute("hidden", "");
});

mobileNav?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") mobileNav.setAttribute("hidden", "");
});

// ===== Set contact links =====
document.getElementById("phoneText").textContent = PHONE_DISPLAY;
document.getElementById("waText").textContent = PHONE_DISPLAY;

setHref("heroCall", telLink());
setHref("contactCall", telLink());
setHref("modalCall", telLink());

const defaultWaMsg = `Hello Shining Star. I would like to inquire about Wheelbarrows & Trolleys.`;
setHref("heroWa", waLink(defaultWaMsg));
setHref("contactWa", waLink(defaultWaMsg));
setHref("modalWa", waLink(defaultWaMsg)); // updated when opening modal

// ===== Render product grid =====
const grid = document.getElementById("productGrid");

function renderGrid() {
  grid.innerHTML = "";
  PRODUCTS.forEach((p) => {
    const card = document.createElement("div");
    card.className = "pCard";
    card.tabIndex = 0;

    const imgHtml = p.img
      ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;" />`
      : `<div class="pImg">Image</div>`;

    card.innerHTML = `
      <div class="pImgWrap">${imgHtml}</div>
      <div class="pBody">
        <h3 class="pTitle">${p.name}</h3>
        <p class="pDesc">${clampCardDesc(p.desc)}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(p));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openModal(p);
    });

    grid.appendChild(card);
  });
}

renderGrid();

// ===== Modal logic =====
const modal = document.getElementById("productModal");
const backdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("modalCloseBtn");

const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImage = document.getElementById("modalImage");
const modalWa = document.getElementById("modalWa");

const quoteBtn = document.getElementById("quoteBtn");

let selectedProduct = null;

function openModal(product) {
  selectedProduct = product;

  modalTitle.textContent = product.name;
  modalDesc.textContent = product.desc;

  // Image
  if (product.img) {
    modalImage.innerHTML = `<img src="${product.img}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;display:block;" />`;
  } else {
    modalImage.innerHTML = `<div class="imgPh">Image Placeholder</div>`;
  }

  // WhatsApp message for this product
  const msg = `Hello Shining Star. I want a quote for: ${product.name} (Brand: CHF Gold).`;
  modalWa.href = waLink(msg);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

backdrop?.addEventListener("click", closeModal);
closeBtn?.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// ===== Get a Quote behavior (modal -> contact + prefill form) =====
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const hint = document.getElementById("prefillHint");

quoteBtn?.addEventListener("click", () => {
  if (!selectedProduct) return;

  // Prefill message for contact form
  const quoteText = `Quote request: ${selectedProduct.name} (CHF Gold). Please share availability and pricing.`;

  messageInput.value = quoteText;
  hint.hidden = false;

  closeModal();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// ===== Send via WhatsApp (form) =====
const sendWaBtn = document.getElementById("sendWaBtn");

sendWaBtn?.addEventListener("click", () => {
  const name = (nameInput.value || "").trim();
  const email = (emailInput.value || "").trim();
  const msg = (messageInput.value || "").trim();

  const lines = [];
  lines.push("Hello Shining Star,");
  if (name) lines.push(`Name: ${name}`);
  if (email) lines.push(`Email: ${email}`);
  if (msg) lines.push(`Message: ${msg}`);
  if (!msg) lines.push("Message: I would like to inquire about your products.");

  const finalMsg = lines.join("\n");
  window.open(waLink(finalMsg), "_blank");
});
