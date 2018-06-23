<?php declare(strict_types=1);

namespace Crazko\Site\SocialImages;

use Nette\Utils\Image;

class ImageFactory
{
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
        $this->imageConfiguration = $imageConfiguration;
    }

    public function create(Text $text): Image
    {
        $width = max($this->imageConfiguration->getWidth(), ($text->width + $this->imageConfiguration->getPadding()));
        $height = floor($width / 16 * 9);

        // Calculate coordinates of the text
        $x = ($width / 2) - ($text->width / 2);
        $y = ($height / 2) - ($text->height / 2) + $this->imageConfiguration->getSize();

        $image = Image::fromBlank(
            $width,
            $height,
            Image::rgb(...$this->colorConfiguration->getBackground())
        )
        ;
        $image->ttfText(
            $this->imageConfiguration->getSize(),
            $this->imageConfiguration->getAngle(),
            $x,
            $y,
            Image::rgb(...$this->colorConfiguration->getForeground()),
            $this->imageConfiguration->getFont(),
            $text
        );

        $image->resize($this->imageConfiguration->getWidth(), null);

        // Add signature
        $image->ttfText(
            $this->imageConfiguration->getSignatureSize(),
            $this->imageConfiguration->getAngle(),
            $image->width - 320,
            $image->height - 50,
            Image::rgb(...$this->colorConfiguration->getSignature()),
            $this->imageConfiguration->getFont(),
            $this->imageConfiguration->getSignature()
        );

        return $image;
    }
}
