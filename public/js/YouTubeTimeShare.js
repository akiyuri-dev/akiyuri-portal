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

function makeURL(){
    var URL = document.getElementById("YTURL").value;
    var hour = Number(document.getElementById("hour").value);
    var minute = Number(document.getElementById("minute").value);
    var second = Number(document.getElementById("second").value);

    var AllSecond = second + minute*60 + hour*60*60;
    //alert(URL + "?t=" + AllSecond);

    var tweetURL = URL + "?t=" + AllSecond;

    document.getElementById("result-erea").innerHTML = "<p>" + tweetURL + "</p>"
        + '<p uk-margin>' 
        + "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>"
        + '<a class="twitter-share-button" href="https://twitter.com/share?url=' 
        + tweetURL +'">'
        + '<button class="uk-button uk-button-primary">Tweet</button></a>'
        + '</p>';
}