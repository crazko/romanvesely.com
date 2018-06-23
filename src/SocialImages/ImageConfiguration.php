<?php declare(strict_types=1);

namespace Crazko\Site\SocialImages;

final class ImageConfiguration
{
    // /**
    //  * @var int[]
    //  */
    // private $background;

    // /**
    //  * @var int[]
    //  */
    // private $foreground;

    // /**
    //  * @var int[]
    //  */
    // private $signature;

    // /**
    //  * @param int[] $background
    //  * @param int[] $foreground
    //  * @param int[] $signature
    //  */
    // public function __construct(array $background, array $foreground, array $signature)
    // {
    //     $this->background = $background;
    //     $this->foreground = $foreground;
    //     $this->signature = $signature;
    // }

    public function getWidth(): int
    {
        return 1200;
    }

    public function getSize(): int
    {
        return 100;
    }

    public function getAngle(): int
    {
        return 0;
    }

    public function getFont(): string
    {
        return __DIR__ . '/ubuntu.ttf';
    }

    public function getPadding(): int
    {
        return 100;
    }

    public function getSignature(): string
    {
        return 'romanvesely.com';
    }

    public function getSignatureSize(): int
    {
        return 25;
    }
}
