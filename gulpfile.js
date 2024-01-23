const gulp = require('gulp')
const minify = require('gulp-minify')

gulp.task('hello1', async () => {
    console.log("### hello1");
    return;
})

gulp.task('main', async () => {
    console.log("### main")
    return gulp.src('src/hello.js')
        .pipe(minify())
        .pipe(gulp.dest('build/'))
})
gulp.task('default', gulp.series(['hello1', 'main'], async () => {
    return console.log("### done")
}))

