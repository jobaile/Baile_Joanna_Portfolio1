(() => {

    var landingLogo = anime({
        targets: '.name-logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        opacity: [0,1],
        delay: function(el, i) { return i * 200 },
        direction: 'forward',
        loop: false
    });

    var landingInfo = anime({
        targets: '.landing-info',
        easing: 'easeInQuart',
        opacity: 1,
        delay: 2500,
        direction: 'forward'
    })

})();