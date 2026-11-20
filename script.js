// RealmHub Studio — tiny enhancements only. Site works fully without JS.
(function () {
  // Live clock in the topbar status area (studio runs on night hours, ET).
  var status = document.querySelector(".status");
  if (status) {
    var tick = function () {
      try {
        var t = new Date().toLocaleTimeString("en-US", {
          timeZone: "America/New_York", hour: "2-digit", minute: "2-digit"
        });
        status.innerHTML = "<i></i> STUDIO ONLINE — " + t + " ET";
      } catch (e) { /* keep default label */ }
    };
    tick(); setInterval(tick, 30000);
  }
  // Copy island codes on click.
  document.querySelectorAll("code").forEach(function (el) {
    el.title = "Tap to copy";
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
      if (navigator.clipboard) navigator.clipboard.writeText(el.textContent.trim());
      var old = el.textContent; el.textContent = "COPIED ✓";
      setTimeout(function () { el.textContent = old; }, 1200);
    });
  });
})();
