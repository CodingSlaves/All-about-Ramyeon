onload = function () {
    var bagRamen = document.querySelector('#bag-ramen');
    var cupRamen = document.querySelector('#cup-ramen');
    var navCover = document.querySelector('#nav-cover');
    var buttonCover = document.querySelector('#button-cover');
    var title = document.querySelector('#title');
    var nav = document.querySelector('#nav');


    bagRamen.addEventListener("click", function() {
        bagRamen.classList.add('button-decreasing');
        navCover.classList.add('growing');
        buttonCover.classList.add('button-cover-growing');
        title.classList.add('title-diminish');
        cupRamen.classList.add('fade');
        nav.classList.add('nav-diminish');
    })

    cupRamen.addEventListener("click", function () {
        cupRamen.classList.add('button-decreasing');
        navCover.classList.add('growing');
        buttonCover.classList.add('button-cover-growing');
        title.classList.add('title-diminish');
        bagRamen.classList.add('fade');
        nav.classList.add('nav-diminish');
    })



    // 외부 자바스크립트
    var form = document.querySelector('#recognition-form'),
    input = document.querySelector('#recognition-input'),
    element = document.querySelector('#recognition-element');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        element.start();
    });

    element.addEventListener('result', function(e) {
        input.textContent = element.text;
        
    });
}