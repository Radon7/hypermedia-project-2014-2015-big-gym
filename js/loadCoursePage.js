$(document).ready(ready);
function ready(){
    
    var course = getLocationValue("course");
    
    var istruttori = ["Tyler", "Nicole", "Veronica"];

    //alert("var a = "+a);
    var level = 2;
    
    
    var timetable = getTimeTable();
    
    $(".navbar-inverse").css('background', 'url(../img/courses/course-header-kickboxing.jpg)')
    
    $("#Title").html(course);
    $("#Category").html("COMBAT");
    $("#Category").attr('href', getCategoryLink("combat"));
    $("#Description").html(getDescription());
    $("#Target").html(getTarget());
    $("#Category").html(getCategory());
    $("#Room").html(getRoom());
    $("#Courseimage").attr('src',getCorseImage(course));
    $("#Price").html(getPrice());
    $("#instructorthumb").html(loadInstructors(istruttori));
    $("#Difficulty").attr("src",difficultyImg(level));
    $("#Timetable").html(timetable)

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
    
function getTimeTable(){
    var result = "";
    var time = 8;
    var timeup= 9;
    for(var i = 0; i < 15; i++){
        result = result + "<tr><td class='hours'>" + time + ".00-" + timeup + ".00</td>";
        time = (time + 1)%12;
        timeup = (timeup + 1) %12;
        if(time==0){
            time = 12;
        }
        if(timeup == 0){
            timeup = 12;
        }
        for(var j = 0; j < 7; j++){
            result = result + "<td></td>";
        }
        result = result + "</tr>";
    }
    return (result);
}

function difficultyImg(level){
    
    switch(level){
        case 0: return('img/easy.jpg');
        case 1: return('img/medium.jpg');
        case 2: return('img/hard.jpg');
        default: return('');
    }
}


function loadInstructors(instructors){
    var result = "<div class='row'>";
    var j = 0;
    for(var i = 0; i < instructors.length; i++){
        if(j%3 == 0){
            result = result + "</div> <div class='row'>";
        }
        result = result + " <div class='col-xs-4 col-md-4'> <div class='thumbnail'> <img src='img/instructors/instructor_"+ instructors[i] + "_320x320.jpg' alt='Image not available, sorry.' class='img-responsive'><div class='caption'> <a href='instructor.html?name=" + instructors[i] + "'><h3>" + instructors[i] + "</h3></a></div></div></div>";
        j++;
    }
    result = result + "</div></div>";
    return result;
}

function getCategoryLink(category){
    return "category?name=" + category;
}
function getDescription(){
    return "sdbjbsdjbvjbvsbjvjbjbvzkjòvbdz   <br>    pasnoanaocnozscvzsjdvbzsdoivbuia";
}
function getTarget(){
    return "sdbjbsdjbvjbvsbjvjbjbvzkjòvbdz   <br>    pasnoanaocnozscvzsjdvbzsdoivbuia";
}
function getCategory(){
    return "COMBACT";
}
function getRoom(){
    $("#roomimage").attr('src','img/rooms/room-combat-room.jpg');
    return "Combact Room 1";
}
function getCorseImage(course){
    return "img/courses/course-" + course + ".jpg";
}
function getPrice(course){
    return "Price: " + 150 + "£.";
}