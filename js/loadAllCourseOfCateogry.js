$(document).ready(ready);
function ready(){

    //get the parameter from the url
    var category = getLocationValue("id");
    var navigation = 1;//getLocationValue("nav");
    
    console.log("category " + category);
    console.log("nav " + navigation);
    
    getFromDB(category, navigation);
}

function getLocationValue(string){
    var loc = document.location.toString()+"";
    var pos;
    if (loc.indexOf("?") == -1) {
        return "";
    }else{
        pos = loc.indexOf("&"+string+"=");
        if(pos == -1){
            pos = loc.indexOf("?"+string+"=")
        }

        if(pos == -1){
            return "";
        }
        
        pos+=2+(string.length);
        
        var store = "";
        for(; pos < loc.length && loc.charAt(pos) != '&' && loc.charAt(pos)!= undefined ; pos++){
            store = store.concat(loc.charAt(pos));
        }

        return unescape(store);
    }
}

function getFromDB(id, nav){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getAllCoursesOfCategory.php", //Relative or absolute path to file.php file
        data: {category_id:id},
        success: function(response) {
            //console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            console.log(courses);
            document.title = "All Courses of category " + courses[0].category_name;
            $("#Title").html(courses[0].category_name + " Courses");
            //modifica l'immagine nella seconda navbar  
            $(".navbar-inverse").css('background', 'url(img/categories/' + courses[0].image_header + ')');
            $(".navbar-inverse").css('-webkit-background-size','cover');
            $(".navbar-inverse").css('-moz-background-size','cover');
            $(".navbar-inverse").css('-o-background-size','cover');
            $(".navbar-inverse").css('background-size','cover');
            
            if(nav == 1){
                $("#gobacklink").html("Go back to the " + courses[0].category_name + " category");
                $("#gobacklink").attr("href","category.html?id=" + courses[0].categoryid);
            }else{
                $("#navigationdiv").css('visibility', 'hidden');
            }
            
            var result = "<div class='row'>";
            var j = 0;
            for(var i = 0; i < courses.length; i++){
                
                console.log("posizione " + i + " Course " + courses[i].course_name);
                if(j%3 == 0){
                    result = result + "</div> <div class='row'>";
                }
                result = result + " <div class='col-xs-12 col-sm-6 col-md-4'> <div class='thumbnail'> <img src='img/courses/"+ courses[i].thumbnail + "' alt='Image not available, sorry.' class='img-responsive'><div class='caption'><a href='course.html?id=" + courses[i].course_id + "'><h3>" + courses[i].course_name + "</h3></a></div></div></div>";
                j++;
            }
            result = result + "</div></div>";
            $("#thumblist").html(result);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}