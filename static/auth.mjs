 
 import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js';
  
  
 const signup = document.querySelector('.signupform');
 signup.addEventListener('submit',(e) => {
   e.preventDefault();
   const email = signup.querySelector('.email').value; 
   const password = signup.querySelector('.password').value; 
   
   // sign krne ka method
   

   const auth = getAuth();
   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
      alert('Signup successful')
     //  sessionStorage.setItem('newText1', 'Sign Out');
     //  sessionStorage.setItem('link', '<a href="index.html" style="text-decoration: none;">Sign Out</a>');
      window.location.href = '/aftersignup.html'
       console.log(user)
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
        console.log(errorMessage)
        alert(errorMessage)
     });

     
   
 })
   
