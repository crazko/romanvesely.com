<?php declare(strict_types=1);

namespace Crazko\Site\TextToImage;

/**
 * @property-read int $width
 * @property-read int $height
 */
class Text
{
	/**
	 * @var string
	 */
	private $text;

	/**
	 * @var array
	 */
	private $dimensions;

	public function __construct(int $size, int $angle, string $font, string $text)
	{
		$this->text = wordwrap($text, 30);

		$box = imagettfbbox($size, $angle, $font, $this->text);
		$minX = min($box[0], $box[2], $box[4], $box[6]);
		$maxX = max($box[0], $box[2], $box[4], $box[6]);
		$minY = min($box[1], $box[3], $box[5], $box[7]);
		$maxY = max($box[1], $box[3], $box[5], $box[7]);

		$this->dimensions =  [
			'width' => $maxX - $minX,
			'height' => $maxY - $minY
		];
	}

	public function __get($dimension)
	{
		return $this->dimensions[$dimension];
	}

	public function __toString()
	{
		return $this->text;
	}
}
