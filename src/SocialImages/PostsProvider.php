<?php declare(strict_types=1);

namespace Crazko\Site\SocialImages;

use Symplify\Statie\Application\StatieApplication;
use Symplify\Statie\Configuration\Configuration;
use Symplify\Statie\Renderable\File\PostFile;

final class PostsProvider
{
    /**
     * @var StatieApplication
     */
    private $statieApplication;

    /**
     * @var Configuration
     */
    private $configuration;

    /**
     * @var string
     */
    private $siteDirectory;

    public function __construct(
        string $siteDirectory,
        StatieApplication $statieApplication,
		Configuration $configuration
    ) {
        $this->statieApplication = $statieApplication;
        $this->configuration = $configuration;
        $this->siteDirectory = $siteDirectory;
    }

    /**
     * @return PostFile[]
     */
    public function provide(): array
    {
        $this->statieApplication->run($this->siteDirectory, __DIR__ . '/../../dist', true);

        return $this->configuration->getOption('posts');
    }
}
