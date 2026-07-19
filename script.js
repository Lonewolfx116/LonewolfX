// LoneWolfX cinematic effects

document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector("button");

    button.addEventListener("click", function () {

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    });


    const title = document.querySelector("h1");

    title.style.opacity = "0";

    setTimeout(() => {

        title.style.transition = "2s";
        title.style.opacity = "1";

    }, 300);


});
