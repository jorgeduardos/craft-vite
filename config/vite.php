<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('ENVIRONMENT') === 'dev' || App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath' => '@webroot/dist/manifest.json',
    'devServerPublic' => App::env('VITE_ASSETS_URL'),
    'serverPublic' => App::env('PRIMARY_SITE_URL') . 'dist/',
    'errorEntry' => '',
    'cacheKeySuffix' => '',
    'devServerInternal' => 'http://localhost:3000',
    'checkDevServer' => true,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
];