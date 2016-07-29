var gulp = require("gulp"),
    connect = require("gulp-connect");

gulp.task("default", ['server', 'watch']);

gulp.task('server', function() {
    connect.server({
        //root: 'app',
        livereload: true
    });
});


gulp.task('watch', function() {
    gulp.watch(['./*.html','./**/*.css'], ['html']);
});

gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
