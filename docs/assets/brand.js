/* Pass theme to main/education and set footer year */
(function () {
  // Footer year (works across all pages)
  const y = document.querySelector('footer .md-footer-meta time, #year');
  if (y) y.textContent = new Date().getFullYear();

  // Append ?t=dark|light to outbound links so theme feels continuous
  function currentTheme() {
    // Material uses data-md-color-scheme="slate" (dark) or "default" (light)
    const scheme =
      document.documentElement.getAttribute('data-md-color-scheme') ||
      document.body.getAttribute('data-md-color-scheme') ||
      'default';
    return scheme === 'slate' ? 'dark' : 'light';
  }
  function decorate(a) {
    try {
      const url = new URL(a.href);
      if (/signalpilot\.io$/i.test(url.hostname) || /education\.signalpilot\.io$/i.test(url.hostname)) {
        url.searchParams.set('t', currentTheme());
        a.href = url.toString();
      }
    } catch (_) {}
  }
  document.querySelectorAll('.sp-links a, .sp-cta').forEach(decorate);
})();

/* MOBILE DRAWER FIX: Close drawer when clicking page links or overlay */
(function() {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const drawerToggle = document.querySelector('[data-md-toggle="drawer"]');
    const overlay = document.querySelector('.md-overlay');

    if (drawerToggle) {
      // Close drawer when clicking navigation links
      const navLinks = document.querySelectorAll('.md-nav__link:not(.md-nav__link--active)');

      navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          // Check if this is a page link (not a section toggle)
          if (link.href && !link.classList.contains('md-nav__link--index')) {
            // Close the drawer by unchecking the toggle
            drawerToggle.checked = false;
          }
        });
      });

      // Close drawer when clicking overlay
      if (overlay) {
        overlay.addEventListener('click', function() {
          drawerToggle.checked = false;
        });
      }
    }
  });
})();
