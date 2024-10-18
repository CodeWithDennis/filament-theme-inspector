# Easily see the fi- class of any element on the page by hovering over it. A tooltip displays the class name, and you can copy it with a click!

[![Latest Version on Packagist](https://img.shields.io/packagist/v/codewithdennis/filament-theme-inspector.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-theme-inspector)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/codewithdennis/filament-theme-inspector/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/codewithdennis/filament-theme-inspector/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/codewithdennis/filament-theme-inspector/fix-php-code-styling.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/codewithdennis/filament-theme-inspector/actions?query=workflow%3A"Fix+PHP+code+styling"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/codewithdennis/filament-theme-inspector.svg?style=flat-square)](https://packagist.org/packages/codewithdennis/filament-theme-inspector)



This is where your description should go. Limit it to a paragraph or two. Consider adding a small example.

## Installation

You can install the package via composer:

```bash
composer require codewithdennis/filament-theme-inspector
```

You can publish and run the migrations with:

```bash
php artisan vendor:publish --tag="filament-theme-inspector-migrations"
php artisan migrate
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="filament-theme-inspector-config"
```

Optionally, you can publish the views using

```bash
php artisan vendor:publish --tag="filament-theme-inspector-views"
```

This is the contents of the published config file:

```php
return [
];
```

## Usage

```php
$filamentThemeInspector = new CodeWithDennis\FilamentThemeInspector();
echo $filamentThemeInspector->echoPhrase('Hello, CodeWithDennis!');
```

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
