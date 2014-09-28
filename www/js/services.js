var Presentation = function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + '/presentation');
  return $firebase(ref);
};

var PresentationControl = function(Presentation) {

  var isPresenter = false;
  var isFollowing = true;

  var togglePresenter = function(presentation) {
    isPresenter = !isPresenter;
    isFollowing = !isPresenter;
    presentation.presenter = isPresenter;
  };

  var toggleFollow = function() {
    isFollowing = !isFollowing;
  };

  return {
    isPresenter : function() { return isPresenter; },
    togglePresenter : togglePresenter,
    isFollowing : function() { return isFollowing; },
    toggleFollow : toggleFollow
  }
};

angular.module('starter.services', [ 'firebase' ])
.constant('FIREBASE_URL', 'https://pippo-prototype.firebaseio.com')
.factory('Presentation', [ '$firebase', 'FIREBASE_URL', Presentation ])
.service('PresentationControl', [ 'Presentation', PresentationControl ])
