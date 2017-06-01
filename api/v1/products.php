<?php

$app->post('/getProduct', function() use ($app) {
    $r = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    $email = $r->customer;
    $user = $db->getOneRecord("select uid,lname,state,phone,gender,city,address,fname,email,created from users where phone='$email' or email='$email'");
    if ($user != NULL) {

    }
    echoResponse(200, $response);
})
;
?>