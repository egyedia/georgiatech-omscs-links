'use strict';

var homepageApp = angular.module('homepageApp', ['homepageControllers', 'homepageDirectives']);

var homepageDirectives = angular.module('homepageDirectives', []);

homepageDirectives.directive('ngRepeatFinished', ['$timeout',
    function ngRepeatFinished($timeout) {
        var directive = {
            restrict: 'A',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope[attrs.ngRepeatFinished]();
                });
            }
        }
    }]);

var homepageControllers = angular.module('homepageControllers', []);

homepageControllers.controller('HomeCtrl', ['$scope', '$sce',
    function ($scope, $sce) {
        $scope.isArray = angular.isArray;
        
        $scope.getHTML = function (lines) {
            var s = '';
            for (var i in lines) {
                s += lines[i];
            }
            return $sce.trustAsHtml(s);
        };
        
        $scope.repeatFinished = function() {
            jq('#googleSearch').focus();
            jq('#grid').masonry({
                itemSelector: '.grid-item',
                columnWidth: 300,
                gutter: 20
            });
        };
        
        $scope.boxes = myContent;
    }]);
