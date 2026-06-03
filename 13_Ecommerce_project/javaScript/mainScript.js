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
 