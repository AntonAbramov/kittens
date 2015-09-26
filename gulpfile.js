'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'), // Scss, sass
    minifycss = require('gulp-minify-css'), // minify css
    autoprefixer = require('gulp-autoprefixer'), // add prefixes on specific css rules
    spritesmith = require('gulp.spritesmith'); // generate scss with sprites info


// compile scss files and generate both non-minified and minified css bundles.
gulp.task('sass', function () {
  return gulp.src('public/scss/**/*.scss')
    .pipe(sass({style: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 30 versions'],
      cascade: false
    }))
    //.pipe(minifycss())
    .pipe(gulp.dest('public/css'));
});


//generate scss with sprites
gulp.task('sprite', function () {
  var spriteData = gulp.src('public/images/icons/*.png').pipe(spritesmith({
    // This will filter out `fork-2x.png`, `github-2x.png`, ... for our retina spritesheet
    //   The normal spritesheet will now receive `fork.png`, `github.png`, ...
    imgName: 'public/images/sprite.png',
    cssName: '_sprite.scss'
  }));
  spriteData.img.pipe(gulp.dest('public/images/')); // output path for the sprite
  spriteData.css.pipe(gulp.dest('public/scss/base/')); // output path for the CSS
  return;
});

//watchers
gulp.task('watch', function () {
  gulp.watch('public/scss/**/*.scss', ['sass']);
});


gulp.task('serve', ['sprite', 'sass', 'watch']);

gulp.task('default', ['sprite', 'sass'], function () {
});