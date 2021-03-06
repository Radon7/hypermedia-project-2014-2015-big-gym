var id;
$(document).ready(readyf);

function readyf() {


    $(".navbar-inverse").css('background', 'url(./img/instructors/instructor-header.jpg)');
    $(".navbar-inverse").css('-webkit-background-size', 'cover');
    $(".navbar-inverse").css('-moz-background-size', 'cover');
    $(".navbar-inverse").css('-o-background-size', 'cover');
    $(".navbar-inverse").css('background-size', 'cover');
    id = getQueryVariable("id");
    console.log(id);
    getInstructorInfo(id);
    getCourses(id);
    getCategories(id);
    getTwitter();
}

function getInstructorInfo(variable) {
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bigym.altervista.org/php/getInstructor.php", //Relative or absolute path to file.php file
        data: {
            id: id
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var instr = JSON.parse(response);
            console.log(instr);
            document.title = instr[0].name + " " + instr[0].surname;
            $("#second-brand").html(instr[0].name + " " + instr[0].surname);
            $("#img_bio").attr("src", "./img/instructors/"+ instr[0].image_1);
            $("#instr_bio").html(instr[0].about);
            if (instr[0].awards != '') {
                $("#awards").html(instr[0].awards);
            } else {
                $("#aw_title").remove();
            }
            
            //carico la gallery
            $("#gallery").html('<div class="item active"><img  class="img-responsive center-block" src="'+'./img/instructors/'+instr[0].image_2+'" alt="..."></div><div class="item"><img class="img-responsive center-block" src="./img/instructors/'+instr[0].image_3+'" alt="Chania"></div><div class="item"><img  class="img-responsive center-block" src="./img/instructors/'+instr[0].image_4+'" alt="Flower"></div>' );
            
            //load the twitter account info
            $(".twitter-timeline").attr("href", "https://twitter.com/"+instr[0].twitter_account);
            $(".twitter-timeline").attr("data-widget-id", instr[0].widget_id);
            $(".twitter-timeline").text("Tweets by @"+instr[0].twitter_account);
            
             ! function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
             //img_chania.jpgimg_chania2.jpgimg_flower.jpg
        },
        error: function (request, error) {
            console.log("Error");
        }
    });
}

function getCourses(variable) {
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bigym.altervista.org/php/getTeachedCourses.php", //Relative or absolute path to file.php file
        data: {
            id: id
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var cour = JSON.parse(response);
            console.log(cour);
            var el = "";
            for (var i = 0; i < cour.length; i++) {
                el += '<a href="course.html?id=' + cour[i].id + '">' + cour[i].name + '</a><br>';
            }
            $("#cour").html(el);
        },
        error: function (request, error) {
            console.log("Error");
        }
    });
}

function getCategories(variable) {
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bigym.altervista.org/php/getTeachedCategories.php", //Relative or absolute path to file.php file
        data: {
            id: id
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var cats = JSON.parse(response);
            console.log(cats);
            var el = "";
            for (var i = 0; i < cats.length; i++) {
                el += '<a href="category.html?id=' + cats[i].id + '">' + cats[i].name + '</a><br>';
            }
            $("#cat").html(el);
        },
        error: function (request, error) {
            console.log("Error");
        }
    });
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}


function getTwitter(){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bigym.altervista.org/php/getTwitterFeed.php", //Relative or absolute path to file.php file
        data: {
            id: id
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var tweets = JSON.parse(response);
            console.log(tweets);
            $("#tweet-title").html("<p><b>Latest Tweets by <a href='https://twitter.com/"+tweets[0].user.screen_name+"'>    @" + tweets[0].user.screen_name + "</a><b/></p>");
            var el = "";
            for (var i =0; i<tweets.length; i++){
                
                el += "<tr><td class='column'><div class='col-xs-3 col-md-3'><img class='pic' src='"+tweets[i].user.profile_image_url+"'/></div>"  +"<div class='col-xs-8 col-md-9'><div class='tweet'>"+tweets[i].text +"</div></div>";
                if(tweets[i].entities.hasOwnProperty('media')){
                    el += "<div class='col-md-12 col-xs-12'><img class='img-responsive pic' src='" + tweets[i].entities.media[0].media_url +"'/></div>";
                }
            
                el+="</td></tr>";
            }
            $("#tweet-body").html(el);
        },
        error: function (request, error) {
            console.log("Error");
        }
    });
}