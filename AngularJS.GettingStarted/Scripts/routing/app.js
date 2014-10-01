(function () {

    var app = angular.module("githubViewer", ["ngRoute"]);

    console.log("routing");

    app.config(function ($routeProvider) {
        $routeProvider          
            .when('/', {
                templateUrl: 'html/main.html',
                controller: 'MainController'
            })
            .otherwise({ redirectUrl: "/Html/main" });

        // route for the home page        
    });

}());