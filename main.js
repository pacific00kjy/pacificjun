let maintext = document.querySelector("span")

window.addEventListener("scroll" , function() {
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value>300) {
        maintext.style.animation="disappear 1s ease-out forwards";
    }else{
        maintext.style.animation='slide 1s ease-out '
    }
});


