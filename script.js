const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reduceMotion.matches) {
  document.body.classList.add("motion-ready");

  const revealGroups = [
    document.querySelectorAll("#products > div"),
    document.querySelectorAll("#pricing"),
    document.querySelectorAll("#donate"),
    document.querySelectorAll("#faq h2, #faq p"),
    document.querySelectorAll("#sponsors"),
    document.querySelectorAll("#footer"),
  ];

  const reveals = [];

  revealGroups.forEach((group) => {
    group.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${index * 90}ms`);
      reveals.push(element);
    });
  });

  const revealElement = (entry) => {
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) revealElement(entry);
      });
    },
    { threshold: 0.16 },
  );

  reveals.forEach((element) => observer.observe(element));
}
