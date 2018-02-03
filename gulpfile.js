var gulp=require('gulp');
var sass=require('gulp-sass');

// 创建一个gulp任务：编译sass
gulp.task('changeSass',function(){
    gulp.src('./src/sass/*.scss')

    .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))

    .pipe(gulp.dest('./src/css/'))
});


// 创建文件监听任务：文件有修改，则自动编译
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['changeSass'])
});

// 自动刷新页面
var browserSync=require('browser-sync');

gulp.task('server',function(){

    browserSync({
        port:1996,

        proxy:'http://localhost:55556/',

        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']

    });

     gulp.watch('./src/sass/*.scss',['changeSass']);
});


