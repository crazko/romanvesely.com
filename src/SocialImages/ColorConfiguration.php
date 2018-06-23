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
     * @param int[] $background
     * @param int[] $foreground
     * @param int[] $signature
     */
    public function __construct(array $background, array $foreground, array $signature)
    {
        $this->background = $background;
        $this->foreground = $foreground;
        $this->signature = $signature;
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
