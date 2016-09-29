"use strict";

angular
    .module("cgpaCalculator")
    .controller("cgpaCtrl", function($scope, cgpaFactory) {

        $scope.grades = cgpaFactory.getGrades();
        $scope.gradePoints = cgpaFactory.getGradePoints();
        $scope.creditHours = cgpaFactory.getCreditHours();

        $scope.data = {"rows" : new Array(5)};

        $scope.reset = function() {
            $scope.data.rows = new Array(5);
        };

        $scope.$watch("data", function() {
            console.log("form changed");
            $scope.result = cgpaFactory.calculateGrades($scope.data);
        }, true)


    });
