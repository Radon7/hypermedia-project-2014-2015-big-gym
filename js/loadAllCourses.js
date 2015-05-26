$(document).ready(ready);

function ready(){

    $(".navbar-inverse").css('background', 'url(./img/all-courses-header.jpg)');
    getAllCourses("ALPHABETICAL");

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
        url: "getAllCourses.php", //Relative or absolute path to file.php file
        data: {order: ordering},
        success: function(response) {
            var cat_about, cat_name;
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);

            var result = "<div class='row'>";
            var j = 0;
            for(var i = 0; i < courses.length; i++){
                if(j%4 == 0){
                    result = result + "</div> <div class='row'>";
                }
                result = result + " <div class='col-xs-12 col-sm-4 col-md-3'> <div class='thumbnail'> <img src='img/courses/courses-thumbnail-gag.jpg' alt='Image not available, sorry.' class='img-responsive'><div class='caption'> <h3>" + courses[i].course_name + "</h3><a href='course.html?id=" + courses[i].id + "'>See more details</a> <br> <a href='coursesofcategory.html?category=" + courses[i].category_id + "'>All courses of this category</a></div></div></div>";
/* DA SISTEMAREEEE
                result = result + " <div class='col-xs-12 col-sm-4 col-md-3'> <div class='thumbnail'> <img src='img/courses/courses-thumbnail-gag.jpg' alt='Image not available, sorry.' class='img-responsive'><div class='caption'> <a href='course.html?id=" + courses[i].id + "'>" + courses[i].course_name + "</a> <br> <h3> Category: " + courses[i].category_name + "</h3> <br> </div></div></div>";  */

                j++;
            }
            result = result + "</div></div>";
            $("#allcourses_list").html(result)
            },
        error: function(request,error) {
            console.log("Error");
        }
    });
}
