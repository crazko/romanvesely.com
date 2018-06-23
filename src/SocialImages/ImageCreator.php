<?php declare(strict_types=1);

namespace Crazko\Site\SocialImages;

use Crazko\Site\SocialImages\PostsProvider;
use Crazko\Site\SocialImages\Image;

class ImageCreator
{
    /**
     * @var string
     */
    private $siteDirectory;

    /**
     * @var PostsProvider
     */
    private $postsProvider;

    public function __construct($siteDirectory, PostsProvider $postsProvider)
    {
        $this->siteDirectory = $siteDirectory;
        $this->postsProvider = $postsProvider;
    }

    public function create(): void
    {
        foreach($this->postsProvider->provide() as $post) {
            $title = $post->getOption('title');
            $filename = $post->getFilenameWithoutDate();

            $image = (new Image($title))->get();
            $image->save(sprintf('%s/assets/posts/%s.png', $this->siteDirectory, $filename), 7);
        }
    }
}
