const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build:ts', () =>
    gulp
        .src('./src/server/**/*.ts')
        .pipe(
            // 使用babelrc配置
            babel()
        ).pipe(gulp.dest('./dist'))
)
// 定义 default 任务
gulp.task("default", gulp.series("build:ts"));
if (process.env.NODE_ENV !== 'production') {
    gulp.watch('./src/server/**/*.ts', gulp.series('default'));
}