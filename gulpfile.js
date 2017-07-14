const gulp = require('gulp');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemap = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const rimraf  = require('rimraf');
/***********************************************
        utilis
***********************************************/
const useref  = require('gulp-useref');
const gulpif  = require('gulp-if');
/***********************************************
        postcss plugins
***********************************************/
const postcss = require('gulp-postcss');
const rucksack = require('rucksack-css');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
/***********************************************
        browser-sync
***********************************************/
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const path = {
	blocks: 'blocks/',
	devDir: 'app/',
	outputDir: 'build'
}

//pug
gulp.task('pug', function() {
	return gulp.src([path.blocks + '*.pug', '!' + path.blocks + 'template.pug'])
	.pipe(pug({pretty: true}))
	.on('error', function(err) {
		notify().write(err)
		this.emit('end');
	})
	.pipe(gulp.dest(path.devDir))
	.pipe(browserSync.stream())
});

// style
gulp.task('scss', function() {
	var propc = [autoprefixer({browsers: ['last 10 versions']}), rucksack, cssnano];
	return gulp.src(path.blocks + '*.scss')
	.pipe(sourcemap.init())
	.pipe(sass())
	.on('error', function(err) {
		notify().write(err)
		this.emit('end');
	})
    .pipe(postcss(propc))
    .pipe(rename({suffix : ".min"}))
    .pipe(gulp.dest(path.devDir + 'css/'))
    .pipe(browserSync.stream())
});

//scripts
gulp.task('script', function() {
	return gulp.src([path.blocks + '**/*.js', '!' + path.blocks + "_assets/**/*.js"])
	.pipe(concat('main.js'))
	.pipe(gulp.dest(path.devDir + 'js/'))
	.pipe(browserSync.stream())
});

//watch
gulp.task('watch', function(){
	gulp.watch(path.blocks + '**/*.pug', ['pug'])
	gulp.watch(path.blocks + '**/*.scss', ['scss'])
	gulp.watch(path.blocks + '**/*.js', ['script'])
});


//server
gulp.task('browser-sync', function() {
	browserSync.init({
		port: 3000,
		server: {
			baseDir: path.devDir
		}
	})
});

/*************************************/
		/*production tasks*/
/*************************************/

//clean
gulp.task('clean', function(cb) {
	rimraf(path.outputDir, cb)
});

//build
gulp.task('build',['clean'], function() {
	return gulp.src(path.devDir + '*.html')
	.pipe(useref() )
	.pipe(gulpif('*.js', uglify()))
	.pipe(gulp.dest(path.outputDir))
})

//imgbuild
gulp.task('imgbuild', ['clean'], function() {
	return gulp.src(path.devDir + 'img/**/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest(path.outputDir + 'img/'))
});

//development
gulp.task('default', ['browser-sync', 'watch', 'pug', 'scss', 'script']);


//production
gulp.task('prod', ['build', 'imgbuild']);
