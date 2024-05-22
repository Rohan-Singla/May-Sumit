
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
        stagger: 0.2,
        duration: 0.5,
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
var menutimeline = gsap.timeline();

function openmenu2() {
    menutimeline.to(".menubarbg", {
        left: 0,
        duration: .5,
    });
    menutimeline.from(".tags a", {
        opacity: 0,
        stagger: 0.1,
    })
}
function myfnc() {
    menutimeline.reverse();
}