'use strict';

angular
    .module('cgpaCalculator')
    .controller('cgpaCtrl', function($scope, cgpaFactory) {

        $scope.grades = cgpaFactory.getGrades()
        $scope.gradePoints = cgpaFactory.getGradePoints()

        $scope.listSize = 5;

        $scope.getListSize = function(number) {
            return new Array(number);
        }

    });
