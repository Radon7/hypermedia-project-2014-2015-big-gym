$(document).ready(ready);

var id, cgt;

function ready(){

    //retrieve the id from the URL
    id = getQueryVariable("id");

    //retrieve the circular guided tour variable from the URL
    cgt = getQueryVariable("cgt");

    //retrieve the description of the category
    getCatAboutDescription(id);
    //retrieve the instructors list of the category
    getCatInstructorsList(id);

    //retrieve the links for the CGT
    if(cgt == 1)
        getCatIDs(id);
    else
        $("#cgt").remove();

}

//retrieve the "variable" from the URL
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

function getCatAboutDescription(id) {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCategory.php", //Relative or absolute path to file.php file
        data: {category_id: id},
        success: function(response) {
            var cat_about, cat_name;
            console.log(JSON.parse(response));
            var category=JSON.parse(response);
            //Name of the category
            cat_name = category[0].name;
            $("#second-brand").html(cat_name+" Category");
            //Load the second-navbar image
            $(".navbar-inverse").css('background', 'url(img/categories/'+category[0].image_header+')');
            $(".navbar-inverse").css('-webkit-background-size','cover');
            $(".navbar-inverse").css('-moz-background-size','cover');
            $(".navbar-inverse").css('-o-background-size','cover');
            $(".navbar-inverse").css('background-size','cover');
            //Title of the page
            document.title = cat_name+" Category";
            //What is this category about?
            $("#cat_about_image").attr('src', 'img/categories/'+category[0].image);
            cat_about = category[0].about;
            $("#cat_about_description").html(cat_about);
            },
        error: function(request,error) {
            console.log("Error");
        }
    });
}

function getCatInstructorsList(id) {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCategoryInstructors.php", //Relative or absolute path to file.php file
        data: {category_id: id},
        success: function(response) {
            var result = "";
            console.log(JSON.parse(response));
            var instructors=JSON.parse(response);
            //Instructors of the category
            for(var i=0; i < instructors.length; i++) {
                    result = result + "<div class='col-xs-12 col-sm-6 col-md-4'> <div class='thumbnail'> <img src='img/instructors/"+instructors[i].image_1+"' alt='...' <div class='caption'> <a href='instructor.html?id=" + instructors[i].id + "'> <h3>" + instructors[i].name + " "+ instructors[i].surname + " </h3> </a> </div> </div> </div>";
                }
            $("#cat_instructors_list").html(result);
            },
        error: function(request,error) {
            console.log("Error");
        }
    });
}

function getCatIDs(id) {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCategoryIDs.php", //Relative or absolute path to file.php file
        data: {},
        success: function(response) {
            var next, previous;
            console.log(JSON.parse(response));
            var ids=JSON.parse(response);
            //Instructors of the category
            for(var i=0; i < ids.length; i++) {
                    if(ids[i].id == id) {
                        if(i == 0) {
                            previous = ids[ids.length-1].id;
                        } else {
                            previous = ids[i-1].id;
                        }
                        if(i == ids.length-1) {
                            next = ids[0].id;
                        } else {
                        next = ids[i+1].id;
                        }
                    }
                }
            $("#previousCat").attr('href', 'category.html?id='+previous);
            $("#nextCat").attr('href', 'category.html?id='+next);
            },
        error: function(request,error) {
            console.log("Error");
        }
    });
}
