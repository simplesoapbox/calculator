/**
 * Created by Owner on 11/1/2015.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
    nodemon({ script : './index.js', ext : 'js,html,css' });
});