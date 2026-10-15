// DevStories interactions: mobile navigation and topic filtering.
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

const topicButtons = document.querySelectorAll(".topic-tab");
const storyCards = document.querySelectorAll(".story-card");
const storyCount = document.querySelector("#story-count");
const emptyState = document.querySelector("#empty-state");

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTopic = button.dataset.filter;
    let visibleStories = 0;

    topicButtons.forEach((topicButton) => {
      const isSelected = topicButton === button;
      topicButton.classList.toggle("active", isSelected);
      topicButton.setAttribute("aria-pressed", String(isSelected));
    });

    storyCards.forEach((card) => {
      const matchesTopic = selectedTopic === "All" || card.dataset.category === selectedTopic;
      card.hidden = !matchesTopic;
      if (matchesTopic) visibleStories += 1;
    });

    if (storyCount) {
      storyCount.textContent = `${visibleStories} ${visibleStories === 1 ? "story" : "stories"}`;
    }
    if (emptyState) emptyState.hidden = visibleStories !== 0;
  });
});
