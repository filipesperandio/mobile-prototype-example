var SlideController = function($scope, $stateParams, $state, Presentation) {
  var total = 15;
  var localCurrentSlide = parseInt($stateParams.id);

  Presentation.$asObject().$bindTo($scope, 'presentation');

  $scope.$watch('presentation.current', function() {
    if($scope.presentation){
      $state.go('slides', { id: $scope.presentation.current });
    }
  });

  var next = function() {
    var current = $scope.presentation.current;
    $scope.presentation.current = current < total ? current + 1 : total;
  }

  var previous = function() {
    var current = $scope.presentation.current;
    $scope.presentation.current = current-1 ? current-1 : 1
  };

  var content = "templates/deck/" + localCurrentSlide + ".html";

  return {
    title: "Mobile Prototyping",
    current: localCurrentSlide,
    total: total,
    content : content,
    next : next,
    previous : previous

  }
}

angular.module('starter.controllers', [ 'starter.services' ])
  .controller('SlideController', SlideController)

