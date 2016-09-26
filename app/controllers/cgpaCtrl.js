'use strict';

angular
    .module('cgpaCalculator')
    .controller('cgpaCtrl', function($scope, cgpaFactory) {

        $scope.grades = cgpaFactory.getGrades();
        $scope.gradePoints = cgpaFactory.getGradePoints();
        $scope.creditHours = cgpaFactory.getCreditHours();

        $scope.results = {'rows' : new Array(5)};
        $scope.answer = {};

        $scope.getCalculatedGrades = function() {
            $scope.answer = cgpaFactory.calculateGrades($scope.results);
        }


    });
