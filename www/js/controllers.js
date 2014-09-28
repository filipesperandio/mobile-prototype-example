var SlideController = function($scope, $stateParams, $state, Presentation, PresentationControl) {
  var total = 8;
  var localCurrentSlide = parseInt($stateParams.id);

  Presentation.$asObject().$bindTo($scope, 'presentation');


  $scope.$watch('presentation.current', function() {
    if (PresentationControl.isFollowing()) {
      console.log(' is following');
      if($scope.presentation){
        moveTo($scope.presentation.current);
      }
    }
  });


  var next = function() {
    var current = localCurrentSlide;
    var slide = current < total ? current + 1 : total;
    moveToAndUpdate(slide);
  };

  var previous = function() {
    var current = localCurrentSlide;
    var slide = current-1 ? current-1 : 1
    moveToAndUpdate(slide);
  };

  var moveToAndUpdate = function(slide) {
    if(PresentationControl.isPresenter()) {
      console.log(' updating remote current slide' );
      Presentation.$set('current', slide);
    }
    moveTo(slide);
  };

  var moveTo = function(slide) {
    console.log("moving to " + slide);
    $state.go('slides', { id: slide });
  };


  var isPresenterTaken = function() {
    var presenterTaken = $scope.presentation ? $scope.presentation.presenter : false;
    return presenterTaken && !PresentationControl.isPresenter();
  };

  var togglePresenter = function() {
    PresentationControl.togglePresenter($scope.presentation);
  };

  var content = "templates/deck/" + localCurrentSlide + ".html";

  return {
    title: "Mobile Prototyping",
    current: localCurrentSlide,
    total: total,
    content : content,
    next : next,
    previous : previous,
    isFollowing : PresentationControl.isFollowing,
    toggleFollow : PresentationControl.toggleFollow,
    togglePresenter: togglePresenter,
    isPresenterTaken : isPresenterTaken,
    isPresenter : PresentationControl.isPresenter
  }
}

angular.module('starter.controllers', [ 'starter.services' ])
  .controller('SlideController', [ '$scope', '$stateParams', '$state', 
              'Presentation', 'PresentationControl', SlideController ])

