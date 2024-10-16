
// Top To Bottom Scroll

let scrollBtn = document.querySelector(".top_to_bottom_btn");

window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 300){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


