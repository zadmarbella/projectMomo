var MomoModule = angular.module('projectMomoTestPage', [ 'ui.directives',
        'ui.bootstrap' ]);

MomoModule.factory('MomoAPICall', function($http, $q) {
    return {
        getDataOne : function() {
            return $http.get(
                    'http://ezadkielmarbella.apiary.io/getMomoTestData').then(
                    function(result) {
                        return result.data.spendItems[0];
                    })
        },
        getDataTwo : function(callback) {
            $http.get('http://ezadkielmarbella.apiary.io/getMomoTestData')
                    .success(callback);
        },
        testHttpGetResult : function() {
            return $http
                    .get('http://ezadkielmarbella.apiary.io/getMomoTestData');
        }
    }
});

function MainCtrl($scope) {

}

function MomoDemoCtrl($scope, MomoAPICall) {
    $scope.alerts = [ {
        type : 'error',
        msg : 'Oh snap! Momo Alert.'
    }, {
        type : 'success',
        msg : 'Well done! Momo Alert.'
    } ];

    $scope.addMomoAlert = function() {
        MomoAPICall.getDataOne().then(function(data) {
            // this will execute when the
            // AJAX call completes.
            $scope.alerts.push({
                msg : "Another Momo alert! " + data.name
            });
        });

    };

    $scope.closeMomoAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

}
