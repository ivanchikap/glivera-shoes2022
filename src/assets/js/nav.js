document.addEventListener('DOMContentLoaded', () => {
    const headerNav = document.getElementById('headerNav');
    const headerNavSidebar = document.getElementById('headerNavSidebar');

    onHeadersButtonsClick(headerNav);
    onHeadersButtonsClick(headerNavSidebar);


    function onHeadersButtonsClick(parent) {
        const navItem = parent.querySelector('.active');
        const neededClass = navItem.classList[0];
        let allItems = parent.querySelectorAll(`.${neededClass}`);

        allItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.currentTarget;
                if (target.classList.contains('active')) {
                    return
                }

                if (target.classList.contains('nav__item')) {
                    const href = target.getAttribute("href");
                    const body = document.body;
                    const sectionToScroll = document.getElementById(href.substring(1, href.length));
                    body.classList.remove("show-sidebar");

                    sectionToScroll.scrollIntoView({block: "center", behavior: "smooth"});
                }

                allItems.forEach((item) => {
                    item.classList.remove('active');
                });

                e.currentTarget.classList.add('active');
            })
        });
    }
});

