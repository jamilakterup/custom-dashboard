
// aside expand and collapse=============================
let isLarge = false;

document.getElementById('toggle-aside').addEventListener("click", function () {
    let aside = document.getElementById('aside');
    let mainContent = document.getElementById('main-content');

    if (isLarge) {
        aside.classList.remove('large');
        aside.classList.add('fold');

        mainContent.classList.add('main-fold');
        mainContent.classList.remove('main-large');
    }
    else {
        aside.classList.remove('fold');
        aside.classList.add('large');

        mainContent.classList.remove('main-fold');
        mainContent.classList.add('main-large');
    }

    isLarge = !isLarge;
});

// dark and light mood===============
function darkLight() {
    const html = document.documentElement;
    html.classList.toggle("dark");
}

// mobile nav bar view and hide mode============
document.getElementById('toggle-nav').addEventListener('click', function () {
    const div = document.getElementById('mobile-nav');
    div.classList.toggle("hidden")
});

// accordion or dropdown menu============
function accordion() {
    const panel = document.getElementById('panel');
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
}