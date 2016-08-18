angular.module('angular-server-status', [])
  .directive('angularServerStatus',
    function ($timeout, $rootScope, $document, $http) {
      return {
        require: '?ngModel',
        restrict: 'E',
        template: '<span class="angular-server-status">',
        replace: true,
        scope: {
          ngModel: '=?',
          serverUrl: '@'
        },
        link: function (scope, element, attrs, ngModel) {
          var serverOnlineGreenSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="88" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="88" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h45v20H0z"/><path fill="#97CA00" d="M45 0h43v20H45z"/><path fill="url(#b)" d="M0 0h88v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="22.5" y="15" fill="#010101" fill-opacity=".3">server</text><text x="22.5" y="14">server</text><text x="65.5" y="15" fill="#010101" fill-opacity=".3">online</text><text x="65.5" y="14">online</text></g></svg>';
          var serverOfflineRedSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="88" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="88" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h45v20H0z"/><path fill="#e05d44" d="M45 0h43v20H45z"/><path fill="url(#b)" d="M0 0h88v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="22.5" y="15" fill="#010101" fill-opacity=".3">server</text><text x="22.5" y="14">server</text><text x="65.5" y="15" fill="#010101" fill-opacity=".3">offline</text><text x="65.5" y="14">offline</text></g></svg>';
          element[0].innerHTML = serverOfflineRedSvg;

          $http.get(scope.serverUrl, {})
            .then(function (result) {
              element[0].innerHTML = serverOnlineGreenSvg;
            })
            .catch(function (err) {
              element[0].innerHTML = serverOfflineRedSvg;
            });
        }
      };
    }
  );