<?php
//get all the info about a category from db and reply using json structure

$id= $_POST["category_id"];

//connection to db
$mysqli = new mysqli("localhost", "root", "", "my_bigym");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else {
    //echo "Successful connection"; // connection ok

    # extract results mysqli_result::fetch_array
    $query = "SELECT id, name, surname, image_1 FROM instructor JOIN teaching_category ON instructor.id = teaching_category.instructor_id WHERE teaching_category.category_id = '$id' ";
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
