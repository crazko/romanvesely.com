<?php declare(strict_types=1);

namespace Crazko\Site\SocialImages;

use Crazko\Site\SocialImage\PostsProvider;

class ImageCreator
{
    /**
     * @var PostsProvider
     */
    private $postsProvider;

    public function __constructor(PostsProvider $postsProvider): void
    {
        $this->postsProvider = $postsProvider;
    }

    public function create(): void
    {
        var_dump($this->postsProvider->provide());
    }
}
