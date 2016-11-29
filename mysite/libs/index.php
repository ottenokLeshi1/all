<?php
//$JSON = file_get_contents('https://api.vk.com/method/users.get?user_id=269370523&v=5.52');
$user_id = 'молоко';
$request_params = array(
    'q' => $user_id,
    'count' => '1',
    'v' => '5.52'
);
$get_params = http_build_query($request_params);
$result = json_decode(file_get_contents('https://api.vk.com/method/newsfeed.search?'. $get_params));
echo(print_r($result->response->items[0]->id));