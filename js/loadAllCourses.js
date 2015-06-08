$(document).ready(ready);

function ready() {

    $(".navbar-inverse").css('background', 'url(./img/all-courses-header.jpg)');
    $(".navbar-inverse").css('-webkit-background-size', 'cover');
    $(".navbar-inverse").css('-moz-background-size', 'cover');
    $(".navbar-inverse").css('-o-background-size', 'cover');
    $(".navbar-inverse").css('background-size', 'cover');
    //initially load the page with alphabetical order
    getAllCourses("ALPHABETICAL");
    getDescription();

    $('#sort_alph').on('click', sortByAlph);

    $('#sort_diff').on('click', sortByDiff);
}

function sortByAlph() {
    getAllCourses("ALPHABETICAL");
}

function sortByDiff() {
    getAllCourses("DIFFICULTY");
}

function getAllCourses(ordering) {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bigym.altervista.org/php/getAllCourses.php", //Relative or absolute path to file.php file
        data: {
            order: ordering
        },
        success: function (response) {
            var cat_about, cat_name;
            console.log(JSON.parse(response));
            var courses = JSON.parse(response);

            var result = "<div class='row'>";
            for (var i = 0; i < courses.length; i++) {
                if (i % 4 == 0) {
                    result = result + "</div> <div class='row'>";
                }
                result = result + " <div class='col-xs-12 col-sm-6 col-md-3'> <div class='thumbnail'> <img src='img/courses/" + courses[i].course_thumbnail + "' alt='Image not available, sorry.' class='img-responsive'> <div class='caption'> <a href='course.html?id=" + courses[i].id + "'><h3>" + courses[i].course_name + "</h3></a> Category: " + courses[i].category_name + "<br>";
                switch (parseInt(courses[i].difficulty)) {
                case 0:
                    result += "Difficulty: <span class='basic'>Basic</span>";
                    break;
                case 1:
                    result += "Difficulty: <span class='medium'>Medium</span>";
                    break;
                case 2:
                    result += "Difficulty: <span class='advanced'>Advanced</span>";
                    break;
                default:
                    break;
                }
                result += "</div> </div> </div>";
            }
            result = result + "</div>";
            $("#allcourses_list").html(result)
        },
        error: function (request, error) {
            console.log("Error");
        }
    });
}

function getDescription() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bigym.altervista.org/php/getIntro.php", //Relative or absolute path to file.php file
        data: {
            page: "allcourses"
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var intro = JSON.parse(response);
            var result = intro[0].description;
            $("#allcoursesdescription").html(result);
        },
        error: function (request, error) {
            console.log("Error");
        }
    });
}
