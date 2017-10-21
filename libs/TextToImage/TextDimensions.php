<?php declare(strict_types=1);

namespace crazko\TextToImage;

/**
 * @var property int width
 * @var property int height
 */
class TextDimensions
{
	/**
	 * @var array
	 */
	private $dimensions;

	public function __constructor(int $size, int $angle, string $font, string $text)
	{
		$box = imagettfbbox($size, $angle, $font, $text);

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
}
