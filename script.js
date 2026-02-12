const menuopenButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");
menuopenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");

});
// close the menu button when close button is clicked
 menucloseButton.addEventListener("click",()=>{
    menuopenButton.click();
});