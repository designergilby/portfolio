var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);

var body = document.querySelector("body");
body.style.overflow = "hidden";

var hero1 = document.querySelector(".title1");
var hero2 = document.querySelector(".title2");
var hero3 = document.querySelector(".title3");
var hero4 = document.querySelector(".heroCopy");
var nav1 = document.querySelector("nav");
 
function vanish(){
	loader.classList.add("disappear");
	body.style.overflow = "auto";
	hero1.style.animation = "hiSlide 2s ease-out";
	hero2.style.animation = "imSlide 2s ease-out";
	hero3.style.animation = "gilbySlide 2s ease-out";
	hero4.style.animation = "copySlide 2s ease-out";
	nav1.style.animation = "navStart 2s ease-out";

}

console.log("loaded");

const observer = new IntersectionObserver((entries) =>{
	entries.forEach((entry) =>{
		console.log("entry")
		if (entry.isIntersecting){
			entry.target.classList.add('show');
		} 
	})
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

