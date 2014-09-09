(function () {
    angular.module('githubViewer').controller("MainController", ["$scope", "$http",
        function ($scope, $http) {
            $scope.message = "Github Viewer!";
        }]);
}());
