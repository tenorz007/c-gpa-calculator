"use strict";

angular
    .module("cgpaCalculator")
    .controller("cgpaCtrl", function($scope, cgpaFactory) {

        $scope.grades = cgpaFactory.getGrades();
        $scope.gradePoints = cgpaFactory.getGradePoints();
        $scope.creditHours = cgpaFactory.getCreditHours();
        $scope.year = new Date();

        $scope.rowsInfo = {
            min : 1,
            max : 9,
            init : 5
        };

        $scope.data = {"rows" : new Array($scope.rowsInfo.init)};

        $scope.reset = function() {
            $scope.data = {"rows" : new Array($scope.rowsInfo.init)};
        };

        $scope.$watch("data", function() {
            $scope.result = cgpaFactory.calculateGrades($scope.data);
        }, true)


    });
