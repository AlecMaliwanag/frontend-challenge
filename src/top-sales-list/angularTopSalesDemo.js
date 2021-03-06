/*Instructions for using React in Angular.*/
//For additional references the docs for ngreact can be found here:
//https://github.com/ngReact/ngReact

//1: make sure to import ng-react then include react in your app
var app = angular.module('app', ['react']);
//using webpack also import react component
import TopSalesList from './top_sales.component.js'

//2: create a service to get your data
angular.module('getData', [])
.factory('getFunctions', function($http, sharedData) {
  return $http({
    //get request to server
    //write to sharedData
  })
}

//3: create a controller for your react component
angular.module('app.reactController',[])
.controller('reactList', function($scope, sharedData) {
  $scope.purchaseHistory = sharedData;
})

//4: add the react component using value
app.value('TopSalesList', TopSalesList);

//5: heres an example of how to inject your html
<body ng-app="app">
  <div ng-controller="reactList">
    <react-component name="TopSalesList" props="purchaseHistory" watch-depth="reference"/>
  </div>
</body>  

