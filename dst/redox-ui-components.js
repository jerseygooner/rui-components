angular.module('ruiComponents', []);

angular.module('ruiComponents').controller('ruiAppController', ['$scope', function($scope){
  $scope.helptextdata="data from controller";


}]);

var app = angular.module('ruiComponents');

app.directive('ruiComponents', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/_all.html',
		replace: true
	};
});
var app = angular.module('ruiComponents');

app.directive('ruiButton', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/button.html',
		replace: true,
		scope: {
      primary: '@',
      secondary: '@',
      caption: '@'
    }
	};
});

var app = angular.module('ruiComponents');

app.directive('ruiHelptext', ['$compile', function ($compile) {
	return {
		restrict: 'A',
		scope: {
      message: '@',
      data: '='
    },
    link: function(scope, element, attrs, ctrl, linker){
      if (scope.data){
        scope.message = scope.data;
      }
      element.append('<span ng-include="\'templates/helptext.html\'"></span>');
      $compile(element.contents())(scope);
    }
	};
}]);


angular.module('ruiComponents').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/_all.html',
    "<div ng-controller=\"ruiAppController\">\n" +
    "  <div>\n" +
    "    <h2>Buttons</h2>\n" +
    "    <rui-button primary=\"true\" caption=\"Primary\"></rui-button>\n" +
    "    <rui-button secondary=\"true\" caption=\"Secondary\"></rui-button>\n" +
    "    <rui-button caption=\"Default\"></rui-button>\n" +
    "  </div>\n" +
    "\t<div>\n" +
    "\t\t<h2>Help Text</h2>\n" +
    "\t\t<label rui-helptext message=\"This is the help text sample text for helping with the text of samples.\" style=\"font-size:20px;\">Chya</label>\n" +
    "    <br/>\n" +
    "\t\t<label rui-helptext data=\"helptextdata\" style=\"font-size:20px;\">Chya</label>\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('templates/button.html',
    "<button \n" +
    "\tng-class=\"primary ? 'rui-btn-primary' : (secondary) ? 'rui-btn-secondary' : 'rui-btn-default'\">\n" +
    "\t{{caption}}\n" +
    "</button>"
  );


  $templateCache.put('templates/card.html',
    ""
  );


  $templateCache.put('templates/helptext.html',
    "<div class=\"rui-helptext-container\">\n" +
    "  <span class=\"rui-helptext-icon ion-help-circled\" ng-mouseover=\"showtooltip=true\" ng-mouseleave=\"showtooltip=false\" ng-click=\"clicked=!clicked\" >\n" +
    "    <span class=\"rui-tooltip\" ng-class=\"{'rui-hidden': (!(clicked || showtooltip))}\">{{message}}</span>\n" +
    "  </span>\n" +
    "  <!-- <a class=\"rui-helptext-icon ion-help-circled\"><div rui-tooltip-data='{{message}}'></div></a> -->\n" +
    "</div>\n"
  );


  $templateCache.put('templates/select.html',
    ""
  );

}]);
