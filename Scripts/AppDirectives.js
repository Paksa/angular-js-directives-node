angular.module('App.Directives')
    .directive('imagetext', function(){
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: '&',
            template: '<div class="image-popup-text-wrapper"><ng-transclude></ng-transclude><p class="image-popup-text">{{text}}</p></div>',
            link: function (scope, elem, attrs) {
                scope.text = attrs.text;
            }
        }
});
