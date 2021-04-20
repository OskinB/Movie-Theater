
var mBurger = document.querySelector(".mBurger");

// **** Opna Staðsetningar dropdownið ****
function getOpenMenu(e) {
    document.getElementById("mobileDropdown").classList.toggle("show");
}

mBurger.innerHTML = `
    <div class="dropdownTitleMobile">
        <img class="mobileHamburger" src="../images/hamburgerIcon.svg" alt="Valmynd">
    </div>
    <div id="mobileDropdown" class="dropdownMobileText">
        <a>Væntanlegt</a>
        <a>Gjafabréf</a>
        <a>Samklúbbur</a>
        <a>Síðan mín</a>
    </div>
`

// **** Svo hægt sé að clicka líka á textann til að opna dropdownið (var að búbbla sig)
var mobileMenu = document.querySelector(".dropdownTitleMobile");
mobileMenu.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    getOpenMenu()
}
