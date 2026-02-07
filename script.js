// ====== DATA (your categories + items) ======
const PHONE = "+971524174000";

// Categories you asked for
const CATEGORIES = [
  { id: "wheelbarrows", label: "Wheelbarrows" },
  { id: "printed_tapes", label: "Printed Tapes" },
  { id: "trolleys", label: "Trolleys" },
  { id: "chalk_powder", label: "Chalk Line Powder" },
];

// Items inside categories (placeholder images for now)
const ITEMS = [
  // Wheelbarrows (4)
  {
    id: "wb_pink",
    category: "wheelbarrows",
    name: "Pink Wheelbarrow",
    desc: "Durable wheelbarrow for site material handling.",
  },
  {
    id: "wb_green_welding",
    category: "wheelbarrows",
    name: "Green Welding Wheelbarrow",
    desc: "Strong frame, suitable for heavy-duty use.",
  },
  {
    id: "wb_blue_welding",
    category: "wheelbarrows",
    name: "Blue Welding Wheelbarrow",
    desc: "Welding model wheelbarrow (blue variant).",
  },
  {
    id: "wb_blue_france",
    category: "wheelbarrows",
    name: "Blue Wheelbarrow (France Model)",
    desc: "France model wheelbarrow (blue).",
  },

  // Printed tapes (your grouping)
  {
    id: "tape_caution",
    category: "printed_tapes",
    name: "Caution Tape",
    desc: "Printed tape for site safety and marking.",
  },
  {
    id: "tape_warning",
    category: "printed_tapes",
    name: "Warning Tape",
    desc: "High visibility printed warning tape.",
  },
  {
    id: "tape_red_white",
    category: "printed_tapes",
    name: "Red & White Printed Tape",
    desc: "Printed red/white tape for clear hazard marking.",
  },
  {
    id: "tape_mixed_warning",
    category: "printed_tapes",
    name: "Mixed Color Warning Tape",
    desc: "Mixed color warning tape variant.",
  },

  // Trolleys
  {
    id: "trolley_tabook",
    category: "trolleys",
    name: "Tabook Trolley",
    desc: "Trolley for moving materials efficiently.",
  },
  {
    id: "trolley_gas",
    category: "trolleys",
    name: "Gas Trolley",
    desc: "Trolley designed for gas cylinder handling.",
  },
  {
    id: "trolley_folding",
    category: "trolleys",
    name: "Folding Trolley",
    desc: "Compact folding trolley for easy storage.",
  },

  // Chalk line powder brands (as you said: CHF Board brand, Novice, Reflexes)
  // I’m naming the category clearly; item names keep your words.
  {
    id: "chalk_chf",
    category: "chalk_powder",
    name: "CHF Board Brand",
    desc: "Chalk line powder (brand variant).",
  },
  {
    id: "chalk_novice",
    category: "chalk_powder",
    name: "Novice",
    desc: "Chalk line powder (brand variant).",
  },
  {
    id: "chalk_reflexes",
    category: "chalk_powder",
    name: "Reflexes",
    desc: "Chalk line powder (brand variant).",
  },
];

// ====== STATE ======
let activeCategory = "wheelbarrows";

// ====== ELEMENTS ======
const categoryList = document.getElementById("categoryList");
const itemsGrid = document.getElementById("itemsGrid");
const emptyState = document.getElementById("emptyState");
const activeCategoryTitle = document.getElementById("activeCategoryTitle");
const itemsCount = document.getElementById("itemsCount");

// Modal
const modal = document.getElementById("itemModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalCategory = document.getElementById("modalCategory");

// Mobile nav
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

// ====== HELPERS ======
function categoryLabel(catId) {
  return CATEGORIES.find(c => c.id === catId)?.label || "Category";
}

function filteredItems() {
  return ITEMS.filter(i => i.category === activeCategory);
}

// ====== RENDER ======
function renderCategories() {
  categoryList.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `cat-btn ${cat.id === activeCategory ? "is-active" : ""}`;
    btn.textContent = cat.label;
    btn.addEventListener("click", () => {
      activeCategory = cat.id;
      renderCategories();
      renderItems();
    });
    categoryList.appendChild(btn);
  });
}

function renderItems() {
  const list = filteredItems();
  activeCategoryTitle.textContent = categoryLabel(activeCategory);
  itemsCount.textContent = `${list.length} item${list.length === 1 ? "" : "s"}`;

  itemsGrid.innerHTML = "";
  emptyState.hidden = list.length !== 0;

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.tabIndex = 0;

    card.innerHTML = `
      <div class="item-card__img">IMAGE</div>
      <div class="item-card__body">
        <h4 class="item-card__title">${item.name}</h4>
        <p class="item-card__desc">${item.desc}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(item));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openModal(item);
    });

    itemsGrid.appendChild(card);
  });
}

// ====== MODAL ======
function openModal(item) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = item.name;
  modalDesc.textContent = item.desc;
  modalCategory.textContent = categoryLabel(item.category);
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalBackdrop.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// ====== MOBILE NAV (no duplicate on desktop; only appears on small screens) ======
menuBtn.addEventListener("click", () => {
  const isHidden = mobileNav.hasAttribute("hidden");
  if (isHidden) mobileNav.removeAttribute("hidden");
  else mobileNav.setAttribute("hidden", "");
});
mobileNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") mobileNav.setAttribute("hidden", "");
});

// ====== INIT ======
renderCategories();
renderItems();
