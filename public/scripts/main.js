onload = function () {
    var bagRamen = document.querySelector('#bag-ramen');
    var cupRamen = document.querySelector('#cup-ramen');
    var navCover = document.querySelector('#nav-cover');
    var buttonCover = document.querySelector('#button-cover');
    var title = document.querySelector('#title');


    bagRamen.addEventListener("click", function() {
        bagRamen.classList.add('button-decreasing');
        navCover.classList.add('growing');
        buttonCover.classList.add('button-cover-growing');
        title.classList.add("title-growing");
    })

    cupRamen.addEventListener("click", function () {
        cupRamen.classList.add('button-decreasing');
        navCover.classList.add('growing');
        buttonCover.classList.add('button-cover-growing');
        title.classList.add("title-growing");
    })

}