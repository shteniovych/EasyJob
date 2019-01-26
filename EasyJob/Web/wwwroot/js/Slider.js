var title =
[
    'Ви стаєте кращими',
    'Розумний профіль & резюме',
    'Якісне з’єднання'
];
var bacgrounds = ["../images/slider/1.png", "../images/slider/2.png", "../images/slider/3.png", "../images/slider/4.png"];
var contents =
[
    '"Це для тебе - Новий крок у твоїй кар’єрі"',
    '"Будь першим серед тих, хто має перевірений і безпечний онлайн профіль"',
    '"Швидкий доступ до веб-сайту"'
];
var numberOfSlider = 0;

jQuery(document).ready(function () {
    $(".change-slide").bind("click", function () {

        if (numberOfSlider === 2) {
            // go to sign up
            var url = "RegistrationFirstStep";
            window.location.href = url;
            return;
        }

        // remove active from this dot
        $($(".slider-number-of-page")[numberOfSlider]).removeClass("active");

        // go to next slider
        numberOfSlider++;

        // change slider properties
        $(".slider").css("background-image", "url(" + bacgrounds[numberOfSlider] + ")");
        $(".title").text(title[numberOfSlider]);
        $(".content").text(contents[numberOfSlider]);
        $($(".slider-number-of-page")[numberOfSlider]).addClass("active");
    });
});