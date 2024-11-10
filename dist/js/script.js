// Settings Button
function toggleSettingsDropdown() {
  const settingsDropdown = document.querySelector("#settings-menu");
  settingsDropdown.classList.toggle("hidden");
}

// Profile Button
function toggleProfileDropdown() {
  const profileDropdown = document.querySelector("#profile-menu");
  profileDropdown.classList.toggle("hidden");
}

// Action Button
function showAddDialog() {
  let dialog = document.getElementById("addDialog");
  dialog.classList.remove("hidden");
  setTimeout(() => {
    dialog.classList.add("flex");
  }, 20);
}

function hideAddDialog() {
  let dialog = document.getElementById("addDialog");
  dialog.classList.add("hidden");
  setTimeout(() => {
    dialog.classList.remove("flex");
  }, 500);
}

function showDialog() {
  let dialog = document.getElementById("dialog");
  dialog.classList.remove("hidden");
  setTimeout(() => {
    dialog.classList.add("flex");
  }, 20);
}

function hideDialog() {
  let dialog = document.getElementById("dialog");
  dialog.classList.add("hidden");
  setTimeout(() => {
    dialog.classList.remove("flex");
  }, 500);
}

function showEditDialog() {
  let dialog = document.getElementById("editDialog");
  dialog.classList.remove("hidden");
  setTimeout(() => {
    dialog.classList.add("flex");
  }, 20);
}

function hideEditDialog() {
  let dialog = document.getElementById("editDialog");
  dialog.classList.add("hidden");
  setTimeout(() => {
    dialog.classList.remove("flex");
  }, 500);
}
