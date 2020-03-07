const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass",done =>{
    gulp.src("RES/sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:"expanded"}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());

    done();
})

gulp.task("server",done =>{
    connect.server({
        root:"dist",
        livereload:true
    })
    done();
})

gulp.task("copyImg", done =>{
    gulp.src("RES/img/**")
        .pipe(gulp.dest("dist/img"));
    done();
})



gulp.task("html",done =>{
    gulp.src("RES/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
})

gulp.task("js",done =>{
    gulp.src("RES/js/**")
        .pipe(gulp.dest("dist/js"));
    done();
})

gulp.task("font",done =>{
    gulp.src("RES/font_khryhaqhs5i/**")
        .pipe(gulp.dest("dist/font_khryhaqhs5i"));
    done();
})



gulp.task("watch",done =>{
    gulp.watch("RES/*.html",gulp.series("html"));
    gulp.watch("RES/sass/*.scss",gulp.series("sass"));
    gulp.watch("RES/img/**",gulp.series("copyImg"));
    gulp.watch("RES/js/**",gulp.series("js"));
    gulp.watch("RES/js/font_khryhaqhs5i",gulp.series("font"));
    done();
})

gulp.task("default",gulp.parallel("server","watch"));
