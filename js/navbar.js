(() => {

    let mainNav = document.querySelector('.main-nav');
    let navBarToggle = document.querySelector('.navbar-toggle');

        // Get the header
        var header = document.querySelector(".topSticky");
    
        // Get the offset position of the navbar
        var sticky = header.offsetTop;

    navBarToggle.addEventListener('click', runToggle);
        
    function runToggle(){
        mainNav.classList.toggle('active');
    }

    window.onscroll = function(){
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }   
    }

})();