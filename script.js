//hamburger menu animation
let toggles = document.querySelectorAll(".c-hamburger");

for (let i = toggles.length - 1; i >= 0; i--) {
  let toggle = toggles[i];
  toggleHandler(toggle);
};

function toggleHandler(toggle) {
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $('.open').removeClass('oppenned');
    } else {
      this.classList.add("is-active");
      $(".open").addClass('oppenned');
    }
  });
}
$(".sub-menu li a").click(function(event) {
  $(".open").removeClass('oppenned');
  $(".c-hamburger").removeClass('is-active');
});