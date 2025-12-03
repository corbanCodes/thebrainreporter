document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("more-info-btn");
  const toast = document.getElementById("stats-toast");

  if (!btn || !toast) return;

  let timeoutId = null;

  function showToast() {
    toast.classList.add("toast--visible");

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      toast.classList.remove("toast--visible");
    }, 5200);
  }

  btn.addEventListener("click", () => {
    showToast();
  });

  // Optional: small nudge if user stays for a bit without clicking
  setTimeout(() => {
    if (!toast.classList.contains("toast--visible")) {
      showToast();
    }
  }, 16000);
});
