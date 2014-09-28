var SlideController = function($scope, $stateParams, $state, Presentation) {
  var total = 15;
  var current = parseInt($stateParams.id);

  Presentation.$asObject().$bindTo($scope, 'slide');

  $scope.$watch('slide.current', function() {
    if($scope.slide){
      $state.go('tab', { id: $scope.slide.current });
    }
  });

  var next = function() {
    var current = $scope.slide.current;
    $scope.slide.current = current < total ? $scope.slide.current + 1 : total;
  }

  var previous = function() {
    var current = $scope.slide.current;
    $scope.slide.current = current-1 ? current-1 : 1
  };

  var content = "<h1>Oi " + current + "</h1>";

  return {
    title: "Mobile Prototyping",
    current: current,
    total: total,
    content : content,
    next : next,
    previous : previous

  }
}

angular.module('starter.controllers', [ 'starter.services' ])
  .controller('SlideController', SlideController)

