(function () {
    angular.module('githubViewer').controller("UserController", ["$scope", "$http",
        function ($scope, $http) {

            var onUserComplete = function (response) {
                $scope.user = response.data;
                $http.get($scope.user.repos_url)
                    .then(onReposComplete, onError);
            };

            var onReposComplete = function (response) {
                $scope.repos = response.data;
            }

            var onError = function (reason) {
                $scope.error = reason.data.message;
            };
           
            $scope.searchGithub = function () {
                $http.get("https://api.github.com/users/" + $scope.username)
                               .then(onUserComplete, onError);
            }

            // sort desc with - , sort asc with +
            $scope.repoSortOrder = "-stargazers_count";

        }]);
}());