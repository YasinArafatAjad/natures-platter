const bar = document.querySelector('#bar');
const barIcon = bar.querySelector('i');
const mobileNavItem = document.querySelector('.mobileNavItem');

if (mobileNavItem) {
    bar.addEventListener('click', function () {
        mobileNavItem.classList.toggle('-right-[100%]');
        mobileNavItem.classList.toggle('right-0');
        barIcon.classList.toggle('fa-bars');
        barIcon.classList.toggle('fa-xmark');
    });
} else {
    console.error("Element not found:", { bar, mobileNavItem });
}