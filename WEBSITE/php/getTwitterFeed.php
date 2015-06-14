<?php
//get all the info about an instructor
$id = $_POST['id'];



//connection to db
$mysqli = new mysqli("localhost", "root", "", "my_bigym");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else
}
else {
    //echo "Successful connection"; // connection ok

    $query = "SELECT twitter_account FROM instructor WHERE id = $id";
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        if($row = $result->fetch_array(MYSQL_ASSOC)) {
            $twitter = $row["twitter_account"];
        }
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();

    session_start();
    require_once("twitteroauth/twitteroauth/twitteroauth.php"); //Path to twitteroauth library

    $twitteruser = $twitter;
    $notweets = 30;
    $consumerkey = "ll1h5br2Tzmpo5bDRTCs91zF3";
    $consumersecret = "Oq4eD5KsDnBomwUJSqtZEQCBbx8RrTMtZXoHeLWKaAymfYqk7i";
    $accesstoken = "3306991072-ts9tmjtqqjfOZtMWCZOp3w94VDgg6k9YzvQduV6";
    $accesstokensecret = "LOAAGqMlitBchqNXPdDAKkKer8G2kTdwd780Zebrr0SM3";

    function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
        $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
        return $connection;
    }

    $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

    $tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);

    echo json_encode($tweets);
}

?>