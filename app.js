var app = angular.module('app', ['ui.router', 'search']);
app.run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
);

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
            },
            'mainview': {
                templateUrl: "mainview/mainview.html"
            }
        }
    });
});
