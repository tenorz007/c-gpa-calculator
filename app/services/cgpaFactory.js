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

        function getCreditHours() {
            return [4, 3, 2, 1, 0];
        }

        function calculateGPA(data) {
            var gradePoints = getGradePoints();
            var result = {'credits' : 0, 'gpa' : 0, 'gradePoint' : 0};
            var dataKey;

            for (dataKey in data) {
                if (!data.hasOwnProperty(dataKey) || data[dataKey] === null) {
                    continue;
                }

                if ('hour', 'grade' in data[dataKey]) {
                    if (!['W', 'WP'].includes(data[dataKey].grade)) {
                        var credit = gradePoints[data[dataKey].grade] * data[dataKey].hour;
                        result['credits'] += data[dataKey].hour;
                        result['gradePoint'] += credit;
                    }
                }
            }

            result['gpa'] = result['gradePoint']/result['credits'];
            return result;
        }

        function calculateGPAExpected(data, result) {
            var totalGradePoint = data['creditsCompleted'] * data['cgpa'];
            var expectedTotalGradePoint = data['cgpaExpected']
            * (data['currentCredits'] + data['creditsCompleted'])

            result['gpaExpected'] = (expectedTotalGradePoint - totalGradePoint)
            / data['currentCredits'];
            return result
        }

        function calculateCGPA(data, result) {
            var totalCredits = result['credits'] + data['creditsCompleted'];
            var totalGradePoint = (data['creditsCompleted'] * data['cgpa'])
            + result['gradePoint'];

            result['cgpaCalculated'] = totalGradePoint/totalCredits;

            if ('currentCredits', 'cgpaExpected' in data) {
                result = calculateGPAExpected(data, result);
            }

            return result;
        }

        function calculateGrades(data) {
            var result = calculateGPA(data.rows);

            if ('cgpa', 'creditsCompleted' in data && data['cgpa'] <= 4
                && data['creditsCompleted'] > 0) {
                result = calculateCGPA(data, result);
            }

            return result;
        }

        return {
            getGradePoints : getGradePoints,
            getGrades : getGrades,
            getCreditHours : getCreditHours,
            calculateGrades : calculateGrades
        }

    });