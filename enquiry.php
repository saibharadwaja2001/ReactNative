<?php 

	header('Access-Control-Allow-Origin: *');
	
	$conn = new mysqli("127.0.0.1","root","","react_api");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$Idno = $_POST['Idno'];
		$Name = $_POST['Name'];
		$Mobile = $_POST['Mobile'];
		$Address = $_POST['Address'];
		$Vehicle = $_POST['Vehicle'];
		$Parking = $_POST['Parking'];
		$Subscription = $_POST['Subscription'];

		
		$sql = "INSERT INTO enquiry(Idno,Name,Mobile,Address,Vehicle,Parking,Subscription) VALUES('$Idno','$Name','$Mobile','$Address','$Vehicle','$Parking','$Subscription');";
		$res = mysqli_query($conn, $sql);
		
		if($res){
			echo "Success!";
		}
		else{
			echo "Error!";
		}
		$conn->close();
	}

?>
