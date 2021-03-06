'use strict';
// app.controller('loginCtrl', function($scope) {
//   $scope.title = "Login";
// });

app.controller('loginCtrl', function($scope, $http, $location) {

  $scope.register = function() {
    $http({
      url: "http://localhost:8000/register/",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "username": $scope.user.username,
        "password": $scope.user.password,
        "email": $scope.user.email,
        "first_name": $scope.user.first_name,
        "last_name": $scope.user.last_name
      }
    }).then(
      res => {
        if (res.data.success === true) {
          $location.path('/products');
        }
      },
      console.error
    );
  };

  $scope.login = function() {
    $http({
      url: "http://localhost:8000/login",
      method: "POST",
      withCredentials: false,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "username": $scope.username,
        "password": $scope.password
      }
    }).then(
      res => {
        if (res.data.success === true) {
          $location.path('/sellproduct');
        }
      },
      console.error
    );
  };

});
