<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['series-input'])) {
        $conn = mysqli_connect('localhost', 'root', '', 'watchhistorydata') or die("Connection failed:" .mysqli_connect_error());
        if(isset($_POST['name']) && isset($_POST['season'])) {
            $seriesname = $_POST['series-name'];
            $seriesseason = $_POST['series-season'];

            $sql= "INSERT INTO 'series' ('name', 'season') VALUES ('$seriesname', '$seriesseason')";

            $query = mysqli_query($conn,$sql);
            if($query) {
                echo 'Entry successful';
            }
            else {
                echo 'Error occured';
            }
        }
    }
?>