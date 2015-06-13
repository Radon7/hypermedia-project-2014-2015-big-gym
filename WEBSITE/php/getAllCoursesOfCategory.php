<?php
//get all the course from db and reply using json structure

//echo "I'm the php";

//connection to db
$mysqli = new mysqli("localhost", "root", "", "my_bigym");


$id = $_POST["category_id"];

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    //echo "Successful connection"; // connection ok

    # extract results mysqli_result::fetch_array
    $query = "SELECT course.id AS course_id, course.name AS course_name, course.thumbnail, category.name AS category_name, category.id AS categoryid, category.image_header FROM course JOIN category ON course.category_id = category.id WHERE category.id = $id ORDER BY course.name";
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