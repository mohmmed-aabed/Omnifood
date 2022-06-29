const headerEl = document.querySelector('header');
const allLinks = document.querySelectorAll('a:link');

// Mobile Nav
document
  .querySelector('.btn-mobile-nav')
  .addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
  });

//   Smooth Navigation
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const linkHref = link.getAttribute('href');
    //   Scroll to top
    if (linkHref === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    //   Scroll to the section
    if (linkHref !== '#' && linkHref.startsWith('#')) {
      document.querySelector(linkHref).scrollIntoView({ behavior: 'smooth' });
    }
    // Close the mobile nav
    if (link.classList.contains('main-nav-link')) {
      if (headerEl.classList.contains('nav-open')) {
        headerEl.classList.remove('nav-open');
      }
    }
  });
});
