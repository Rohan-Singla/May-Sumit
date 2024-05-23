
document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById('loadingnanim');
    var timeline = gsap.timeline();
    timeline.to(counter, {
        duration: 2,
        innerHTML: 100,
        ease: "none",
        onUpdate: function () {
            counter.innerHTML = Math.round(this.targets()[0].innerHTML) + "%";
        }
    });
    timeline.from(".mybar", {
        right: -100 + "%",
        stagger: 0.1,
        duration: 0.3,
    })
    timeline.from(".loader2", {
        right: -100 + "%",
        duration: 0.5,
        delay: 0.1
    })
    timeline.from(".bgimg", {
        scale: 0.5,
        duration: 0.5,
    })
    timeline.from(".mylanding", {
        opacity: 0,
        duration: 0.5,
    })
});


var openmenu = document.getElementById("openmenu");
var closemenu = document.getElementById("closemenu");
var menutimeline = gsap.timeline({paused:true}); 
menutimeline.to(".menubarbg", {
    left: 0,
    duration: .5,
});
menutimeline.from(".tags a", {
    opacity: 0,
    stagger: 0.1,
})

function openmenu2() {
    menutimeline.play();
}
function myfnc() {
    menutimeline.reverse();
}

var body = document.querySelector("body");
var cursor = document.querySelector(".cursor");
var blackcursor = document.querySelectorAll(".cursor-black")
body.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:.5,
    })
})

blackcursor.forEach(link=>{
    link.addEventListener('mouseleave',()=>{
        cursor.classList.remove("black-cursor")
    })
    link.addEventListener('mousemove',()=>{
        cursor.classList.add("black-cursor")
    })
})
