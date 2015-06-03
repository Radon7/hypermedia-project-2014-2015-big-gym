$(document).ready(ready);
function ready(){

    //var category = ["Combat", "Dance", "Mind-And-Body", "Water-Based", "Workout"];
    getFromDB(1);

    //alert("var a = "+a);
    $(".navbar-inverse").css('background', 'url(img/all-categories-header.jpg)');
    $(".navbar-inverse").css('-webkit-background-size','cover');
    $(".navbar-inverse").css('-moz-background-size','cover');
    $(".navbar-inverse").css('-o-background-size','cover');
    $(".navbar-inverse").css('background-size','cover');

}

function getFromDB(id){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getAllCategories.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var categories=JSON.parse(response);
            var result = "<div class='row'>";
            var j = 0;
            for(var i = 0; i < categories.length; i++){
                if(j%3 == 0){
                    result = result + "</div> <div class='row'>";
                }
                result = result + " <div class='col-xs-12 col-sm-6 col-md-4'> <div class='thumbnail'> <img src='img/categories/"+ categories[i].thumbnail + "' alt='Image not available, sorry.' class='img-responsive'><div class='caption'> <h3>" + categories[i].name + "</h3><a href='category.html?id=" + categories[i].id + "&cgt=1'>See more details</a> <br> <a href='allcoursesofcategory.html?id=" + categories[i].id + "'>All courses of this category</a></div></div></div>";
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
