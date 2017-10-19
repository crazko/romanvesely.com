#!/usr/bin/env php
<?php declare(strict_types=1);

require_once __DIR__ . '/../vendor/autoload.php';

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

$colorBackground = Image::rgb(254, 255, 241);
$colorTitle = Image::rgb(27, 116, 171);
$colorSite = Image::rgb(140, 140, 140);

$font = './ubuntu.ttf';
$textSizeTitle = 50;
$textSizeSite = 25;
$angle = 0;
$padding = 100;
$finalImageWidth = 800;
// $finalImageHeight = 300;

$textTitle = $titles[4];
$textSite = 'romanvesely.com';

$box = imagettfbbox($textSizeTitle, $angle, $font, $textTitle);
$minX = min($box[0], $box[2], $box[4], $box[6]);
$maxX = max($box[0], $box[2], $box[4], $box[6]);
$minY = min($box[1], $box[3], $box[5], $box[7]);
$maxY = max($box[1], $box[3], $box[5], $box[7]);

$textWidth = $maxX - $minX;
$textHeight = $maxY - $minY;

$imageWidth = max($finalImageWidth, ($textWidth + $padding));
$imageHeight = floor($imageWidth / 16 * 9);

// Calculate coordinates of the text
$x = ($imageWidth / 2) - ($textWidth / 2);
$y = ($imageHeight / 2) - ($textHeight / 2) + $textSizeTitle;

$image = Image::fromBlank($imageWidth, $imageHeight, $colorBackground);
$image->ttfText($textSizeTitle, $angle, $x, $y, $colorTitle, $font, $textTitle);
$image->ttfText($textSizeSite, $angle, $imageWidth - 320, $imageHeight - 50, $colorSite, $font, $textSite);
$image->resize($finalImageWidth, null);

$image->send(Image::PNG, 7);
