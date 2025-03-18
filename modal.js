document.addEventListener("DOMContentLoaded", () => {
  // Get the status link element
  const statusLink = document.getElementById("status-link");

  // Add click event listener to the status link
  statusLink.addEventListener("click", (e) => {
    e.preventDefault();
    showModal("modal-container");
  });

  // Function to show modal
  function showModal(modalId) {
    const modalContainer = document.getElementById(modalId);
    if (modalContainer) {
      modalContainer.classList.add("show-modal");
    }
  }

  // Close modal when clicking the close button
  const closeButtons = document.querySelectorAll(".close-modal");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalContainer = document.getElementById("modal-container");
      if (modalContainer) {
        modalContainer.classList.remove("show-modal");
      }
    });
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (e) => {
    const modalContainer = document.getElementById("modal-container");
    if (e.target === modalContainer) {
      modalContainer.classList.remove("show-modal");
    }
  });
});

// About Modal
document.addEventListener("DOMContentLoaded", () => {
  // Get the about link element
  const aboutLink = document.getElementById("about-modal");

  // Add click event listener to the about link
  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    showModal("about-modal-container");
  });

  // Function to show modal
  function showModal(modalId) {
    const modalContainer = document.getElementById(modalId);
    if (modalContainer) {
      modalContainer.classList.add("show-modal");
    }
  }

  // Close modal when clicking the close button
  const closeButtons = document.querySelectorAll(".close-modal");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalContainer = document.getElementById("about-modal-container");
      if (modalContainer) {
        modalContainer.classList.remove("show-modal");
      }
    });
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (e) => {
    const modalContainer = document.getElementById("about-modal-container");
    if (e.target === modalContainer) {
      modalContainer.classList.remove("show-modal");
    }
  });
});

// Accordion
// FAQ Accordion
// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const chevron = question.querySelector('.faq-chevron');
    
    // Toggle active state for clicked question
    const isActive = question.classList.contains('active');

    // First, close all accordions
    faqQuestions.forEach((q) => {
      const otherAnswer = q.nextElementSibling;
      const otherChevron = q.querySelector('.faq-chevron');
      q.classList.remove('active');
      otherAnswer.style.maxHeight = '0px';
      if (otherChevron) {
        otherChevron.style.transform = 'rotate(0deg)';
      }
    });

    // Then, open the clicked one if it wasn't active
    if (!isActive) {
      question.classList.add('active');
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      if (chevron) {
        chevron.style.transform = 'rotate(180deg)';
      }
    }
  });
});
