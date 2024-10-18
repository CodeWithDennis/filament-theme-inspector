<?php

namespace CodeWithDennis\FilamentThemeInspector;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;

class FilamentThemeInspectorPlugin implements Plugin
{
    public function getId(): string
    {
        return 'filament-theme-inspector';
    }

    public function register(Panel $panel): void
    {
        FilamentAsset::register([
            Js::make('filament-theme-inspector-scripts', __DIR__ . '/../resources/dist/filament-theme-inspector.js'),
        ]);
    }

    public function boot(Panel $panel): void
    {
        //
    }

    public static function make(): static
    {
        return app(static::class);
    }

    public static function get(): static
    {
        /** @var static $plugin */
        $plugin = filament(app(static::class)->getId());

        return $plugin;
    }
}
