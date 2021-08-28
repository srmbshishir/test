app.controller("userhome", function ($scope, ajax, $rootScope) {
    $rootScope.PageType = "user";
    $scope.toggle = function () {
        console.log("ahsi");
        $rootScope.toggle = !$rootScope.toggle;
        console.log($rootScope.toggle);
        if ($rootScope.toggle == true) {
            $scope.status = "on";
        }
        else {
            $scope.status = "off";
        }
    };
})