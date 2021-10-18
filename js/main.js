// menuToggle

const menuBtn = document.querySelector('.menu-btn');
const navItem = document.querySelector('.nav-item');

menuBtn.addEventListener('click', () => {
    navItem.classList.toggle('active');
});

// modelSlide

const viewActive = document.querySelectorAll('.view-active');
const model = document.querySelectorAll('.model01');

viewActive.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        viewActive.forEach((tab) => tab.classList.remove('active'));

        tab.classList.add('active');

        model.forEach((c) => c.classList.remove('active'));

        model[index].classList.add('active');
    });
});

// tabSelection

const tabs = document.querySelectorAll('.tabs');
const contents = document.querySelectorAll('#tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'));

        tab.classList.add('active');

        contents.forEach((c) => c.classList.remove('active'));

        contents[index].classList.add('active');
    });
});

tabs[1].click();