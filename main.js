let progressSpans = document.querySelector(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};