document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    const pageMask = document.getElementById('pageMask');


    burger.addEventListener('click', event => {
       body.classList.toggle("show-sidebar");
    });

    pageMask.addEventListener('click', event => {
        body.classList.remove("show-sidebar");
    });
});


