var Presentation = function($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL + '/presentation');
  return $firebase(ref);
};

angular.module('starter.services', [ 'firebase' ])
.constant('FIREBASE_URL', 'https://pippo-prototype.firebaseio.com')
.factory('Presentation', [ '$firebase', 'FIREBASE_URL', Presentation ])
