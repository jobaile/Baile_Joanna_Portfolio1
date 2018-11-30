(() => {
    
    var topNavigation = document.querySelector(".topNav");
    
    var strokes = document.querySelectorAll(".strokes"),
        icon = document.querySelector(".menu"),
        topNavigation = document.querySelector(".topNav");
  
    function transformStart() { //Icon CSS change
        strokes[0].classList.toggle("animate0")
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        topNavigation.classList.toggle("show");
    }
    
    icon.addEventListener("click", transformStart);

})();

