<?php

namespace CodeWithDennis\FilamentThemeInspector;

use CodeWithDennis\FilamentThemeInspector\Testing\TestsFilamentThemeInspector;
use Filament\Support\Assets\Asset;
use Filament\Support\Facades\FilamentAsset;
use Livewire\Features\SupportTesting\Testable;
use Spatie\LaravelPackageTools\Commands\InstallCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentThemeInspectorServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-theme-inspector';

    public static string $viewNamespace = 'filament-theme-inspector';

    public function configurePackage(Package $package): void
    {
        $package->name(static::$name)
            ->hasInstallCommand(function (InstallCommand $command) {
                $command
                    ->askToStarRepoOnGitHub('codewithdennis/filament-theme-inspector');
            });
    }

    public function packageRegistered(): void {}

    public function packageBooted(): void
    {
        // Asset Registration
        FilamentAsset::register(
            $this->getAssets(),
            $this->getAssetPackageName()
        );

        FilamentAsset::registerScriptData(
            $this->getScriptData(),
            $this->getAssetPackageName()
        );

        // Testing
        Testable::mixin(new TestsFilamentThemeInspector);
    }

    protected function getAssetPackageName(): ?string
    {
        return 'codewithdennis/filament-theme-inspector';
    }

    protected function getAssets(): array
    {
        return [];
    }

    protected function getScriptData(): array
    {
        return [];
    }
}
