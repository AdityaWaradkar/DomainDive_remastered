


// Function to handle changes in viewport size
function handleViewportChange() {
    if (window.matchMedia("(max-width: 767px)").matches) 
    {
        //MObile-view
        document.getElementById('login').addEventListener('click', function() {
            let registerForm = document.getElementById('register-form');
            let loginForm = document.getElementById('login-form');
            let registerButton = document.getElementById('register')
            let loginButton = document.getElementById('login')
            registerButton.style.fontSize = '1rem'
            loginButton.style.fontSize = '1.5rem'
            loginForm.style.display = 'block'; 
            registerForm.style.display = 'none' // Show the div
        });
        
        document.getElementById('register').addEventListener('click', function() {
            let registerForm = document.getElementById('register-form');
            let loginForm = document.getElementById('login-form');
            let registerButton = document.getElementById('register')
            let loginButton = document.getElementById('login')
            loginButton.style.fontSize = '1rem'
            registerButton.style.fontSize = '1.5rem'
            registerForm.style.display = 'block'; 
            loginForm.style.display = 'none' // Show the div
        });
    }
    else
    {
        //PC-view
        document.getElementById('login').addEventListener('click', function() {
            let registerForm = document.getElementById('register-form');
            let loginForm = document.getElementById('login-form');
            let registerButton = document.getElementById('register')
            let loginButton = document.getElementById('login')
            registerButton.style.fontSize = '2rem'
            loginButton.style.fontSize = '3rem'
            loginForm.style.display = 'block'; 
            registerForm.style.display = 'none' // Show the div
        });
        
        document.getElementById('register').addEventListener('click', function() {
            let registerForm = document.getElementById('register-form');
            let loginForm = document.getElementById('login-form');
            let registerButton = document.getElementById('register')
            let loginButton = document.getElementById('login')
            loginButton.style.fontSize = '2rem'
            registerButton.style.fontSize = '3rem'
            registerForm.style.display = 'block'; 
            loginForm.style.display = 'none' // Show the div
        });
    }
  }
  
  // Initial check on page load
  handleViewportChange();
  
  // Event listener for viewport resize
  window.addEventListener("resize", handleViewportChange);