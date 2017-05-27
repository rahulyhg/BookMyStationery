<?php 

$app->post('/userProfile', function() use ($app) {
    $r = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    $email = $r->customer;
    $user = $db->getOneRecord("select uid,lname,state,phone,gender,city,address,fname,email,created from users where phone='$email' or email='$email'");
    if ($user != NULL) {
        $response['status'] = "success";
        $response['message'] = 'Logged in successfully.';
        $response['fname'] = $user['fname'];
        $response['uid'] = $user['uid'];
        $response['email'] = $user['email'];
        $response['createdAt'] = $user['created'];
		$response['phone'] = $user['phone'];
		$response['address'] = $user['address'];
		$response['city'] = $user['city'];
        $response['gender'] = $user['gender'];
        $response['state'] = $user['state'];
        $response['lname'] = $user['lname'];
    }else {
            $response['status'] = "error";
            $response['message'] = 'No user is logged in';
        }
    echoResponse(200, $response);
});

$app->post('/deleteUser', function() use ($app) {
    $r = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    $uid = $r->customer;
    $user = $db->deleteRecord("delete from users where uid='$uid'");
    if ($user != NULL) {
        $response["status"] = "info";
        $response["message"] = "User deleted successfully";
    } else{
        $response["status"] = "error";
        $response["message"] = "Not able to delete user";
    }
    echoResponse(200, $response);
});

$app->get('/listUser', function() {
    $response = array();
    $db = new DbHandler();
    $user = $db->getMultipleRecords("select * from users");
    echoResponse(200, $user);
});

$app->post('/updateProfile', function() use ($app) {
    $r = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    $uid =  $r->customer->uid;
    $fname =  $r->customer->fname;
    $lname = $r->customer->lname;
    $email = $r->customer->email;
    $phone = $r->customer->phone;
    $gender =  $r->customer->gender;
    $state =  $r->customer->state;
    $city =  $r->customer->city;
    $address =  $r->customer->address;
    $user = $db->updateRecord("update users set fname='$fname', lname='$lname', email='$email',phone='$phone', gender='$gender', state='$state', city='$city', address='$address'  where uid='$uid'");
    if ($user != FALSE) {
        $response["status"] = "success";
        $response["message"] = "User updated successfully";
    } else{
        $response["status"] = "error";
        $response["message"] = "Not able to update user";
    }
    echoResponse(200, $response);
});

?>