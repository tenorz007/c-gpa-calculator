'use strict';

angular
    .module('cgpaCalculator')
    .factory('cgpaFactory', function($http) {

        function getGradePoints() {
            var gradePoints = {'A' : 4.0, 'A-' : 3.7, 'B+' : 3.3, 'B' : 3.0,
                'B-' : 2.7, 'C+' : 2.3, 'C' : 2.0, 'D' : 1.0, 'F' : 0.0,
                'W' : 0.0, 'WP' : 0.0, 'WF' : 0.0};

            return gradePoints;
        }

        function getGrades() {
            var grades = getGradePoints()
            return Object.keys(grades);
        }

        return {
            getGradePoints : getGradePoints,
            getGrades : getGrades
        }

    });