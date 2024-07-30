/*Destination Form*/
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

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var destination = document.getElementById('main-destination-option').value;
    var isValid = true;

    document.getElementById('error-name').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-phone').innerHTML = '';
    document.getElementById('error-destination').innerHTML = '';

    // Validate name
    if (name === '') {
        document.getElementById('error-name').innerHTML = 'Name is required';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('error-email').innerHTML = 'Email is required';
        isValid = false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('error-email').innerHTML = 'Invalid email format';
            isValid = false;
        }
    }

    // Validate phone number
    if (phone === '') {
        document.getElementById('error-phone').innerHTML = 'Phone number is required';
        isValid = false;
    } else {
        var phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById('error-phone').innerHTML = 'Invalid phone number';
            isValid = false;
        }
    }

    // Validate destination
    if (destination === '') {
        document.getElementById('error-destination').innerHTML = 'Destination is required';
        isValid = false;
    }

    return isValid;
}

/* NavBar Scrolled*/
window.addEventListener("scroll", function() {
    var header = document.getElementById("navbar");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.querySelector('.toggle-btn i').addEventListener('click', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const toggleBtn = document.querySelector('.toggle-btn i');
    if (window.scrollY > 50) { /* Anda dapat menyesuaikan nilai scrollY sesuai kebutuhan */
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});


