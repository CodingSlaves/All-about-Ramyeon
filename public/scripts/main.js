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
        setTimeout(() => {
            input1.classList.add('voice-field-diminish');
            form2.classList.add('crush');
        }, 550);
    })
    

    cupRamen.addEventListener("click", function () {
        cupRamen.classList.add('button-decreasing');
        navCover.classList.add('growing');
        buttonCover.classList.add('button-cover-growing');
        title.classList.add('title-diminish');
        bagRamen.classList.add('fade');
        nav.classList.add('nav-diminish');
        setTimeout(() => {
            input2.classList.add('voice-field-diminish');
            form1.classList.add('crush');
        }, 550);
    })



    // 외부 자바스크립트
    var form1 = document.querySelector('#recognition-form-1'),
    form2 = document.querySelector('#recognition-form-2'),
    input1 = document.querySelector('#recognition-input-1'),
    input2 = document.querySelector('#recognition-input-2'),
    element1 = document.querySelector('#recognition-element-1'),
    element2 = document.querySelector('#recognition-element-2');

    var directions = document.querySelector('#directions');
    var timer = document.querySelector('#timer');

    form1.addEventListener('submit', function(e) {
        e.preventDefault();
        element1.start();
    });
    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        element2.start();
    });


    element1.addEventListener('result', function(e) {
        input1.textContent = element1.text;
        for (var ramen of ramens) {
            if (input1.textContent == ramen.name) {
                if (ramen.type == "봉지") {
                    directions.textContent = ramen.manual;
                    var time = ramen.time;
                    var interval = setInterval(function() {
                        timer.textContent = time + "초";
                        time--;
                        if (time == -1) {
                            timer.textContent = "시간이 끝났습니다!"
                            clearInterval(interval);
                        }
                    }, 1000);
                }
            }
        }
    });

    element2.addEventListener('result', function(e) {
        input2.textContent = element2.text;
        for (var ramen of ramens) {
            if (input2.textContent == ramen.name) {
                if (ramen.type == "컵") {
                    directions.textContent = ramen.manual;
                    var time = ramen.time;
                    var interval = setInterval(function() {
                        timer.textContent = time + "초";
                        time--;
                        
                        if (time == -1) {
                            timer.textContent = "시간이 끝났습니다!"
                            clearInterval(interval);
                        }
                    }, 1000);
                }
            }
        }
    });



    // 라면 배열
    var ramens = [
        {name: "신라면", type: "봉지", time: 5, manual: "조리법 : 물 550 ml를 끓인 후 면과 분말스프, 후레이크를 같이 넣고 4분 30초간 더 끓이면 얼큰하고 맛있는 신라면이 됩니다."},
        {name: "신라면", type: "컵", time: 240, manual: "조리법 : 뚜껑을 화살표까지 개봉한 후 면위에 분말스프를 넣고 끓는 물(400 ml)을 용기 안쪽 표시선까지 부은 다음 뚜껑을 닫고 약 4분 후에 잘 저어 드십시오."},
        {name: "너구리", type: "봉지", time: 300, manual: "조리법 : 물 550 ml 를 끓인 후 둥근면과 분말스프, 후레이크, 다시마를 넣고 5분간 더 끓입니다."},
        {name: "너구리", type: "컵", time: 240, manual: "조리법 : 뚜껑을 화살표까지 열고 분말스프를 꺼냅니다. 분말스프를 넣고 끓는 물(400 ml)을 용기 안쪽 표시선까지 닫고, 4분 후 잘 저어 드십시오."},
        {name: "참깨라면", type: "봉지", time: 240, manual: "조리법 : 물 550 ml 를 끓인 후 면과 후레이크, 계란블럭을 넣습니다. 4분간 더 끓인 후 유성스프를 넣고, 잘 저어 드십시오"},
        {name: "참깨라면", type: "컵", time: 240, manual: "조리법 : 면 위에 분말스프와 계란블럭을 넣고 끓는물을 표시선까지 부어준 후 4분 후 유성스프를 넣어 잘 저어서 드시면 됩니다."},
        {name: "오징어짬뽕", type: "봉지", time: 270, manual: "조리법 : 물 550 ml 를 끓인 후, 면, 분말스프, 후레이크를 넣고 4분 30초간 더 끓인 후, 맛있게 드시면 됩니다."},
        {name: "오징어짬뽕", type: "컵", time: 240, manual: "조리법 : 뚜껑을 화살표까지 개봉한 후 면 위에 분말스프를 넣고 끓는 물을 표시선까지 부은 다음 4분 후에 잘 저어 드십시오"},
        {name: "무파마", type: "봉지", time: 270, manual: "조리법 : 물 550 ml 를 끓인 후 면과 분말스프, 후레이크를 같이 넣고 4분 30초간 더 끓입니다. 불을 끄고 후첨양념을 넣어 잘 저어 드시면 됩니다."},
        {name: "무파마", type: "컵", time: 240, manual: "조리법 : 뚜껑을 화살표까지 개봉한 후, 면 위에 분말스프를 넣고 물을 용기 안쪽 표시선까지 부은 다음 뚜껑을 닫고 약 4분 후에 잘 저어 드십시오."}
    ];
}