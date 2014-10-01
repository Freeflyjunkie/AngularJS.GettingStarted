(function () {
    angular.module('githubViewer').controller("MainController", ["$scope", 
        function ($scope) {
            console.log("in main controller");
            $scope.message = "Getting Started With GitHub Viewer!";
        }]);
}());