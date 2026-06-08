/* Theme toggle + mobile nav — loaded deferred; FOCT prevention
   is handled by the inline script in <head> */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var DARK  = 'dark';
  var LIGHT = 'light';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {

    /* ---- Theme toggle button ---- */
    var toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        apply(current === DARK ? LIGHT : DARK);
      });
    }

    /* ---- Mobile nav ---- */
    var mobileBtn = document.querySelector('.nav__mobile-toggle');
    var mobileNav = document.getElementById('mobile-nav');

    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener('click', function () {
        var isOpen = mobileNav.classList.contains('is-open');
        mobileNav.classList.toggle('is-open', !isOpen);
        mobileBtn.setAttribute('aria-expanded', String(!isOpen));
        mobileBtn.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      });

      document.addEventListener('click', function (e) {
        if (!mobileNav.contains(e.target) && !mobileBtn.contains(e.target)) {
          mobileNav.classList.remove('is-open');
          mobileBtn.setAttribute('aria-expanded', 'false');
          mobileBtn.setAttribute('aria-label', 'Open menu');
        }
      });

      /* Close on Escape */
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
          mobileNav.classList.remove('is-open');
          mobileBtn.setAttribute('aria-expanded', 'false');
          mobileBtn.setAttribute('aria-label', 'Open menu');
          mobileBtn.focus();
        }
      });
    }

    /* ---- Sync with OS preference changes ---- */
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', function (e) {
      /* Only follow OS if the user hasn't manually chosen */
      try {
        if (!localStorage.getItem(STORAGE_KEY)) {
          apply(e.matches ? DARK : LIGHT);
        }
      } catch (err) {}
    });
  });
}());
