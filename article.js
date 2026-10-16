// Article data keeps the example articles in one simple, editable list.
const articles = {
  1: { category:"WEB DEVELOPMENT", title:"The beginner's guide to building for the web", subtitle:"You don't need to know everything to start. Learn how HTML, CSS, and JavaScript work together to turn an idea into a website.", author:"Nelly Saro", date:"Oct 12, 2026", readTime:"8 min read", avatar:"https://i.pravatar.cc/100?img=47", image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85", alt:"Laptop showing code on a developer's desk", tags:["#WebDevelopment","#HTML","#CSS","#LearningToCode"], paragraphs:["Every website you visit started with an idea. The good news is that you can learn the same basic tools that developers use to bring those ideas to life. You do not need to understand everything on day one; you only need to take the next small step.","HTML gives a page its structure. It describes headings, paragraphs, images, links, and other content. Think of it as the frame of a house.","CSS controls how the page looks. It adds colors, spacing, layouts, and responsive behavior so the page can adapt to different screen sizes.","JavaScript adds interaction. It can open a mobile menu, filter articles, validate a form, or update content when a visitor clicks a button.","Your first project does not need to be complicated. A personal profile page, a recipe collection, or a simple blog can teach you how to structure content, style components, and connect pages together.","When something does not work, read the error message and test one change at a time. Understanding why a solution works is more valuable than copying it quickly."] },
  2: { category:"DESIGN", title:"Design systems: small rules, better products", subtitle:"How a few reusable design decisions can make digital products feel consistent and easy to use.", author:"Amara K.", date:"Oct 10, 2026", readTime:"5 min read", avatar:"https://i.pravatar.cc/100?img=44", image:"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85", alt:"Colorful graphic design work on a desk", tags:["#UIDesign","#Workflow"], paragraphs:["A design system is a shared set of decisions that helps a team build a consistent product. It can include colors, type sizes, spacing rules, buttons, and other reusable components.","Start with a small set of colors and text styles. Give each choice a purpose, such as a primary action color or a muted color for secondary information.","Reusable components save time because you can improve one component and use that improvement throughout the product.","Keep the system practical. Document the choices you use most, test them with real content, and update them when you learn something new."] },
  3: { category:"TECHNOLOGY", title:"The everyday technology behind the apps we love", subtitle:"A friendly look at the invisible tools that help our favorite apps work smoothly.", author:"David M.", date:"Oct 8, 2026", readTime:"6 min read", avatar:"https://i.pravatar.cc/100?img=12", image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85", alt:"Close-up of a computer circuit board", tags:["#Tech","#Explained"], paragraphs:["A familiar app may look simple on the screen, but several technologies work together behind the scenes. The browser displays the interface, servers process requests, and databases store information.","When you sign in or save a favorite item, the app often sends a request to a server. The server checks the request and returns the information needed by the interface.","Understanding these pieces helps developers troubleshoot problems and make better decisions about how their applications should work.","You do not need to learn every technology at once. Begin by understanding what a browser does, what a server does, and how data travels between them."] },
  4: { category:"WEB DEVELOPMENT", title:"Five habits that make learning to code easier", subtitle:"Build confidence with small practice sessions, useful notes, and projects that solve real problems.", author:"Eric N.", date:"Oct 6, 2026", readTime:"4 min read", avatar:"https://i.pravatar.cc/100?img=32", image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85", alt:"Code displayed on a computer screen", tags:["#JavaScript","#Learning"], paragraphs:["Learning to code is easier when you focus on consistent practice rather than trying to learn everything in one sitting.","First, make practice small enough to repeat. Twenty focused minutes can be more useful than a long session spent switching between tutorials.","Second, write down what a concept means in your own words. Add a tiny example that you can return to later.","Finally, build projects and test your work. Small mistakes are part of the process, and fixing them teaches you how the pieces fit together."] },
  5: { category:"CAREER", title:"Your first tech portfolio: show the process", subtitle:"Help people understand how you think by explaining the choices behind your projects.", author:"Grace U.", date:"Oct 4, 2026", readTime:"7 min read", avatar:"https://i.pravatar.cc/100?img=49", image:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85", alt:"A team collaborating around a table", tags:["#Portfolio","#Career"], paragraphs:["A portfolio is more than a gallery of finished screens. It is an opportunity to show how you understand a problem, make decisions, and improve a solution.","For each project, explain the goal, the tools you used, and one challenge you solved. Include screenshots and a working demo when possible.","Choose a few projects that show different skills instead of adding every exercise you have completed.","Be honest about your contribution and what you would improve next. A clear explanation can make a small project meaningful."] },
  6: { category:"DESIGN", title:"A practical checklist for a more accessible website", subtitle:"Readable text, keyboard navigation, and clear labels make websites better for everyone.", author:"Joan T.", date:"Oct 2, 2026", readTime:"5 min read", avatar:"https://i.pravatar.cc/100?img=5", image:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=85", alt:"Laptop displaying a clean website design", tags:["#Accessibility","#UX"], paragraphs:["Accessible websites are easier for more people to use. Accessibility is not a final decoration; it is part of building a thoughtful experience from the beginning.","Use headings in a logical order and write link text that explains where the link goes. Add useful alternative text to meaningful images.","Make sure the page can be navigated with a keyboard and that focus indicators are visible. Do not rely on color alone to communicate important information.","Check text contrast and make sure controls have clear labels. Test the page at different sizes and ask people to try it when you can."] }
};

const params = new URLSearchParams(window.location.search);
const article = articles[params.get("id")] || articles[1];
document.title = `${article.title} — DevStories`;
document.querySelector("#article-category").textContent = article.category;
document.querySelector("#article-title").textContent = article.title;
document.querySelector("#article-subtitle").textContent = article.subtitle;
document.querySelector("#article-author").textContent = article.author;
document.querySelector("#article-date").textContent = article.date;
document.querySelector("#article-read-time").textContent = article.readTime;
document.querySelector("#article-avatar").src = article.avatar;
document.querySelector("#article-avatar").alt = `${article.author} avatar`;
document.querySelector("#article-cover").src = article.image;
document.querySelector("#article-cover").alt = article.alt;

// Use a short, readable article structure for whichever story the visitor selects.
const articleBody = document.querySelector("#article-body");
if (params.get("id") && params.get("id") !== "1") {
  articleBody.replaceChildren();
  const opening = document.createElement("p");
  opening.textContent = article.paragraphs[0];
  articleBody.append(opening);
  const headings = ["Understand the basics", "Make it practical", "Keep improving"];
  article.paragraphs.slice(1).forEach((paragraph, index) => {
    if (index === 1 || index === 3) {
      const heading = document.createElement("h2");
      heading.textContent = headings[index === 1 ? 0 : 1];
      articleBody.append(heading);
    }
    const p = document.createElement("p");
    p.textContent = paragraph;
    articleBody.append(p);
  });
}
const tagContainer = document.querySelector(".article-tags");
tagContainer.replaceChildren();
article.tags.forEach((tag) => {
  const span = document.createElement("span");
  span.textContent = tag;
  tagContainer.append(span);
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });
  primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

const backToTopButton = document.querySelector("#back-to-top");

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const copyArticleButton = document.querySelector("#copy-article-link");
const copyLinkMessage = document.querySelector("#copy-link-message");

if (copyArticleButton && copyLinkMessage) {
  copyArticleButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copyLinkMessage.textContent = "Article link copied successfully!";
    } catch (error) {
      copyLinkMessage.textContent =
        "Copy was unavailable. Please copy the link from your browser address bar.";
    }
  });
}
