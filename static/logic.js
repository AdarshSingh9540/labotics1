// function updatesignuptosignout() {
//   const newText2 = sessionStorage.getItem('link');
//   if (newText2) {
//     document.querySelector('.linkout').innerHTML = newText2;
//   }
// }
 
// updatesignuptosignout();

// function updatesignouttosignup() {
//   const newText3 = sessionStorage.getItem('signout');
//   if (newText3) {
//     document.querySelector('.linkout').innerHTML = newText3;
//   }
// }
 
// updatesignouttosignup();




document.addEventListener("DOMContentLoaded", function () {
  const elementheroimage = document.querySelector(".tu");
 elementheroimage.classList.add("zoom-in");
});

//typewriter function
const lines = document.querySelectorAll('.line');
var typeWriterElement = document.getElementById('typewriter');

// TextArray: 
var textArray = ["Discover verified listings.","Read User Reviews.","Schedule Appointments.", "Filter by your choice."];


function delWriter(text, i, cb) {
if (i >= 0 ) {
typeWriterElement.innerHTML = text.substring(0, i--);
   
setTimeout(function() {
delWriter(text, i, cb);
},50); 
} else if (typeof cb == 'function') {
setTimeout(cb,500);
}
};


function typeWriter(text, i, cb) {
if ( i < text.length+1 ) {
typeWriterElement.innerHTML = text.substring(0, i++);
  
setTimeout( function () { 
typeWriter(text, i++, cb)
},50);
} else if (i === text.length+1) {
setTimeout( function () {
delWriter(text, i, cb)
},500);
}
};

function StartWriter(i) {
if (typeof textArray[i] == "undefined") {
setTimeout( function () {
StartWriter(0)
},1000);
} else if(i < textArray[i].length+1) {
typeWriter(textArray[i], 0, function () {
StartWriter(i+1);
});
}  
};
// deri se
setTimeout( function () {
StartWriter(0);
},1000);





// document.addEventListener("scroll",function(){
//     const chestt = document.querySelector(".chesttext")
//     chestt.classList.add("fade-in-left")
//     const chesti = document.querySelector(".chestimage")
//     chesti.classList.add("fade-in-right")


// })
// document.addEventListener("scroll",function(){
//     const chestt2 = document.querySelector(".chesttext2")
//     chestt2.classList.add("fade-in-right")
//     const chesti2 = document.querySelector(".chestimage2")
//     chesti2.classList.add("fade-in-left")
// })
// document.addEventListener("scroll",function(){
//     const chestt3 = document.querySelector(".chesttext3")
//     chestt3.classList.add("fade-in-left")
//     const chesti3 = document.querySelector(".chestimage3")
//     chesti3.classList.add("fade-in-right")
// })

function handleFadeIn(entries, observer) {
entries.forEach((entry) => {
if (entry.isIntersecting) {
  entry.target.classList.add("fade-in-left");
  observer.unobserve(entry.target); 
}
});
}


const observer = new IntersectionObserver(handleFadeIn, {
threshold: 0.01, 
});


const elementsToAnimate = document.querySelectorAll(".left");


elementsToAnimate.forEach((element) => {
observer.observe(element);
});

function handleFadeIn2(entries, observer) {
entries.forEach((entry) => {
if (entry.isIntersecting) {
  entry.target.classList.add("fade-in-right"); 
  observer.unobserve(entry.target); 
}
});
}


const observer2 = new IntersectionObserver(handleFadeIn2, {
threshold: 0.01, 
});


const elementsToAnimate2 = document.querySelectorAll(".right");


elementsToAnimate2.forEach((element) => {
observer2.observe(element);
});

