$(document).ready(ready);
function ready(){
    
    var category = ["Combat", "Dance", "Mind-And-Body", "Water-Based", "Workout"];

    //alert("var a = "+a);
    $(".navbar-inverse").css('background', 'url(../img/all-categories-header.jpg)')
    $("#thumblist").html(loadCategories(category));

}
    //carica la lista di thumbnails delle categorie
function loadCategories(category){
    var result = "<div class='row'>";
    var j = 0;
    for(var i = 0; i < category.length; i++){
        if(j%3 == 0){
            result = result + "</div> <div class='row'>";
        }
        result = result + " <div class='col-xs-12 col-sm-6 col-md-4'> <div class='thumbnail'> <img src='img/categories/category-thumbnail-"+ category[i] + ".jpg' alt='Image not available, sorry.' class='img-responsive'><div class='caption'> <h3>" + category[i] + "</h3><a href='category.html?name=" + category[i] + "'>See more details</a> <br> <a href='courseofcategory.html?category=" + category[i] + "'>All courses of this category</a></div></div></div>";
        j++;
    }
    result = result + "</div></div>";
    return result;
}