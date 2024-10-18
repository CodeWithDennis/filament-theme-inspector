<?php

namespace CodeWithDennis\FilamentThemeInspector\Commands;

use Illuminate\Console\Command;

class FilamentThemeInspectorCommand extends Command
{
    public $signature = 'filament-theme-inspector';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
