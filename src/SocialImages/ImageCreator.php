<?php declare(strict_types=1);

namespace Crazko\Site\SocialImages;

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

    /**
     * @var TextFactory
     */
    private $textFactory;

    /**
     * @var ImageFactory
     */
    private $imageFactory;

    public function __construct(string $siteDirectory, PostsProvider $postsProvider, TextFactory $textFactory, ImageFactory $imageFactory)
    {
        $this->siteDirectory = $siteDirectory;
        $this->postsProvider = $postsProvider;
        $this->textFactory = $textFactory;
        $this->imageFactory = $imageFactory;
    }

    public function create(): void
    {
        foreach ($this->postsProvider->provide() as $post) {
            $title = $post->getOption('title');
            $filename = $post->getFilenameWithoutDate();

            $text = $this->textFactory->create($title);
            $image = $this->imageFactory->create($text);

            $image->save(sprintf('%s/assets/posts/%s.png', $this->siteDirectory, $filename), 7);
        }
    }
}
