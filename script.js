function openModal(pdf) {
  const modal = document.getElementById("previewModal");
  const iframe = modal?.querySelector("iframe");

  if (!modal) return;

  if (iframe && pdf) {
    iframe.src = pdf;
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("previewModal");
  const iframe = modal?.querySelector("iframe");

  if (!modal) return;

  modal.style.display = "none";

  if (iframe) {
    iframe.src = "";
  }

  document.body.style.overflow = "";
}

// Κλείσιμο με click έξω
window.addEventListener("click", function (e) {
  const modal = document.getElementById("previewModal");
  if (modal && e.target === modal) {
    closeModal();
  }
});

// Κλείσιμο με Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});