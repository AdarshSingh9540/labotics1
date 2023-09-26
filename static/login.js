import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js';

const signup = document.querySelector('.signupform');
var flag =false;
signup.addEventListener('submit',(e) => {
  e.preventDefault();
  const email = signup.querySelector('.email').value; 
  const password = signup.querySelector('.password').value; 
  
  

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; 
    // sessionStorage.setItem('link', '<a href="index.html" style="text-decoration: none;">Sign Out</a>');
    window.location.href = '/aftersignup.html'
        alert('login successful')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
   alert(errorMessage)
  });
 
})
