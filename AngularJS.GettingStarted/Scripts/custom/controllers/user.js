(function () {
    angular.module('githubViewer').controller("UserController", ["$scope", "github", "$interval",
        function ($scope, github, $interval) {

            var onUserComplete = function (data) {                
                $scope.user = data;

                github.getRepos($scope.user)
                    .then(onReposComplete, onError);

                //$http.get($scope.user.repos_url)
                //    .then(onReposComplete, onError);

                $scope.error = null;
            };

            var onReposComplete = function (data) {                
                $scope.repos = data;
            };

            var onError = function (reason) {
                $scope.error = 'Error occurred: ' + reason.data.message;
                $scope.user = null;
            };

            var decrementCountdown = function() {
                $scope.countdown -= 1;
                if ($scope.countdown < 1) {
                    $scope.searchGithub();
                }
            };

            var countdownInterval = null;
            var startCountdown = function() {
                countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
            }

            $scope.searchGithub = function() {
                //$http.get("https://api.github.com/users/" + $scope.username)
                //    .then(onUserComplete, onError);

                github.getUser($scope.username)
                    .then(onUserComplete, onError);

                if (countdownInterval) {
                    $interval.cancel(countdownInterval);
                }
            };

            // sort desc with - , sort asc with +
            $scope.username = "angular";
            $scope.repoSortOrder = "-stargazers_count";
            $scope.countdown = 5;

            startCountdown();
        }]);
}());