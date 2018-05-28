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
}