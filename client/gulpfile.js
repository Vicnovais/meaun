var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;
var livereload = require('gulp-livereload');

gulp.task('buildAurelia', function (cb) {
    exec('au build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('runServer', function () {
    nodemon({
        script: '../server/server.js',
        ext: 'js',
        watch: ['../server/**'],
        env: { 'NODE_ENV': 'development' }
    })
    .on('restart', function () {
        console.log('Server restarted!')
    });
});

function onChange(path) {
    console.log(`File Changed: ${path}`);
}

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/**/*.ts', { ignored: 'src/environment.ts' }, gulp.series('buildAurelia')).on('change', onChange);
    console.log("Now watching for Aurelia changes...");
});

gulp.task('default', gulp.series('buildAurelia', gulp.parallel('runServer', 'watch')));