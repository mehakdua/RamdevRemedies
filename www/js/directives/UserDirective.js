app.directive("userLogo",function(){
	return{
		template:'<div class="list list-inset"><div class="item item-center" item-center><img class="imgIcon" src={{src}} /></div></div>'

	}
});
app.directive("myVideo",function(){
	return{
		restrict: "A",
		link:function(scope,elem,attrs){
			 scope.$on('$destroy', function() {
	            alert("In destroy of:");
	        });

		}

	}
});
