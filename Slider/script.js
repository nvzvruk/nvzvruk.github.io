var navItem = document.querySelectorAll('.js-item');
var slide = document.querySelector('.js-slide');
var leftArr = document.querySelector('.js-left-arrow');
var rightArr = document.querySelector('.js-right-arrow');


function clear(arr) {
    arr.forEach(function (e) {
        if (e.classList.contains('is-active')) {
            e.classList.remove('is-active');
        }
    })
}

var index = 0;

var start = setInterval(function () {
    index++;
    if (index < navItem.length) {
        clear(navItem);
        navItem[index].classList.add('is-active');
        var w = slide.offsetWidth;
        slide.style.marginLeft = -w * index + "px";
    } else {
        index = 0;
        clear(navItem);
        navItem[index].classList.add('is-active');
        var w = slide.offsetWidth;
        slide.style.marginLeft = -w * index + "px";
    }
}, 1500);

navItem.forEach(function (e, i) {
    e.addEventListener('click', function () {
        index = i;
        clear(navItem);
        this.classList.add('is-active');
        var w = slide.offsetWidth;
        slide.style.marginLeft = -w * index + "px";
        clearInterval(start);
    })
})


rightArr.addEventListener('click', function () {
    index++;
    if (index < navItem.length) {
        clear(navItem);
        navItem[index].classList.add('is-active');
        var w = slide.offsetWidth;
        slide.style.marginLeft = -w * index + "px";
    } else {
        index = 0;
        clear(navItem);
        navItem[index].classList.add('is-active');
        var w = slide.offsetWidth;
        slide.style.marginLeft = -w * index + "px";
    }
    clearInterval(start);
})


leftArr.addEventListener('click', function () {
    index--;
    if (index >= 0) {
        clear(navItem);
        navItem[index].classList.add('is-active');
        var w = slide.offsetWidth;
        slide.style.marginLeft = -w * index + "px";
    } else {
        index = navItem.length - 1;
        clear(navItem);
        navItem[index].classList.add('is-active');
        var w = slide.offsetWidth;
        slide.style.marginLeft = -w * index + "px";
    }
    clearInterval(start);
})
