function addComment() {
  const nameInput = document.getElementById("nameInput");
  const commentInput = document.getElementById("commentInput");
  const wall = document.getElementById("commentWall");

  const name = nameInput.value.trim() || "Guest";
  const message = commentInput.value.trim();

  if (!message) return;

  const comment = document.createElement("div");
  comment.className = "comment";
  comment.innerHTML = `<strong>${escapeHTML(name)}</strong><p>${escapeHTML(message)}</p>`;

  wall.prepend(comment);
  commentInput.value = "";
}

function changeStatus() {
  const statuses = [
    "Current mood: Focused",
    "Current mood: Building",
    "Current mood: Streaming soon",
    "Current mood: Resting",
    "Current mood: Grinding quests"
  ];

  const statusText = document.getElementById("statusText");
  const currentIndex = statuses.indexOf(statusText.textContent);
  const nextIndex = (currentIndex + 1) % statuses.length;
  statusText.textContent = statuses[nextIndex];
}

function escapeHTML(text) {
  return text.replace(/[&<>'"]/g, function(character) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;"
    }[character];
  });
}
