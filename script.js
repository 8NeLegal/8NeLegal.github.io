let i = 0;
let r = 0;

const personal = document.getElementById('personal');
const buttonSeeAll = document.getElementById('buttonSeeAll');

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const leftList = document.getElementById('leftList');
const centerList = document.getElementById('centerList');
const rightList = document.getElementById('rightList');

const pointOne = document.getElementById('pointOne');
const pointTwo = document.getElementById('pointTwo');
const pointThree = document.getElementById('pointThree');

const lenta = document.getElementById('lentaX');

const personalHeightVavier = (85 / Math.floor(personal.offsetWidth / 270)) * 520



lenta.addEventListener('wheel', (e) => {
    e.preventDefault();
    lenta.scrollBy({
        left: e.deltaY * 4,
        behavior: 'smooth'
    });
});

// --

function checkAll() {
    if (i === 0) {
        seeAll();
    } else {
        hideAll();
    }
}

function seeAll() {
    personal.style.height = personalHeightVavier + 'px';
    buttonSeeAll.innerHTML = "Скрыть все";
    i = 1;
}

function hideAll() {
    personal.style.height = '485px';
    buttonSeeAll.innerHTML = "Показать все";
    i = 0;
}

//--

function roolCheckLeft() {
    if (r === 2) {
        roolLeftToCenter();
        r = 1;
    } else if (r === 1) {
        roolLeftToLeft();
        r = 0;
    } else {}
}

function roolCheckRight() {
    if (r === 0) {
        roolRightToCenter();
        r = 1;
    } else if (r === 1) {
        roolRightToRight();
        r = 2;
    } else {}
}

function roolLeftToCenter() {
    rightList.style.width = '0%';
    rightList.style.opacity = '0';
    centerList.style.width = '100%';
    centerList.style.opacity = '1';
    rightButton.classList = "yes";
    pointThree.classList = "";
    pointTwo.classList = "active";
}

function roolLeftToLeft() {
    centerList.style.width = '0%';
    centerList.style.opacity = '0';
    leftList.style.width = '100%';
    leftList.style.opacity = '1';
    leftButton.classList = "no";
    pointTwo.classList = "";
    pointOne.classList = "active";
}

function roolRightToCenter() {
    leftList.style.width = '0%';
    leftList.style.opacity = '0';
    centerList.style.width = '100%';
    centerList.style.opacity = '1';
    leftButton.classList = "yes";
    pointOne.classList = "";
    pointTwo.classList = "active";
}

function roolRightToRight() {
    centerList.style.width = '0%';
    centerList.style.opacity = '0';
    rightList.style.width = '100%';
    rightList.style.opacity = '1';
    rightButton.classList = "no";
    pointTwo.classList = "";
    pointThree.classList = "active";
}