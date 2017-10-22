<?php declare(strict_types=1);

namespace Crazko\Site\TextToImage;

use Crazko\Site\TextToImage\Text;
use Nette\Utils\Image as Img;

class Image
{
	const ANGLE = 0;
	const FONT = __DIR__ . '/ubuntu.ttf';
	const PADDING = 100;
	const SIGNATURE = 'romanvesely.com';
	const SIGNATURE_SIZE = 25;

	/**
	 * @var string
	 */
	private $font;

	/**
	 * @var Text
	 */
	private $text;

	/**
	 * @var int
	 */
	private $size;

	/**
	 * @var int
	 */
	private $width;

	public function __construct(string $text, int $size = 50, int $width = 800)
	{
		$this->size = $size;
		$this->text = new Text($this->size, self::ANGLE, self::FONT, $text);
		$this->width = $width;
		$this->get();
	}

	public function get(): Img
	{
		$width = max($this->width, ($this->text->width + self::PADDING));
		$height = floor($width / 16 * 9);

		// Calculate coordinates of the text
		$x = ($width / 2) - ($this->text->width / 2);
		$y = ($height / 2) - ($this->text->height / 2) + $this->size;

		$image = Img::fromBlank($width, $height, Img::rgb(254, 255, 241));
		$image->ttfText($this->size, self::ANGLE, $x, $y, Img::rgb(27, 116, 171), self::FONT, $this->text);
		$image->resize($this->width, null);

		// Add signature
		$image->ttfText(self::SIGNATURE_SIZE, self::ANGLE, $image->width - 320, $image->height - 50, Img::rgb(140, 140, 140), self::FONT, self::SIGNATURE);

		return $image;
	}
}


