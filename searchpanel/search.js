angular.module('search', [
    'ui.router'
]).config(function ($stateProvider) {
    $stateProvider.state('app.search', {
        url: 'search',
        views: {
            'panel@': {
                templateUrl: 'searchpanel/search-panel.html'
            }
        }
    }).state('app.search.casual', {
        url: '.casual',
        views: {
            'panel@': {
                templateUrl: 'searchpanel/casual-panel.html'
            }
        }
    }).state('app.search.valuebased', {
        url: '.valuebased',
        views: {
            'panel@': {
                templateUrl: 'searchpanel/valuebased-panel.html'
            }
        }
    });
});
