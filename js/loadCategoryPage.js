$(document).ready(ready);

function ready(){

    var id= 3;

    $(".navbar-inverse").css('background', 'url(./img/categories/category-header-mind-and-body.jpg)');

    getCatAboutDescription(id);
    getCatInstructorsList(id);

}

function getCatAboutDescription(id) {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "getCategory.php", //Relative or absolute path to file.php file
        data: {category_id: id},
        success: function(response) {
            var cat_about, cat_name;
            console.log(JSON.parse(response));
            var category=JSON.parse(response);
            //Name of the category
            cat_name = category[0].name;
            $("#second-brand").html(cat_name+" Category");
            //Title of the page
            document.title = cat_name+" Category";
            //What is this category about?
            cat_about = category[0].about;
            $("#cat_about_description").html(cat_about)
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
        url: "getCategoryInstructors.php", //Relative or absolute path to file.php file
        data: {category_id: id},
        success: function(response) {
            var result = "";
            console.log(JSON.parse(response));
            var instructors=JSON.parse(response);
            //Instructors of the category
            for(var i=0; i < instructors.length; i++) {
                    result = result + "<div class='col-xs-12 col-sm-6 col-md-4'> <div class='thumbnail'> <img src='img/instructors/instructor_"+instructors[i].id +"_182x182.jpg' alt='...' <div class='caption'> <a href='instructor.html?id=" + instructors[i].id + "'> <h3>" + instructors[i].name + " "+ instructors[i].surname + " </h3> </a> </div> </div> </div>";
                }
            $("#cat_instructors_list").html(result);
            },
        error: function(request,error) {
            console.log("Error");
        }
    });
}
