<?php
    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $qkimbap = $_POST['qkimbap'];
        $qramen = $_POST['qramen'];
        $qkfc = $_POST['qkfc'];
        $qhotteok = $_POST['qhotteok'];
        $qmilktea = $_POST['qmilktea'];
        $qtable = $_POST['qtable'];
        $qtime = $_POST['qtime'];
    }

    // database details
    $host = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "trendsetter_menu";

    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }
    // using sql to create a data entry query
    $sql = "INSERT INTO orders (id, kimbap_amount, ttramen_amount, kfc_amount, hotteok_amount, milktea_amount, table_no, arrival) VALUES ('0', '$qkimbap', '$qramen', '$qkfc', '$qhotteok', '$qmilktea', '$qtable', '$qtime')";
  
    
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        echo "Thank you for ordering at Restaurant Trendsetter!";
    }
  
    // close connection
    mysqli_close($con);


?>