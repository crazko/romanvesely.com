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


