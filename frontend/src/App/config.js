"use strict"

const sidebarController = document.getElementById("sidebarController");
const sidebar = document.getElementById("sidebar");
const workspace = document.getElementById("workspace");

sidebarController.addEventListener("click", () => {
    sidebar.classList.toggle("absolute");
    sidebar.classList.toggle("-left-60");
    sidebar.classList.toggle("md:hidden");
    workspace.classList.toggle("absolute");
    workspace.classList.toggle("left-60");
});