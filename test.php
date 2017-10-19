<?php

include_once(__DIR__ . '/vendor/nette/utils/src/Utils/SmartObject.php');
include_once(__DIR__ . '/vendor/nette/utils/src/Utils/Image.php');

use Nette\Utils\Image;

// try {
// } catch (\Nette\NotSupportedException $e) {

// }

$titles = array_map(function($title) {
	return wordwrap($title, 30);
}, [
	'Strange codes, multiple identities and team habits',
	'Connect Bitbucket commit messages with different issue tracker',
	'Null Object design pattern',
	'Implement a CSS preprocessor into Statie project',
	'How to re-generate and refresh static website in Statie?',
	'Previnilosť',
	'4 rady ako prestať fajčiť',
]);

// exit(0);

$colorBackground = Image::rgb(125, 0, 0);
$colorForeground = Image::rgb(0, 0, 0);
$font = './ubuntu.ttf';
$fontSize = 50;
$angle = 0;
$text = $titles[0];

// $imageWidth = 500;
// $imageHeight = 300;
$padding = 100;

$box = imagettfbbox($fontSize, $angle, $font, $text);
// Get your Text Width and Height
$minX = min(array($box[0],$box[2],$box[4],$box[6]));
$maxX = max(array($box[0],$box[2],$box[4],$box[6]));
$minY = min(array($box[1],$box[3],$box[5],$box[7]));
$maxY = max(array($box[1],$box[3],$box[5],$box[7]));

$textWidth = $maxX - $minX;
$textHeight = $maxY - $minY;

$imageWidth = $textWidth + $padding;
$imageHeight = floor($imageWidth / 16 * 9);


// Calculate coordinates of the text
$x = ($imageWidth/2) - ($textWidth/2);
$y = ($imageHeight/2) - ($textHeight/2) + $fontSize;

$image = Image::fromBlank($imageWidth, $imageHeight, $colorBackground);

$image->ttfText($fontSize, $angle, $x, $y, $colorForeground, $font, $text);

// $image->resize(500, 500);
$image->send(Image::PNG, 7);
