document.addEventListener('DOMContentLoaded', () => {
    const headerTopWrapper = document.getElementById("headerTopWrapper");
    const headerHeight = 665;
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    checkScroll(posTop);

    window.addEventListener('scroll', (e) => {
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        checkScroll(posTop);
    });

    function checkScroll(posTop) {
        posTop = posTop.toFixed(0);
        if (posTop > headerHeight) {
            headerTopWrapper.classList.add('fixed');
        } else {
            headerTopWrapper.classList.remove('fixed');
        }
    }
});

