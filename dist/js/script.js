//Nav Element
function handleNavClick() {
  const nav = document.getElementById("navElement");

  // Fungsi untuk memeriksa ukuran layar dan menghapus onclick di lg
  function updateNavOnResize() {
    if (window.innerWidth >= 1024) {
      nav.removeAttribute("onclick");
    } else {
      nav.setAttribute("onclick", "navSettings()");
    }
  }

  // Jalankan saat halaman dimuat dan ketika ukuran layar berubah
  updateNavOnResize();
  window.addEventListener("resize", updateNavOnResize);
}

// Panggil fungsi setelah halaman dimuat
handleNavClick();

//Nav Settings
function navSettings() {
  let navSettings = document.getElementById("navSettings");
  let navIcon = document.getElementById("nav-icon");
  let navImg = document.getElementById("nav-img");
  let navMenu = document.getElementById("nav-menu");

  navSettings.classList.toggle("w-full");
  navIcon.classList.toggle("pb-6");
  navMenu.classList.toggle("hidden");

  if (navImg.classList.contains("w-9")) {
    navImg.classList.remove("w-9");
    navImg.classList.add("w-16");
  } else {
    navImg.classList.remove("w-16");
    navImg.classList.add("w-9");
  }
}

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
  let navSettings = document.getElementById("navSettings");

  dialog.classList.remove("hidden");
  navSettings.classList.toggle("hidden");
  setTimeout(() => {
    dialog.classList.add("flex");
  }, 20);
}

function hideAddDialog() {
  let dialog = document.getElementById("addDialog");
  let navSettings = document.getElementById("navSettings");

  dialog.classList.add("hidden");
  navSettings.classList.toggle("hidden");
  setTimeout(() => {
    dialog.classList.remove("flex");
  }, 500);
}

function showDialog() {
  let dialog = document.getElementById("dialog");
  let navSettings = document.getElementById("navSettings");

  dialog.classList.remove("hidden");
  navSettings.classList.toggle("hidden");
  setTimeout(() => {
    dialog.classList.add("flex");
  }, 20);
}

function hideDialog() {
  let dialog = document.getElementById("dialog");
  let navSettings = document.getElementById("navSettings");

  dialog.classList.add("hidden");
  navSettings.classList.toggle("hidden");
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
