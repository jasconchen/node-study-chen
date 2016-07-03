/*
 * @Author: USER
 * @Date:   2016-07-03 11:46:05
 * @Last Modified by:   USER
 * @Last Modified time: 2016-07-03 11:51:59
 */

'use strict';

var student = require('./student.js');
var teacher = require('./teacher.js');


function add(teacherName, students) {
    teacher.add(teacherName);

    students.forEach(function(item, index) {
        student.add(item);
    })
}
exports.add = add;
module.exports = add;