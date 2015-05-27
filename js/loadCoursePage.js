$(document).ready(ready);
function ready(){
    
    
//    get the parameter from the url
    var course = getLocationValue("course");
    
    getFromDB(course);
    
    // caricare i parametri della query
    var istruttori = ["Tyler", "Nicole", "Veronica"];
    
    //modifica il titolo della pagine
    
    
    //modifica l'immagine nella seconda navbar
    $(".navbar-inverse").css('background', 'url(../img/courses/course-header-kickboxing.jpg)')
    
    //elabora i dati della pagina
    $("#instructorthumb").html(loadInstructors(istruttori));

}

//funzione che analizza l'url alla ricerca del nome del parametro e restitiuisce il valore
//param = nome del parametro
//result valore del parametro passato
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
    
//funzione che costruisce la abella oraria del corso
//result codice html del body della tabella
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

//funzione che selezioan l'immagine della difficolta'
function difficultyImg(level){
    
    switch(level){
        case 0: return('img/easy.jpg');
        case 1: return('img/medium.jpg');
        case 2: return('img/hard.jpg');
        default: return('');
    }
}

//funzione che genera la lista di thumbnails degli istruttori
//param vettori di nomi degli istruttori
//result codice html della lista di thumbnail con sorgenti immagini e link connessi correttamente
function loadInstructors(instructors){
    var result = "<div class='row'>";
    var j = 0;
    for(var i = 0; i < instructors.length; i++){
        if(j%3 == 0){
            result = result + "</div> <div class='row'>";
        }
        result = result + " <div class='col-xs-12 col-md-4'> <div class='thumbnail'> <img src='img/instructors/instructor_"+ instructors[i] + "_320x320.jpg' alt='Image not available, sorry.' class='img-responsive'><div class='caption'> <a href='instructor.html?name=" + instructors[i] + "'><h3>" + instructors[i] + "</h3></a></div></div></div>";
        j++;
    }
    result = result + "</div></div>";
    return result;
}

function getFromDB(id){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "js/loadcourse.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var course=JSON.parse(response);
            console.log(course);
            document.title = "Course - " + course[0].name1;
            $("#Title").html(course[0].coursename);
            $("#Category").html(course[0].categoryname);
            $("#Category").attr('href', "category?id=" + course[0].id);
            $("#Description").html(course[0].description);
            $("#Target").html(course[0].target);
            //$("#Category").html(course[0].name);
            $("#Room").html(course[0].room_id);
            $("#Courseimage").attr('src',course[0].courseid + ".jpg");
            $("#Price").html( "Price: " + course[0].price + "&pound.");
            
            /*switch(parseInt(course[0].difficulty){
                case 0: $("#Difficulty").attr("src",'img/easy.jpg');break;
                case 1: $("#Difficulty").attr("src",'img/medium.jpg');break;
                case 2: console.log("caso difficile");$("#Difficulty").attr("src",'img/hard.jpg');break;
                default: $("#Difficulty").attr("src",'');
            }*/
            $("#Difficulty").attr("src",'img/' + course[0].difficulty + '.jpg');
            
            $("#Timetable").html(getTimeTable);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
}