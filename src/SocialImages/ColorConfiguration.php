<?php declare(strict_types=1);

namespace Crazko\Site\SocialImages;

final class ColorConfiguration
{
    /**
     * @var int[]
     */
    private $background;

    /**
     * @var int[]
     */
    private $foreground;

    /**
     * @var int[]
     */
    private $signature;

    /**
     * @param int[][] $colors
     */
    public function __construct(array $color)
    {
        $this->background = $color['background'];
        $this->foreground = $color['foreground'];
        $this->signature = $color['signature'];
    }

    /**
     * @return int[]
     */
    public function getBackground(): array
    {
        return $this->background;
    }

    /**
     * @return int[]
     */
    public function getForeground(): array
    {
        return $this->foreground;
    }

    /**
     * @return int[]
     */
    public function getSignature(): array
    {
        return $this->signature;
    }
}
