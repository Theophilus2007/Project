// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').replace('#', '');
    document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
    });
   
    //Adding of Current Time
    function currentTime(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(currentTime,1000);

//adding of transition
    document.querySelectorAll('.project').forEach(project =>{
        project.addEventListener('click',()=>{
        project.classList.add('clicked');
        setTimeout(()=>{
            project.classList.remove('clicked');
    }, 500);
});
});

//adding animation
document.addEventListener("DOMContentLoaded"
,function(){
const slowMotion = 
document.querySelector(".slow-motion");
slowMotion.style.opacity = 0;
slowMotion.style.transform = "scale(0.5)";

setTimeout(() =>{
    slowMotion.style.transition = "all 2s ease-in-out";
slowMotion.style.opacity = 1;
slowMotion.style.transform = "scale(1)";
},100)
});
