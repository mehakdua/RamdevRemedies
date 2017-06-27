app.service("UserService",function($http,Backand,$localStorage){
this.data ;
  $localStorage.data = $localStorage.data? $localStorage.data:{};
$localStorage.flag = $localStorage.flag?$localStorage.flag:-1;
/*$localStorage = $localStorage.$default({
  flag:-1
});*/
this.getData = function(){
  return this.data; 
}
this.setData = function(data){
   $localStorage.data ={};
  this.data = data;
  $localStorage.data = data;

}
this.getFlag = function(){
 return  $localStorage.flag;
}
this.setFlag = function(flag){
   $localStorage.flag = flag;
}

var baseUrl = '/1/objects/';
  var objectName = 'users/1?deep=true'; 
 
  this.getUrl = function() {
    return $http.get(Backand.getApiUrl() + baseUrl + objectName);
  }
   this.getFlagApi = function() {
    return $http.get(Backand.getApiUrl() + baseUrl + 'apiFlag/1?deep=true');
  }
})