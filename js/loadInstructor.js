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





}

function getInstructorInfo(variable) {
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getInstructor.php", //Relative or absolute path to file.php file
        data: {
            id: id
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var instr = JSON.parse(response);
            console.log(instr);
            $("#second-brand").html(instr[0].name + " " + instr[0].surname);
            $("#img_bio").attr("src", "./img/instructors/"+ instr[0].image_1);
            $("#instr_bio").html(instr[0].about);
            if (instr[0].awards != '') {
                $("#awards").html(instr[0].awards);
            } else {
                $("#aw_title").remove();
            }
            
            //carico la gallery
            $("#gallery").html('<div class="item active"><img src="'+'./img/instructors/'+instr[0].image_1+'" alt="..."></div><div class="item"><img src="./img/instructors/'+instr[0].image_1+'" alt="Chania"></div><div class="item"><img src="./img/instructors/'+instr[0].image_1+'" alt="Flower"></div>' );
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
        url: "php/getTeachedCourses.php", //Relative or absolute path to file.php file
        data: {
            id: id
        },
        success: function (response) {
            console.log(JSON.parse(response));
            var cour = JSON.parse(response);
            console.log(cour);
            var el = "";
            for (var i = 0; i < cour.length; i++) {
                el += '<a href="course.html?course=' + cour[i].id + '">' + cour[i].name + '</a><br>';
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
        url: "php/getTeachedCategories.php", //Relative or absolute path to file.php file
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