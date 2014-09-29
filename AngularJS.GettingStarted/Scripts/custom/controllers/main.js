(function () {
    angular.module('githubViewer').controller("MainController", ["$scope", "$http",
        function ($scope, $http) {
            $scope.message = "Getting Started With GitHub Viewer!";
        }]);
}());
