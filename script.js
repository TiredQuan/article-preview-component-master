let socials = document.getElementsByClassName('socials')
function socialToggle() {
    if (socials[0].style.display === "flex") {
        socials[0].style.display = "none";
      } else {
        socials[0].style.display = "flex";
      }
}
