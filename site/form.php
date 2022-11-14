<?php
    /* Sources used: 
    https://codeshack.io/secure-login-system-php-mysql/
    https://www.educative.io/answers/how-to-connect-an-html-form-to-a-mysql-database-in-php */
    
    /* getting all values from the HTML form.
    When button on the html page with submit is pushed, load values from form into variables using POST. */
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

    // database details are loaded into variable
    $host = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "trendsetter_menu";

    // creating a connection by connecting using the variables we just loaded in
    $con = mysqli_connect($host, $username, $password, $dbname);

    /* to ensure that the connection is made.
    Checks if connected. If not writes an error message.
    If connected inserts variables into tables in the SQL database. */
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }
    // using sql to create a data entry query
    $sql = "INSERT INTO orders (id, kimbap_amount, ttramen_amount, kfc_amount, hotteok_amount, milktea_amount, table_no, arrival) VALUES ('0', '$qkimbap', '$qramen', '$qkfc', '$qhotteok', '$qmilktea', '$qtable', '$qtime')";
  
    
    /* send query to the database to add values and confirm if successful.
    If it successfully makes connection then after inputting into database, redirects to thankyou.html page. */
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        header('Location: thankyou.html');
        exit;
    }
  
    // close connection
    mysqli_close($con);


?>