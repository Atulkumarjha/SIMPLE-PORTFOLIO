let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

dayNight.addEventListener('click',()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed('#text',{
    strings:["ATUL KUMAR JHA","MERN STACK DEVELOPER","FULL STACK DEVELOPER"],
    loop:true,
    typeSpeed: 200,
    backSpeed:100,
    backDelay:1000
})