var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxp6gyW-VpO8gGonwrW8ma-IW2e4cm87kZDxeRFZW3tIw3MEVKfPcBY-DCZTx6yI5k6Qw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully! ✔ "
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

var typed = new Typed(".typing", {
    strings: ["Web Developer", "", "Designer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// var typed = new Typed(".typing-2", {
//     strings: ["Portfolio."],
//     typeSpeed: 100,
//     backSpeed: 60,
// });

// -----------creative color changing scrollbar------- 

// let progress = document.getElementById('progressbar')
// let totalHeight = document.body.scrollHeight - window.innerHeight
// window.onscroll = function(){
//     let progressHeight = (window.pageYOffset / totalHeight) * 100
//     progress.style.height = progressHeight + "%"
// }