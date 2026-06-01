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
 