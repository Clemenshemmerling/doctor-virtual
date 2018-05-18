/*var config = {
  apiKey: "AIzaSyAQGLdITeYQWxvaqoZneCRT1qNRylbRj7E",
  authDomain: "tv-quetzal-chapin.firebaseapp.com",
  databaseURL: "https://tv-quetzal-chapin.firebaseio.com",
  projectId: "tv-quetzal-chapin",
  storageBucket: "tv-quetzal-chapin.appspot.com",
  messagingSenderId: "569887585776"
};

firebase.initializeApp(config);

var db = firebase.database(),
    auth = firebase.auth()
*/
var app = angular.module("myApp", ["ngRoute"]);

app.controller("signinCtr", function ($scope, $location) {
  $scope.sigin = function () {

    const name = $scope.name
    const lastname = $scope.lastname
    const email = $scope.email
    const pass = $scope.pass
    const country = $scope.country
    const city = $scope.city
    const state = $scope.state
    const zip = $scope.zip
    const paypal = $scope.paypal
    const credit = $scope.credit

  }
});

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "assets/views/home/home.html"
  })
  .when("/medico", {
      templateUrl : "assets/views/medico/medico.html"
  })
  .when("/nosotros", {
      templateUrl : "assets/views/acerca/acerca.html"
  })
  .when("/como", {
      templateUrl : "assets/views/funciona/funciona.html"
  })
  .when("/comprar", {
      templateUrl : "assets/views/comprar/comprar.html"
  })
  .when("/signin", {
      templateUrl : "assets/views/signin/signin.html",
      controller: "signinCtr"
  })
  .otherwise({
          redirectTo: '/'
  });
});
