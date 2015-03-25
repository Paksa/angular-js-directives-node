var App = angular.module('App', ['ngResource','ui.router', 'App.Controllers', 'App.Filters', 'App.Factories', 'App.Directives']);
angular.module('App.Controllers',[]);
angular.module('App.Filters',[]);
angular.module('App.Factories',[]);
angular.module('App.Directives', []);


App.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
        .state('repositories', {
            url: '/repositories',
            abstract: true,
            controller: 'gitRepoListController',
            templateUrl: 'repositories.html'
        })
       .state('repositories.list', {
            url: '/list',
            parent:'repositories',
            templateUrl: 'repositories.list.html'
        })
       .state("repositories.details", {
            url: '/:repo_owner/:repo_name',
           //parent:'repositories',
           params: {repo: null},
           templateUrl: 'repositories.details.html',
           controller: 'gitRepoDetailsController',
           onEnter: function() {
               document.body.scrollTop = document.documentElement.scrollTop = 0;
           }
       });
    $urlRouterProvider.otherwise("/repositories/list");
});
