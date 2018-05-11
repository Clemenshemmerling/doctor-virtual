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
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "assets/views/home/home.html"
  })
  .when("/login", {
      templateUrl : "assets/views/login.html"
  })
});
