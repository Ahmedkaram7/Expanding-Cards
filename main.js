const panels = document.querySelectorAll(".container .panel");

panels.forEach((p) => {
  p.addEventListener("click", () => {
    // console.log("test");
    removeActiveClasses();
    p.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
