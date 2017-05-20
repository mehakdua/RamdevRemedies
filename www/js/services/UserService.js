app.service("UserService",function($http,Backand){

this.getData = function(index){
  this.user = data.users[index] 
  return data.users[index];
}

var baseUrl = '/1/objects/';
  var objectName = 'users/1?deep=true';
 
  this.getUrl = function() {
    return $http.get(Backand.getApiUrl() + baseUrl + objectName);
  }
})