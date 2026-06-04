 // login pop up

    const popupOverlay   = document.getElementById('popupOverlay');
    const popupClose     = document.getElementById('popupClose');
    const loginBtn       = document.querySelector('.log a');
    const toSignup       = document.getElementById('toSignup');
    const toLogin        = document.getElementById('toLogin');
    const loginContent   = document.getElementById('loginContent');
    const signupContent  = document.getElementById('signupContent');
    const accountContent = document.getElementById('accountContent');
    const logoutBtn      = document.getElementById('logoutBtn');

    
    // Open popup on any action
    function openPopup() {
        popupOverlay.style.display = 'flex';
        loginContent.style.display = 'block';
        signupContent.style.display = 'none';
        accountContent.style.display = 'none';
    }

    // Click Login / My Profile / Sign up → open popup
    document.querySelectorAll('.log a, .newuser a, .menuList a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            if (loginBtn.textContent.includes('Hi,')) {
                // Already logged in → show account
                loginContent.style.display = 'none';
                signupContent.style.display = 'none';
                accountContent.style.display = 'block';
            } else {
                openPopup();
            }
            popupOverlay.style.display = 'flex';
        });
    });

    // Close popup
    popupClose.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });
    popupOverlay.addEventListener('click', e => {
        if (e.target === popupOverlay) popupOverlay.style.display = 'none';
    });

    // Switch: Login → Signup
    toSignup.addEventListener('click', e => {
        e.preventDefault();
        loginContent.style.display = 'none';
        signupContent.style.display = 'block';
    });

    // Switch: Signup → Login
    toLogin.addEventListener('click', e => {
        e.preventDefault();
        signupContent.style.display = 'none';
        loginContent.style.display = 'block';
    });

    //  Login Success
    document.getElementById('loginForm').addEventListener('submit', e => {
        e.preventDefault();
        loginBtn.textContent = 'Hi, User';
        showAccountMenu();
    });

    //  Signup Success
    document.getElementById('signupForm').addEventListener('submit', e => {
        e.preventDefault();
        loginBtn.textContent = 'Hi, User';
        showAccountMenu();
    });

    function showAccountMenu() {
        loginContent.style.display = 'none';
        signupContent.style.display = 'none';
        accountContent.style.display = 'block';
    }

    // Logout
    logoutBtn.addEventListener('click', e => {
        e.preventDefault();
        loginBtn.textContent = 'Login';
        popupOverlay.style.display = 'none';
    });


  
// HERO SLIDER – Works only with your current HTML structure
// No external library, no conflict, super fast

// hero-slider.js
// Fully working hero slider – matches your exact HTML & CSS 100%
// No dependencies – pure vanilla JS

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return; // stop if slider not found

  const slides = slider.querySelectorAll(".hero-slide");
  const dots   = slider.querySelectorAll(".hero-dots .dot");
  const prevBtn = slider.querySelector(".hero-prev");
  const nextBtn = slider.querySelector(".hero-next");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Change slide function
  function showSlide(index) {
    // Update slides
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  // Event Listeners
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // Auto-play – 5 seconds
  let autoPlayInterval = setInterval(nextSlide, 8000);

  // Pause on hover
  slider.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
  slider.addEventListener("mouseleave", () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
  });

  // Keyboard support (optional but cool)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Start with first slide active
  showSlide(0);
});


// hero  sectiion 
  // === ADD TO CART - FULLY AUTOMATIC - NO HTML CHANGE NEEDED ===
// FINAL ADD-TO-CART – WORKS FOREVER (even after refresh/close browser)
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("add-to-cart")) {
    e.preventDefault();

    const card = e.target.closest(".item");
    if (!card) return;

    const title = card.querySelector("h3")?.textContent.trim() || "Product";
    const img   = card.querySelector("img")?.src || "";
    const priceText = card.querySelector(".price")?.textContent || "";

    // Extract current price (₹2,499 → 2499)
    const priceMatch = priceText.match(/₹([\d,]+)/);
    const price = priceMatch ? parseInt(priceMatch[1].replace(/,/g, "")) : 0;

    // Extract original price
    const originalEl = card.querySelector(".original-price");
    const originalPrice = originalEl
      ? parseInt(originalEl.textContent.replace(/₹|,/g, ""))
      : price * 2;

    // === USE ONLY THIS KEY: "invisionCart2025" FOREVER ===
    let cart = JSON.parse(localStorage.getItem("invisionCart2025") || "[]");

    // If same product → increase quantity
    const existing = cart.find(item => item.title === title && item.img === img);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        title: title,
        img: img,
        price: price,
        originalPrice: originalPrice,
        quantity: 1
      });
    }

    // Save forever
    localStorage.setItem("invisionCart2025", JSON.stringify(cart));

    // Optional: small notification
    alert("Added to cart: " + title);

    // Open cart in new tab
    window.open("cart.html", "_blank");
  }
});


// SMOOTH "BACK TO TOP" – Works with your exact HTML
document.querySelector('.foot-pannel1').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});