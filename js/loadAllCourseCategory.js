$(document).ready(ready);
function ready(){
    
    //var category = ["Combat", "Dance", "Mind-And-Body", "Water-Based", "Workout"];
    getFromDB(1);

    //alert("var a = "+a);
    $(".navbar-inverse").css('background', 'url(../img/all-categories-header.jpg)');

}

function getFromDB(id){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "js/loadAllCategory.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var categories=JSON.parse(response);
            var result = "<div class='row'>";
            var j = 0;
            for(var i = 0; i < category.length; i++){
                if(j%3 == 0){
                    result = result + "</div> <div class='row'>";
                }
                result = result + " <div class='col-xs-12 col-sm-6 col-md-4'> <div class='thumbnail'> <img src='img/categories/category-thumbnail-"+ category[i] + ".jpg' alt='Image not available, sorry.' class='img-responsive'><div class='caption'> <h3>" + category[i].name + "</h3><a href='category.html?id=" + category[i].id + "'>See more details</a> <br> <a href='courseofcategory.html?category=" + category[i].name + "'>All courses of this category</a></div></div></div>";
                j++;
            }
            result = result + "</div></div>";
            $("#thumblist").html(result);
        },
        error: function(request,error) 
        {
            console.log("Error " + error);
        }
    });
}