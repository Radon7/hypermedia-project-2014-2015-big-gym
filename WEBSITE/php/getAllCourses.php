<?php
//get all the info about a category from db and reply using json structure

$order=$_POST["order"];
$ordering='name';
switch($order){
    case "ALPHABETICAL":
        $ordering = 'name';
        break;
    case "DIFFICULTY":
        $ordering = 'difficulty';
        break;
}

//connection to db
$mysqli = new mysqli("localhost", "root", "", "my_bigym");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else {
    //echo "Successful connection"; // connection ok

    # extract results mysqli_result::fetch_array
    $query = " SELECT course.id, course.name AS course_name, category.name AS category_name, difficulty, course.thumbnail AS course_thumbnail FROM course JOIN category ON course.category_id = category.id ORDER BY course.$ordering ";
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row;
        }
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();
}

?>
