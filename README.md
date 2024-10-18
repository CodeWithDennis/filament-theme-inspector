# Filament Theme Inspector

[![Latest Version on Packagist](https://img.shields.io/packagist/v/codewithdennis/filament-theme-inspector.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-theme-inspector)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/codewithdennis/filament-theme-inspector/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/codewithdennis/filament-theme-inspector/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/codewithdennis/filament-theme-inspector/fix-php-code-styling.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/codewithdennis/filament-theme-inspector/actions?query=workflow%3A"Fix+PHP+code+styling"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/codewithdennis/filament-theme-inspector.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-theme-inspector)

Easily see the fi- class of any element on the page by hovering over it. A tooltip displays the class name, and you can copy it with a click!



https://github.com/user-attachments/assets/475e2368-3c08-42ca-a445-bfdc34b0907f



## Installation

You can install the package via composer:

```bash
composer require codewithdennis/filament-theme-inspector
```

## Usage

Add the following plugin to your plugins method on your page or form.

```php
use CodeWithDennis\FilamentThemeInspector\FilamentThemeInspectorPlugin;

->plugins([
    FilamentThemeInspectorPlugin::make()
        ->disabled(fn () => ! app()->hasDebugModeEnabled())
])
```

### Copy
When you hover over an element on the page, a tooltip will appear with the fi- class name. You can click on the copy icon to copy the class name to your clipboard. Hold `ALT` or `OPTION` key to freeze the tooltip in place, so you can copy the class name.

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [CodeWithDennis](https://github.com/CodeWithDennis)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
