const scriptURL = 'https://script.google.com/macros/s/AKfycbxT6bp_Jy1ULik4H--4q3_dnhQy2kgD8sRqCYxdEsYWkHZ5T5F_w9-NXXohtzHtkt8m/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
} 


form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
