<?php

namespace CodeWithDennis\FilamentThemeInspector\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \CodeWithDennis\FilamentThemeInspector\FilamentThemeInspector
 */
class FilamentThemeInspector extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \CodeWithDennis\FilamentThemeInspector\FilamentThemeInspector::class;
    }
}
