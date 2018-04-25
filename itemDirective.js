samplerApp.directive("item", function() {
    return {
        scope: {
            product: '=',
            section: '=',
            showModal: '@'
        },
        controller: function($scope){
            $scope.isSelected = function(){
                return angular.element().parents('.selected').length    
            };
            $scope.select = function(event){
                $scope.$parent.toggleCount(event, true);
                $scope.showModal = false;
            };
            $scope.openModal = function(event){
                $scope.showModal = true;
                event.stopPropagation();
            };
            $scope.toggle = function (event){
                $scope.$parent.toggleCount(event);
            }
        },
        templateUrl : "itemTemplate.html"
    };
});