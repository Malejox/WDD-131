const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

function handleResize() {
  if (window.innerWidth > 1000) {
    navLinks.classList.remove("hide");
  } else {
    navLinks.classList.add("hide");
  }
}

function toggleMenu() {
  navLinks.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
handleResize();


const gallery = document.querySelector(".gallery");

function openModal(event) {
  const img = event.target.closest("img");
  if (!img) return;

  const modal = document.createElement("dialog");
  modal.classList.add("image-viewer");

  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");
  const baseName = src.split("-")[0];
  const fullSrc = `${baseName}-full.jpeg`;

  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  document.body.appendChild(modal);
  modal.showModal();

  const closeBtn = modal.querySelector(".close-viewer");
  closeBtn.addEventListener("click", () => modal.close());

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  modal.addEventListener("close", () => modal.remove());
}

gallery.addEventListener("click", openModal);