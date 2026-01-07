// Form submission handling
const subscribeForm = document.getElementById("subscribeForm");
const successModal = document.getElementById("successModal");
const closeModalButton = document.getElementById("closeModal");

// Handle hero form submission
subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  handleSubscription(this);
});

// Handle subscription logic
function handleSubscription(form) {
  const emailInput = form.querySelector('input[type="email"]');
  const email = emailInput.value;

  // Basic email validation
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // In production, this would send to your backend/email service
  // For now, we'll simulate a successful subscription
  console.log("Subscription email:", email);

  // Show success modal
  showSuccessModal();

  // Reset form
  form.reset();
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show success modal
function showSuccessModal() {
  successModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal
function closeModal() {
  successModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal button click
closeModalButton.addEventListener("click", closeModal);

// Close modal when clicking outside
successModal.addEventListener("click", function (e) {
  if (e.target === successModal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && successModal.classList.contains("active")) {
    closeModal();
  }
});

// Smooth scroll for any future anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Initialize CookieConsent by Osano
window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: { background: "#1f2937", text: "#ffffff" },
      button: { background: "#dc2626", text: "#ffffff" },
    },
    content: {
      message: "We use cookies to enhance your experience and analyze site usage.",
      dismiss: "Accept",
      link: "Privacy Policy",
      href: "#",
    },
    theme: "dark",
    position: "bottom",
  });
});
