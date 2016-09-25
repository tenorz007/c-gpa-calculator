'use strict';

angular
    .module('cgpaCalculator')
    .controller('cgpaCtrl', function($scope, cgpaFactory) {

        $scope.grades = cgpaFactory.getGrades();
        $scope.gradePoints = cgpaFactory.getGradePoints();
        $scope.creditHours = cgpaFactory.getCreditHours();

        $scope.results = {};
        $scope.answer = {};
        $scope.listSize = 5;

        $scope.getListSize = function(number) {
            return new Array(number);
        }

        $scope.getCalculatedGrades = function() {
            $scope.answer = cgpaFactory.calculateGrades($scope.results);
        }


    });
