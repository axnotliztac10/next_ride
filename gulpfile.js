'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

require('require-dir')('./gulp');

var s3 = require('gulp-s3-upload')({
        accessKeyId:        "AKIAIALST2BBYYVUMC6A",
        secretAccessKey:    "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"
    });

gulp.task('publish', function() {
 
	gulp.src('dist/**')
    .pipe(s3({
        Bucket: 'next-ride',
        ACL:    'public-read'
    }));
 
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
