$(document).ready(ready);
function ready(){
    
    
//    get the parameter from the url
    var course = getLocationValue("course");
    
    
    
    // caricare i parametri della query
    var istruttori = ["Tyler", "Nicole", "Veronica"];

    //alert("var a = "+a);
    var level = 2;
    
    
    //genera la time table
    var timetable = getTimeTable();
    
    //modifica il titolo della pagine
    document.title = "Course - " + course;
    
    //modifica l'immagine nella seconda navbar
    $(".navbar-inverse").css('background', 'url(../img/courses/course-header-kickboxing.jpg)')
    
    //elabora i dati della pagina
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
        result = result + " <div class='col-xs-4 col-md-4'> <div class='thumbnail'> <img src='img/instructors/instructor_"+ instructors[i] + "_320x320.jpg' alt='Image not available, sorry.' class='img-responsive'><div class='caption'> <a href='instructor.html?name=" + instructors[i] + "'><h3>" + instructors[i] + "</h3></a></div></div></div>";
        j++;
    }
    result = result + "</div></div>";
    return result;
}

//result ritorna l'url della pagina della categoria con il parametro settato
function getCategoryLink(category){
    return "category?name=" + category;
}
//ritorna la descrizione
function getDescription(){
    return "sdbjbsdjbvjbvsbjvjbjbvzkjòvbdz   <br>    pasnoanaocnozscvzsjdvbzsdoivbuia";
}
//ritorna il target del corso
function getTarget(){
    return "sdbjbsdjbvjbvsbjvjbjbvzkjòvbdz   <br>    pasnoanaocnozscvzsjdvbzsdoivbuia";
}
//ritorna la cateogria del corso
function getCategory(){
    return "COMBACT";
}
//ritorna la roo del corso e aggiorna l'immagine
function getRoom(){
    $("#roomimage").attr('src','img/rooms/room-combat-room.jpg');
    return "Combact Room 1";
}
//carica l'immagine del corso
function getCorseImage(course){
    return "img/courses/course-" + course + ".jpg";
}
//carica il prezzo del corso
function getPrice(course){
    return "Price: " + 150 + "£.";
}