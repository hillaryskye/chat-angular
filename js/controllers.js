app.controller("HomeController", function($scope, $http) {
  $http.get('https://shielded-peak-6345.herokuapp.com/messages')
    .then(function(response) {
        $scope.results = response;
        // console.log('results', $scope.results);
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    console.log('error in the get request');
  });

  $scope.addChat = function(name,content) {
    var newMessage =  {message:{
        name: name,
        content: content,
      }};



    $http.post('https://shielded-peak-6345.herokuapp.com/messages', newMessage)
      .then(function(response) {
          $scope.results = response;
          // console.log('results', $scope.results);
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      console.log('error in the post request');
    });
      }
});
