var typed = new Typed(".text", {
  strings: ["FRONTED DEVELOPER", "WEB DESIGNER"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
  })
  document.querySelectorAll('.progress-line span').forEach(span => {
    const percent = span.getAttribute('data-percent');
    span.style.setProperty('--percent', percent);
  });
