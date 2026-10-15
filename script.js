
/*
  DevStories Blog interactions
  1. Mobile navigation
  2. Topic/category filtering
*/

// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

function closeMenu() {
  if (!menuToggle || !primaryNav) return;

  primaryNav.classList.remove("is-open");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute(
    "aria-label",
    "Open navigation menu"
  );
}

if (menuToggle && primaryNav) {
  // Open and close the mobile navigation.
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );
  });

  // Close the menu after selecting a navigation link.
  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when the Escape key is pressed.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

// ========================================
// 2. TOPIC / CATEGORY FILTERING
// ========================================

const topicButtons = document.querySelectorAll(".topic-tab");
const storyCards = document.querySelectorAll(".story-card");
const storyCount = document.querySelector("#story-count");
const emptyState = document.querySelector("#empty-state");

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTopic = button.dataset.filter;
    let visibleStories = 0;

    // Update the selected category button.
    topicButtons.forEach((topicButton) => {
      const isSelected = topicButton === button;

      topicButton.classList.toggle("active", isSelected);

      topicButton.setAttribute(
        "aria-pressed",
        String(isSelected)
      );
    });

    // Show only articles matching the selected category.
    storyCards.forEach((card) => {
      const matchesTopic =
        selectedTopic === "All" ||
        card.dataset.category === selectedTopic;

      card.hidden = !matchesTopic;

      if (matchesTopic) {
        visibleStories += 1;
      }
    });

    // Update the number of visible articles.
    if (storyCount) {
      storyCount.textContent =
        `${visibleStories} ${
          visibleStories === 1 ? "story" : "stories"
        }`;
    }

    // Show an empty-state message if no articles match.
    if (emptyState) {
      emptyState.hidden = visibleStories !== 0;
    }
  });
});
