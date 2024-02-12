<?php
require_once 'google-api-php-client/vendor/autoload.php';
require_once 'config.php';
session_start();

$client = new Google_Client();
$client->setClientId($gClientID);
$client->setClientSecret($gClientSecret);
$client->setRedirectUri($redirectURL);
$client->addScope("email");

if (!isset($_GET['code'])) {
    $authUrl = $client->createAuthUrl();
    echo '<a href="'.filter_var($authUrl, FILTER_SANITIZE_URL).'">Login with Google</a>';
} else {
    $client->authenticate($_GET['code']);
    $_SESSION['access_token'] = $client->getAccessToken();
    header('Location: '.$redirectURL);
    exit();
}
?>
