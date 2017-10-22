<?php
#!/usr/bin/env php

require_once __DIR__ . '/../vendor/autoload.php';

use Crazko\Site\TextToImage\Image;


$titles = [
	'Strange codes, multiple identities and team habits',
	'Connect Bitbucket commit messages with different issue tracker',
	'Null Object design pattern',
	'Implement a CSS preprocessor into Statie project',
	'How to re-generate and refresh static website in Statie?',
	'Previnilosť',
	'4 rady ako prestať fajčiť',
];

$image = (new Image($titles[1]))->get();
$image->send();
