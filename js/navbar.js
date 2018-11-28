(() => {

    const preloader = document.querySelector('.navbar-toggle');

    let preloadAnim = bodymovin.loadAnimation({
        wrapper : preloader,
        animType : 'svg',
        loop : false,
        autoplay : false,
        path : 'data/menuButton1.json'
        
    });
   
    function playAnimation(){
        preloadAnim.goToAndPlay(0);
    }
   
    preloader.addEventListener("click", playAnimation);


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
        if (window.pageYOffset >= 150) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }   
    }

    grecaptcha.ready(function() {
        grecaptcha.execute('6LcUZXwUAAAAADaTElJCIgrnvYrEXFljaWjEM_md', {action: 'action_name'})
        .then(function(token) {
        // Verify the token on the server.
        });
        });

})();