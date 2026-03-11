document.addEventListener("DOMContentLoaded", function () {

  const lazyImages = document.querySelectorAll("img[data-src]");

  const loadImage = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.removeAttribute("data-src");
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (!entry.isIntersecting) {
        return;
      }

      loadImage(entry.target);
      observer.unobserve(entry.target);

    });

  });

  lazyImages.forEach(image => {
    imageObserver.observe(image);
  });

});
