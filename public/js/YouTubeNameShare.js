require('dotenv').config();
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
    var URLarray = URL.split("/");
    var movieId = URLarray[URLarray.length - 1];

    var requestUrl = "https://www.googleapis.com/youtube/v3/videos";
    
    const YOUTUBE_KEY = process.env.YOUTUBE_KEY;
    alert(YOUTUBE_KEY);
    var data = "id=" + movieId + "&key=" + YOUTUBE_KEY + "&part=snippet";

    var title = "";

    $.getJSON(requestUrl, data)
        .done(function (data1, textStatus, jqXHR) {
            title = data1["items"][0]["snippet"]["title"];
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.status); 
            console.log(textStatus); 
            console.log(errorThrown); 
        })
        .always(function () {

            var tweetURL = title + "\n" + URL;

            document.getElementById("result-erea").innerHTML += "<p>" + tweetURL + "</p>"
                + '<p uk-margin>'
                + "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>"
                + '<a class="twitter-share-button" href="https://twitter.com/share?url='
                + tweetURL + '">'
                + '<button class="uk-button uk-button-primary">Tweet</button></a>'
                + '</p>';
        });
	
}