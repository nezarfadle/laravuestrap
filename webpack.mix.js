const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.webpackConfig({
    resolve: {
        // alias: { 'vue$': 'vue/dist/vue.min.js' }
        alias: { 'Vue': 'vue/dist/vue.min.js' }
    }
})
mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
    ])
    .js('resources/js/Facebook/app.js', 'public/js/facebook/app.js')
    .js('resources/js/Twitter/app.js', 'public/js/twitter/app.js')
    ;
