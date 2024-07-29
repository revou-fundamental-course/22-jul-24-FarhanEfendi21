/* NavBar Scrolled*/
window.addEventListener("scroll", function() {
    var header = document.getElementById("navbar");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/*Menu Option*/
document.addEventListener("DOMContentLoaded", function() {
    const customSelect = document.querySelector(".custom-select");
    const customSelectTrigger = customSelect.querySelector(".custom-select-trigger");
    const customOptions = customSelect.querySelector(".custom-options");
    const customOptionsItems = customOptions.querySelectorAll(".custom-option");
    const select = document.querySelector("#main-destination-option");

    customSelectTrigger.addEventListener("click", function() {
        customSelect.classList.toggle("open");
    });

    customOptionsItems.forEach(option => {
        option.addEventListener("click", function() {
            customSelectTrigger.textContent = option.textContent;
            select.value = option.getAttribute("data-value");
            customSelect.classList.remove("open");
        });
    });

    document.addEventListener("click", function(e) {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove("open");
        }
    });
});
   