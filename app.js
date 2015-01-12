var app = angular.module('app', ['ui.router', 'search']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
        url: '/',
        views: {
            'menu': {
                templateUrl: 'menu/menu.html'
            },
            'panel': {
                templateUrl: 'panel/panel.html'
            }
        }
    });
});
