<?php declare(strict_types=1);

namespace crazko\TextToImage;

use Nette\Utils\Image as Img;
use TextDimensions;

class Image
{
	const ANGLE = 0;
	const FONT = __DIR__ . '/../src/assets/ubuntu.ttf';
	const PADDING = 100;
	const SIGNATURE = 'romanvesely.com';
	const SIGNATURE_SIZE = 25;

	/**
	 * @var string
	 */
	private $font;

	/**
	 * @var string
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
		$this->text = $text;
		$this->size = $size;
		$this->width = $width;
	}

	public function get(): Img
	{
		$colorBackground = Img::rgb(254, 255, 241);
		$colorTitle = Img::rgb(27, 116, 171);
		$colorSite = Img::rgb(140, 140, 140);

		$dimensions = new TextDimensions($this->size, self::ANGLE, self::FONT, $this->text);

		$imageWidth = max($this->width, ($dimensions->width + $padding));
		$imageHeight = floor($imageWidth / 16 * 9);

		// Calculate coordinates of the text
		$x = ($imageWidth / 2) - ($dimensions->width / 2);
		$y = ($imageHeight / 2) - ($dimensions->height / 2) + $this->size;

		$image = Img::fromBlank($imageWidth, $imageHeight, $colorBackground);
		$image->ttfText($this->size, self::ANGLE, $x, $y, $colorTitle, self::FONT, $this->text);
		$image->ttfText(self::SIGNATURE_SIZE, self::ANGLE, $imageWidth - 320, $imageHeight - 50, $colorSite, self::FONT, self::SIGNATURE);

		$image->resize($this->width, null);

		return $image;
	}

	private function textDimensions(): array
	{
		$box = imagettfbbox($this->size, self::ANGLE, self::FONT, $this->text);

		$minX = min($box[0], $box[2], $box[4], $box[6]);
		$maxX = max($box[0], $box[2], $box[4], $box[6]);
		$minY = min($box[1], $box[3], $box[5], $box[7]);
		$maxY = max($box[1], $box[3], $box[5], $box[7]);

		return [
			'width' => $maxX - $minX,
			'height' => $maxY - $minY
		];
	}
}


