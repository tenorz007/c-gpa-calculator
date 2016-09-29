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
            $scope.data["cgpaExpected"] = 3.83;
            $scope.data["currentCredits"] = 16;
            $scope.data["cgpa"] = 3.56;
            $scope.data["creditsCompleted"] = 15;
            console.log("form changed");
            $scope.result = cgpaFactory.calculateGrades($scope.data);
        }, true)


    });
