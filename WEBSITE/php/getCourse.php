<?php
//get all the course from db and reply using json structure

//echo "I'm the php";

//connection to db
$mysqli = new mysqli("localhost", "root", "", "my_bigym");


$id = $_POST["course_id"];

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    //echo "Successful connection"; // connection ok

    # extract results mysqli_result::fetch_array
    $query = "SELECT course.id AS courseid, course.name AS coursename, course.description, course.difficulty, course.target, room.name AS room_name, room.image AS room_image, course.price, category.name AS categoryname, category.id AS categoryid, course.schedule, course.image AS course_image, course.image_header from course Join category JOIN room On course.category_id = category.id AND course.room_id = room.id Where course.id = $id";
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map("utf8_encode", $row);
        }
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();



}

?>