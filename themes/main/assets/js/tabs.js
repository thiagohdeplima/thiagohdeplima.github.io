/* =============================================================
   Tabbed code blocks
   - Injects .tab-nav buttons above each .tab-group
   - Synchronises tabs with the same label across all groups
   - Persists last-selected label in localStorage
   ============================================================= */
(function () {
  'use strict';

  var STORAGE_KEY = 'tab-label';

  document.addEventListener('DOMContentLoaded', function () {
    var groups = Array.from(document.querySelectorAll('.tab-group'));
    if (!groups.length) { return; }

    /* ── Build tab nav for every group ─────────────────────── */

    groups.forEach(function (group) {
      var panels = Array.from(group.querySelectorAll('.tab-panel'));
      if (!panels.length) { return; }

      var nav = document.createElement('div');
      nav.className = 'tab-nav';
      nav.setAttribute('role', 'tablist');

      panels.forEach(function (panel, i) {
        var label = panel.getAttribute('data-label') || ('Tab ' + (i + 1));
        var panelId = 'tabpanel-' + uid() + '-' + i;

        panel.setAttribute('id', panelId);
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('tabindex', '0');

        var btn = document.createElement('button');
        btn.type      = 'button';
        btn.className = 'tab-btn';
        btn.textContent = label;
        btn.setAttribute('role',          'tab');
        btn.setAttribute('aria-controls', panelId);
        btn.setAttribute('aria-selected', 'false');
        btn.setAttribute('data-label',    label);

        btn.addEventListener('click', function () {
          selectLabel(label);
        });

        nav.appendChild(btn);
      });

      group.insertBefore(nav, group.firstChild);
    });

    /* ── Activate saved label or the first tab ──────────────── */

    var initial = null;
    try { initial = localStorage.getItem(STORAGE_KEY); } catch (e) {}

    groups.forEach(function (group) {
      var panels  = group.querySelectorAll('.tab-panel');
      var first   = panels[0] && panels[0].getAttribute('data-label');
      var target  = initial || first;
      activateInGroup(group, target);
    });

    /* ── Selection: sync all groups + persist ───────────────── */

    function selectLabel(label) {
      groups.forEach(function (group) {
        activateInGroup(group, label);
      });
      try { localStorage.setItem(STORAGE_KEY, label); } catch (e) {}
    }

    function activateInGroup(group, label) {
      var panels = group.querySelectorAll('.tab-panel');
      var btns   = group.querySelectorAll('.tab-btn');
      var found  = false;

      panels.forEach(function (panel) {
        if (panel.getAttribute('data-label') === label) {
          panel.hidden = false;
          found = true;
        } else {
          panel.hidden = true;
        }
      });

      /* If this group has no tab with this label, keep whatever is shown */
      if (!found) { return; }

      btns.forEach(function (btn) {
        var active = btn.getAttribute('data-label') === label;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });
    }

    /* ── Keyboard nav inside a tab nav ─────────────────────── */

    document.addEventListener('keydown', function (e) {
      if (!e.target.classList.contains('tab-btn')) { return; }
      var nav  = e.target.closest('.tab-nav');
      if (!nav) { return; }
      var btns = Array.from(nav.querySelectorAll('.tab-btn'));
      var idx  = btns.indexOf(e.target);

      if (e.key === 'ArrowRight') {
        btns[(idx + 1) % btns.length].focus();
      } else if (e.key === 'ArrowLeft') {
        btns[(idx - 1 + btns.length) % btns.length].focus();
      } else if (e.key === 'Home') {
        btns[0].focus();
      } else if (e.key === 'End') {
        btns[btns.length - 1].focus();
      } else {
        return;
      }
      e.preventDefault();
    });
  });

  function uid() {
    return Math.random().toString(36).slice(2, 7);
  }
}());
