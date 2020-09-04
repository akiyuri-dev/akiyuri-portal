$(function () {
    $('a[href^="#"]').click(function () {
        var headerHight = 100;
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
    
});

function meAlert() {
    alert("Hello! I'm Akiyuri!");
}