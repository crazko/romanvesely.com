<?php declare(strict_types=1);

namespace Crazko\Site\SocialImages;

use Nette\Utils\Image;

class ImageFactory
{
    const ANGLE = 0;

    const FONT = __DIR__ . '/ubuntu.ttf';

    const PADDING = 100;

    const SIGNATURE = 'romanvesely.com';

    const SIGNATURE_SIZE = 25;

    /**
     * @var ColorConfiguration
     */
    private $colorConfiguration;

    /**
     * @var ImageConfiguration
     */
    private $imageConfiguration;

    public function __construct(ColorConfiguration $colorConfiguration, ImageConfiguration $imageConfiguration)
    {
        $this->colorConfiguration = $colorConfiguration;
        $this->iamgeConfiguration = $imageConfiguration;
    }

    public function create(Text $text): Image
    {
        $width = max($this->imageConfiguration->width, ($text->width + self::PADDING));
        $height = floor($width / 16 * 9);

        // Calculate coordinates of the text
        $x = ($width / 2) - ($text->width / 2);
        $y = ($height / 2) - ($text->height / 2) + $this->imageConfiguration->size;

        $image = Image::fromBlank($width, $height, Image::rgb(...$this->colorConfiguration->getBackground()));
        $image->ttfText($this->imageConfiguration->size, self::ANGLE, $x, $y, Image::rgb(...$this->colorConfiguration->getForeground()), self::FONT, $text);
        $image->resize($this->imageConfiguration->width, null);

        // Add signature
        $image->ttfText(self::SIGNATURE_SIZE, self::ANGLE, $image->width - 320, $image->height - 50, Image::rgb(...$this->colorConfiguration->getSignature()), self::FONT, self::SIGNATURE);

        return $image;
    }
}
