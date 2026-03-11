
document.addEventListener("DOMContentLoaded", function () {

  const scripts = document.querySelectorAll("script[data-defer]");

  scripts.forEach(script => {

    const newScript = document.createElement("script");

    newScript.src = script.getAttribute("data-src");
    newScript.defer = true;

    document.body.appendChild(newScript);

  });

});
